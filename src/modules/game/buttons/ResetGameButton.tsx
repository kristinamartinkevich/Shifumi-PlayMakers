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
        <div className='row justify-content-center'>
            <button className='button col-auto' onClick={() => restartGame()}>Reset Game</button>
        </div>
    );
};

export default ResetGameButton;
