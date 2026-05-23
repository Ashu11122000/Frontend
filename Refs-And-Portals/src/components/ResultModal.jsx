import { forwardRef, useImperativeHandle, useRef } from "react";

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

    const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

    return (
        <dialog ref={dialog} className="result-modal">
            <h2>You {result}</h2>

            <p>
                The target time was <strong>{targetTime} seconds.</strong>
            </p>

            <p>
                You stopped the timer with{" "}
                <strong>{formattedRemainingTime} seconds left.</strong>
            </p>

            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    );
});

export default ResultModal;