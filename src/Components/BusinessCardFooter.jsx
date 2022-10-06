import instagram from "../Images/instagram.png";
import github from "../Images/github.png";
import facebook from "../Images/facebook.png";
import twitter from "../Images/twitter.png";
import "bootstrap/dist/css/bootstrap.css";

export default function Footer() {
  return (
    <div className="footerbody">
      <img className="ms-5 me-5" src={instagram} alt="Instagram" width={40} />
      <img className="ms-3 me-5" src={github} alt="Github" width={40} />
      <img className="ms-3 me-4" src={facebook} alt="Facebook" width={40} />
      <img className="ms-5" src={twitter} alt="Twitter" width={40} />
    </div>
  );
}
