import mongoose, { connect } from "mongoose"


const db = async()=>{
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
  
}).then(()=>{

console.log("connection established")
})
.catch((error)=>{
    console.log(error.message);
     
})
}
export default db