import Image from "next/image";

import screenImg from "/public/screen.svg";
import { courier } from "../app/fonts";
import { CommandAction } from "@/actions";

interface TerminalScreenProps {
  prompt: React.ReactElement;
  outputs: CommandAction[];
  inputRef: React.RefObject<HTMLInputElement>;
  formRef: React.RefObject<HTMLFormElement>;
  submitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
}

export default function TerminalScreen({
  prompt,
  outputs,
  inputRef,
  formRef,
  submitHandler,
}: TerminalScreenProps) {
  const renderedOutputs = outputs.map(
    ({ id, input, output }: CommandAction) => {
      return (
        <div
          className={`flex flex-col gap-y-0.5 font-thin ${courier.className}`}
          key={id}
        >
          <p>
            {prompt}
            {input}
          </p>
          {output !== "" && <p className="">{output}</p>}
        </div>
      );
    }
  );

  return (
    <div
      className="flex justify-center items-center text-[1.77vw] sm:text-xs lg:text-sm w-full py-0 sm:py-7"
      onClick={() => {
        inputRef!.current!.focus();
      }}
    >
      <div className="flex z-50 justify-center items-center absolute overflow-hidden pointer-events-none">
        <div className="hidden sm:block relative w-[93.5ch] aspect-[1.25] pointer-events-none select-none">
          <Image alt="" src={screenImg} fill></Image>
        </div>
      </div>
      <div
        className={`${courier.className} z-40 px-[1.5ch] py-[0.5ch] mb-[13ch] bg-slate-800 text-slate-200 flex items-end w-full sm:w-[90ch] leading-snug tracking-wide overflow-hidden h-[57ch]`}
      >
        <form ref={formRef} onSubmit={submitHandler} className="select-text">
          <pre className="space-y-[0.25ch]">{renderedOutputs}</pre>
          <div className="flex flex-row items-end justify-start">
            {prompt}
            <input
              ref={inputRef}
              className="bg-transparent w-[67ch] outline-none mt-[0.25ch]"
              name="cmd"
              type="text"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
