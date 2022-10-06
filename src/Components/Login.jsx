import "bootstrap/dist/css/bootstrap.css";
import login from "../Images/login.png";

export default function Login() {
  return (
    <main className="form-signin m-auto">
      <form>
        <div className="text-center">
          <img className="img-responsive" src={login} alt="Login" width={200} />
        </div>

        <h1 className="h3 mb-3 fw-bold text-white">Please Sign In</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control mb-3"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-2">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="checkbox mb-3 text-white">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
        <p className="mt-5 mb-3 text-muted">@Karthik CJ</p>
      </form>
    </main>
  );
}
