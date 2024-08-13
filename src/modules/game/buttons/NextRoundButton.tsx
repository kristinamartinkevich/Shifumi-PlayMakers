import { useRPSState } from '../../../store';

function NextRoundButton() {

    const {
        setPlayersPick,
        setOpponentsPick,
        setGameResult,
    } = useRPSState();

    function nextRound() {
        setPlayersPick(undefined);
        setOpponentsPick(undefined);
        setGameResult(undefined);
    }

    return (
        <>
            <div className='row justify-content-center'>
                <button className='button col-auto' onClick={() => nextRound()}>Next Round</button>
            </div>
        </>
    );
};

export default NextRoundButton;
