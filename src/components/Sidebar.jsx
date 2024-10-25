import { FaTasks, FaComments, FaCalendarAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-60 h-screen">
      <nav>
        <ul>
          <li className="p-4 hover:bg-gray-600"><FaTasks className="inline mr-2" />Tasks</li>
          <li className="p-4 hover:bg-gray-600"><FaComments className="inline mr-2" />Chat</li>
          <li className="p-4 hover:bg-gray-600"><FaCalendarAlt className="inline mr-2" />Calendar</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
