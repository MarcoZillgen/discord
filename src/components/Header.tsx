import {
  Search,
  Settings,
  Users,
  Radio,
  PhoneOff,
  MicOff,
  VolumeX,
  Minus,
  X,
  Square,
} from "feather-icons-react";
import { Window } from "@tauri-apps/api/window";

const appWindow = Window.getCurrent();

export default function Header() {
  return (
    <header
      className="flex justify-between p-2 select-none"
      onMouseDown={(e) => {
        if (e.buttons === 1 && e.target === e.currentTarget) {
          e.detail === 2
            ? appWindow.toggleMaximize()
            : appWindow.startDragging();
        }
      }}
    >
      {/* left buttons */}
      <div className="flex gap-3 w-fit">
        <div className="flex items-center justify-center size-8">
          <Settings size={18} color="white" />
        </div>
        <div className="flex items-center justify-center size-8">
          <Users size={18} color="white" />
        </div>
        <div className="flex items-center justify-center size-8">
          <Search size={18} color="white" />
        </div>
      </div>
      {/* call information */}
      <div className="flex gap-4">
        <div
          className="flex items-center gap-2 p-1"
          onMouseDown={(e) => {
            if (e.buttons === 1) {
              e.detail === 2
                ? appWindow.toggleMaximize()
                : appWindow.startDragging();
            }
          }}
        >
          <Radio size={18} className="flex gap-2 text-zinc-400" />
          <div className="text-lg text-zinc-100">Channel</div>
          <div className="text-lg italic text-zinc-400">Server</div>
        </div>
        <div className="flex gap-2 p-1 rounded-sm bg-zinc-800">
          <div className="flex items-center justify-center group size-8">
            <PhoneOff
              size={18}
              className="transition-all duration-150 text-zinc-400 group-hover:text-red-500"
            />
          </div>
          <div className="flex items-center justify-center group size-8">
            <MicOff
              size={18}
              className="transition-all duration-150 text-zinc-400 group-hover:text-red-500"
            />
          </div>
          <div className="flex items-center justify-center group size-8">
            <VolumeX
              size={18}
              className="transition-all duration-150 text-zinc-400 group-hover:text-red-500"
            />
          </div>
        </div>
      </div>
      {/* right buttons */}
      <div className="flex gap-3 w-fit">
        <div
          className="flex items-center justify-center size-8"
          onClick={() => appWindow.minimize()}
        >
          <Minus size={18} color="white" />
        </div>
        <div
          className="flex items-center justify-center size-8"
          onClick={() => appWindow.toggleMaximize()}
        >
          <Square size={18} color="white" />
        </div>
        <div
          className="flex items-center justify-center size-8"
          onClick={() => appWindow.close()}
        >
          <X size={18} color="white" />
        </div>
      </div>
    </header>
  );
}
