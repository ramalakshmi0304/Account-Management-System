import express from "express"
import dotenv from "dotenv"
dotenv.config();
import authRoutes from "./src/routes/auth.routes.js"
import accountRoutes from "./src/routes/account.routes.js"

const app= express()
const PORT = process.env.PORT||5000

app.use(express.json());

app._router("/api/auth", authRoutes )
app._router("/api/account", accountRoutes )


app.listen(PORT,()=>{

console.log(`server is running on ${PORT}`)

})

