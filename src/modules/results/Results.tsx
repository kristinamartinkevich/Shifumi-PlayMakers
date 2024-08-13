import { useRPSState } from '../../store';
import RestartButton from './buttons/RestartButton';

function Results() {

    const {
        gameResult
    } = useRPSState();

    return (
        <div className='col-auto'>
            <div className='row justify-content-center'>
                <div className={gameResult}>{gameResult}!</div>
                <div><RestartButton /></div>
            </div>
        </div>
    );
};

export default Results;
