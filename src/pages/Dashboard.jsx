import { useEffect, useState } from 'react';
import TaskCard from '../components/TaskCard';
import ChatSection from '../components/ChatSection';
import { getTasks } from '../utils/api';

const Dashboard = () => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getTasks();
      setTaskList(tasks.slice(0, 5)); // Limit to 5 tasks for demo purposes
    };

    fetchTasks();
  }, []);

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {taskList.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
      <ChatSection />
    </div>
  );
};

export default Dashboard;
