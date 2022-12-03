import { useEffect, useState } from "react";
import { connect } from "react-redux";
import GetSvg from "../Common/GetSvg";
import ListElement from "./ListElement";
import { DataService } from "../../Services/DataService";
import "./ListView.css";

const ListView = (props) => {
  const [label, setLabel] = useState("");

  const changeLabel = () => {
    const result = props.TrackData.filter((elem) => elem.id === props.track);
    if (result.length) {
      setLabel(result[0].title);
    }
  };

  useEffect(() => {
    if (props.track) {
      DataService.getSongsList(props.track);
      changeLabel();
    }
  }, [props.track]);

  useEffect(() => {
    changeLabel();
  }, [props.TrackData]);

  return (
    <div className="list-view">
      <p className="para">{label}</p>
      <div className="search-box">
        <input
          className="search"
          type="search"
          placeholder="Search Song, Artist"
        />
        <div className="magnify">{GetSvg("magnify")}</div>
      </div>
      <div className="list-data">
        {props.SongsData.map((obj, index) => {
          return (
            <ListElement
              key={index}
              _id={obj._id}
              photo={obj.photo}
              title={obj.title}
              artist={obj.artist}
              duration={obj.duration}
              url={obj.url}
            />
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    SongsData: state.SongsData,
    TrackData: state.TrackDetails,
  };
};

export default connect(mapStateToProps, {})(ListView);
