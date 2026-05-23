import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef();
    const dialog = useRef();

    const [timerStarted, setTimerStarted] = useState(false);
    const [playerWon, setPlayerWon] = useState(false);

    function handleStart() {
        setPlayerWon(false);
        setTimerStarted(true);

        timer.current = setTimeout(() => {
            dialog.current.open();
            setTimerStarted(false);
            setPlayerWon(false);
        }, targetTime * 1000);
    }

    function handleStop() {
        clearTimeout(timer.current);
        dialog.current.open();
        setTimerStarted(false);
        setPlayerWon(true);
    }

    return (
        <>
            <ResultModal
                ref={dialog}
                targetTime={targetTime}
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