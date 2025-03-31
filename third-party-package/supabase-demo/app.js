const postgres =require('postgres')
require('dotenv').config()
const connectionString = process.env.DATABASE_URL
console.log(connectionString)
const sql = postgres(connectionString)
async function fetchData() {
// const { data, error } = await supabase
//   .from('demo')
//   .select()
//   console.log('Data:', data)
const result = await sql`SELECT * FROM demo`;
console.log('Data:', result);
}


fetchData().then(() => {console.log('Data fetched successfully')}).catch((error) => {
  console.error('Error fetching data:', error)
})
