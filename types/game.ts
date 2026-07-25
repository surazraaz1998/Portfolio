export interface GameCollectible {
  id: string;
  x: number;
  y: number;
  type: 'skill' | 'stat' | 'project';
  title: string;
  description: string;
  value: string;
  zoneId: number;
  collected: boolean;
}

export interface UnlockedStat {
  id: string;
  title: string;
  value: string;
  description: string;
  zoneId: number;
  timestamp: number;
}

export type ControlsState = {
  left: boolean;
  right: boolean;
  jump: boolean;
};

export interface GameState {
  isPlaying: boolean;
  isPaused: boolean;
  isMuted: boolean;
  isCompleted: boolean;
  currentZone: number;
  score: number;
  collectiblesCollected: number;
  totalCollectibles: number;
  progressPercent: number;
  unlockedStats: UnlockedStat[];
  unlockedSkills: string[];
  activeProjectModal: string | null;
  // Actions
  setPlaying: (playing: boolean) => void;
  setPaused: (paused: boolean) => void;
  setMuted: (muted: boolean) => void;
  setCurrentZone: (zone: number) => void;
  addScore: (points: number) => void;
  unlockStat: (stat: UnlockedStat) => void;
  unlockSkill: (skill: string) => void;
  openProjectModal: (projectId: string | null) => void;
  resetGame: () => void;
}
