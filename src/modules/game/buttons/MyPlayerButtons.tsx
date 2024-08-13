import { GameResult, RPS, Options } from '../../../model/model';
import { useOpponentScore, usePlayersScore, useRPSState } from '../../../store';
import { getGameResult, getRandomOption } from '../../../utils/HelperMethods';

const options = Options;

function MyPlayerButtons() {

    const increasePlayersScore = usePlayersScore((state) => state.increasePlayersScore);
    const increaseOpponentScore = useOpponentScore((state) => state.increaseOpponentScore);

    function setScore(result: GameResult) {
        if (result == 'win') {
            increasePlayersScore();
        }
        if (result == 'lost') {
            increaseOpponentScore();
        }
    }

    const {
        setPlayersPick,
        setOpponentsPick,
        gameResult,
        setGameResult,
    } = useRPSState();

    function startGame(option: RPS) {
        const opponentsPick = getRandomOption();
        setPlayersPick(option);
        setOpponentsPick(opponentsPick);
        const gameRes = getGameResult(option, opponentsPick);
        setGameResult(gameRes);
        setScore(gameRes);
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
