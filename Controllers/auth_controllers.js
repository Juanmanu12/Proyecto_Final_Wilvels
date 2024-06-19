import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcrypt from "bcryptjs"

async function login(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (user !== null) {
        const hashValido = await bcrypt.compare(req.body.password, user.password);
        if (hashValido) {
          const tokenPayload = {
            sub: user.id,
            iat: Date.now(),
          };
          const token = jwt.sign(tokenPayload, process.env.JWT_TOKEN);
          res.json({ token: token });
        } else {
          res.json("Credenciales incorrectas");
        }
      } else {
        res.json("Este usuario no existe");
      }
    } catch (err) {
      res.status(500).json("Error del servidor");
      console.log(err)
    }
  }
  

async function tokenIsValid(req, res){
    if (req.auth){
        return true
    } else {
        return false
    }
}

export default { login, tokenIsValid }