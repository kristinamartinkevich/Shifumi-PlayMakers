import { getOption } from '../../../utils/HelperMethods';
import { useRPSState } from '../../../store';

function Opponent() {
    const {
        playersPick,
        opponentsPick
    } = useRPSState();


    return (
        <>
            {playersPick && (
                <img className='rps-image'
                    src={getOption(opponentsPick)}
                    alt={getOption(opponentsPick)}
                />
            )}
        </>

    );
};

export default Opponent;
