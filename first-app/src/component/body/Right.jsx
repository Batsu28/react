import "../../style/body/right/right.css";
import Title from "./right/Title";
import Main from "./right/Main";
import Aside from "./right/Aside";

export default function Right() {
  return (
    <div className="right">
      <Title />
      <div className="bottom">
        <Main />
        <Aside />
      </div>
    </div>
  );
}
