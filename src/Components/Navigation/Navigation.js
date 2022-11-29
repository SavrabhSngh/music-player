import GetSvg from "../Common/GetSvg";
import {
  FOR_YOU,
  TOP_TRACKS,
  FAVOURITES,
  RECENTLY_PLAYED,
} from "../../Services/Constants";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="logo">{GetSvg("logo")}</div>
      <div className="navigator">
        <p style={{ opacity: 1 }}>{FOR_YOU}</p>
        <p>{TOP_TRACKS}</p>
        <p>{FAVOURITES}</p>
        <p>{RECENTLY_PLAYED}</p>
      </div>
      <div className="profile">
        <img src="./images/profile.png" alt=""></img>
      </div>
    </div>
  );
};

export default Navigation;
