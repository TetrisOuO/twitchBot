const fs = require("fs");

const get_count_md = () => {
  let count = 0;
  if (fs.existsSync("./md_count/mdCounter.txt")) {
    count = parseInt(fs.readFileSync("./md_count/mdCounter.txt", "utf8"));
    count++;
  }
  fs.writeFileSync("./md_count/mdCounter.txt", count.toString(), "utf8");
  return `本台第 ${count} 次 MD`;
};

module.exports = {
  get_count_md,
};
