import "../../../style/body/right/aside.css";
import Top from "./Aside_top";
import Line from "./Line";

let top = [
  "You should be reading academic computer science papers",
  "From life without parole to startup CTO (Ep. 522)",
  "Navigation and UI research starting soon",
  "Temporary policy: ChatGPT is banned",
  "The [choice] tag is being burninated",
];

let lineText = [
  {
    title:
      "How to export and import a .sql file from command line with options?",
    num: 352,
  },
  {
    title:
      "How to export and import a .sql file from command line with options?",
    num: 204,
  },
  {
    title:
      "How to export and import a .sql file from command line with options?",
    num: 572,
  },
];

export default function Aside() {
  return (
    <div className="aside">
      <Top
        par1={top[0]}
        par2={top[1]}
        par3={top[2]}
        par4={top[3]}
        par5={top[4]}
      />
      <div>
        <p>Linked</p>
        <Line title={lineText[0].title} num={lineText[0].num} />
        <Line title={lineText[1].title} num={lineText[1].num} />
        <Line title={lineText[2].title} num={lineText[2].num} />
      </div>
      <div>
        <p>Related</p>
        <Line title={lineText[0].title} num={lineText[0].num} />
        <Line title={lineText[1].title} num={lineText[1].num} />
        <Line title={lineText[2].title} num={lineText[2].num} />
      </div>
    </div>
  );
}
