import "../style/body/body.css";
import Right from "./body/Right";
import Left from "./body/Left";

export default function Body() {
  return (
    <div className="container">
      <div className="body">
        <Left />
        <Right />
      </div>
    </div>
  );
}
