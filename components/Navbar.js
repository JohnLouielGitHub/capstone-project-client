import Image from 'next/image'
import Link from 'next/link'


const Navbar = () => {
    return ( 
        <nav className="gray-bg">
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
                <div className="nav-menu d-flex h-100 justify-content-lg-between align-items-lg-center ">
                    <Link href="/"><a className="text-decoration-none text-white">Home</a></Link>
                    <Link href="/about"><a className="text-decoration-none text-white">About Us</a></Link>
                    <Link href="/"><a className="text-decoration-none text-white">Law Updates</a></Link>
                    <Link href="/"><a className="text-decoration-none text-white">Our lawyers</a></Link>
                    <Link href="/"><a className="text-decoration-none text-white">Everyday Law</a></Link>
                    <Link href="/"><a className="text-decoration-none text-white">Contact Us</a></Link> 
                </div>
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