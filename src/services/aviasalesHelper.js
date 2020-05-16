import addMinutes from 'date-fns/addMinutes';
import {differenceInMinutes, getHours, getMinutes} from 'date-fns';


class AviasalesHelper {
    stopsCounter = (stops) => {
        if (stops.length === 0) return 'БЕЗ ПЕРЕСАДОК';
        if (stops.length === 1) return `1 ПЕРЕСАДКА`;
        return `${stops.length} ПЕРЕСАДКИ`;
    }
    stopsName = (stops) => {
        if (stops.length === 1) return `${stops}`;
        if (stops.length === 2) return `${stops[0]},${stops[1]}`;
        if (stops.length === 3) return `${stops[0]},${stops[1]},${stops[2]}`;
    }
    timeHelper = (date, duration) => {
        const startHours = `0${getHours(new Date(date))}`.slice(-2);
        const startMinutes = `0${getMinutes(new Date(date))}`.slice(-2);
        const result = addMinutes(new Date(date), duration);
        const finishHours = `0${getHours(new Date(result))}`.slice(-2);
        const finishMinutes = `0${getMinutes(new Date(result))}`.slice(-2);
        return `${startHours}:${startMinutes} -${finishHours}:${finishMinutes}`;
    }
    flightTimeCounter = (start, duration) => {
        const startTime = new Date(start);
        const stopTime = addMinutes(startTime, duration);
        const differense = differenceInMinutes(stopTime, startTime);
        const differenseHours = `${Math.floor(differense / 60)}`;
        const differenseMinutes = `${differense % 60}`;
        return `${differenseHours}ч ${differenseMinutes}м`;

    }
}

export default AviasalesHelper;