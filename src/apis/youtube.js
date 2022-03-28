import axios from "axios";

const KEY = "AIzaSyCM_GAbBTxv_nRE6ZFeMK3vkTokBjvWJUI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
