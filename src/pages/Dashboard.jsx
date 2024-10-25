import { useState } from 'react';
import TaskCard from '../components/TaskCard';
import ChatSection from '../components/ChatSection';

const tasks = [
  { id: 1, title: 'New Landing Project', description: 'Landing Page UI', status: 'in-progress' },
  { id: 2, title: 'Footer Design', description: 'Landing Page UI', status: 'to-do' },
];

const Dashboard = () => {
  const [taskList, setTaskList] = useState(tasks);

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
