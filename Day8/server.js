import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017'; // Local MongoDB
const client = new MongoClient(uri);

async function connectToMongo() {
  try {
    await client.connect(); // Try to connect
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.log("❌ Connection failed:", error);
  }
}

