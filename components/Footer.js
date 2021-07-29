import Image from 'next/image';
import ActiveLink from './ActiveLink';

const Footer = () => {
    return ( 
        <footer className="gray-bg py-3">
            <div className="container ">
            <div className="row">
                <div className="col   col-12 col-md-3  col-lg-2 ">
                    <ul className="d-flex flex-column text-center text-lg-start w-100 p-0">
                        <li className="list-unstyled">
                            <ActiveLink  href="/" className="text-decoration-none text-white">Home</ActiveLink>
                        </li>
                        <li className="list-unstyled">
                            <ActiveLink href="/about" className="text-decoration-none text-white">About Us</ActiveLink>
                        </li>
                        <li className="list-unstyled">
                            <ActiveLink href="/Law Updates" className="text-decoration-none text-white">Law Updates</ActiveLink>
                        </li>
                        <li className="list-unstyled">
                            <ActiveLink href="/Our lawyers" className="text-decoration-none text-white">Our lawyers</ActiveLink>
                        </li>
                        <li className="list-unstyled">
                            <ActiveLink href="/Everyday Law" className="text-decoration-none text-white">Everyday Law</ActiveLink>
                        </li>
                        <li className="list-unstyled">
                            <ActiveLink href="/Contact Us" className="text-decoration-none text-white">Contact Us</ActiveLink>
                        </li>
                    </ul>
                </div>
                <div className="col  col-12  col-md-6 col-lg-8">
                    <div className="h-100 d-flex justify-content-center align-items-center">
                    <Image  src="/Logo.svg" alt="Logo" width={200}
      height={200}  />
                    </div>
                </div>
                <div className="col col-12 col-md-3 col-lg-2 text-center text-lg-start">
                    <ul className="d-flex flex-column">
                        <a className=" text-decoration-none text-white px-xl-2"><Image src="/instagram.svg" alt="Instagram-icon" width={16} height={16}/><span className="ms-2">Instagram</span></a>
                        <a className=" text-decoration-none text-white px-xl-2"><Image src="/linkedin.svg" alt="LinkedIn-icon" width={16} height={16}/><span className="ms-2">Linked in</span></a>
                        <a className=" text-decoration-none text-white px-xl-2"><Image src="/facebook.svg" alt="Facebook-icon" width={16} height={16}/><span className="ms-2">facebook</span></a>
                        <a className=" text-decoration-none text-white px-xl-2"><Image src="/twitter.svg" alt="Twitter-icon" width={16} height={16}/><span className="ms-2">Twitter</span></a>       
                    </ul>
                </div>   
            </div> 
        </div>
            <hr className="mt-4 lexyellow" />
            <div className="container">
            <p className="mt-1 text-white">All rights reserved. Copyright 2021Ⓒ Lexweb Inc.</p>
            </div>
        </footer>
     );
}
 
export default Footer;