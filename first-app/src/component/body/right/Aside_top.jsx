import "../../../style/body/right/aside_top.css";

export default function Top(props) {
  return (
    <div className="aside_top">
      <div className="a_top">
        <h5>The Overflow Blog</h5>
        <ul>
          <li>{props.par1}</li>
          <li>{props.par2}</li>
        </ul>
      </div>
      <div className="a_bottom">
        <h5>Featured on Meta</h5>
        <ul>
          <li>{props.par3}</li>
          <li>{props.par4}</li>
          <li>{props.par5}</li>
        </ul>
      </div>
    </div>
  );
}
