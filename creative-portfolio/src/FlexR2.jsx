import { Link } from "react-router-dom";
import "./FlexR2.css";

const FlexR2 = () => {
  return (
    <>
      <div className="parent">
        <div className="left">
          <div className="image"></div>

          <div className="group">
            <div className="item"><Link to="/about">About</Link></div>
            <div className="item"><Link to="/contact" >Contact</Link></div>
            <div className="item"><Link to="/portfolio" >Portfolio</Link></div>
          </div>
        </div>

        <div className="side">
          <span>Sabeet</span>
        </div>
      </div>
    </>
  );
};

export default FlexR2;
