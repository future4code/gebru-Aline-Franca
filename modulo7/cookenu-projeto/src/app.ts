import express from "express";
import cors from "cors";
import { AddressInfo } from "net";

export const App = express();
App.use(express.json());
App.use(cors())





const server = App.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://${address.address}:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});