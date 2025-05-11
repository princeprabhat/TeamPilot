import mongoose from "mongoose";
import toJSON from "./plugin/toJSON.plugin";

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    description: {
        type: String,
        trim: true,
        maxlength: 1000
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ],
    assignedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    assignedTo: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    deadline: {
        type: Date
    },
    status: {
        type: String,
        enum: ["todo", "in-progress", "review", "done", "blocked"],
        default: "todo"
    },
    labels: [
        {
            type: String,
            trim: true
        }
    ],
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
        required: true
    },
    priority: {
        type: String,
        enum: ["low", "medium", "high", "critical"],
        default: "medium"
    },
    attachments: [
        {
            type: String // URLs or file references
        }
    ]
}, { timestamps: true });

taskSchema.plugin(toJSON);

const Task = mongoose.model("Task", taskSchema);

export default Task;
