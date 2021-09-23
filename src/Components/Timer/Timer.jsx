import { useState, useRef, useEffect } from "react";

import "./Timer.css";

export const Timer = () => {

    const [timerDay, setTimerDay] = useState('00');
    const [timerHr, setTimerHr] = useState('00');
    const [timerMin, setTimerMin] = useState('00');
    const [timerSec, setTimerSec] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        let dest = new Date("sep 24, 2021 5:00:00");
        interval = setInterval(() => {
            let now = new Date().getTime();
            let diff = dest - now;
            let day = Math.floor(diff / (1000 * 60 * 60 * 24));
            let hr = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            let sec = Math.floor((diff % (1000 * 60)) / 1000);

            if (diff < 0) {
                clearInterval(interval.current);
            } else {
                setTimerDay(day);
                setTimerHr(hr);
                setTimerMin(min);
                setTimerSec(sec);
            }

        }, 1000);
    }

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        }
    })

    return (
        <div className="timer-div">
            <h2 className="launch-heading">Pre-Sale</h2>
            <div className="countdown-div">
                <ul class="timer inline-list">
                    <li><div id="clock-hrs-left" className="clock-time">{timerDay}</div><div>Days</div></li>
                    <li><div id="clock-hrs-left" className="clock-time">{timerHr}</div><div>Hrs</div></li>
                    <li><div id="clock-min-left" className="clock-time">{timerMin}</div><div>Min</div></li>
                    <li><div id="clock-sec-left" className="clock-time">{timerSec}</div><div>Sec</div></li>
                </ul>
            </div>
        </div>
    )
}