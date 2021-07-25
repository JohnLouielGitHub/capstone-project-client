

const Signup = () => {
    return ( 
        <> 
        <div className="container mt-lg-4">
            <div className="row">
               
                        <div className="col-lg-6 p-0">
                            <div className="gray-bg d-flex align-items-center justify-content-center h-100">
                               <div className="p-3">
                               <h2 className="lexyellow login-text-title">We're here for you</h2>
                                <p className="text-white login-text">Online legal service that provides legal information and advice.</p>
                               </div>
                            </div>
                        </div>
                        <div className="col-lg-6 p-0">
                            <div className="login-container ">
                            <div className="form-title-container px-5 p-4 dark-bg">
                                <h2 className="lexyellow mb-3">Register</h2>
                                <span className="underline d-block bg-gold rounded-pill w-100 px-4"></span>
                            </div>
                            <div className="login-form gray-bg p-5">
                                <form action="gray-bg" method="" className="row g-3 p-4">
                                <div className="col-6">
                                        <label>First Name</label>
                                        <input type="text" name="username" className="form-control" placeholder="Username"/>
                                    </div>
                                    <div className="col-6">
                                        <label>Last Name</label>
                                        <input type="text" name="username" className="form-control" placeholder="Username"/>
                                    </div>
                                    <div className="col-12">
                                        <label>Email</label>
                                        <input type="text" name="username" className="form-control" placeholder="Username"/>
                                    </div>
                                    <div className="col-12">
                                        <label>Password</label>
                                        <input type="text" name="username" className="form-control" placeholder="Password"/>
                                    </div>
                                    <div className="col-12">
                                        <label>Confirm Password</label>
                                        <input type="password" name="password" className="form-control" placeholder=" Confirm Password"/>
                                    </div>
                                    <div className="col-12">
                                        <div className="d-flex justify-content-between">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="rememberMe"/>
                                                <label className="form-check-label" htmlFor="rememberMe"> Remember me</label>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        
                                        <div className="d-flex gap-3">                           
                                            <button className="btn dark-bg text-white w-50" type="button">Login with Google</button>
                                            <button className="btn dark-bg text-white w-50" type="button">Login with Facebook</button>
                                        </div>
                                        {/* <button type="submit" className="btn btn-dark float-end">Login</button> */}
                                    </div>   
                                </form>
                                <hr className="mt-4"/>
                                <div className="col-12">
                                    <p className="text-center mb-5">Already have an account? <a href="#">Login</a></p>
                                </div>
                            </div>
                            </div>
                        </div>
                       
            </div>
        </div>
        
        </>
     );
}
 
export default Signup;