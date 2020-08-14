import mongoose from "mongoose";
import { mongodb } from "./keys"; //obtengo la key
//inicializo mongodb
mongoose
  .connect(mongodb.URI, {
    useNewUrlParser: true,
  })
  .then((db) => console.log("Db is connected"))
  .catch((error) => console.log(error));
