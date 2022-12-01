import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { DataService } from "../../Services/DataService";
import GetSvg from "../Common/GetSvg";
import { changeActiveElem } from "../../Services/Helper";
import "./Music.css";

const Music = (props) => {
  const [songData, setSongData] = useState(props.SongDetails[0]);
  const [play, setPlay] = useState(false);
  const progress = useRef();
  const ref = useRef();

  useEffect(() => {
    DataService.initializeSubscriber(
      (data) => {
        switch (data.msgType) {
          case "Song":
            if (ref.current) {
              ref.current.pause();
              ref.current = null;
            }
            if (progress.current) {
              clearInterval(progress.current);
              progress.current = null;
            }
            if (data.payLoad && data.payLoad.title) {
              setSongData(data.payLoad);
              setPlay(true);
              ref.current = new Audio(data.payLoad.url);
              ref.current.play();
            }
            break;
          default:
        }
      },
      (error) => {
        // eslint-disable-next-line no-console
        console.log("error", error);
      }
    );
  }, []);

  useEffect(() => {
    clearInterval(progress.current);
    progress.current = null;
    const bar = document.getElementsByClassName("bar")[0];
    if (bar && bar.style) {
      bar.style.width = "0px";
    }
    animation();
  }, [songData]);

  const animation = () => {
    const progressElem = document.getElementsByClassName("progress")[0];
    const bar = document.getElementsByClassName("bar")[0];
    if (progressElem && progressElem.style) {
      var width = bar.getBoundingClientRect().width;
      progress.current = setInterval(() => {
        width += progressElem.getBoundingClientRect().width / songData.duration;
        bar.style.width = `${width}px`;
      }, 1000);
    }
  };

  const handlePlayPause = () => {
    if (play && ref.current) {
      ref.current.pause();
      clearInterval(progress.current);
      progress.current = null;
    } else {
      ref.current.play();
      animation();
    }
    setPlay(!play);
  };

  const handlePrevNext = (param) => {
    const result = props.SongDetails.filter(
      (elem) => elem._id === songData._id
    );
    var index = props.SongDetails.indexOf(result[0]);
    if (param) {
      index += 1;
    } else {
      index -= 1;
    }
    if (index >= 0 && index < props.SongDetails.length) {
      DataService.ServiceInst?.next({
        msgType: "Song",
        payLoad: props.SongDetails[index],
      });
      changeActiveElem(props.SongDetails[index]._id);
    } else {
      // eslint-disable-next-line no-console
      console.log(index, props.SongDetails.length);
    }
  };

  return (
    <div className="dflex music-wrapper">
      {songData ? (
        <div className="player">
          <div className="header">
            <p className="title">{songData.title}</p>
            <p className="artist">{songData.artist}</p>
          </div>

          <div className="song-image">
            <img src={songData.photo} alt="" />
            <div className="linear-progress">
              <div className="progress"></div>
              <div className="bar"></div>
            </div>
          </div>

          <div className="dflex controls">
            <div className="svg">{GetSvg("eclipse")}</div>
            <div className="dflex play">
              <div className="svg" onClick={() => handlePrevNext(0)}>
                {GetSvg("previous")}
              </div>
              <div className="svg" onClick={handlePlayPause}>
                {play ? GetSvg("play") : GetSvg("pause")}
              </div>
              <div className="svg" onClick={() => handlePrevNext(1)}>
                {GetSvg("next")}
              </div>
            </div>
            <div className="svg">{GetSvg("mic")}</div>
          </div>
        </div>
      ) : (
        <div>
          <p>Tap on the list to play song</p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    SongDetails: state.SongsData,
  };
};

export default connect(mapStateToProps, {})(Music);
