import { GameResult, RPS, Options } from '../../../model/model';
import { useOpponentScore, usePlayersScore, useRPSState } from '../../../store';
import { getRandomOption } from '../../../utils/HelperMethods';

const options = Options;

function MyPlayerButtons() {

    const increasePlayersScore = usePlayersScore((state) => state.increasePlayersScore);
    const increaseOpponentScore = useOpponentScore((state) => state.increaseOpponentScore);

    const {
        setPlayersPick,
        setOpponentsPick,
        gameResult,
        setGameResult,
    } = useRPSState();


    function finishGame(playersPick: RPS, opponentsPick: RPS) {
        let gameRes: GameResult;
        if (playersPick == opponentsPick) {
            gameRes = 'tie';
        }
        else if (
            (playersPick == 'Rock' && opponentsPick == 'Scissors') ||
            (playersPick == 'Paper' && opponentsPick == 'Rock') ||
            (playersPick == 'Scissors' && opponentsPick == 'Paper')
        ) {
            gameRes = 'win';
        }
        else {
            gameRes = 'lost';
        }
        setGameResult(gameRes);
        setScore(gameRes);
    }

    function setScore(result: GameResult) {
        if (result == 'win') {
            increasePlayersScore();
        }
        if (result == 'lost') {
            increaseOpponentScore();
        }
    }

    function startGame(option: RPS) {
        const opponentsPick = getRandomOption();
        setPlayersPick(option);
        setOpponentsPick(opponentsPick);
        finishGame(option, opponentsPick);
    }

    return (
        <>
            {!gameResult && options.map((option: RPS) => (
                <span className='col-4 mx-2' key={option}>
                    <button className='button' onClick={() => startGame(option)} >
                        {option}
                    </button>
                </span>
            ))}
        </>
    );
};

export default MyPlayerButtons;
