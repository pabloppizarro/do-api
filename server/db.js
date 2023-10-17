//DATABase

const qlite = require("sqlite3");
const db = new qlite.Database(":memory:");

db.serialize(() => {
  db.run(`
    CREATE TABLE visitors (
      count INTEGER,
      time TEXT
    )

  `);
});
function getCounts() {
  db.each(
    `
    SELECT * FROM visitors 
  `,
    (err, row) => {
      console.log(row);
    }
  );
}
function shutdownDB() {
  getCounts();
  console.log("Shutting down DB");
  db.close();
}
