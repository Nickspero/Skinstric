
const PercentRing = ({ percentage }: { percentage: number }) => {
  const SIZE = 384;
  const STROKE = 8;           
  const CENTER = SIZE / 2;
  const RADIUS = CENTER - STROKE / 2;
  const CIRC = 2 * Math.PI * RADIUS;
  const OFFSET = CIRC * (1 - percentage / 100);

  return (
    <svg 
      width={SIZE} 
      height={SIZE}
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      style={{ maxWidth: "100%", height: "auto" }}
    >
      <circle
        cx={CENTER}
        cy={CENTER}
        r={RADIUS}
        stroke="#C1C2C3"
        strokeWidth={STROKE}
        fill="none"
      />

      <circle
        cx={CENTER}
        cy={CENTER}
        r={RADIUS}
        stroke="#000000"
        strokeWidth={STROKE}
        fill="none"
        strokeDasharray={CIRC}
        strokeDashoffset={OFFSET}
        strokeLinecap="square"
        style={{
          transition: "stroke-dashoffset 900ms cubic-bezier(0.4, 0, 0.2, 1)",
          transform: "rotate(-90deg)",
          transformOrigin: "50% 50%",
        }}
      />

      <circle
        cx={CENTER}
        cy={CENTER}
        r={RADIUS - 22}
        fill="#F3F3F4"
      />

      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="32"
        fontWeight="400"
        fill="#000"
      >
        {percentage}%
      </text>
    </svg>
  );
};



export default PercentRing;
