"use client";

import Image from "next/image";

import screenImg from "/public/screen.svg";
import { useFormState } from "react-dom";
import { useState, startTransition, useRef, useEffect } from "react";
import { terminalState } from "@/actions";

export default function Terminal() {
  const [outputs, setOutputs] = useState([{ id: "0", input: "", output: "" }]);
  const [input, setInput] = useState("whoami");

  const formRef = useRef<HTMLFormElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [formState, action] = useFormState(terminalState, {});

  const prompt = <span>henriknorrman.com/&gt;</span>;

  useEffect(() => {
    formRef.current!.requestSubmit();
    inputRef.current!.focus();
  }, []);

  useEffect(() => {
    if (formState.payload) {
      const { id, input, output } = formState.payload;
      setOutputs((outputs) => [...outputs, { id, input, output }]);
    }
  }, [formState]);

  const renderedOutputs = outputs.map(({ id, input, output }) => {
    return (
      <div
        className={`flex flex-col gap-y-0.5 font-thin font-['Courier_New','Courier']`}
        key={id}
      >
        <p>
          {prompt}
          {input}
        </p>
        {output !== "" && <p className="">{output}</p>}
      </div>
    );
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInput("");

    if (formRef.current) {
      const formData = new FormData(formRef.current);

      startTransition(() => {
        action(formData);
      });
    }
  };

  return (
    <div className="flex justify-center items-center text-[1.77vw] sm:text-[0.675rem] lg:text-sm w-full h-[75ch] pb-[12ch]">
      <div
        onClick={() => {
          inputRef.current?.focus();
        }}
        className="flex justify-center items-center absolute w-full h-full overflow-hidden"
      >
        <div className="relative min-w-[104vw] sm:min-w-[94ch] min-h-[200ch] mt-[12ch]">
          <Image alt="" src={screenImg} fill></Image>
        </div>
      </div>
      <div
        onClick={() => {
          inputRef.current?.focus();
        }}
        className={`font-['Courier_New','Courier'] m-[2.25ch] p-[1ch] bg-slate-800 text-slate-200 flex items-end w-full sm:w-[90ch] leading-snug tracking-wide h-[57.5ch] overflow-hidden`}
      >
        <form ref={formRef} onSubmit={handleSubmit}>
          <pre className="space-y-[0.25ch]">{renderedOutputs}</pre>
          <div className="flex flex-row items-end justify-start">
            {prompt}
            <input
              ref={inputRef}
              className="bg-transparent w-[67ch] outline-none mt-[0.25ch]"
              value={input}
              onChange={(event) => {
                setInput(event.target.value);
              }}
              name="cmd"
              type="text"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
