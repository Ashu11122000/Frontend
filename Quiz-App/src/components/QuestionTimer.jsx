import { useState, useEffect } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        setRemainingTime(timeout);

        const timer = setTimeout(onTimeout, timeout);

        return () => {
            clearTimeout(timer);
        };
    }, [timeout, onTimeout]);

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime((prevRemainingTime) => {
                if (prevRemainingTime <= 100) {
                    clearInterval(interval);
                    return 0;
                }

                return prevRemainingTime - 100;
            });
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, [timeout]);

    return (
        <progress
            id="question-time"
            max={timeout}
            value={remainingTime}
        />
    );
}