import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaChartLine,
  FaEnvelope,
  FaComments,
  FaUsers,
  FaShieldAlt,
  FaLanguage,
  FaTools,
  FaBell,
  FaCogs,
} from 'react-icons/fa';

// Sidebar menu items for Admin Dashboard
const adminMenuItems = [
  { id: 1, name: 'Analytics Dashboard', icon: <FaChartLine />, component: 'AnalyticsDashboard' },
  { id: 2, name: 'Bulk Email Notifications', icon: <FaEnvelope />, component: 'BulkEmail' },
  { id: 3, name: 'User Management', icon: <FaUsers />, component: 'UserManagement' },
  { id: 4, name: 'Live Chat Support', icon: <FaComments />, component: 'LiveChat' },
  { id: 5, name: 'Security Settings', icon: <FaShieldAlt />, component: 'SecuritySettings' },
  { id: 6, name: 'Multilingual Support', icon: <FaLanguage />, component: 'MultilingualSupport' },
  { id: 7, name: 'Notifications', icon: <FaBell />, component: 'Notifications' },
  { id: 8, name: 'General Settings', icon: <FaCogs />, component: 'GeneralSettings' },
];

const AdminDashboard = () => {
  const [activeComponent, setActiveComponent] = useState('AnalyticsDashboard');

  // Render the active component based on the selected menu item
  const renderAdminComponent = () => {
    switch (activeComponent) {
      case 'AnalyticsDashboard':
        return (
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-semibold text-red-700 mb-6">Analytics Dashboard</h2>
            <p className="text-gray-600 mb-4">Track user engagement and activity trends.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Sample statistics cards */}
              <div className="bg-gradient-to-r from-red-50 to-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800">Active Users</h3>
                <p className="text-2xl font-bold text-red-700">1,245</p>
              </div>
              <div className="bg-gradient-to-r from-red-50 to-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800">New Signups</h3>
                <p className="text-2xl font-bold text-red-700">450</p>
              </div>
              <div className="bg-gradient-to-r from-red-50 to-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800">Engagement Rate</h3>
                <p className="text-2xl font-bold text-red-700">78%</p>
              </div>
            </div>
          </motion.div>
        );

      case 'BulkEmail':
        return (
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-semibold text-red-700 mb-6">Bulk Email Notifications</h2>
            <p className="text-gray-600 mb-4">Send updates or newsletters to users.</p>
            <textarea
              placeholder="Compose your message here..."
              className="w-full border border-gray-300 p-4 rounded-lg mb-4 focus:outline-none focus:border-red-700"
              rows="5"
            ></textarea>
            <button className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition duration-300">
              Send Email
            </button>
          </motion.div>
        );

      case 'UserManagement':
        return (
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-semibold text-red-700 mb-6">User Management</h2>
            <p className="text-gray-600 mb-4">View and manage user accounts.</p>
            <ul className="list-disc pl-5">
              <li className="text-gray-700 mb-2">User 1: John Doe - Active</li>
              <li className="text-gray-700 mb-2">User 2: Jane Smith - Suspended</li>
              <li className="text-gray-700 mb-2">User 3: Bob Brown - Active</li>
            </ul>
          </motion.div>
        );

      case 'LiveChat':
        return (
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-semibold text-red-700 mb-6">Live Chat Support</h2>
            <p className="text-gray-600 mb-4">Offer real-time assistance to users.</p>
            <button className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition duration-300">
              Start Chat
            </button>
          </motion.div>
        );

      case 'SecuritySettings':
        return (
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-semibold text-red-700 mb-6">Security Settings</h2>
            <p className="text-gray-600 mb-4">Manage account security settings, including 2FA.</p>
            <button className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition duration-300">
              Enable 2FA
            </button>
          </motion.div>
        );

      case 'MultilingualSupport':
        return (
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-semibold text-red-700 mb-6">Multilingual Support</h2>
            <p className="text-gray-600 mb-4">Support users in multiple languages.</p>
            <button className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition duration-300">
              Add Language
            </button>
          </motion.div>
        );

      case 'Notifications':
        return (
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-semibold text-red-700 mb-6">Notifications</h2>
            <p className="text-gray-600 mb-4">Manage and send notifications to users.</p>
            <button className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition duration-300">
              Send Notification
            </button>
          </motion.div>
        );

      case 'GeneralSettings':
        return (
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-semibold text-red-700 mb-6">General Settings</h2>
            <p className="text-gray-600 mb-4">Adjust application settings and preferences.</p>
            <button className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition duration-300">
              Update Settings
            </button>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-red-700 text-white flex flex-col">
        <h2 className="text-2xl font-bold p-6 border-b border-red-800">Admin Dashboard</h2>
        <ul className="flex-1 space-y-2 p-6">
          {adminMenuItems.map((item) => (
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
        <h1 className="text-4xl font-bold text-red-700 mb-8">
          {adminMenuItems.find((item) => item.component === activeComponent)?.name}
        </h1>
        {renderAdminComponent()}
      </main>
    </div>
  );
};

export default AdminDashboard;
