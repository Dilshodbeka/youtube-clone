import React from "react";
import { Grid } from "@material-ui/core";
import { SearchBar, VideoDetail, VideoList } from "./components";

import youtube from "./api/youtube";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };
  componentDidMount() {
    this.handleSubmit('pdf create react');
  }

  onVideoSelect= (video) => {
    this.setState({ selectedVideo: video })
  }

  handleSubmit = async (SearchTerm) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResult: 5,
        key: process.env.API_KEY,
        q: SearchTerm,
      },
    });
    this.setState({
      video: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  render() {
    const { selectedVideo, videos } = this.state;
    return (
      <Grid justify="center" container spacing={9}>
        <Grid item xs={12}>
          <Grid container spacing={9}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail video={selectedVideo} />
            </Grid>
            <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
