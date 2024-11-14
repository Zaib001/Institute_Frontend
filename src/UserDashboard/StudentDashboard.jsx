import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaDownload, FaCertificate, FaClock, FaChartLine, FaUsers, FaHome, FaBook, FaComments, FaList, FaMedal } from 'react-icons/fa';
import DiscussionForums from './DiscussionForums';
import MyQuizzes from './MyQuizzes';
import Leaderboard from './Leaderboard';

// Sidebar menu items
const menuItems = [
  { id: 1, name: 'Dashboard', icon: <FaHome />, component: 'ProgressTracker' },
  { id: 2, name: 'Certificates', icon: <FaCertificate />, component: 'Certificates' },
  { id: 3, name: 'Forums', icon: <FaComments />, component: 'DiscussionForums' },
  { id: 4, name: 'Achievements', icon: <FaMedal />, component: 'Achievements' },
  { id: 5, name: 'Quizzes', icon: <FaList />, component: 'MyQuizzes' },
  { id: 6, name: 'Leaderboard', icon: <FaChartLine />, component: 'Leaderboard' },
];

// Mock data for each section
const quizzes = [
  { id: 1, title: 'HTML Basics', completed: true, score: 85 },
  { id: 2, title: 'CSS Fundamentals', completed: false, score: null },
  { id: 3, title: 'JavaScript Essentials', completed: true, score: 92 },
];

const achievements = [
  { id: 1, name: 'Completed First Quiz', badge: '🥇' },
  { id: 2, name: 'Top 10 Performer', badge: '🏅' },
  { id: 3, name: 'Quiz Master', badge: '🏆' },
];

const StudentDashboard = () => {
  const [activeComponent, setActiveComponent] = useState('ProgressTracker');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'ProgressTracker':
        return (
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-semibold text-red-700 mb-6">Progress Tracker</h2>
            <div className="space-y-6">
              {quizzes.map((quiz) => (
                <motion.div
                  key={quiz.id}
                  className="flex items-center justify-between bg-gradient-to-r from-red-50 to-white p-5 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * quiz.id }}
                >
                  <div className="flex items-center">
                    <div className="bg-red-700 text-white rounded-full p-3 mr-4">
                      <FaClock size={24} />
                    </div>
                    <div>
                      <p className="text-xl font-semibold text-gray-800">{quiz.title}</p>
                      <p className="text-sm text-gray-500">{quiz.completed ? 'Completed' : 'Ongoing'}</p>
                    </div>
                  </div>
                  <div>
                    <span
                      className={`text-lg font-semibold px-3 py-1 rounded-lg ${
                        quiz.completed ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                      }`}
                    >
                      {quiz.completed ? `Score: ${quiz.score}%` : 'In Progress'}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      case 'Certificates':
        return (
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-semibold text-red-700 mb-6">Certificates</h2>
            <div className="bg-gradient-to-r from-red-50 to-white p-4 rounded-lg mb-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="bg-red-700 text-white rounded-full p-4">
                  <FaCertificate size={24} />
                </div>
                <div className="ml-4">
                  <p className="text-xl font-semibold text-gray-800">Course Completion Certificate</p>
                  <p className="text-sm text-gray-500">Issued on: <span className="text-gray-700">June 2023</span></p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Congratulations on completing your course! Download your certificate to showcase your achievement.
              </p>
              <motion.button
                className="mt-4 bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <FaDownload />
                <span>Download Certificate</span>
              </motion.button>
            </div>
          </motion.div>
        );
      case 'DiscussionForums':
        return <DiscussionForums />;
      case 'Achievements':
        return (
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-red-700 mb-4">Achievements/Badges</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="flex items-center bg-gray-50 p-4 rounded-lg">
                  <span className="text-3xl">{achievement.badge}</span>
                  <p className="ml-3 text-gray-700">{achievement.name}</p>
                </div>
              ))}
            </div>
          </motion.div>
        );
      case 'MyQuizzes':
        return <MyQuizzes/>
      case 'Leaderboard':
        return <Leaderboard/>
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-red-700 text-white flex flex-col">
        <h2 className="text-2xl font-bold p-6 border-b border-red-800">Dashboard Menu</h2>
        <ul className="flex-1 space-y-2 p-6">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`flex items-center p-3 cursor-pointer hover:bg-red-800 rounded-lg ${
                activeComponent === item.component ? 'bg-red-800' : ''
              }`}
              onClick={() => setActiveComponent(item.component)}
            >
              {item.icon}
              <span className="ml-3">{item.name}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold text-red-700 mb-8">{menuItems.find((item) => item.component === activeComponent).name}</h1>
        {renderComponent()}
      </main>
    </div>
  );
};

export default StudentDashboard;
