import Navigation from "./Navigation/Navigation";
import ListView from "./ListView/ListView";
import Music from "./Music/Music";
import "./MusicPlayer.css";
import { DataService } from "../Services/DataService";

const MusicPlayer = () => {
  DataService.getPlayList();
  DataService.getSongsList(1);

  return (
    <div className="wraper">
      <Navigation />
      <ListView />
      <Music />
    </div>
  );
};

export default MusicPlayer;
