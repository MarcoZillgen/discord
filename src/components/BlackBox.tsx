export default function BlackBox({
  children,
  className,
}: {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
}) {
  return (
    <div
      className={`flex gap-1 p-1 rounded-sm bg-zinc-800 overflow-scroll ${className}`}
    >
      {children}
    </div>
  );
}
