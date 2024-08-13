import { useOpponentScore, usePlayersScore, useRPSState } from '../../../store';

function ResetGameButton() {
    const resetPlayersScore = usePlayersScore((state) => state.resetPlayersScore);
    const resetOpponentScore = useOpponentScore((state) => state.resetOpponentScore);


    const {
        setPlayersPick,
        setOpponentsPick,
        setGameResult
    } = useRPSState();

    function restartGame() {
        setPlayersPick(undefined);
        setOpponentsPick(undefined);
        setGameResult(undefined);
        resetPlayersScore();
        resetOpponentScore();
    }

    return (
        <button className='reset-button' onClick={() => restartGame()}>Reset Game</button>
    );
};

export default ResetGameButton;
