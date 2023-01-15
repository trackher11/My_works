// const exportImages = require("pdf-export-images");

import { exportImages } from "pdf-export-images";
exportImages("/Users/rippling/Downloads/Get_Started_With_Smallpdf.pdf", "./output/")
  .then((images) => console.log("Exported", images.length, "images"))
  .catch(console.error);
