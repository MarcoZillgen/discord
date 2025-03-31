import { ChevronLeft, Settings } from "feather-icons-react";
import BlackBox from "../_general/BlackBox";
import CategoryCard from "../_general/CategoryCard";
import ChannelCard from "./ChannelCard";

export default function ServerContainer() {
  return (
    <section className="flex flex-col w-1/5 h-[calc(100vh-56px)] p-2 gap-2 select-none">
      <BlackBox className="items-center justify-between w-full p-2 text-zinc-400">
        <ChevronLeft className="text-sm text-zinc-400 size-4" />
        <span>Fluffy</span>
        <Settings className="text-sm text-zinc-400 size-4" />
      </BlackBox>
      <BlackBox className="flex-col w-full h-full">
        <CategoryCard name="Text Channels" open>
          <ChannelCard channelId="1" name="General" icon="italic" />
          <ChannelCard channelId="2" name="Random" icon="hash" />
          <ChannelCard channelId="3" name="Music" icon="music" />
          <ChannelCard channelId="4" name="General" icon="italic" />
          <ChannelCard channelId="5" name="Random" icon="hash" />
          <ChannelCard channelId="6" name="Music" icon="music" />
          <ChannelCard channelId="7" name="General" icon="italic" />
          <ChannelCard channelId="8" name="Random" icon="hash" />
          <ChannelCard channelId="9" name="Music" icon="music" />
          <ChannelCard channelId="10" name="General" icon="italic" />
          <ChannelCard channelId="11" name="Random" icon="hash" />
          <ChannelCard channelId="12" name="Music" icon="music" />
        </CategoryCard>
        <CategoryCard name="Text Channels" open>
          <ChannelCard channelId="13" name="General" icon="italic" />
          <ChannelCard channelId="14" name="Random" icon="hash" />
          <ChannelCard channelId="15" name="Music" icon="music" />
          <ChannelCard channelId="16" name="General" icon="italic" />
          <ChannelCard channelId="17" name="Random" icon="hash" />
          <ChannelCard channelId="18" name="Music" icon="music" />
          <ChannelCard channelId="19" name="General" icon="italic" />
          <ChannelCard channelId="20" name="Random" icon="hash" />
          <ChannelCard channelId="21" name="Music" icon="music" />
          <ChannelCard channelId="22" name="General" icon="italic" />
          <ChannelCard channelId="23" name="Random" icon="hash" />
          <ChannelCard channelId="24" name="Music" icon="music" />
        </CategoryCard>
      </BlackBox>
    </section>
  );
}
