const express = require("express");
const { spawn } = require("child_process");
const app = express();

let mcProcess = null;

app.use(express.static("public"));

app.get("/start", (req, res) => {
  if (mcProcess) return res.send("Server already running");

  mcProcess = spawn("java", [
    "-Xms6G",
    "-Xmx6G",
    "-jar",
    "paper.jar",
    "--nogui"
  ]);

  mcProcess.stdout.on("data", data => {
    process.stdout.write(data);
  });

  mcProcess.stderr.on("data", data => {
    process.stderr.write(data);
  });

  mcProcess.on("close", () => {
    mcProcess = null;
  });

  res.send("Server started");
});

app.get("/stop", (req, res) => {
  if (!mcProcess) return res.send("Server not running");

  mcProcess.stdin.write("stop\n");
  res.send("Stop command sent");
});

app.listen(3000, () => {
  console.log("Panel running on http://localhost:3000");
});
