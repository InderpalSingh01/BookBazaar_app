import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://inderdhillon3114_db_user:Zv1BYpqxrD0l4WtC@cluster0.brqh222.mongodb.net/?appName=Cluster0').then(()=>console.log("Database is Connected"))
}


// mongodb+srv://inderdhillon3114_db_user:Zv1BYpqxrD0l4WtC@cluster0.brqh222.mongodb.net/?appName=Cluster0
// mongodb+srv://inderdhillon3114_db_user:inder123@cluster0.mwrtm8p.mongodb.net/?appName=Cluster0