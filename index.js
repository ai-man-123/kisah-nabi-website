const ikyy = require("ikyy");
const rzk = new ikyy();
const str = [
  "adam",
  "idris",
  "nuh",
  "hud",
  "shaleh",
  "ibrahim",
  "luth",
  "ismail",
  "ishaq",
  "yaqub",
  "yusuf",
  "ayyub",
  "syuaib",
  "musa",
  "harun",
  "zulkifli",
  "daud",
  "sulaiman",
  "ilyas",
  "ilyasa",
  "yunus",
  "zakaria",
  "yahya",
  "isa",
  "muhammad",
];
const express = require("express"),
  cors = require("cors"),
  logger = require("morgan"),
  cookieParser = require("cookie-parser"),
  bodyParser = require("body-parser");
const app = express();

app.set("json spaces", 2);
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.get("/nabi", async (req, res) => {
  const q = req.query.q;
  const ress = await rzk.search.kisahnabi(q);
  res.render(__dirname + "/public/result.ejs", { res: ress });
});

app.get("/", async (req, res) => {
  res.render(__dirname + "/public/index.ejs", { str });
});

app.listen(8080, () => {
  console.log("Berhasil Tersambungg");
});
