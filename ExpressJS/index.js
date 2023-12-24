//5.1 - indexPage
const myExpress = require("express");
const app5 = myExpress();
const bodyParser = require("body-parser");
const adminRoutes = require("./5.2routes");

app5.use(bodyParser.urlencoded({ extended: true }));
app5.use(adminRoutes);
app5.listen(5500);

//5.2 - routes
const myExpress = require("express");
const myRouter = myExpress.Router();

myRouter.get("/addProduct", (req, res) => {
  res.send(
    '<h1>Add product</h1> <form action="/storeProduct" method="POST"> <input type="text" name="title"> &nbsp&nbsp<input type="submit" value="submit"/> </form>'
  );
  console.log("addProduct");
});
myRouter.post("/storeProduct", (req, res) => {
  res.send(`<h1>Store Product: ${req.body.title}</h1>`);
  console.log(`storeProduct`);
});

module.exports = myRouter;
