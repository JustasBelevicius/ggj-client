import React, { useContext } from 'react';
import { GameContext } from '../game/GameContext';

export function GamePage() {
    const {state} = useContext(GameContext);
    return <h1>ROOM CODE: {state.roomCode}</h1>
}