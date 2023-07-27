import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", { expertises: expertise, projects: projects });
});
app.listen(port, (req, res) => {
  console.log(`Listening on port ${port}.`);
});

const expertise = [
  "HTML5",
  "CSS",
  "Java",
  "Python",
  "JavaScript",
  "Bootstrap",
  "JQuery",
  "EJS",
  "Axios",
  "body-parser",
  "Django",
  "Express.js",
  "EJS",
  "Node.js",
  "npm",
];

const projects = [
  {
    name: "Cost Control",
    desc: "An application designed with Java to help you keep track of your expenses. Comes with an in-built user authentication system and currrency conversion system for currencies CAD and AED. Integrated with JUnit testing, as well as adhered to software construction principles.",
  },
  {
    name: "Portfolio Website",
    desc: "An website to display my very own projects. Integrated using express to host the server, ejs to pass the files to the html pages dynamically and node.js to run th website.",
  },
  {
    name: "To Do Manager ",
    desc: "A fully responsive website to enable the end-user to keep track of daily tasks. Built using express, node and body-parses to decode the encoded BASE64. Used Javascript to make the website responsive to allow the end-user to indicate completed tasks.",
  },
];
