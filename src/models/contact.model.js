import mongoose from "mongoose"

const contactSchema = mongoose.Schema({
    email: {
        type: String,
        trim: true,
        required: true
    },
    contactData : {
        type: String,
        trim: true,
        required: true
    }
})

export const Contact = mongoose.model("Contact", contactSchema);