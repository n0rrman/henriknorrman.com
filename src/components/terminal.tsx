"use client";

import { useFormState } from "react-dom";
import { useState, startTransition, useRef, useEffect } from "react";

import { terminalState, CommandAction } from "@/actions";
import { ActionCode } from "@/actions/action-codes";
import TerminalScreen from "./terminal-screen";
import { VscOutput } from "react-icons/vsc";

export default function Terminal() {
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [outputs, setOutputs] = useState<CommandAction[]>([]);
  const [formState, action] = useFormState(terminalState, {});

  // Initial whoami command
  useEffect(() => {
    inputRef.current!.value = "whoami";
    inputRef.current!.focus();
    formRef.current!.requestSubmit();
  }, []);

  // On new submit -> add to outputs & handle command
  useEffect(() => {
    if (formState.payload) {
      const { id, input, output, actionCode } = formState.payload;

      const processedCommand = handleTerminalAction(
        id,
        input,
        output,
        actionCode
      );
      setOutputs((outputs) => [...outputs!, processedCommand]);
    }
  }, [formState]);

  // Handle action codes
  const handleTerminalAction = (
    id: string,
    input: string,
    output: string,
    actionCode: ActionCode
  ) => {
    if (actionCode === ActionCode.CLEAR) {
      setOutputs([]);
    }
    if (actionCode === ActionCode.REDIRECT) {
      window.open(output);

      return {
        id,
        input,
        output: `Opening ${output.split(":")[1]}`,
        actionCode,
      };
    }
    if (actionCode === ActionCode.EXIT) {
      setOutputs([]);
      window.history.back();
    }

    return { id, input, output, actionCode };
  };

  // Input submit handler
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formRef.current) {
      const formData = new FormData(formRef.current);

      startTransition(() => {
        action(formData);
      });
    }
    inputRef!.current!.value = "";
  };

  const prompt = <span>henriknorrman.com/&gt;</span>;
  return (
    <TerminalScreen
      prompt={prompt}
      outputs={outputs}
      inputRef={inputRef}
      formRef={formRef}
      submitHandler={handleSubmit}
    />
  );
}
