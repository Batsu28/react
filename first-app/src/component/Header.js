import "../style/header.css";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="header">
          <h1>Logo</h1>
          <ul>
            <li>
              <a href="#">Text1</a>
            </li>
            <li>
              <a href="#">Text2</a>
            </li>
            <li>
              <a href="#">Text3</a>
            </li>
          </ul>
          <input type="text" placeholder="search" />
          <div className="btn">
            <button className="log_in">Log In</button>
            <button className="sign_up">Sign Up</button>
          </div>
        </div>
      </div>
    </header>
  );
}
