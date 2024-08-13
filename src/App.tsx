import './App.css'
import MyPlayerButtons from './modules/game/buttons/MyPlayerButtons';
import ResetGameButton from './modules/game/buttons/ResetGameButton';
import RoundResults from './modules/game/components/RoundResults';
import ScoreBoard from './modules/game/components/ScoreBoard';
import { useRPSState } from './store';

function App() {

  const {
    gameResult
  } = useRPSState();

  return (
    <>
      <nav className="navbar fixed-bottom bg-light">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <ResetGameButton />
          </div>
        </nav>

      </nav>
      <div className='main-container my-5'>
        <div className='row justify-content-center'>
          <div className='col-auto'>
            <ScoreBoard />
          </div>
        </div>
        <div className='row justify-content-center my-3'>
          <div className='col-auto'>
            <MyPlayerButtons />
          </div>
        </div>
        {gameResult && (
          <>
            <RoundResults />
          </>
        )}
      </div>
    </>
  )
}

export default App
