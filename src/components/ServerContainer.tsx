import { ChevronLeft, Settings } from "feather-icons-react";
import BlackBox from "./BlackBox";
import CategoryCard from "./CategoryCard";
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
          <ChannelCard name="General" icon="italic" />
          <ChannelCard name="Random" icon="hash" />
          <ChannelCard name="Music" icon="music" />
          <ChannelCard name="General" icon="italic" />
          <ChannelCard name="Random" icon="hash" />
          <ChannelCard name="Music" icon="music" />
          <ChannelCard name="General" icon="italic" />
          <ChannelCard name="Random" icon="hash" />
          <ChannelCard name="Music" icon="music" />
          <ChannelCard name="General" icon="italic" />
          <ChannelCard name="Random" icon="hash" />
          <ChannelCard name="Music" icon="music" />
        </CategoryCard>
        <CategoryCard name="Text Channels" open>
          <ChannelCard name="General" icon="italic" />
          <ChannelCard name="Random" icon="hash" />
          <ChannelCard name="Music" icon="music" />
          <ChannelCard name="General" icon="italic" />
          <ChannelCard name="Random" icon="hash" />
          <ChannelCard name="Music" icon="music" />
          <ChannelCard name="General" icon="italic" />
          <ChannelCard name="Random" icon="hash" />
          <ChannelCard name="Music" icon="music" />
          <ChannelCard name="General" icon="italic" />
          <ChannelCard name="Random" icon="hash" />
          <ChannelCard name="Music" icon="music" />
        </CategoryCard>
      </BlackBox>
    </section>
  );
}
