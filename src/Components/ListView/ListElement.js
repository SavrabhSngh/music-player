import "./ListView.css";
const ListElement = (props) => {
  return (
    <div className="list-elements">
      <div className="list-wrapper">
        <div className="list-image">
          <img src={props.image} alt=""></img>
        </div>
        <div className="list-data">
          <p className="song">{props.song}</p>
          <p className="artist">{props.artist}</p>
        </div>
      </div>
      <div className="dflex duration">
        <p>{props.duration}</p>
      </div>
    </div>
  );
};

export default ListElement;
