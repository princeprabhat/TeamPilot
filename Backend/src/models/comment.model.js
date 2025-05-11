import mongoose from 'mongoose';
import toJSON from './plugin/toJSON.plugin.js';

const commentSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
            trim: true,
            maxlength: 1000,
        },
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        task: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Task',
            required: true,
        },
    },
    { timestamps: true }
);

commentSchema.plugin(toJSON);

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;
