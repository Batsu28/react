import "../../../style/body/right/question.css";

export default function Question(props) {
  return (
    <div className="question">
      <div className="q_left">
        <button className="up_btn"></button>
        <div className="ques_num">{props.num}</div>
        <button className="down_btn"></button>
      </div>
      <div>
        <p>{props.par1}</p>
        <p>{props.par2}</p>
        <div className="q_par3">{props.par3}</div>
        <p>{props.par4}</p>
        <ul>
          <li>{props.par5}</li>
          <li>{props.par6}</li>
        </ul>
      </div>
    </div>
  );
}
