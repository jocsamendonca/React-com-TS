import { useParams } from "react-router-dom";

const TaskDetails = () => {
  const { taskId } = useParams();
  return (
    <div>
      <h2>Detaolhes da Tarefa</h2>
      <p>Vendo a tarefa: {taskId}</p>
    </div>
  );
};

export default TaskDetails;
