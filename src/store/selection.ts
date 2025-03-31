import { create } from "zustand";

type SelectionState = {
  // Chat/Channel selection
  selectedChat: { server: string; chat: string } | { user: string } | null;
  setSelectedChannel: (chat: string) => void;
  setSelectedUser: (user: string) => void;
  resetSelectedChat: () => void;

  // Server selection
  selectedServer: string | null;
  setSelectedServer: (server: string) => void;
  resetSelectedServer: () => void;
};

const useSelection = create<SelectionState>((set, get) => ({
  selectedChat: null,
  setSelectedChannel: (chat) => {
    const selectedServer = get().selectedServer;
    if (!selectedServer) {
      console.error("No server selected. Cannot set selected channel.");
      return;
    }
    set({ selectedChat: { server: selectedServer, chat } });
  },
  setSelectedUser: (user) => set({ selectedChat: { user } }),
  resetSelectedChat: () => set({ selectedChat: null }),

  // test server, since no server management implemented yet
  selectedServer: "x",
  setSelectedServer: (server) => set({ selectedServer: server }),
  resetSelectedServer: () => set({ selectedServer: null }),
}));

export { useSelection };
export type { SelectionState };
