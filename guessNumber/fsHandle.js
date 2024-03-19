const fs = require("fs");

// !猜數字 [玩家] [指令]
const Player = 1; //以後改成twitchId
const Command = 2; //以後改成 1

const playerJoin = (arr_message) => {
  let playerList = [];
  let newPlayer = arr_message[1];
  if (fs.existsSync("./guessNumber/playersList.json")) {
    playerList = JSON.parse(
      fs.readFileSync("./guessNumber/playersList.json", "utf8")
    );
  }

  //查看玩家是否重复
  if (!checkPlayerRepeat(newPlayer, playerList)) {
    //沒有重複，就加入列表存儲
    playerList.push(newPlayer);
    fs.writeFileSync(
      "./guessNumber/playersList.json",
      JSON.stringify(playerList),
      "utf8"
    );
    console.log(playerList);
    return `${newPlayer} 加入遊戲`;
  }
  //重複回傳你訊息
  return `${newPlayer} 你已經在遊戲裡面了`;
};

//查看玩家是否重复
const checkPlayerRepeat = (newPlayer, playerList) =>
  playerList.includes(newPlayer) && true;

module.exports = {
  playerJoin,
};
