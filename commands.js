const { get_tr_apm_pps } = require("./tetr.io"); // 使用io api，get_tr_apm_pps(_, 查詢id) => 回傳 tr, apm, pps
const { get_photo_point } = require("./photopoint"); // 使用拍照函式 photo_point(使用者, _) => 回傳 使用者 拍照分數
const { get_count_md } = require("./md_count/get_md_count"); //抓取md次數
const { guessNumber } = require("./guessNumber/guessNumber"); //猜數字

const commands = {
  指令: () =>
    Promise.resolve(
      Object.keys(commands)
        .map((key) => `!${key} `)
        .join(",")
    ), //Promise.resolve('xyz') 也可以使用
  我才: (userstate, _) => `${userstate["display-name"]} 你才勒`,
  掰掰: async (userstate, _) => `${userstate["display-name"]} 掰掰~ DinoDance `,
  拍照: async (userstate) => get_photo_point(userstate),
  io: async (userstate, message) => get_tr_apm_pps(userstate, message),
  md: async () => get_count_md(),
  猜數字: async (userstate, message) => guessNumber(userstate, message),
  // DC: (userstate, _) => "目前沒有DC網址 BibleThump",
  // 禁言版猜數字: (userstate, message) => `邪惡猜數字開始請在1~100選一個數字，猜對的人有禁言10秒的獎勵`,
  // 猜: async (userstate, message) => `userstate, message`, //猜數字，會回傳在小 或 在大
  // 誇你: async (userstate, message) => `userstate`, //生產一段好話給使用者
  // 簽到: async (userstate, message) => `userstate`, //存處打過簽到的使用者，如果簽太多次會被機器人會跑出來靠北你
};

// 'GPT': (userstate, _) => '目前沒有GPT功能 BibleThump',
// 'IG': (userstate, _) => '目前沒有IG功能 BibleThump',
// 'points': (userstate, _) => {
//   return `你的點數是: ${userstate['custom-reward-id']}`;
// },

module.exports = {
  //引入 handlecommand 函數
  handleCommand: (command, userstate, message) => {
    if (commands[command]) {
      return commands[command](userstate, message); //commands(data)
    } else {
      return null;
    }
  },
};

// 'DC': (userstate, _) => '目前沒有DC網址 BibleThump',
// 'GPT': (userstate, _) => '目前沒有GPT功能 BibleThump',
// 'IG': (userstate, _) => '目前沒有IG功能 BibleThump',
// 'points': (userstate, _) => {
//   return `你的點數是: ${userstate['custom-reward-id']}`;
// },

module.exports = {
  //引入 handlecommand 函數
  handleCommand: (command, userstate, message) => {
    if (commands[command]) {
      return commands[command](userstate, message); //commands(data)
    } else {
      return null;
    }
  },
};
