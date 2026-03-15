import bycrpt from "bcrypt"
import jwt from "jsonwebtoken"
import supabase from "../config/supabase.client.js";


export const signUpUser = async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            return res.status(400).json({ message: "all fields are mandatory" })
        }
        const hashedpassword = await bcrypt.hash(password, 10);
        const { data, error } = await supabase
            .from("users")
            .insert({
                name,
                email,
                password: hashedpassword
            })
            .select()

        if (error) {
            res.status(400).json({ message: "error.message" })
        }

        res.status(201).json({ message: "signUp successful", user: data[0] })
    } catch (error) {
        console.error(error)
        res.status(500).json("server error")
    }
}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ message: "Invalid credentials" })
        }

        const { data, error } = await supabase
            .from("users")
            .select("*")
            .eq(email, "email")
            .single();

        if (error) {
            res.status(400).json({ message: "user not found" })
        }

        const isMatch = await bcrypt.compare(password, data.password)

        if (!isMatch) {
            return res.status(401).json({ message: "Incorrect password" });
        }
        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(200).json({ message: "login successful", user: data })
    } catch (error) {
        console.error(error)
        res.status(500).json("server error")
    }

};