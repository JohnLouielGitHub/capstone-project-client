import { useRouter } from "next/router";
import Image from 'next/image'
import Link from 'next/link'
import ActiveLink from './ActiveLink';




const Navbar = () => {
    const router = useRouter();
    
    return ( 
        <nav className="gray-bg position-fixed top-0 w-100 border-bottom border-2 border-dark" style={{ zIndex: 10 }}>
           <div className="container h-100">
           <div className="row h-100">
                <div className="col-lg-4">
                    <div className="logo d-flex h-100 justify-content-start align-items-lg-center">
                        <div className="me-2 mb-0">
                        <Image src="/Logo.png"  width={60} height={60}/>
                        </div>
                        <h1 className="mb-0 ms-1 lexyellow"> Men of Law Corporate</h1>
                    </div>
                </div>
                <div className="col-lg-6">
                   
                <ul className="nav-menu d-flex h-100 justify-content-lg-between align-items-lg-center ">
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
                <div className="col-lg-2">
                    <div className="d-flex h-100 justify-content-end align-items-lg-center">
                    <Link href="/login">
                    <button className=" btn rounded-pill py-1 px-4 bg-gold">Login</button>
                        </Link>
                    </div>
                </div>
            </div>
             </div>     
        </nav>



   
        
     );
}
 
export default Navbar;