const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(
  "https://scbktyzyfchqhymdlwjj.supabase.co",
  ""
);
async function fetchData() {
  // Create a single supabase client for interacting with your database

  const { data, error } = await supabase.from("demo").select(`id,name`);
  console.log("Data:", data);
  console.log("error", error);
}

async function insertFunc() {
  const { data, error } = await supabase.from("demo").insert({ name: "Mordor" }).select();
  console.log("Data:", data);
  console.log("error", error);
}

fetchData()
  .then(() => {
    console.log("Data fetched successfully");
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

insertFunc()
  .then(() => {
    console.log("Data inserted successfully");
  })
  .catch((error) => {
    console.error("Error inserting data:", error);
  });
