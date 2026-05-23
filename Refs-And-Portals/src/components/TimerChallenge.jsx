import { useState, useRef } from "react";

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef();

    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);
    const [playerWon, setPlayerWon] = useState(false);

    function handleStart() {
        // reset previous game state
        setTimerExpired(false);
        setPlayerWon(false);
        setTimerStarted(true);

        timer.current = setTimeout(() => {
            setTimerExpired(true);
            setTimerStarted(false);
        }, targetTime * 1000);
    }

    function handleStop() {
        clearTimeout(timer.current);
        setTimerStarted(false);
        setPlayerWon(true);
    }

    return (
        <section className="challenge">
            <h2>{title}</h2>

            {timerExpired && <p>You Lost!</p>}
            {playerWon && <p>You Won!</p>}

            <p className="challenge-time">
                {targetTime} second{targetTime > 1 ? "s" : ""}
            </p>

            <p>
                <button onClick={timerStarted ? handleStop : handleStart}>
                    {timerStarted ? "Stop" : "Start"} Challenge
                </button>
            </p>

            <p className={timerStarted ? "active" : undefined}>
                {timerStarted ? "Time is running..." : "Time inactive"}
            </p>
        </section>
    );
}