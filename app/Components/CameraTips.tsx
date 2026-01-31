import "../Styles/CameraTips.css"

const CameraTips = () => {
  return (
    <div className="bottom__texts">
      <p className="bottom__text-main">
        TO GET BETTER RESULTS MAKE SURE TO HAVE
      </p>
      <div className="bottom__text-box">
        <p className="bottom__text">
          <img src="/Rectangle.svg" alt="" />
          NEUTRAL EXPRESSION
        </p>
        <p className="bottom__text">
          <img src="/Rectangle.svg" alt="" />
          FRONTAL POSE
        </p>
        <p className="bottom__text">
          <img src="/Rectangle.svg" alt="" />
          ADEQUATE LIGHTING
        </p>
      </div>
    </div>
  );
};

export default CameraTips;
