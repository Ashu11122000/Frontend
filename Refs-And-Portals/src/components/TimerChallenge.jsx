import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef();
    const dialog = useRef();

    const [timerStarted, setTimerStarted] = useState(false);
    const [playerWon, setPlayerWon] = useState(false);
    const [remainingTime, setRemainingTime] = useState(targetTime * 1000);

    function handleStart() {
        setPlayerWon(false);
        setTimerStarted(true);
        setRemainingTime(targetTime * 1000);

        const startTime = Date.now();

        timer.current = setTimeout(() => {
            setPlayerWon(false);
            setTimerStarted(false);
            setRemainingTime(0);
            dialog.current.open();
        }, targetTime * 1000);

        timer.current.interval = setInterval(() => {
            const elapsedTime = Date.now() - startTime;
            const timeLeft = targetTime * 1000 - elapsedTime;

            setRemainingTime(timeLeft > 0 ? timeLeft : 0);
        }, 10);
    }

    function handleStop() {
        clearTimeout(timer.current);
        clearInterval(timer.current.interval);

        setTimerStarted(false);
        setPlayerWon(true);
        dialog.current.open();
    }

    return (
        <>
            <ResultModal
                ref={dialog}
                targetTime={targetTime}
                remainingTime={remainingTime}
                result={playerWon ? "won" : "lost"}
            />

            <section className="challenge">
                <h2>{title}</h2>

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
        </>
    );
}