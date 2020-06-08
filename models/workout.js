const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {type: Date, default: () => new Date()},
    exercises: [
        {type: {
            type: String,
            trim: true,
            required: "enter an exercise"
        }, 
        name: { 
            type: String,
            trim: true,
            required: "name your exercise"
        },
        duration:{
            type: Number,
            required: "how long is the exercise?"
        },
        weight:{
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }}]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
