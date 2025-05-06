import mongoose from "mongoose";
import toJSON from "./plugin/toJSON.plugin";
import validator from 'validator';

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 25
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: (email) => {
                return validator.isEmail(email);
            },
            message: (props) => `${props.value} is not a valid email address!`
        }

    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        validate(value) {
            if (!value.match(/\d/) || !value.match(/[a-zA-Z]/)) {
                throw new Error("Password must contain at least one letter and one number");
            }
        }
    },
    role: {
        type: String,
        enum: ['owner', 'project-admin', 'member'],
        default: 'member'
    },
    isEmailVerified: {
        type: Boolean,
        default: false
    },
    avatar: {
        type: String
    },
    bio: {
        type: String,
        maxlength: 160
    },
    location: {
        type: String,
        maxlength: 100
    },
    theme: {
        type: String,
        enum: ['light', 'dark'],
        default: 'light'
    },
    language: {
        type: String,
        default: 'en'
    },
    notificationsEnabled: {
        type: Boolean,
        default: true
    },
    team: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Project'
        },
    ],
    assignedTasks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Task'
        }
    ]

}, { timestamps: true });

// custom plugin to remove default.
userSchema.plugin(toJSON)

// Compare password method
userSchema.methods.isPasswordMatch = async function (password) {
    return await bcrypt.compare(password, this.password);

};
// Email check
userSchema.statics.isEmailTaken = async function (email) {
    const user = await this.findOne({ email });
    return !!user;
}
// Hashing the password before saving to db
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (err) {
        next(err);
    }
});

const User = mongoose.model("User", userSchema);

export default User; 
