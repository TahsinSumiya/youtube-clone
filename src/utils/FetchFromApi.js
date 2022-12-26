import axios from "axios";


// const axios = require("axios");
const BASE_URL= 'https://youtube-v31.p.rapidapi.com';
const options = {
  params: {part: 'snippet', videoId: 'M7FIvfx5J10'},
  headers: {
    'X-RapidAPI-Key': '670137c2fdmshbba3a214f5a8a66p1eb790jsn9070ea6b3cfb' ,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
export const FetchFromAPi =async(url)=>{
 const { data } = await axios.get(`${BASE_URL}/${url}`,options);
 return data;
}