import express from "express";
import dotenv from "dotenv";
import routes from "./routes/index.js";
import MPPT from "./model/settings/mppt.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
routes(app);

// MPPT

app.post("/mppt", async (req, res) => {
  try {
    await MPPT.upsert(req.body);
    res.json({ status: 200, message: "mppt is inserted" });
  } catch (error) {
    res.status(400).json({
      code: 400,
      message: error.message,
    });
  }
});

app.get("/mppt", async (req, res) => {
  try {
    const response = await MPPT.findAll();
    res.json({ status: 200, data: response });
  } catch (error) {
    res.status(400).json({
      code: 400,
      message: error.message,
    });
  }
});

app.get("/mppt/:mppt_sn", async (req, res) => {
  try {
    const requestedDevice = req.params.mppt_sn;
    const response = await MPPT.findOne({
      where: { mppt_sn: requestedDevice },
    });
    res.json({ status: 200, data: response });
  } catch (error) {
    res.status(400).json({
      code: 400,
      message: error.message,
    });
  }
});

app.delete("/mppt/:mppt_sn", async (req, res) => {
  try {
    const requestedDevice = req.params.mppt_sn;
    await MPPT.destroy({ where: { mppt_sn: requestedDevice } });
    res.json({
      status: 200,
      message: `Data MPPT ${requestedDevice} is deleted`,
    });
  } catch (error) {
    res.status(400).json({
      code: 400,
      message: error.message,
    });
  }
});


app.listen(PORT, () => console.log(`App listening at port ${PORT}`));
