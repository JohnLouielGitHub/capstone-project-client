import Link from "next/dist/client/link";
import Image from "next/dist/client/image";

const Login = () => {
  return (
    <div className="my-5">
      <div className="container mt-lg-4">
        <div className="row">
          <div className="col-lg-6 p-0">
            <div className="gray-bg d-flex align-items-center justify-content-center h-100 position-relative ">
            <div className="p-3 " style={{zIndex:3}}>
                <h2 className="lexyellow login-text-title">
                  We're here for you
                </h2>
                <p className="text-white login-text">
                  Online legal service that provides legal information and
                  advice.
                </p>
              </div>
              <div className="overlay-dark" style={{zIndex:2}} layout="fill"></div>
              <Image
                style={{zIndex:1}}
                src="https://previews.123rf.com/images/opolja/opolja1311/opolja131100148/23580117-a-business-man-with-an-open-hand-ready-to-seal-a-deal.jpg"
                layout="fill"
              ></Image>
            </div>
          </div>
          <div className="col-lg-6 p-0">
            <div className="login-container ">
              <div className="form-title-container px-5 p-4 dark-bg">
                <h2 className="lexyellow mb-3">Login</h2>
                <span className="underline d-block bg-gold rounded-pill w-100"></span>
              </div>
              <div className="login-form gray-bg p-5">
                <form action="gray-bg" method="" className="row g-3 p-4">
                  <div className="col-12">
                    <label>Username</label>
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      placeholder="Username"
                    />
                  </div>
                  <div className="col-12">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div className="col-12">
                    <div className="d-flex justify-content-between">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="rememberMe"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="rememberMe"
                        >
                          {" "}
                          Remember me
                        </label>
                      </div>
                      <div>
                        <a>Forgot password?</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-3">
                      <button
                        className="btn dark-bg text-white w-100"
                        type="button"
                      >
                        Login
                      </button>
                    </div>
                    <div className="d-flex gap-3">
                      <button
                        className="btn dark-bg text-white w-50"
                        type="button"
                      >
                        Login with Google
                      </button>
                      <button
                        className="btn dark-bg text-white w-50"
                        type="button"
                      >
                        Login with Facebook
                      </button>
                    </div>
                    {/* <button type="submit" className="btn btn-dark float-end">Login</button> */}
                  </div>
                </form>
                <hr className="mt-4" />
                <div className="col-12">
                  <p className="text-center mb-5">
                    No account yet? &nbsp;
                    <Link href="/signup">
                      <a href="#">Sign-up</a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
