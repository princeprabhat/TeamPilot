import mongoose from "mongoose";
import toJSON from "./plugin/toJSON.plugin";

const projectSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    description: {
        type: String,
        trim: true,
        maxlength: 500
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    admins: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    ],
    members: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    tasks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Task"
        }
    ],
    status: {
        type: String,
        enum: ["not-started", "in-progress", "completed", "on-hold"],
        default: "not-started"
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    }
}, { timestamps: true });

// Plugin to convert _id to id and remove __v
projectSchema.plugin(toJSON);

const Project = mongoose.model("Project", projectSchema);

export default Project;
