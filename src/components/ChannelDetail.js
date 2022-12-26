
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { FetchFromAPi } from "../utils/FetchFromApi";

function ChannelDetail() {
 const [channelDetail,setChannelDeatil]=useState(null)
 const [videos,setVideos]=useState([])
 console.log(channelDetail)
  const {id} =useParams()
  useEffect(()=>{
      // FetchFromAPi(`channel?part="snippet"&id=${id}`).then((data)=>
      // setChannelDeatil(data?.items[0]));

      // FetchFromAPi(`search?channelId=${id}part="snippet"&order=date`).then((data)=>
      // setVideos(data?.items))
      const fetchResults = async () => {
        const data = await FetchFromAPi(`channels?part=snippet&id=${id}`);
  
        setChannelDeatil(data?.items[0]);
  
        const videosData = await FetchFromAPi(`search?channelId=${id}&part=snippet%2Cid&order=date`);
  
        setVideos(videosData?.items);
      };
  
      fetchResults();
    
  },[id])
  return (
    <Box minHeight="95vh">
      <Box>
        <div
        style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }}
       
        />
         <ChannelCard channelDetail={channelDetail} marginTop="-93px"/>
      </Box>
      <Box p={2} display="flex">
      <Box sx={{ mr: { sm: '100px' } }}/>
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail
