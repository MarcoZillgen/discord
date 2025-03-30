import FeatherIcon, { FeatherIconName } from "feather-icons-react";

export default function ChannelCard({
  name,
  icon,
  selected = false,
}: {
  name: string;
  icon: FeatherIconName;
  selected?: boolean;
}) {
  return (
    <div
      className={
        "flex flex-row items-center gap-1 p-2 rounded-sm hover:bg-zinc-800 cursor-pointer transition-all duration-150 ease-in-out" +
        (selected ? " bg-zinc-700" : "")
      }
    >
      <div className="flex items-center justify-center size-6">
        <FeatherIcon
          icon={icon}
          className="object-cover rounded-full size-4 text-zinc-400"
        />
      </div>
      <p className="text-zinc-100">{name}</p>
    </div>
  );
}
