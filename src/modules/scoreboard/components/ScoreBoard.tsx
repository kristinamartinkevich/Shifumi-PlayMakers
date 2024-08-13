import { usePlayersScore, useOpponentScore } from '../../../store';

function ScoreBoard() {
    const playersScore = usePlayersScore((state) => state.score);
    const opponentScore = useOpponentScore((state) => state.score);

    return (
        <>
            {playersScore} | {opponentScore}
        </>
    )
}

export default ScoreBoard
