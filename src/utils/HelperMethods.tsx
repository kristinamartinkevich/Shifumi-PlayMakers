import rock from '../assets/rock.svg';
import paper from '../assets/paper.svg';
import scissors from '../assets/scissors.svg';
import { RPS, Options } from '../model/model';

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
