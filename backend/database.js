const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('users.db');

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT)");

  db.get("SELECT COUNT(*) as count FROM users", [], (err, row) => {
    if (err) {
      console.error(err);
      return;
    }

    if (row.count === 0) {
      const stmt = db.prepare("INSERT INTO users (name, email) VALUES (?, ?)");
      stmt.run("Jan Kowalski", "jan.kowalski@example.com");
      stmt.run("Anna Nowak", "anna.nowak@example.com");
      stmt.run("Piotr Wiśniewski", "piotr.wisniewski@example.com");
      stmt.finalize();
    }
  });
});

module.exports = db; 