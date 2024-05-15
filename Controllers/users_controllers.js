import bcrypt from "bcrypt";
import User from "../models/User.js";

async function create(req, res) {
  try {
    const password = req.body.password;
    const hash = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hash,
    });
    res.json(newUser);
  } catch (err) {
    res.status(500).json("Ups... Algo salio mal");
    console.log(err);
  }
}

async function list(req, res) {
  try {
    const userList = await User.find();
    res.json(userList);
  } catch (err) {
    res.status(500).json("Ups... Algo salio mal");
    console.log(err);
  }
}

async function search(req, res) {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(500).json("Ups... Algo salio mal");
    console.log(err);
  }
}

async function updateUser(req, res) {
  try {
    const user = await User.findById(req.params.id);
    const newUser = req.body;
    const newPassword = await bcrypt.hash(req.body.password, 10);

    user.firstname = newUser.firstname || user.firstname;
    user.lastname = newUser.lastname || user.lastname;
    user.email = newUser.email || user.email;
    user.password = newPassword || user.password;

    await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).json("Ups... Algo salio mal");
    console.log(err);
  }
}

async function eliminate(req, res) {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json("Este usuario ha sido eliminado");
  } catch (err) {
    res.status(500).json("Ups... Algo salio mal");
    console.log(err);
  }
}

export default {
  create: create,
  list: list,
  search: search,
  updateUser: updateUser,
  eliminate: eliminate
};
