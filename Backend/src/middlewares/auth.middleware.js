import supabase from "../config/supabase.client";

export const authenticatedUser=(req,res,next)=>{

   try{
    const {authHeader}= req.headers.authorization;
    
    if(!authHeader){
        return res.send(401).json("token is missing")
    }

    const token=authHeader.split(" ")[1];
    const decoded=jwt.verify(token, process.env.JWT_SECRET);
    req.user=decoded;
    next();

   } catch (error) {

    return res.status(401).json({ message: "Invalid token" });
  }

}