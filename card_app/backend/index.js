import express from "express";
import cors from "cors";
import "./db/db.js";
import Card from "./models/cardSchema.js";
import zod from "zod";

const user = zod.object({
  _id: zod.string().optional(),
  name: zod.string(),
  description: zod.string(),
  interests: zod.array(zod.string()),
  socialMedias: zod.array(
    zod.object({
      name: zod.string(),
      url: zod.string(),
    })
  ),
});

const PORT = 3000;
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

app.get("/getcards", async (req, res) => {
  try {
    const cards = await Card.find();

    res.status(200).json(cards);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
});

app.post("/addcard", async (req, res) => {
  try {
    const createPayload = req.body;
    const parsedPayload = user.safeParse(createPayload);

    if (!parsedPayload.success) {
      res.status(411).json({ error: "Invalid Payload" });
      return;
    }

    await Card.create(createPayload);

    res.status(201).json({ msg: "Card created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "serve error" });
  }
});

app.put("/updatecard", async (req, res) => {
  try {
    const updatePayload = req.body;
    const parsedPayload = user.safeParse(updatePayload);

    if (!parsedPayload.success) {
      res.status(411).json({ error: "Invalid Payload" });
      return;
    }

    await Card.findByIdAndUpdate(updatePayload._id, updatePayload);

    res.status(200).json({ msg: "Updated Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
});
app.delete("/deletecard", async (req, res) => {
  try {
    const { _id } = req.body;

    await Card.findByIdAndDelete(_id);

    res.status(200).json({ msg: "Deleted Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`app is running at http://localhost:${PORT}`);
});
