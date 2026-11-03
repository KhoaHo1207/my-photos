import { create } from "zustand";

export type SessionUser = {
  name: string;
  email: string;
  image: string;
};

type SessionState = {
  user: SessionUser;
  setUser: (user: SessionUser) => void;
};

export const useSessionStore = create<SessionState>((set) => ({
  user: {
    name: "John Doe",
    email: "john.doe@example.com",
    image: "https://via.placeholder.com/150",
  },
  setUser: (user) => set({ user }),
}));
