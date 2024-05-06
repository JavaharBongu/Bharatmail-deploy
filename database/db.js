import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const Connection = () => {
    const DB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.kiq5wjf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try {
        mongoose.connect(DB_URL);
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
        
    }
}
export default Connection;
