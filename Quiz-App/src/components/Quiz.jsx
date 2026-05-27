import { useState, useCallback, useMemo } from "react";
import QUESTIONS from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

const BASE_TIMEOUT = 10000;
const TIME_INCREMENT = 5000;

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);
    const [answerState, setAnswerState] = useState("");

    const activeQuestionIndex =
        answerState === "answered" ? userAnswers.length - 1 : userAnswers.length;

    const quizIsComplete = userAnswers.length >= QUESTIONS.length;

    const currentTimeout =
        BASE_TIMEOUT + activeQuestionIndex * TIME_INCREMENT;

    const handleSelectAnswer = useCallback((selectedAnswer) => {
        setAnswerState("answered");

        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, selectedAnswer];
        });

        setTimeout(() => {
            setAnswerState("");
        }, 1500);
    }, []);

    const handleSkipAnswer = useCallback(() => {
        setUserAnswers((prevUserAnswers) => {
            return [...prevUserAnswers, null];
        });
    }, []);

    const shuffledAnswers = useMemo(() => {
        if (quizIsComplete) return [];

        const answers = [...QUESTIONS[activeQuestionIndex].answers];
        return answers.sort(() => Math.random() - 0.5);
    }, [activeQuestionIndex, quizIsComplete]);

    const correctAnswer = quizIsComplete
        ? null
        : QUESTIONS[activeQuestionIndex].answers[0];

    function getButtonClass(answer) {
        if (!answerState) {
            return "";
        }

        if (answer === correctAnswer) {
            return "correct";
        }

        if (
            answer === userAnswers[userAnswers.length - 1] &&
            answer !== correctAnswer
        ) {
            return "wrong";
        }

        return "";
    }

    if (quizIsComplete) {
        const skippedAnswers = userAnswers.filter(
            (answer) => answer === null
        ).length;

        const correctAnswers = userAnswers.filter(
            (answer, index) => answer === QUESTIONS[index].answers[0]
        ).length;

        const wrongAnswers = QUESTIONS.length - correctAnswers - skippedAnswers;

        return (
            <div id="summary">
                <img src={quizCompleteImg} alt="Trophy Icon" />
                <h2>Quiz Completed!</h2>

                <div id="summary-stats">
                    <p>
                        <span className="number">{QUESTIONS.length}</span>
                        <span className="text">Total Questions</span>
                    </p>

                    <p>
                        <span className="number">{correctAnswers}</span>
                        <span className="text">Correct</span>
                    </p>

                    <p>
                        <span className="number">{wrongAnswers}</span>
                        <span className="text">Wrong</span>
                    </p>

                    <p>
                        <span className="number">{skippedAnswers}</span>
                        <span className="text">Skipped</span>
                    </p>

                    <p>
                        <span className="number">
                            {Math.round(
                                (correctAnswers / QUESTIONS.length) * 100
                            )}%
                        </span>
                        <span className="text">Score</span>
                    </p>
                </div>

                <ol>
                    {QUESTIONS.map((question, index) => {
                        const userAnswer = userAnswers[index];
                        const correctAnswer = question.answers[0];

                        let answerClass = "skipped";

                        if (userAnswer === correctAnswer) {
                            answerClass = "correct";
                        } else if (userAnswer !== null) {
                            answerClass = "wrong";
                        }

                        return (
                            <li key={question.text}>
                                <h3>{index + 1}</h3>
                                <p className="question">{question.text}</p>
                                <p className={`user-answer ${answerClass}`}>
                                    {userAnswer ?? "Skipped"}
                                </p>
                            </li>
                        );
                    })}
                </ol>
            </div>
        );
    }

    return (
        <div id="quiz">
            <div id="question">
                <QuestionTimer
                    key={activeQuestionIndex}
                    timeout={currentTimeout}
                    onTimeout={handleSkipAnswer}
                />

                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>

                <ul id="answers">
                    {shuffledAnswers.map((answer) => (
                        <li key={answer} className="answer">
                            <button
                                onClick={() => handleSelectAnswer(answer)}
                                disabled={answerState === "answered"}
                                className={getButtonClass(answer)}
                            >
                                {answer}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}