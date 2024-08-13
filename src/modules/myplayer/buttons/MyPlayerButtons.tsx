import { Options as options, RPS } from '../../../model/model';
import { useOpponentScore, usePlayersScore, useRPSState } from '../../../store';
import { getRandomOption } from '../../../utils/HelperMethods';

function MyPlayerButtons() {

    const increasePlayersScore = usePlayersScore((state) => state.increasePlayersScore);
    const decreasePlayersScore = usePlayersScore((state) => state.decreasePlayersScore);
    const increaseOpponentScore = useOpponentScore((state) => state.increaseOpponentScore);
    const decreaseOpponentScore = useOpponentScore((state) => state.decreaseOpponentScore);

    const {
        setPlayersPick,
        playersPick,
        setOpponentsPick,
        opponentsPick,
        gameResult,
        setGameResult,
    } = useRPSState();


    function finishGame() {
        if (playersPick === opponentsPick) {
            setGameResult('tie')
        }
        if (
            (playersPick == 'Rock' && opponentsPick == 'Scissors') ||
            (playersPick == 'Paper' && opponentsPick == 'Rock') ||
            (playersPick == 'Scissors' && opponentsPick == 'Paper')
        ) {
            setGameResult('win')
        }
        else {
            setGameResult('lost');
        }
    }

    function setScore() {
        if (gameResult == 'win') {
            increasePlayersScore;
            decreaseOpponentScore;
        }
        if (gameResult == 'lost') {
            increaseOpponentScore;
            decreasePlayersScore;
        }
    }

    function startGame(option: RPS) {
        setPlayersPick(option)
        setOpponentsPick(getRandomOption());
        finishGame();
        setScore();
    }

    return (
        <>
            {options.map((option: RPS) => (
                <span className='col-auto'>
                    <button key={option} disabled={!!gameResult} className='button' onClick={() => startGame(option)} >
                        {option}
                    </button>
                </span>
            ))}
        </>
    );
};

export default MyPlayerButtons;
