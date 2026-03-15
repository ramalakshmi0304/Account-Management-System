import { useState,useEffect } from "react";
import axios from "axios";

export default function Dashboard(){

const [balance,setBalance]=useState(0);

useEffect(()=>{

const token = localStorage.getItem("token");

),[]

return(

<div>

<h2>Dashboard</h2>

<h3>Balance: ₹{balance}</h3>

<a href="/transfer">Send Money</a>

<br/>

<a href="/statement">Account Statement</a>

</div>

);

}