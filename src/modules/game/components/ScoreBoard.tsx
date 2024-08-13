import { usePlayersScore, useOpponentScore } from '../../../store';

function ScoreBoard() {
    const playersScore = usePlayersScore((state) => state.score);
    const opponentScore = useOpponentScore((state) => state.score);

    return (
        <>
            <div className='row justify-content-center align-items-center'>
                <div className='h3 col-auto'>Game Score:</div>
            </div>
            <div className='row justify-content-center align-items-center'>
                <div className='col-5 text-start'>You:</div>
                <div className='col-5 text-start'>Computer:</div>
            </div>
            <div className='row justify-content-center align-items-center'>
                <div className='col-5 text-center'>{playersScore}</div>
                <div className='col-auto d-flex h-50'>
                    <div className="vr"></div>
                </div>
                <div className='col-5 text-center'>{opponentScore}</div>
            </div>
        </>
    )
}

export default ScoreBoard
