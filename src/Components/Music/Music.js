import { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { DataService } from "../../Services/DataService";
import GetSvg from "../Common/GetSvg";
import "./Music.css";

const Music = (props) => {
  const [songData, setSongData] = useState(props.SongDetails[0]);
  const [play, setPlay] = useState(false);
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

  const handlePlayPause = () => {
    if (play && ref.current) {
      ref.current.pause();
    } else {
      ref.current.play();
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
    if (index >= 0 && index <= props.SongDetails.length)
      DataService.ServiceInst?.next({
        msgType: "Song",
        payLoad: props.SongDetails[index],
      });
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
