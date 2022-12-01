import { connect } from "react-redux";
import GetSvg from "../Common/GetSvg";
import "./Navigation.css";

const Navigation = (props) => {
  return (
    <div className="navigation">
      <div className="logo">{GetSvg("logo")}</div>
      <div className="navigator">
        {props.TrackData.map((obj, index) => {
          return <p key={index}>{obj.title}</p>;
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

// eslint-disable-next-line no-lone-blocks
{
  /* <p style={{ opacity: 1 }}>{FOR_YOU}</p> */
}
