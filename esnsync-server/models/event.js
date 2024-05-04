const mongoose = require("mongoose")

const EventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      department: {
        type: String,
        required: true
      },
      status: {
        type: String,
        enum: ['Full', 'Available'], // Assuming there are only two possible statuses
        default: 'Available'
      },
      date: {
        type: Date,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      location: {
        type: String,
        required: true
      },
      oc: {
        type: [String], // Array of strings for organizing committee members
        required: true
      }
})

const EventModel = mongoose.model("Event", EventSchema)
module.exports = EventModel