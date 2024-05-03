import express from "express";
import cors from "cors";
import { Request, Response, NextFunction } from "express";

const app = express();

app.use(express.json());
app.use(cors());
// app.use('/api/v1/auth', auth);
// app.use(checkAuth);
// app.use('/api/v1/customers', checkIsLoggedIn, customers);
// app.use('/api/v1/lenders', checkIsLoggedIn, lenders);
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "This is home page" });
});
app.all("*", (req: Request, res: Response) => {
  res.status(404).json({ error: "Route not found!" });
});
app.use(errorHandlingMiddleware);

export default app;
