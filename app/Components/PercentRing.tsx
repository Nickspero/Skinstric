import "../Styles/PercentRing.css";

const PercentRing = ({ percentage }: any) => {
  const angle = percentage * 3.6;

  return (
    <div className="ring">
      <div
        className="mask"
        style={{transform: `rotate(${percentage <= 50 ? angle : 180}deg)`,}}
      >
        <div className="half"></div>
      </div>

      <div
        className="mask"
        style={{transform: `rotate(${percentage > 50 ? angle : {}}deg)`,}}
      >
        <div
          className="half"
          style={{backgroundColor: `${percentage > 50 ? "black" : "#C1C2C3"}`,}}
        ></div>
      </div>

      <div className="overlay">
        <p className="percentage">{percentage}%</p>
      </div>
    </div>
  );
};

export default PercentRing;
