const mysql = require("mysql2/promise");

// Setup connection pool
const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "db_banjir_uas",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Test the connection to the database
connection.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to the database:", err.message);
    process.exit(1); // Keluar dari aplikasi jika koneksi gagal
  } else {
    console.log("Connected to the database.");
    connection.release(); // Kembalikan koneksi ke pool setelah test
  }
});

module.exports = connection;
