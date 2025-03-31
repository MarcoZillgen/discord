import { Send } from "feather-icons-react";

export default function Inputbar() {
  return (
    <div
      className="flex items-center w-full gap-2 pr-4 rounded-sm h-fit bg-zinc-800 selection:bg-zinc-500 focus-within:outline-1 outline-zinc-400"
      spellCheck={false}
    >
      <input
        type="text"
        className="w-full p-2 pl-4 outline-none text-zinc-100"
      />
      <Send className="size-[18px] text-zinc-400" />
    </div>
  );
}
