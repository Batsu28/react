import "../../../style/body/right/main.css";
import Question from "./Question";

let question = [
  {
    num: 2590,
    par1: "I have a .sql file with an export from phpMyAdmin. I want to import it into a different server using the command line.",
    par2: "I have a Windows Server 2008 R2 installation. I placed the .sql file on the C drive, and I tried this command",
    par3: "database_name < file.sql",
    par4: "It is not working. I get syntax errors.",
    par5: "How can I import this file without a problem?",
    par6: "Do I need to create a database first?",
  },
  {
    num: 692,
    par1: "Regarding the time taken for importing huge files: most importantly, it takes more time because the default setting of MySQL is autocommit = true. You must set that off before importing your file and then check how import works like a gem.",
    par2: "You just need to do the following thing:",
    par3: "mysql> use db_name; mysql> SET autocommit=0 ; source the_sql_file.sql ; COMMIT ;",
    par4: "It is not working. I get syntax errors.",
    par5: "How can I import this file without a problem?",
    par6: "Do I need to create a database first?",
  },
];

export default function Main() {
  return (
    <div className="main">
      <Question
        num={question[0].num}
        par1={question[0].par1}
        par2={question[0].par2}
        par3={question[0].par3}
        par4={question[0].par4}
        par5={question[0].par5}
        par6={question[0].par6}
      />
      <div className="main_mid">Answers</div>
      <Question
        num={question[1].num}
        par1={question[1].par1}
        par2={question[1].par2}
        par3={question[1].par3}
        par4={question[1].par4}
        par5={question[1].par5}
        par6={question[1].par6}
      />
      <Question
        num={question[1].num}
        par1={question[1].par1}
        par2={question[1].par2}
        par3={question[1].par3}
        par4={question[1].par4}
        par5={question[1].par5}
        par6={question[1].par6}
      />
      <Question
        num={question[1].num}
        par1={question[1].par1}
        par2={question[1].par2}
        par3={question[1].par3}
        par4={question[1].par4}
        par5={question[1].par5}
        par6={question[1].par6}
      />
    </div>
  );
}
