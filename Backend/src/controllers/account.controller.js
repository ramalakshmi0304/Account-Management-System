import supabase from "../config/supabase.client.js";

export const transerMoney=async(req,res)=>{

try{
   const {senderId,receverId,amount} =req.body

    if (!senderId || !receiverId || !amount) {
      return res.status(400).json({ message: "All fields are required" });
    }
    
  if (amount <= 0) {
      return res.status(400).json({ message: "Amount must be greater than zero" });
    }

const{data:sender,error}=await supabase
.from("transactions")
.select("*")
.eq(sender_id, senderId)
.single();

if(error){
    return res.status(400).json("sender not found")

    
}


}catch(error){
    console.error({message: error.message})
    res.status(500).json("server error")
}




}
