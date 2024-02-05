import axios from "axios";

const Axios = axios.create({
  baseURL: "https://notedevbackend-production.up.railway.app/",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

const user_endpoints = {
  register: "users/create",
  login: "users/login",
  edit: "users/edit",
  delete: "users/delete",
};

const note_endpoints = {
  create: "notes/create",
  edit: "notes/edit/",
  delete: "notes/delete/",
  get: "notes/get",
  getOne: "notes/get/",
  create_category: "notes/category",
};

export { Axios, user_endpoints, note_endpoints };
