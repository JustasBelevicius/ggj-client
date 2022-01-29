// import { Message, StartGameRequestPayload } from 'common/src/Message';
// import { MessageType } from 'common/src/MessageType';
import Player from 'common/src/Player';
import React, { useContext, useState } from 'react';
import Button from '../components/Button';
import { GameContext } from '../game/GameContext';
// import { WebSocketContext } from '../WebSocketContext';

export function MatchPage() {
    const { state } = useContext(GameContext);
    // const ws = useContext(WebSocketContext);
    const [card, setCard] = useState<number | undefined>(undefined);
    const [target, setTarget] = useState<number | undefined>(undefined);

    const doAction = () => {
        console.log(card, target);
    }

    return (
        <div>
            <h1>ROOM CODE: {state.roomCode}</h1>
            <div className='players'>
                {state.players?.filter(player => player.id !== state.playerId).map(player => <PlayerItem key={player.id} onClick={setTarget} player={player} />)}
            </div>
            <div className='cards'>
                {state.hand?.map((card, id) => <CardItem key={id} card={card} onClick={setCard}/>)}
            </div>
            <Button disabled={!card || !target} onClick={doAction} title='Confirm' />
        </div>
    );
}

function PlayerItem({ player, onClick }: { player: Player, onClick: (id: number) => void }) {
    return <div>
        <h3>{player.name}</h3>
        <Button onClick={() => onClick(player.id)} title="Target" />
    </div>
}

function CardItem({card, onClick}: { card: number, onClick: (id: number) => void }) {
    return <img src='https://placekitten.com/g/126/176' onClick={() => onClick(card)} alt={`Card #${card}`}/>
}