import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
        max: 25,
        min: 2
    },
    email: {

    },
    password: {

    },
    role: {

    },
    isEmailVerified: {

    },
    avatar: {

    },
    bio: {

    },
    location: {

    },
    theme: {

    },
    language: {

    },
    notificationsEnabled: {

    },
    team: {

    },
    assignedTasks: {

    }

})

userSchema.statics.isEmailTaken = async function (email) {

}