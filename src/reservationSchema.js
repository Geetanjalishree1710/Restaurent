import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "First name must constain at least  3 charachter"],
        maxLength: [30, " Last name cannot be exceed 30 character"],
    },

    lastName: {
        type: String,

        minLength: [3, "First name must constain at least  3 charachter"],
        maxLength: [30, " Last name cannot be exceed 30 character"],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "provide a valid email"],
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, "number should contain 10 number degits"],
        maxLength: [12, "number should be not more than 12 digits"],
    },
    time: {

        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    }

});
export const Reservation = mongoose.model("reservation", reservationSchema)