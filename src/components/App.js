import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
//import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("buildings");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoClick={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

// class App extends React.Component {
//     state={videos: [], selectedVideo: null};

//     componentDidMount() {
//         this.onTermSubmit('buildings');
//     }

//     onTermSubmit= async (term) => {
//         const response = await youtube.get('/search',{
//             params: {
//                 q: term
//             }
//         });
//         this.setState({
//             videos: response.data.items,
//             selectedVideo: response.data.items[0]
//         });
//     };

//     onVideoClick= video => {
//         this.setState({selectedVideo: video});
//     };

//     render() {
//         return (
//             <div className="ui container">
//                 <SearchBar onFormSubmit={this.onTermSubmit}/>
//                 <div className="ui grid">
//                     <div className="ui row">
//                         <div className="eleven wide column">
//                             <VideoDetail video={this.state.selectedVideo}/>
//                         </div>
//                         <div className="five wide column">
//                             <VideoList
//                                 onVideoClick={this.onVideoClick}
//                                 videos={this.state.videos}
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

export default App;