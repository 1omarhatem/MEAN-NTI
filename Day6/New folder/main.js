let server = require("express")();


server.get("/", (_, res) => {
  res.send("Hello World!");
});

server.get("/data", (_, res) => {
    let isadmin = false; // Change this to true to simulate an admin user
    if (!isadmin) {
        return res.status(403).json({ error: "Access denied" });
    }
  res.json({ message: "This is some JSON data" });
});

server.get("/about", (_, res) => {
  res.send("About Page");
});
server.post("/submit", (_, res) => {
    res.send("Form Submitted");
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

//َquary parameters

server.get('/filter', (req, res) => {
  const category = req.query.category;
  const sort = req.query.sort;

  res.send(`Filtering items in category: ${category}, sorted by: ${sort}`);
});