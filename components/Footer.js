const Footer = () => {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col col-lg-4">
                    <div className="d-flex flex-column">
                        <a className="text-white text-decoration-none">Home</a>
                        <a className="text-white text-decoration-none">About Us</a>
                        <a className="text-white text-decoration-none">Law Updates</a>
                        <a className="text-white text-decoration-none">Our lawyers</a>
                        <a className="text-white text-decoration-none">Everyday Law</a>
                        <a className="text-white text-decoration-none">Contact Us</a>
                    </div>
                </div>
                <div className="col col-lg-4">
                    <img src="" alt="" />
                </div>
                <div className="col col-lg-4 ">
                    <div className="d-flex flex-column">
                        <a className="text-end text-decoration-none text-white">Instagram</a>
                        <a className="text-end text-decoration-none text-white">Linked In</a>
                        <a className="text-end text-decoration-none text-white">Facebook</a>
                        <a className="text-end text-decoration-none text-white">Twitter</a>       
                    </div>
                </div>   
            </div>
            <p className="mt-5 text-white">All rights reserved. Copyright 2021Ⓒ Lexweb Inc.</p>
        </div>
     );
}
 
export default Footer;