const fs = require("fs");
const pdfparse = require("pdf-parse");

const pdffile = fs.readFileSync("/Users/rippling/Downloads/Get_Started_With_Smallpdf.pdf");

pdfparse(pdffile).then(function (data) {
  console.log(data.text);
});
