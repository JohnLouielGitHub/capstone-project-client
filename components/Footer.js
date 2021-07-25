const Footer = () => {
    return ( 
        <footer className="gray-bg mt-5 py-3">
            <div className="container ">
            <div className="row">
                <div className="col  col-lg-2 ">
                    <div className="d-flex flex-column">
                        <a className="text-white text-decoration-none">Home</a>
                        <a className="text-white text-decoration-none">About Us</a>
                        <a className="text-white text-decoration-none">Law Updates</a>
                        <a className="text-white text-decoration-none">Our lawyers</a>
                        <a className="text-white text-decoration-none">Everyday Law</a>
                        <a className="text-white text-decoration-none">Contact Us</a>
                    </div>
                </div>
                <div className="col offset-2 col-lg-4">
                    <div className="h-100 d-flex justify-content-center align-items-center">
                    <img  className=" " src="./Logo.svg" alt="" />
                    </div>
                </div>
                <div className="col offset-2 col-lg-2 ">
                    <div className="d-flex flex-column">
                        <a className=" text-decoration-none text-white"><img className="me-1 footer-icon"src="/instagram.svg"/>Instagram</a>
                        <a className=" text-decoration-none text-white"><img className="me-1 footer-icon"src="/linkedin.svg"/>Linked In</a>
                        <a className=" text-decoration-none text-white"><img className="me-1 footer-icon"src="/facebook.svg"/>Facebook</a>
                        <a className=" text-decoration-none text-white"><img className="me-1 footer-icon"src="/twitter.svg"/>Twitter</a>       
                    </div>
                </div>   
            </div>
            <p className="mt-5 text-white">All rights reserved. Copyright 2021Ⓒ Lexweb Inc.</p>
        </div>
        </footer>
     );
}
 
export default Footer;