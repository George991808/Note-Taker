const router = require("express").Router();
const path = require("path");
const fs = require("fs");

router.get("/api/notes", (req, res) => {
  const dbPath = path.join(__dirname, "..", "db", "db.json");

  const content = JSON.parse(fs.readFileSync(dbPath, "utf-8") || "[]");
  console.log(content);

  res.json(content);
});

router.post("/api/notes", (req, res) => {
    const {title, text} =req.body;
     
    console.log(title, text);
  });

module.exports = router;
