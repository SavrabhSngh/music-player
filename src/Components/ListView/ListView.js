import { FOR_YOU, ListData } from "../../Services/Constants";
import GetSvg from "../Common/GetSvg";
import ListElement from "./ListElement";
import "./ListView.css";

const ListView = () => {
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
        {ListData.map((obj, index) => {
          return (
            <ListElement
              key={index}
              image={obj.image}
              song={obj.song}
              artist={obj.artist}
              duration={obj.duration}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ListView;
