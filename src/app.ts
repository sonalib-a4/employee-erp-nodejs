import * as dotenv from 'dotenv';
import express from "express";
import router from "./routes/employee-routes";
import http from "http";

dotenv.config();
export default class App {
  public initialize = async (): Promise<http.Server> => {
    const PORT: number = 3001;
    const app = express();
    app.use(express.json());

    // First route
    app.get('/', (req, res) => {
      res.send('ERP Dashboard');
    })

    app.use("/employees", router);

    return app.listen(PORT, () => {
      console.log(`Server running on PORT number ${PORT}`);
    });
  }
}

const app = new App();
app.initialize();
