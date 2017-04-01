// Defines an express app that runs the boilerplate codebase.

import * as express from "express";
import * as path from "path";

import { HTTPError } from "../shared/errors";
require("isomorphic-fetch");



const app = express();
const router = express.Router(); // eslint-disable-line new-cap

router.use(express.static(path.join(__dirname, "..", "__build")));

/* Uncached routes */

// all uncached routes should have these headers to prevent 304 Unmodified cache returns
router.get("/*", (req, res, next) => {
  res.set({
    "Last-Modified": (new Date()).toUTCString(),
    Expires: -1,
    "Cache-Control": "must-revalidate, private",
  });
  next();
});

// quote: fetches a random computer science quote from an API. Either returns the quote as JSON, or
// sends a 500 on any error.
router.get("/api/quote", (req, res) => {
  fetch("http://quotes.stormconsultancy.co.uk/random.json").then((response) => {
    if (response.status >= 200 && response.status < 400) {
      return response.json();
    }

    throw new HTTPError(response);
  }).then((response) => {
    res.json(response);
  }).catch((err) => {
    // TODO: in a real app, this should actually handle errors
    console.error(err); // eslint-disable-line no-console
    res.status(500);
    res.send("Something went wrong!");
  });
});

router.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.use(router);
export default app;
