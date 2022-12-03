import Navigation from "./Navigation/Navigation";
import ListView from "./ListView/ListView";
import Music from "./Music/Music";
import "./MusicPlayer.css";
import { DataService } from "../Services/DataService";
import { useEffect, useState } from "react";

const MusicPlayer = () => {
  const [track, setTrack] = useState(1);

  const handleTrack = (param) => {
    setTrack(param);
  };

  useEffect(() => {
    DataService.getPlayList();
  }, []);

  return (
    <div className="wraper">
      <Navigation handleTrack={handleTrack} />
      <ListView track={track} />
      <Music />
    </div>
  );
};

export default MusicPlayer;
