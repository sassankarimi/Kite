const express = require("express");
const next = require("next");
const port = process.env.PORT || 3003;

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // server.use(compression());
  // server.use(express.static(__dirname + '/static', { maxAge: 31557600 }));

  server.get("/", (req, res) => {
    return app.render(req, res, "/index");
  });

  server.get("/test?org&des&roomRules&departing&returning", (req, res) => {
    return app.render(req, res, "/test" , {
      org: req.query.org ,
      des: req.query.des,
      roomRules:req.query.roomRules,
      departing: req.query.departing,
      returning: req.query.returning,
    });
  });

  server.get("/tours?org&des&roomRules&departing&returning", (req, res) => {
    return app.render(req, res, "/tours" , {
      org: req.query.org ,
      des: req.query.des,
      roomRules:req.query.roomRules,
      departing: req.query.departing,
      returning: req.query.returning,
    });
  });

  server.get("/tour/:num/:name", (req, res) => {
    return app.render(req, res, "/tour", {
      name: req.params.name,
      num: req.params.num
    });
  });

  // server.get('/searchbox', (req, res) => {
  //   return app.render(req, res, '/searchboxtour')
  // });
  // server.get('/tour/book/:id', (req, res) => {
  //   return app.render(req, res, '/tour/book', { id: req.params.id })
  // });

  server.get("*", (req, res) => {
    return handle(req, res);
  });
  server.listen(port, err => {
    if (err) throw err;
    console.log(`READY ON  http://localhost:${port}`);
    //console.log("> Ready on port " + process.env.NODE_PORT);
  });
});

