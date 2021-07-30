import Image from "next/dist/client/image";

const About = () => {
    return ( 
        <>
        <section className="about">  
            <div className=" about-banner text-white bg-success pt-5">
                Banner img
                
                <div className="position-relative text-center  mt-5 pt-5 "  >
                <div className="overlay-dark about-overlay position-absolute h-100 w-100">&nbsp;</div>
                <Image className="about-logo" src="/Logo.svg"  width={445} height={278} alt="logo"/>
                </div>  
            </div>
        </section>

        <section className="dark-bg">
            <div className="container">
                <div className="text-center  lexyellow px-5 py-4">
                    <h2> About Us</h2>
                    <hr className="mt-4" />
                </div>
            </div>
        </section>

        <section className="bg-gray pb-5">       
            <div className="container">
                <div className="text-white text-center bg-gray px-5 py-3">
                    <div>
                        <p className="mb-4" >Men of Law Corporate,  believes that every person deserves access to justice. That&apos;s why we offer safe, affordable advice about any issue you may have without any hidden agenda.  At LawServe, we believe that every person deserves access to justice. That&apos;s why we offer safe, affordable advice about any issue you may have without any hidden agenda. That&apos;s why we offer safe, affordable advice about any issue you may have without any hidden agenda.  At LawServe, we believe that every person deserves access to justice. That&apos;s why we offer safe, affordable advice about any issue you may have without any hidden agenda. </p>
                        <p>Men of Law Corporate,  believes that every person deserves access to justice. That&apos;s why we offer safe, affordable advice about any issue you may have without any hidden agenda.  At LawServe, we believe that every person deserves access to justice. That&apos;s why we offer safe, affordable advice about any issue you may have without any hidden agenda. That&apos;s why we offer safe, affordable advice about any issue you may have without any hidden agenda.  At LawServe, we believe that every person deserves access to justice. That&apos;s why we offer safe, affordable advice about any issue you may have without any hidden agenda. </p>
                    </div>
                    <div className="pb-3">
                        <h3 className="lexyellow my-5">Our Mission</h3>
                        <p className="mb-4">Men of Law Corporate,  believes that every person deserves access to justice. That&apos;s why we offer safe, affordable advice about any issue you may have without any hidden agenda.  At LawServe, we believe that every person deserves access to justice. That&apos;s why we offer safe, affordable advice about any issue you may have without any hidden agenda. </p>
                        <p>Men of Law Corporate,  believes that every person deserves access to justice. That&apos;s why we offer safe, affordable advice about any issue you may have without any hidden agenda.  At LawServe, we believe that every person deserves access to justice. That&apos;s why we offer safe, affordable advice about any issue you may have without any hidden agenda. </p>
                    </div>
                </div>
            </div>
        </section>
        <div className="dark-bg p-5">&nbsp;</div>
        </>
     );
}
 
export default About;