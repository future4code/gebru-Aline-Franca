import App from "./app";
import { UserRouter } from "./routes/UserRouter";

App.use("/user/", UserRouter)
