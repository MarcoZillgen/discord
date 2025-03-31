import { ChevronDown, ChevronRight } from "feather-icons-react";
import { useState } from "react";

export default function CategoryCard({
  name,
  open = false,
  children,
}: {
  name: string;
  open?: boolean;
  children?: React.ReactNode | React.ReactNode[];
}) {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <div>
      <div
        className="flex flex-row items-center gap-2 px-2 py-1 transition-all duration-150 ease-in-out rounded-sm cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <ChevronDown className="text-zinc-400" size={16} />
        ) : (
          <ChevronRight className="text-zinc-400" size={16} />
        )}
        <p className="text-zinc-400">{name}</p>
      </div>
      {isOpen && <div className="flex flex-col gap-1">{children}</div>}
    </div>
  );
}
