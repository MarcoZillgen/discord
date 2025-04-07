import { create } from "zustand";

type AuthState = {
  name: string | null;
  profile: string | null;
  login: (name: string, profile: string) => void;
  logout: () => void;
};

const useAuth = create<AuthState>((set) => ({
  // todo: test data
  name: "Marco",
  profile:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMaBHbJ1s1YmIRv6VPLvKPUlYnwEsyF7bLbg&s",
  login: (name, profile) => set({ name, profile }),
  logout: () => set({ name: null, profile: null }),
}));

export { useAuth };
export type { AuthState };
