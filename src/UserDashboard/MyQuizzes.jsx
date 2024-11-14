import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { motion } from 'framer-motion';

// Dummy data for quizzes
const dummyQuizzes = [
  { id: 1, title: 'HTML Basics', completed: true, score: 85 },
  { id: 2, title: 'CSS Fundamentals', completed: false, score: null },
  { id: 3, title: 'JavaScript Essentials', completed: true, score: 92 },
  { id: 4, title: 'React Basics', completed: false, score: null },
  { id: 5, title: 'Node.js Introduction', completed: true, score: 78 },
];

const MyQuizzes = () => {
  const [quizzes, setQuizzes] = useState(dummyQuizzes);
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle starting a new quiz
  const handleStartNewQuiz = (quizId) => {
    // Navigate to the quiz details page with the quiz ID as a parameter
    navigate(`/quiz/${quizId}`);
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-semibold text-red-700 mb-6">My Quizzes</h2>
      <div className="space-y-4">
        {quizzes.map((quiz) => (
          <div
            key={quiz.id}
            className={`flex items-center justify-between bg-gradient-to-r from-red-50 to-white p-5 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 ${
              quiz.completed ? 'border-l-4 border-green-500' : 'border-l-4 border-yellow-500'
            }`}
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{quiz.title}</h3>
              <p className="text-sm text-gray-500">
                {quiz.completed ? `Score: ${quiz.score}%` : 'Status: In Progress'}
              </p>
            </div>
            <button
              onClick={() => handleStartNewQuiz(quiz.id)} // Navigate to quiz details
              className={`text-sm px-4 py-2 rounded-lg ${
                quiz.completed
                  ? 'bg-green-500 text-white hover:bg-green-600'
                  : 'bg-yellow-500 text-white hover:bg-yellow-600'
              } transition duration-300`}
            >
              {quiz.completed ? 'Review' : 'Continue'}
            </button>
          </div>
        ))}
      </div>
      <motion.button
        className="mt-8 w-full bg-red-700 text-white py-3 rounded-lg text-lg font-medium hover:bg-red-800 transition duration-300"
        whileHover={{ scale: 1.05 }}
        onClick={() => handleStartNewQuiz(2)} // Example quiz ID for starting a new quiz
      >
        Start New Quiz
      </motion.button>
    </motion.div>
  );
};

export default MyQuizzes;
