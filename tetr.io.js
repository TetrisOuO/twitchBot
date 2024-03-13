const io_api_URL = 'https://ch.tetr.io/api/';
const fetch = require('node-fetch');
// const user_name = ouo;

async function get_io_user_data(username) {
  if (username == undefined) { //twitch沒有輸入 玩家名稱 會是undefined
    return undefined;
  }
  try {
    const response = await fetch(`${io_api_URL}users/${username.toLowerCase()}`); //io 只接受小寫名稱 需轉換大小寫
    if (!response.ok) {  //如果連線不ok則回報
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json(); //轉換json檔案
    return data;
  } catch (error) {
    console.error('Error fetching Tetr.io user data:', error);
    throw error;
  }
}

function get_tr_apm_pps(userstate, message) { 
  const arr_message = message.split(" ");
  return get_io_user_data(arr_message[1])
    .then(user_data => {
      if (user_data == undefined) {
        return `使用方式: !io [已存在玩家名稱]`;
      }
      const data = user_data.data.user;
      let rank;
      if (data.league.rank == "z") {
        rank = "?";
      } else {
        rank = data.league.rank;
      }
      return (`${data.username} [ rank: ${rank} ] [ TR: ${data.league.rating.toFixed(2)} ] [ APM: ${data.league.apm} ] [ PPS: ${data.league.pps} ]`);
    })
    .catch(error => {
      return ('此玩家不存在');
    })

}

module.exports = {
  get_tr_apm_pps
}