import User from "../models/user.model";


const getSystemUsers = async () => {
    // Call getAllUsers from user service (System Admin only)
}


const createUserByAdmin = async (userData) => {
    // Call registerUser from auth service to create a new user in the collection (System Admin Only).
}


const deleteUserByAdmin = async (userId) => {
    //Call removeUserFromDb from user service. - Delete User from DataBase (System Admin Only)
}

const updateUserDetails = async (userId) => {
    // Call updateUserProfile from user service
}

const createNewProject = async () => {
    // Call createProject from project service (System Admin)
}

const deleteProject = async (projectId) => {
    // Call deleteProject from project service (Admin only)
}

const updateProjectDetails = async (projectId) => {
    // Call updateProject from project service (System Admin only)
}

const getUsersByProject = async (projectId) => {
    // Call getAllUsersByProject from project Service
}

const updateRoleByAdmin = async (projectId, userId) => {
    // Call changeAdmin from project service (System Admin Only)
}


const removeUsersFromProject = async (projectId, users) => {
    // Call deleteMemberFromProject from project Service using loop (System Admin Only)
}

const addMembersToProject = async (projectId, users) => {
    // Call AddMemberToProject from project services to add member using loop. (System Admin Only)
}





