import mongoose from "mongoose";

export const dbconnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
            dbName: "test-YouTube2"
        })
        .then(() => {
            console.log("Database connected successfully");
        })
        .catch((err) => {
            console.log("Database connection error:", err);
        });
};