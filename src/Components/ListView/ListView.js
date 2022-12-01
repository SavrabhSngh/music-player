import { connect } from "react-redux";
import { FOR_YOU } from "../../Services/Constants";
import GetSvg from "../Common/GetSvg";
import ListElement from "./ListElement";
import "./ListView.css";

const ListView = (props) => {
  return (
    <div className="list-view">
      <p className="para">{FOR_YOU}</p>
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
              image={obj.photo}
              title={obj.title}
              artist={obj.artist}
              duration={obj.duration}
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
  };
};

export default connect(mapStateToProps, {})(ListView);
