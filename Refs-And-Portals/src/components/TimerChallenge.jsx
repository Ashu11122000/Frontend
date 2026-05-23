import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef();
    const dialog = useRef();

    const [timerStarted, setTimerStarted] = useState(false);
    const [playerWon, setPlayerWon] = useState(false);
    const [remainingTime, setRemainingTime] = useState(targetTime * 1000);

    function handleStart() {
        setTimerStarted(true);
        setPlayerWon(false);
        setRemainingTime(targetTime * 1000);

        const startTime = Date.now();

        timer.current = {
            timeout: setTimeout(() => {
                setRemainingTime(0);
                setTimerStarted(false);
                setPlayerWon(false);
                dialog.current.open();
                clearInterval(timer.current.interval);
            }, targetTime * 1000),

            interval: setInterval(() => {
                const elapsedTime = Date.now() - startTime;
                const timeLeft = targetTime * 1000 - elapsedTime;

                setRemainingTime(timeLeft > 0 ? timeLeft : 0);
            }, 10),
        };
    }

    function handleStop() {
        clearTimeout(timer.current.timeout);
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