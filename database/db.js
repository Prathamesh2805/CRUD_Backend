import mongoose from "mongoose"

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-xs4b4ck-shard-00-00.b1we350.mongodb.net:27017,ac-xs4b4ck-shard-00-01.b1we350.mongodb.net:27017,ac-xs4b4ck-shard-00-02.b1we350.mongodb.net:27017/CRUD-APP?ssl=true&replicaSet=atlas-1tlei2-shard-0&authSource=admin&retryWrites=true&w=majority`;
    
    try{
       await mongoose.connect(URL, { useUnifiedTopology: true, useNewURLParser: true });
       console.log("Database connected Successfully!")
    }catch(error){
        console.log("Error while connection", error);
    }
}

export default Connection;