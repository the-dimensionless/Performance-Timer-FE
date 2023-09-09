import { useRef, useState } from 'react';
import './TimerComponent.css';

const TimerComponent = () => {

    const [countdown, setCountDown] = useState('00:00:00');
    const timerRef = useRef();


    return (
        <div className='timer-container'>
            <h3>{countdown}</h3>
            Hello Shweta
        </div>
    )
};

export default TimerComponent;