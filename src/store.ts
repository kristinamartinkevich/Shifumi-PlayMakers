import { create } from 'zustand';
import { RPS } from './model/model';

interface RPSState {
    opponentsPick: RPS | undefined;
    playersPick: RPS | undefined;
    gameResult: string | undefined;
    setOpponentsPick: (pick: RPS | undefined) => void;
    setPlayersPick: (pick: RPS | undefined) => void;
    setGameResult: (result: string | undefined) => void;
}

interface PlayersScoreState {
    score: number;
    increasePlayersScore: () => void;
    resetPlayersScore: () => void;
}

interface OpponentScoreState {
    score: number;
    increaseOpponentScore: () => void;
    resetOpponentScore: () => void;
}

export const usePlayersScore = create<PlayersScoreState>((set) => ({
    score: 0,
    increasePlayersScore: () => set((state) => ({ score: state.score + 1 })),
    resetPlayersScore: () => set(() => ({ score: 0 })),
}));

export const useOpponentScore = create<OpponentScoreState>((set) => ({
    score: 0,
    increaseOpponentScore: () => set((state) => ({ score: state.score + 1 })),
    resetOpponentScore: () => set(() => ({ score: 0 })),
}));


export const useRPSState = create<RPSState>((set) => ({
    opponentsPick: undefined,
    playersPick: undefined,
    gameResult: undefined,
    setOpponentsPick: (opponentsPick: RPS | undefined) => set({ opponentsPick }),
    setPlayersPick: (playersPick: RPS | undefined) => set({ playersPick }),
    setGameResult: (gameResult: string | undefined) => set({ gameResult }),
}));