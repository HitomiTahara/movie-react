import axios from "axios";

<<<<<<< HEAD
const KEY = "AIzaSyAOqQ39tv0E6BstOI-ODczCcJ9mgTU3R4U"; //次回貼り付け
=======
const KEY = ""; //次回貼り付け
>>>>>>> e6d4105 (Again Created VideoItem for display videos)

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
