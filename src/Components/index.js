import Navigation from "./Navigation/Navigation";
import ListView from "./ListView/ListView";
import Music from "./Music/Music";
import "./MusicPlayer.css";

const MusicPlayer = () => {
  return (
    <div className="wraper">
      <Navigation />
      <ListView />
      <Music />
    </div>
  );
};

export default MusicPlayer;
