import "./FlexR2.css";

const FlexR2 = () => {
  return (
    <>
      <div className="parent">
        <div className="left">
          <div className="image"></div>

          <div className="group">
            <div className="item">About</div>
            <div className="item">Contact</div>
            <div className="item">Portfolio</div>
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
