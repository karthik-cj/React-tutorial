import pic from "../Images/profile.jpg";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.css";
import email from "../Images/email.png";

export default function BusinessCard() {
  return (
    <div className="cardbody">
      <div className="text-center">
        <img
          src={pic}
          alt="Profile Pic"
          width="100%"
          style={{
            borderRadius: "25px",
            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "0px",
          }}
        />
        <h1 className="text-white mb-2 mt-4">Karthik CJ</h1>
        <h4 className="text-white mb-2">Backend Developer</h4>
        <h6 className="text-white mb-5">@karthik._.cj</h6>
        <button type="button" className="btn btn-light btn-sm mb-5">
          <div className="button">
            <img src={email} alt="Email" width={20} />
            <small>Email</small>
          </div>
        </button>
      </div>
      <h3 className="text-white ms-5" style={{ textalign: "left" }}>
        About
      </h3>
      <p className="text-white ms-5 me-5 mb-4 instagram">
        Third-year computer science student, future back-end developer, with 2
        year's experience in database administration. My passion for back-end
        development brought me to SJCET palai where I am working on my
        bachelor's degree.Currently, I am acquiring knowledge on front-end
        development , connecting back-end and front-end and state management. I
        typically use Node.js and Express on the server and flutter as
        front-end.
      </p>
      <h3 className="text-white ms-5">Interest</h3>
      <p className="text-white ms-5 me-5 mb-5 instagram">
        Third-year computer science student, future back-end developer, with 2
        year's experience in database administration. My passion for back-end
        development brought me to SJCET palai where I am working on my
        bachelor's degree.Currently.
      </p>
    </div>
  );
}
