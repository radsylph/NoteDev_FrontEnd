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
  getNotes: "notes/getNotes",
  getOne: "notes/get/",
  createCategory: "notes/category",
  getCategories: "notes/getCategories",
};

export { Axios, user_endpoints, note_endpoints };
