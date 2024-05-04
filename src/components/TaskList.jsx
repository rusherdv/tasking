import TaskCard from "@/components/TaskCard";
import { prisma } from "@/libs/prisma";
import { getServerSession } from "next-auth";

const getSession = async () => {
  const s = await getServerSession();
  return s;
};

async function loadTasks() {
  const session = await getSession();
  if (!session) {
    return [];
  }

  return await prisma.task.findMany({
    where: {
      email: session.user.email
    }
  });
}

const TaskList = async () => {
  const tasks = await loadTasks();
  const session = await getSession();
  return (
    <>
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
      {tasks.length === 0 && session && (
        <p className="text-gray-400 flex justify-center text-sm">
          Aun no has creado una nota
        </p>
      )}
    </>
  );
};

export default TaskList;
