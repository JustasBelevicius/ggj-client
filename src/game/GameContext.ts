import React, { Dispatch, Reducer } from 'react';

export interface Game {
    gm?: boolean,
    playerId?: number,
    playerName?: string,
    roomId?: number,
    roomCode?: string
};

export type Action = Partial<Game>

export const gameReducer: Reducer<Game, Action> = (state, action) => {
    console.log("OLD STATE", state);
    console.log("ACTION", action);
    const newState = {...state, ...action};
    console.log("NEW STATE", newState);
    return newState;
}

export const GameContext = React.createContext<{state: Game, dispatch?: Dispatch<Action>}>({state: {}});