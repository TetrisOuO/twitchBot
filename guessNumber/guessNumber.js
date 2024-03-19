// 1.創建遊戲
//   !猜數字 創建 (清空舊資料所有資料)
// 2.加入功能
//   !猜數字 加入 (觀眾加入名單內)
//   !猜數字 退出 (加入的觀眾退出)
// 3.開始遊戲
//   !猜數字 [數字] (被挑選中的觀眾可以猜數字，沒有猜範圍內的數字會被掠過，沒有被選中的玩家無法猜)
//   !猜數字 開始 (開始遊戲，禁止中途加入)
//   !猜數字 結束 (遊戲提前結束，只能在遊戲中使用，並且只能mod以上的觀眾能使用)
// 4.遊戲結束發放獎勵

const fs = require("fs");
const { playerJoin } = require("./fsHandle");

const guessNumber = (userstate, message) => {
  const username = userstate["username"]; //twitch ID
  const arr_message = message.split(" "); //訊息陣列化以" "做分割點
  let startKey = false; //檢查遊戲是否還在進行

  //---------------------測試----------------------
  const player = arr_message[1];
  return playerJoin(arr_message);
  //-----------------------------------------------
};

const mian = (userData, mode) => {
  switch (mode) {
    case waitingCreate:
      console.log("等待創建遊戲");
      break;
    case waitingPlayer:
      console.log("等待玩家");
      break;
    case starting:
      console.log("遊戲中");
      break;
    case gameOver:
      console.log("遊戲結束");
      break;
    default:
      console.log("預設模式");
      break;
  }
};

const command = {
  創建: () => "",
  加入: () => "",
  退出: () => "",
  開始: () => "",
  結束: () => "",
};

module.exports = {
  guessNumber,
};
