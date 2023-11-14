const express = require("express");
/**
 * @param {express.Request} Req
 * @param {express.Response} Res
 */
const dotenv = require("dotenv");
dotenv.config();

// Imports
const homeController = require("./controllers/homeController");
const postsRouter = require("./routers/posts");

// Istanza di express
const app = express();
// Configuro express per leggere i dati in formato x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// Configuraz. file statici
app.use(express.static("public"));

// Rotte
app.get("/", homeController.index);

// Rotte dedicate ai post
app.use("/posts", postsRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(
    "Server is running on port: http://localhost:" + process.env.PORT
  );
});
