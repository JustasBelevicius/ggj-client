import { GamePage } from "./states/GamePage";
import LobbyPage from "./states/LobbyPage";
import LoginPage from "./states/LoginPage";

const _state = {
    LOGIN: "LOGIN",
    LOBBY: "LOBBY",
    GAME: "GAME"
}

const states: {[key: string]: () => JSX.Element} = {
    [_state.LOGIN]: LoginPage,
    [_state.LOBBY]: LobbyPage,
    [_state.GAME]: GamePage
}

export const State = _state;
export default states;