require('dotenv').config();
const mongoose = require('mongoose');

main().catch(err => console.log(err))

async function main() {
    await mongoose.connect(process.env.DB_URL)
}

// need to update this code with new mongodb link . process.env.DB_URL -> replace connection string with this environement variable. DONOT expose connection string.