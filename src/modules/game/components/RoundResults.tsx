import { useRPSState } from '../../../store';
import { getOption } from '../../../utils/HelperMethods';
import NextRoundButton from '../buttons/NextRoundButton';

function RoundResults() {

    const {
        gameResult,
        playersPick,
        opponentsPick
    } = useRPSState();

    return (
        <>
            <div className='row justify-content-center align-items-center'>
                <div className='col-auto'>
                    <img
                        src={getOption(playersPick)}
                        alt={playersPick}
                        className="rps-image"
                    />
                </div>
                <div className='col-auto d-flex h-50'>
                    <div className="vr"></div>
                </div>
                <div className='col-auto'>
                    <img
                        src={getOption(opponentsPick)}
                        alt={opponentsPick}
                        className='rps-image'
                    />
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className={`h3 col-auto d-flex justify-content-center ${gameResult}`}>{gameResult}!</div>
            </div>
            <NextRoundButton />
        </>
    );
};

export default RoundResults;
