import FeatherIcon, { FeatherIconName } from "feather-icons-react";
import { useSelection } from "../../store/selection";

type ChannelCardProps = {
  name: string;
  channelId: string;
  icon: FeatherIconName;
};

export default function ChannelCard({
  name,
  icon,
  channelId,
}: ChannelCardProps) {
  const { setSelectedChannel, selectedChat } = useSelection();

  return (
    <div
      onClick={() => {
        setSelectedChannel(channelId);
      }}
      className={
        "flex flex-row items-center gap-1 p-2 rounded-sm cursor-pointer transition-all duration-150 ease-in-out" +
        (selectedChat !== null &&
        "chat" in selectedChat &&
        selectedChat.chat === channelId
          ? " bg-zinc-700"
          : "")
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
