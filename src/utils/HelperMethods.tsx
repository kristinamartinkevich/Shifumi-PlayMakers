import rock from '../assets/rock.svg';
import paper from '../assets/paper.svg';
import scissors from '../assets/scissors.svg';
import { RPS, Options, GameResult } from '../model/model';

export function getOption(option: RPS | undefined) {
    switch (option) {
        case 'Rock':
            return rock;
        case 'Paper':
            return paper;
        case 'Scissors':
            return scissors;
        default:
            return undefined
    }
}

export function getRandomOption(): RPS {
    const randomIndex = Math.floor(Math.random() * Options.length);
    return Options[randomIndex];
}


export function getGameResult(playersPick: RPS, opponentsPick: RPS): GameResult {
    if (playersPick == opponentsPick) {
        return 'tie';
    }
    else if (
        (playersPick == 'Rock' && opponentsPick == 'Scissors') ||
        (playersPick == 'Paper' && opponentsPick == 'Rock') ||
        (playersPick == 'Scissors' && opponentsPick == 'Paper')
    ) {
        return 'win';
    }
    else {
        return 'lost';
    }
}
