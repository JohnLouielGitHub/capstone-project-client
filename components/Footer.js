import Image from 'next/image';

const Footer = () => {
    return ( 
        <footer className="gray-bg py-3">
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
                    <Image  src="/Logo.svg" alt="Logo" width={200}
      height={200}  />
                    </div>
                </div>
                <div className="col offset-2 col-lg-2 ">
                    <div className="d-flex flex-column">
                        <a className=" text-decoration-none text-white px-5"><Image src="/instagram.svg" alt="Instagram-icon" width={16} height={16}/><span className="ms-2">Instagram</span></a>
                        <a className=" text-decoration-none text-white px-5"><Image src="/linkedin.svg" alt="LinkedIn-icon" width={16} height={16}/><span className="ms-2">Linked in</span></a>
                        <a className=" text-decoration-none text-white px-5"><Image src="/facebook.svg" alt="Facebook-icon" width={16} height={16}/><span className="ms-2">facebook</span></a>
                        <a className=" text-decoration-none text-white px-5"><Image src="/twitter.svg" alt="Twitter-icon" width={16} height={16}/><span className="ms-2">Twitter</span></a>       
                    </div>
                </div>   
            </div>
            <p className="mt-5 text-white">All rights reserved. Copyright 2021Ⓒ Lexweb Inc.</p>
        </div>
        </footer>
     );
}
 
export default Footer;