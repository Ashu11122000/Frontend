import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
    { targetTime, remainingTime, result },
    ref
) {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            },
            close() {
                dialog.current.close();
            },
        };
    });

    const userLost = remainingTime <= 0;
    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    return createPortal(
        <dialog ref={dialog} className="result-modal">
            <h2>You {result}</h2>

            <p>
                Your score: <strong>{userLost ? 0 : score}</strong>
            </p>

            <p>
                The target time was <strong>{targetTime} seconds.</strong>
            </p>

            <p>
                You stopped the timer with{" "}
                <strong>
                    {userLost ? "0.00" : formattedRemainingTime} seconds left.
                </strong>
            </p>

            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById("modal")
    );
});

export default ResultModal;