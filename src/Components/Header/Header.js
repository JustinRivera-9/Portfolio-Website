import "./Header.css";
import gitHubLogo from "../../Images/github-icon.svg";

function Header() {
  return (
    <header>
      <nav>
        <a href="#" className="my-name">
          JUSTIN RIVERA
        </a>
        <ul className="nav-items">
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">PROJECTS</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
          <li>
            <a
              href="https://github.com/JustinRivera-9"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={gitHubLogo}
                alt="GitHub Logo"
                width="30px"
                title="Link to GitHub Profile"
              ></img>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
