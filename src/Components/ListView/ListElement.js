import { getDuration } from "../../Services/Helper";
import { DataService } from "../../Services/DataService";
import "./ListView.css";

const ListElement = (props) => {
  var minutes = Math.floor(props.duration / 60);
  var seconds = props.duration - minutes * 60;
  var duration =
    getDuration(minutes, "0", 2) + ":" + getDuration(seconds, "0", 2);

  const handleClick = () => {
    DataService.ServiceInst?.next({
      msgType: "Song",
      payLoad: props,
    });
  };

  return (
    <div className="list-elements" onClick={handleClick}>
      <div className="list-wrapper">
        <div className="list-image">
          <img src={props.image} alt=""></img>
        </div>
        <div className="list-data">
          <p className="song">{props.title}</p>
          <p className="artist">{props.artist}</p>
        </div>
      </div>
      <div className="dflex duration">
        <p>{duration}</p>
      </div>
    </div>
  );
};

export default ListElement;
