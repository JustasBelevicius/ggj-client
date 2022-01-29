import React, { useEffect, useReducer, useState } from 'react';
import { GameContext, gameReducer } from './game/GameContext';
import StateHandler from './StateHandler';
import states, { State } from './States';
import { WebSocketContext } from './WebSocketContext';
import './App.css';
import { Message, ReconnectRequestPayload } from 'common/src/Message';
import { MessageType } from 'common/src/MessageType';

let ws = new WebSocket(process.env.REACT_APP_WS_HOST || "");

function App() {
  const [state, setState] = useState(State.LOGIN);
  const [game, dispatch] = useReducer(gameReducer, {});

  useEffect(() => {
    // setInterval(() => {
      ws.addEventListener("error", () => {
        console.log("ERROR");
      })
    // }, 5000);
  })
  // useEffect(() => {
  //   const reconnect = () => {
  //     console.log("DROPPED CONNECTION, RESTARTING");
  //     setTimeout(() => {
  //       ws = new WebSocket(process.env.REACT_APP_WS_HOST || "");
  //       if (!game.playerId) {
  //         setState(State.LOGIN);
  //         return;
  //       }
  //       const message: Message<ReconnectRequestPayload> = {
  //         type: MessageType.RECONNECT,
  //         payload: {
  //           id: game.playerId
  //         }
  //       }
  //       ws.send(JSON.stringify(message));
  //     }, 1000);
  //   }
  //   ws.addEventListener("close", reconnect);
  //   return ws.removeEventListener("close", reconnect);
  // }, []);

  const StateComponent = states[state];
  return <WebSocketContext.Provider value={ws}>
    <GameContext.Provider value={{ state: game, dispatch }}>
      <StateHandler changeState={setState} />
      <div className='content' style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/board.png)`
      }}>
        <div className='playArea'>
          <StateComponent />
        </div>
      </div>
    </GameContext.Provider>
  </WebSocketContext.Provider>;
}

export default App;
