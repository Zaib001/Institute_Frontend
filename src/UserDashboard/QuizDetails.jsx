import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaClock, FaStar, FaRegQuestionCircle } from 'react-icons/fa';

// Dummy quiz data
const dummyQuizData = {
  title: 'JavaScript Fundamentals',
  totalQuestions: 10,
  duration: '30 minutes',
  difficulty: 'Intermediate',
  description:
    'This quiz covers essential topics in JavaScript, including variables, functions, and basic data structures. Test your knowledge and sharpen your skills.',
  questions: [
    {
      id: 1,
      question: 'What is the correct syntax for referring to an external script called "script.js"?',
      options: [
        '<script href="script.js">',
        '<script name="script.js">',
        '<script src="script.js">',
        '<script file="script.js">',
      ],
      correctOption: 2,
      explanation: 'The correct syntax for including an external JavaScript file is `<script src="script.js">`.',
    },
    {
      id: 2,
      question: 'Which of the following is not a reserved word in JavaScript?',
      options: ['interface', 'throws', 'program', 'short'],
      correctOption: 2,
      explanation: '"program" is not a reserved word in JavaScript, unlike the other options.',
    },
    // Add more questions as needed
  ],
};

const QuizDetails = () => {
  const { quizId } = useParams();
  const { title, duration, difficulty, description, questions } = dummyQuizData;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [timer, setTimer] = useState(1800); // Timer in seconds (30 minutes)

  // Timer logic
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev > 0) {
          return prev - 1;
        } else {
          clearInterval(countdown);
          handleQuizCompletion();
          return 0;
        }
      });
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const handleOptionClick = (optionIndex) => {
    setSelectedOption(optionIndex);
  };

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      // Check if the selected option is correct
      if (selectedOption === questions[currentQuestionIndex].correctOption) {
        setScore((prevScore) => prevScore + 1);
      }
      setShowExplanation(true);
    }
  };

  const handleContinue = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      handleQuizCompletion();
    }
  };

  const handleQuizCompletion = () => {
    setIsQuizCompleted(true);
  };

  const handleRetakeQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
    setIsQuizCompleted(false);
    setShowExplanation(false);
    setTimer(1800);
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-100 p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-12">
        {!isQuizCompleted ? (
          <>
            <motion.h1
              className="text-4xl font-bold text-red-700 mb-4"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {title}
            </motion.h1>
            <p className="text-gray-600 mb-6">{description}</p>

            <div className="flex justify-between items-center bg-red-50 p-4 rounded-lg shadow-sm mb-6">
              <FaClock className="text-red-700 text-2xl" />
              <p className="text-gray-800 font-semibold">Time Remaining: {formatTime(timer)}</p>
            </div>

            {/* Question Display */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-lg mb-6">
              <h2 className="text-xl font-semibold mb-4">
                Question {currentQuestionIndex + 1}/{questions.length}
              </h2>
              <p className="text-gray-700 mb-4">{questions[currentQuestionIndex].question}</p>
              <div className="space-y-2">
                {questions[currentQuestionIndex].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionClick(index)}
                    className={`w-full text-left px-4 py-2 rounded-lg border-2 transition duration-300 ${
                      selectedOption === index
                        ? 'border-red-700 bg-red-50 text-red-700'
                        : 'border-gray-300 bg-white hover:bg-gray-100'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            {showExplanation && (
              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <p className="text-gray-800 font-semibold">Explanation:</p>
                <p className="text-gray-600">{questions[currentQuestionIndex].explanation}</p>
                <button
                  onClick={handleContinue}
                  className="mt-4 w-full bg-red-700 text-white py-2 rounded-lg text-lg font-medium hover:bg-red-800 transition duration-300"
                >
                  {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                </button>
              </div>
            )}

            {!showExplanation && (
              <button
                onClick={handleNextQuestion}
                disabled={selectedOption === null}
                className={`w-full py-3 rounded-lg text-lg font-medium ${
                  selectedOption === null
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-red-700 text-white hover:bg-red-800 transition duration-300'
                }`}
              >
                Submit Answer
              </button>
            )}
          </>
        ) : (
          <div className="text-center">
            <h2 className="text-4xl font-bold text-red-700 mb-4">Quiz Completed!</h2>
            <p className="text-gray-700 mb-6">Your score: {score}/{questions.length}</p>
            <button
              onClick={handleRetakeQuiz}
              className="bg-red-700 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-red-800 transition duration-300"
            >
              Retake Quiz
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default QuizDetails;
