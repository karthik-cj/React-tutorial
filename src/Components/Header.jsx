import logo from "../Images/logo192.png";

export default function MainContent() {
  return (
    <div>
      <header className="header">
        <nav className="nav">
          <img className="img" src={logo} width={40} alt="Logo" />
          <ul className="nav-items">
            <li>Price</li>
            <li>Connect</li>
            <li>Name</li>
            <li>Facebook</li>
            <li>About</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
