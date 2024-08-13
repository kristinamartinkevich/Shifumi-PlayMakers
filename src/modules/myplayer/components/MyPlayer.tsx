import { useRPSState } from '../../../store';
import { getOption } from '../../../utils/HelperMethods';

function MyPlayer() {

    const {
        playersPick,
    } = useRPSState();

    return (
        <>
            {playersPick && (
                <img
                    src={getOption(playersPick)}
                    alt={playersPick}
                    className="rps-image"
                />
            )}
        </>
    );
};

export default MyPlayer;
