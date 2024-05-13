"use server";

import { z } from "zod";
import { randomUUID } from 'crypto'
import { promises as fs } from 'fs';

import { ActionCode } from "./action-codes";

const terminalSchema = z.object({
    cmd: z.string().min(1).max(128),
});

interface Command {
    cmd: string;
    value: string;
    description: string;
    actionCode: ActionCode;
}

export interface CommandAction {
    id: string;
    input: string;
    output: string;
    actionCode: ActionCode;
}

interface TerminalState {
    payload?: CommandAction
}

async function callCommand(id: string, input: string, errorState: TerminalState) {
    // Load command file to JSON
    //      success -> continue
    //      error   -> return error state
    let data: [Command];
    try {
        const file = await fs.readFile(process.cwd() + '/src/actions/commands.json', 'utf8');
        data = (JSON.parse(file) as [Command]);
    } catch (err: unknown) {
        return ({payload: {...errorState.payload, output: "Error: internal error"}} as TerminalState); 
    } 

    // Get command
    const command = data.find(({cmd}: Command) => cmd === input);

    // -> Command not found
    if (!command) {
        return {
            payload: {id, input, output: `${input}: command not found. Type 'help' for list of commands.`, actionCode: ActionCode.NOOP}
        }
    }

    // -> Command found 
    return {
        payload: {
            id, input, output: command!.value, actionCode: command!.actionCode
        } 
    }
}

export async function terminalState(formState: TerminalState, formData: FormData): Promise<TerminalState> {
    const result = terminalSchema.safeParse({
        cmd: formData.get("cmd"),
    });
    
    const input = formData.get("cmd")!.toString();
    const id = randomUUID(); 
    
    // Default error state
    const errorState = {
        payload: {
            id, input, output: "", actionCode: ActionCode.ERROR
        }
    }

    // Input error -> return blank output
    if(!result.success) {
        return {payload: {...errorState.payload, output: ""}};
    }
    
    return callCommand(id, input, errorState);
}
