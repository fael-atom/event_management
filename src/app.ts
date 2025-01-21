import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello World" });
});

app.post("/auth/login", (req: Request, res: Response) => {
  const { email, password } = req.body;
  res.send({ message: "Login successful" });
});

app.post("/partners", (req: Request, res: Response) => {
  const {name, email, password, company_name} = req.body;
  res.send({message: "Partner created successfully"})
})

app.post("/customers", (req: Request, res: Response) => {
  const {name, email, password, address, phone} = req.body;
  res.send({message: "Customer created successfully"})
})

app.post("/events", (req: Request, res: Response) => {
  const {name, description, date, location} = req.body;
  res.send({message: "Event created successfully"})
})

app.get("/events", (req: Request, res: Response) => {

})

app.get("/events/:eventId", (req: Request, res: Response) => {
  const {eventId} = req.params;
  console.log(eventId);
  res.send({message: "Event fetched successfully"})
})

app.post("/partners/events", (req: Request, res: Response) => {
  const {name, description, date, location} = req.body;
  res.send({message: "Event created successfully"})
})

app.get("/partners/events", (req: Request, res: Response) => {
  res.send({message: "Events fetched successfully"})
})

app.get("/partners/events/:eventId", (req: Request, res: Response) => {
  const {eventId} = req.params;
  console.log(eventId);
  res.send({message: "Event fetched successfully"})
})

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
