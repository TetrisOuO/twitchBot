const tmi = require("tmi.js");
const { opts } = require("../config");
const { handleCommand } = require("./commands");
const client = new tmi.Client(opts);

client.on("message", async (channel, userstate, message, self) => {
  if (self) return;

  if (message == "VoHiYo") {
    //回復 vohiyo
    client.say(
      channel,
      `VoHiYo VoHiYo ${userstate["display-name"]} VoHiYo VoHiYo `
    );
  }

  if (message.startsWith("!")) {
    //如果訊息前面有 !
    let command, arr_message;
    const new_message = message.slice(1); // 去掉第一個字 "!"
    if (new_message.includes(" ")) {
      //如果裡面有" "
      arr_message = new_message.split(" "); //做成陣列 以" "做分割
      command = arr_message[0];
    } else {
      command = new_message;
    }

    const response = await handleCommand(command, userstate, new_message); //到handlecommand 裡尋找有沒有這指令並傳入 userstate
    if (response) {
      //如果有指令則回覆，沒有則會是null
      client.say(channel, response);
    }
  }
});

client.connect();

client.on("connected", (addr, port) => {
  console.log(`* Connected to ${addr}:${port}`);
});
