import "../../../style/body/right/line.css";

export default function Line(props) {
  return (
    <div className="line">
      <div className="line_box">{props.num}</div>
      <p>{props.title}</p>
    </div>
  );
}
