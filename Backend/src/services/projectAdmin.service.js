import User from "../models/user.model";

const createNewTask = async (projectId) => {
    // Call createTask from task service (Project-Admin Only)
}

const removeTaskFromProject = async (projectId, taskId) => {
    // Call deleteTask from task service (Project-Admin Only)
}

const addUsersToTask = async (taskId, userId) => {
    //  Call addNewMember from task service using loop (Project-Admin Only)
}


const removeUserFromTask = async (taskId, userId) => {
    // Call removeMember from task service using loop (Project-Admin Only)
}

const getTaskDetails = async (taskId) => {
    // Call getTaskById from task service
};

const updateTaskDetails = async (projectId, taskId) => {
    // Call updateTask from task service
}
const getProjectMembers = async (projectId) => {
    // Call getAllUsersByProject from project service
};
const getTasksInProject = async (projectId) => { };

const updateTaskPriority = (taskId, priority) => {

}