import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";


export default function SignUp(){

const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const navigate = useNavigate()

const handleLogin = async()=>{

const res = await API.post("/auth/signUp",{
name,
email,
password
})

alert(res.data.message);

      // clear form
      setName("");
      setEmail("");
      setPassword("");


navigate("/Login")

}

return(

<div>

<h2>SignUp</h2>

<input
placeholder="name"
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={handleLogin}>Login</button>

</div>

)

}