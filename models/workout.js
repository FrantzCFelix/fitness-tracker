'use strict';

const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;
const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: `Enter an exercise type`
        },
        name: {
          type: String,
          trim: true,
          required: `Enter an exercise name`
        },
        duration: {
          type: Number,
          required: `Enter an exercise duration`
        },
        weight: {
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
        }
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

workoutSchema.virtual(`totalDuration`).get(function() {
  return this.exercises.reduce((total, exercise) => total + exercise.duration, 0);
});

module.exports = mongoose.model(`Workout`, workoutSchema);
