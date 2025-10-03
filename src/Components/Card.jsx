import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Calendar } from "lucide-react";
import { ToastContainer } from 'react-toastify';
import TaskStatus from "./TaskStatus"
import Container from './Container';
const Card = ({ ticketPromise, setResolved, setProgress }) => {
    const [tickets, setTickets] = useState([]);
    const [taskStatus, setTaskStatus] = useState([]);
    const [resolvedTasks, setResolvedTasks] = useState([]);

    const statusColors = {
        Open: "bg-green-100 text-green-700",
        "In-Progress": "bg-yellow-100 text-yellow-600",
    };

    useEffect(() => {
        ticketPromise.then(data => setTickets(data || []));
    }, [ticketPromise]);

    useEffect(() => {
        if (setProgress) {
            setProgress(taskStatus.length);
        }
        if (setResolved) {
            setResolved(resolvedTasks.length);
        }
    }, [taskStatus, resolvedTasks, setProgress, setResolved]);
    const handleTask = (ticket) => {
        const findtaskStatus = taskStatus.find(el => el.id === ticket.id);
        const filtertickets = tickets.filter(el => el.id !== ticket.id)
        if (findtaskStatus) {
            toast.warning("This ticket already in Task Status!");
            return;
        }
        setTaskStatus([...taskStatus, ticket]);
        setTickets(filtertickets);
        toast.success("Added to Task Status");
        toast.info("The In Progress count increases");
        toast.info("It is removed from the Customer Tickets list")
    }
    return (
        <>

            <div className='grid grid-col-1 lg:grid-cols-3 gap-8 p-6'>
                <div className='lg:col-span-2'>
                    <h2 className='text-xl font-bold px-1 mb-3'>Customer Tickets</h2>
                    <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-5'>
                        {tickets.length > 0
                            ? tickets.map(el => (
                                <div key={el.id} className='bg-white shadow rounded-lg p-4 border border-gray-200 w-full hover:shadaw-md cursor-pointer' onClick={() => handleTask(el)}>
                                    <Container>
                                        <div className='flex justify-between items-start'>
                                            <h3 className='text-lg font-semibold text-gray-800'>{el.title}</h3>
                                            <span className={`flex items-center gap-1 px-3 py-1 text-[14px] font-medium rounded-full ${statusColors[el.status]}`}>
                                                <span className='h-3 w-3 rounded-full bg-current'></span>
                                                {el.status}
                                            </span>
                                        </div>
                                        <p className='text-gray-600 text-[16px] mt-2'>{el.description}</p>
                                        <div className='flex justify-between items-start mt-4 text-sm'>
                                            <div className='flex flex-row gap-1 mt-2 items-start'>
                                                <span className="text-gray-600 font-medium">{el.id}</span>
                                                <span className={`${el.priority === "High" ? "text-red-600" : "text-yellow-500"} font-semibold`}>
                                                    {el.priority.toUpperCase()} PRIORITY
                                                </span>
                                            </div>


                                            <div className='flex flex-row mt-2 gap-2 itmes-end'>
                                                <span className="text-gray-700">{el.customer}</span>
                                                <div className="flex items-center text-gray-500 gap-1">
                                                    <Calendar size={14} />
                                                    <span>{el.createdAt}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Container>
                                </div>
                            )) : (
                                <div className='text-center py-10 text-gray-400'>No tickets found</div>
                            )}
                    </div>
                </div>

                <TaskStatus taskStatus={taskStatus} setTaskStatus={setTaskStatus} resolvedTasks={resolvedTasks} setResolvedTasks={setResolvedTasks} />
                <ToastContainer position="top-right" autoClose={1000} />
            </div>
        </>
    );
};

export default Card;



