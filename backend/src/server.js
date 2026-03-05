import express from "express"
import path from "path"
import { ENV } from "./lib/env.js"

const app = express()
const __dirname = path.resolve()

app.get("/health", (req, res) => {
  res.status(200).json({msg:"This is the health check endpoint"})
}) 

// Serve static files and handle SPA routing for all environments (not just production)
app.use(express.static(path.join(__dirname, "../frontend/dist")))
app.get("/{*any}", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"))
})

app.listen(ENV.PORT, () => {
  console.log("Server running on", ENV.PORT)
})