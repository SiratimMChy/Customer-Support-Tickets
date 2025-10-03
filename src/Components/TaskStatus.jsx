import React from 'react';
import { toast } from 'react-toastify';
import Container from './Container';

const TaskStatus = ({taskStatus, setTaskStatus,resolvedTasks,setResolvedTasks}) => {
    const handleCompleteTask = cTask => {
        const res = taskStatus.filter(el => el.id !== cTask.id)
        setTaskStatus(res);
        setResolvedTasks([...resolvedTasks, cTask]);
        toast.success("Completed");
        toast.info("In Progess count decreased");
        toast.info("Resolved count increased")
    }
    return (
        <div className=" pt-0  gap-8 p-4 px-5 mb-0 lg:w-[480px] md:w-[480px]">
            <h2 className="text-xl font-semibold px-1 mb-5 pt-0">Task Status</h2>
            <Container>
                {taskStatus.length > 0 ? (
                    taskStatus.map((task) => (
                        <div key={task.id} className="bg-white p-3 mb-[12px] border border-white shadow-sm">
                            <p className="text-[18px] font-semibold md:px-5 text-gray-800 ">{task.title}</p>
                            <div className="px-0 sm:w-22 sm:px-5">
                                <button
                                    onClick={() => handleCompleteTask(task)}
                                    className="bg-green-500 hover:bg-green-600 text-white text-[16px] p-4 py-1 mt-2 rounded sm:px-5  lg:w-[380px] h-[35px]"
                                >
                                    Complete
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-sm text-gray-600 mb-4">
                        Select a ticket to add to Task Status
                    </p>
                )}

                <h3 className="text-md font-semibold text-gray-700 mt-4">Resolved Task</h3>
                {resolvedTasks.length > 0 ? (
                    <ul className="mt-2 space-y-2">
                        {resolvedTasks.map((task) => (
                            <div key={task.id} className="bg-green-50 p-3 mb-3 rounded h-[] shadow-sm">
                                <p className="text-[16px] font-medium text-gray-800">{task.title}</p>
                            </div>
                        ))}
                    </ul>
                ) : (
                    <p className="text-sm text-gray-600">No resolved tasks yet.</p>
                )}
            </Container>
        </div>
    );
};

export default TaskStatus;


