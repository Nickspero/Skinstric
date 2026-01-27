interface Props {
    svg: string;
    arrowText: string
    className?: string
}

const Arrow = ({className, svg, arrowText}:Props) => {
  return (
    <div className={className}>
      <img src={svg} />
      <p>{arrowText}</p>
    </div>
  )
}

export default Arrow
