import { create } from 'zustand';
import { GameState, UnlockedStat } from '../../types/game';

export const useGameStore = create<GameState>((set) => ({
  isPlaying: false,
  isPaused: false,
  isMuted: false,
  isCompleted: false,
  currentZone: 1,
  score: 0,
  collectiblesCollected: 0,
  totalCollectibles: 8,
  progressPercent: 0,
  unlockedStats: [],
  unlockedSkills: [],
  activeProjectModal: null,

  setPlaying: (playing: boolean) => set({ isPlaying: playing }),
  setPaused: (paused: boolean) => set({ isPaused: paused }),
  setMuted: (muted: boolean) => set((state) => ({ isMuted: !state.isMuted })),
  setCurrentZone: (zone: number) => set({ currentZone: zone }),
  addScore: (points: number) =>
    set((state) => ({
      score: state.score + points,
      collectiblesCollected: state.collectiblesCollected + 1,
    })),
  unlockStat: (stat: UnlockedStat) =>
    set((state) => {
      if (state.unlockedStats.some((s) => s.id === stat.id)) return state;
      return {
        unlockedStats: [stat, ...state.unlockedStats],
      };
    }),
  unlockSkill: (skill: string) =>
    set((state) => {
      if (state.unlockedSkills.includes(skill)) return state;
      return { unlockedSkills: [...state.unlockedSkills, skill] };
    }),
  openProjectModal: (projectId: string | null) => set({ activeProjectModal: projectId }),
  resetGame: () =>
    set({
      isPlaying: true,
      isPaused: false,
      isCompleted: false,
      currentZone: 1,
      score: 0,
      collectiblesCollected: 0,
      progressPercent: 0,
      unlockedStats: [],
      unlockedSkills: [],
      activeProjectModal: null,
    }),
}));
