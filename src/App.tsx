import './App.css'
import MyPlayerButtons from './modules/myplayer/buttons/MyPlayerButtons';
import MyPlayer from './modules/myplayer/components/MyPlayer'
import Opponent from './modules/opponent/components/Opponent'
import Results from './modules/results/Results';
import ScoreBoard from './modules/scoreboard/components/ScoreBoard';
import { useRPSState } from './store';

function App() {

  const {
    playersPick,
    opponentsPick
  } = useRPSState();

  return (
    <div className='main-container'>
      <div className='row justify-content-center align-items-center'>
        <div className='col-auto'>
          <ScoreBoard />
        </div>
      </div>
      <div className='row justify-content-center align-items-center h-75'>
        <div className='col-5'>
          <MyPlayer />
        </div>
        <div className='col-auto d-flex h-50'>
          <div className="vr"></div>
        </div>
        <div className='col-5'>
          <Opponent />
        </div>
      </div>
      <div className='row justify-content-center '>
        <div className='col-auto'>
          <MyPlayerButtons />
        </div>
      </div>
      {playersPick && opponentsPick && (
        <div className='row mt-auto justify-content-center align-items-center'>
          <Results />
        </div>
      )}
    </div>
  )
}

export default App
