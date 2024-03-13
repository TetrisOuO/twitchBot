const get_photo_point = (userstate) => {
  const username = userstate['username']; //twitch ID
  const point = Math.floor(Math.random() * 100) + 1;
                 
  if (point < 30) {
    return `${username} 拍照分數是 ${point}，加油點好嗎 StinkyCheese`;
  } else if (point < 60) {
    return `${username} 拍照分數是 ${point}，你怎麼沒有及格 cmonBruh`;
  } else if (point < 80) {
    return `${username} 拍照分數是 ${point}，唉唷~ 很厲害喔 DinoDance`;
  } else if (point <= 90) {
    return `${username} 拍照分數是 ${point}，你是拍照高手 TwitchConHYPE`;
  } else {
    return `${username} 拍照分數是 ${point}，你一定是作弊 cmonBruh`;
  } 
}

module.exports = {
  get_photo_point
}