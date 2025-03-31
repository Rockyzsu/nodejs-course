require("dotenv").config();
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

async function getData() {
  const client = await pool.connect();
  try {
    const { rows } = await client.query("SELECT * FROM posts");
    return rows;
  } finally {
    client.release();
  }
}

async function getData() {
  const client = await pool.connect();
  try {
    const { rows } = await client.query("SELECT * FROM posts");
    return rows;
  } finally {
    client.release();
  }
}


async function Page() {
  const data = await getData();
  console.log(data);
}


Page()
  .then(() => {
    console.log("Data fetched successfully");
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });