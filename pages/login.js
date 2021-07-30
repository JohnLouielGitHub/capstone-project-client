import Link from "next/dist/client/link";
import Image from "next/dist/client/image";
import React, {useState} from "react";

const Login = () => {

  // const [details,setDetails] = useState({name: "", email: "", password: ""})

  const submitHandler = e =>{
    e,preventDefault();
  }
  //   login(details);
  // }

  return (
    <>
      <div className="position-relative vh-100 h-100 mh-100 w-100" >
        <Image
        className="object-fit"
          src="https://previews.123rf.com/images/ijeab/ijeab1805/ijeab180500064/102335348-law-advice-and-legal-services-concept-lawyer-and-attorney-having-team-meeting-at-law-firm-.jpg"
          layout="fill"
          alt="background-image"
        ></Image>
      
      <div className="container position-absolute top-50 start-50 translate-middle mt-2">
        <div className="row">
          <div className="col-lg-6 p-0 d-none d-lg-block">
            <div className="gray-bg d-flex  align-items-center justify-content-center h-100 position-relative ">
              <div className="p-xl-3 " style={{ zIndex: 3 }}>
                <h2 className="lexyellow login-text-title">
                  We&apos;re here for you
                </h2>
                <p className="text-white login-text">
                  Online legal service that provides legal information and
                  advice.
                </p>
              </div>
              <div
                className="overlay-dark"
                style={{ zIndex: 2 }}
                layout="fill"
              ></div>
              <Image
              className="object-fit"
                style={{ zIndex: 1 }}
                src="https://previews.123rf.com/images/opolja/opolja1311/opolja131100148/23580117-a-business-man-with-an-open-hand-ready-to-seal-a-deal.jpg"
                layout="fill"
                alt="login-image"
              ></Image>
            </div>
          </div>
          <div className="col-lg-6 p-0 bg-dark">
            <div className="login-container ">
              <div className="form-title-container px-5 py-2 py-xxl-3 dark-bg">
                <h2 className="lexyellow mb-3">Login</h2>
                {/* {ERROR!} */}
                <span className="underline d-block bg-gold rounded-pill w-100"></span>
              </div>
              <div className="login-form gray-bg p-4 px-md-5 p-xxl-5">
                <form onSubmit={submitHandler}  className="row g-3 p-xl-4 gray-bg">
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
                        <a className="forgot-pw text-decoration-none text-dark">Forgot password?</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mb-3">
                      <input
                        className="btn dark-bg text-white w-100"
                        type="submit"
                        value="Login"
                      >
                        
                      </input>
                    </div>
                    <div className="d-flex gap-3">
                      <button
                        className="btn dark-bg text-white w-50 d-flex justify-content-center align-items-center gap-3"
                        type="button"
                      >
                        Login 

                        <Image
                        className="object-fit" src="/gmailLogin.svg" alt="Instagram-icon" width={32} height={32}/>
                      </button>
                      <button
                        className="btn dark-bg text-white w-50 d-flex justify-content-center align-items-center gap-3"
                        type="submit"
                      >
                        Login  

                        <Image
                        className="object-fit" src="/fbLogin.svg" alt="Instagram-icon" width={32} height={32}/>
                      </button>
                    </div>
                  </div>
                </form>
                <hr className="mt-4" />
                <div className="col-12">
                  <p className="text-center mb-2 mb-xl-5">
                    
                    <Link passHref className="link-hover" href="/signup">
                    <span className="link-hover">No account yet? &nbsp;
                      Sign-up now!</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Login;
