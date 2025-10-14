import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import proxy from "express-http-proxy";

dotenv.config();

const app = express();
const PORT = process.env.G_PORT;

app.use(cors());
app.use(express.json());

// Forward /api/food/* requests to Food microservice
app.use(
  "/api/food",
  proxy("http://localhost:6000", {
    proxyReqPathResolver: (req) => {
      return `/api/food${req.url}`; // Ensures full path is forwarded
    },
  })
);

app.use(
  "/api/cart",
  proxy("http://localhost:7000", {
    proxyReqPathResolver: (req) => {
      return `/api/cart${req.url}`;
    },
  })
);

// Default route
app.get("/", (req, res) => {
  res.send("API Gateway is running");
});

app.listen(PORT, () => {
  console.log(`Gateway Server is running on port ${PORT}`);
});
