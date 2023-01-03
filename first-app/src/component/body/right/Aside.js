import "../../../style/body/right/aside.css";
import Top from "./Aside_top";
import Line from "./Line";

export default function Aside() {
  return (
    <div className="aside">
      <Top />
      <div>
        <p>Linked</p>
        <Line />
        <Line />
        <Line />
      </div>
      <div>
        <p>Related</p>
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
        <Line />
      </div>
    </div>
  );
}
