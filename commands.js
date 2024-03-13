const { get_tr_apm_pps } = require("./tetr.io"); // 使用io api，get_tr_apm_pps(_, 查詢id) => 回傳 tr, apm, pps
const { get_photo_point } = require("./photopoint"); // 使用拍照函式 photo_point(使用者, _) => 回傳 使用者 拍照分數
const commands = {
  '指令': () => Promise.resolve(Object.keys(commands).map(key => `!${key} `).join(',')), //Promise.resolve('xyz') 也可以使用
  '我才': (userstate, _) => `${userstate['display-name']} 你才勒`,
  '掰掰': async (userstate, _) => `${userstate['display-name']} 掰掰~ DinoDance `,
  '拍照': async (userstate) => get_photo_point(userstate),
  'io': async (userstate, message) => get_tr_apm_pps(userstate, message)
}


// 'DC': (userstate, _) => '目前沒有DC網址 BibleThump',
// 'GPT': (userstate, _) => '目前沒有GPT功能 BibleThump',
// 'IG': (userstate, _) => '目前沒有IG功能 BibleThump',
// 'points': (userstate, _) => {
//   return `你的點數是: ${userstate['custom-reward-id']}`;
// },

module.exports = {//引入 handlecommand 函數
  handleCommand: (command, userstate, message) => {
    if (commands[command]) {
      return commands[command](userstate, message); //commands(data)
    } else {
      return null;
    }
  }
}