import app from "./app";
import { createUsers } from "./endpoints/createUsers";
import { getProducts } from "./endpoints/getProducts";
import {getUsers} from "./endpoints/getUsers";
import { registerProduct } from "./endpoints/registerProduct";

app.get("/users", getUsers);

app.post("/users", createUsers);

app.post("/products", registerProduct);

app.get("/products", getProducts);