const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const uuid = require("uuid");
const { redirect } = require("express/lib/response");
const dbPath = path.join(__dirname, "..", "db", "db.json");

function getNotes() {
  return JSON.parse(fs.readFileSync(dbPath, "utf-8") || "[]");
}

function saveNotes(note){
    fs.writeFileSync(dbPath, JSON.stringify(note), "utf-8");
}
router.get("/api/notes", (req, res) => {
  const notes = getNotes();
  console.log(notes);

  res.json(notes);
});

router.post("/api/notes", (req, res) => {
  const { title, text } = req.body;

  console.log(title, text);

  const newNote = {
    id: uuid.v4(),
    title: title,
    text: text,
  };
  const existingNotes = getNotes();

  existingNotes.push(newNote);
  saveNotes(existingNotes)
 

  res.json(newNote);
});

router.delete('/api/notes/:id', (req, res)=>{
const notes = getNotes();

const filtered = notes.filter((notes) => notes.id !==req.params.id);
saveNotes(filtered)
res.json(filtered);

})

module.exports = router;
