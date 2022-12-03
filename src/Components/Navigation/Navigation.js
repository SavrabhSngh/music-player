import { useEffect, useRef } from "react";
import { connect } from "react-redux";
import GetSvg from "../Common/GetSvg";
import "./Navigation.css";

const Navigation = (props) => {
  const ref = useRef(null);

  useEffect(() => {
    if (props.TrackData.length) {
      changeActiveClass(props.TrackData[0].id);
    }
  }, [props.TrackData]);

  const changeActiveClass = (param) => {
    if (ref.current) {
      const activeElement = document.getElementsByClassName(
        `playlist-${ref.current}`
      )[0];
      activeElement && activeElement.classList.remove("active-playlist");
    }
    const element = document.getElementsByClassName(`playlist-${param}`)[0];
    if (element) {
      element.classList.add("active-playlist");
      props.handleTrack(param);
      ref.current = param;
    }
  };

  return (
    <div className="navigation">
      <div className="logo">{GetSvg("logo")}</div>
      <div className="navigator">
        {props.TrackData.map((obj, index) => {
          return (
            <p
              key={index}
              className={`playlist-${obj.id}`}
              onClick={() => changeActiveClass(obj.id)}
            >
              {obj.title}
            </p>
          );
        })}
      </div>
      <div className="profile">
        <img src="./images/profile.png" alt=""></img>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    TrackData: state.TrackDetails,
  };
};

export default connect(mapStateToProps, {})(Navigation);
