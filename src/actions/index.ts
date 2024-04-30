"use server";

import { z } from "zod";
import { randomUUID } from 'crypto'
import callCommand from "./commands";

const terminalSchema = z.object({
    cmd: z.string().min(1).max(128),
});

interface TerminalState {
    payload?: {
        id: string;
        input: string;
        output: string;
    }
}

export async function terminalState(formState: TerminalState, formData: FormData): Promise<TerminalState> {
    
    const result = terminalSchema.safeParse({
        cmd: formData.get("cmd"),
    });
    
    const input = formData.get("cmd")!.toString();
    const id = randomUUID(); 

    if(!result.success) {
        return {
            payload: {
                id, input, output: ""
            }
        }
    }

    return {
        payload: {
            id, input, output: callCommand(input)
        }
    }
}
 