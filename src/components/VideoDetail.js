import React from "react";
import { Paper, Typography } from "@material-ui/core";

const VideoDetail = ({ video }) => {
  if (!video) return <div>Loading...</div>;
  console.log(video);

  const videoSrc = `http://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <>
      <Paper elevation={6} style={{ height: "70%" }}>
        <iframe
          src={videoSrc}
          frameBorder="0"
          height="100%"
          width="100%"
          title="Video Player"
        />
      </Paper>
      <Paper elevation={6}>
        <Typography variat="h4">
          {video.snippet.title} - {video.snippet.channelTitle}
        </Typography>
        <Typography variat="subtitle1">{video.snippet.channelTitle}</Typography>
        <Typography variat="subtitle2">{video.snippet.description}</Typography>
      </Paper>
    </>
  );
};
export default VideoDetail;
