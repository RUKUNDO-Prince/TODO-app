const TaskCard = ({ task }) => {
    return (
      <div className={`p-4 rounded-lg shadow-md ${task.status === 'completed' ? 'bg-green-100' : 'bg-white'} animate-fadeIn`}>
        <h3 className="text-xl font-bold">{task.title}</h3>
        <p>{task.description}</p>
      </div>
    );
  };
  
  export default TaskCard;
  