import mongoose from "mongoose";

const Connection = async (username,password) => {
const URL=`mongodb+srv://${username}:${password}@cluster0.1y1wnrw.mongodb.net/Blog-app?retryWrites=true&w=majority`;

    try {

       await mongoose.connect(URL, {useNewUrlParser:true});
       console.log('DB is connected successfully...');

    }catch (error){
        console.log('Error while connecting' , error);

    }
}

export default Connection;