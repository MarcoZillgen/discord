import { create } from "zustand";

type UserInCall = {
  name: string;
  status: "default" | "muted" | "fullmute";
  setChannel: (channel: string) => void;
  leaveCall: () => void;
};

type CallState = {
  users: UserInCall[];
  channel: string | null;
};

const useCall = create<CallState>((set) => ({
  users: [],
  channel: null,
  setChannel: (channel: string) => set({ channel }),
  leaveCall: () => set({ users: [], channel: null }),
}));

export { useCall };
export type { UserInCall, CallState };
