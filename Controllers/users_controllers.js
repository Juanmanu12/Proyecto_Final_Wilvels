import express from "express";
import mongoose from "mongoose";

async function create(req, res) {
  const newUser = await User.create({
    firstname: String,
    lastname: String,
    email: String,
    password: String,
  });
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
