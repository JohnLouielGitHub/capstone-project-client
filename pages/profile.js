import Link from "next/dist/client/link";
import Image from "next/dist/client/image";
import profilePic from "../public/profile-img.png";
import ProfileAccordion from "../components/ProfileAccordion";
import React, { useState } from "react";
const profile = () => {
    const [accords, setAccords] = useState([
        {
            title: "Lawyers Information",
            detail: [{
                header: "Roll of Attorney Number:",
                answer: "12312"
            },
            {
                header: "Date Admitted to the Bar:",
                answer: "January 28, 1998"
            },
            {
                header: "IBP:",
                answer: ["072434", "Cavite", "June 12, 2015"]
            },
            {
                header: "MCLE:",
                answer: ["I have MCLE Compliance", "VI-00563314", "February 22, 2018 - February  22, 2020"]
            },
            {
                header: "Concentration of Law Practice:",
                answer: ["Corporation and Partnership Law", "Criminal Law", "Family Law"]
            },
            {
                header: "Areas of Practice:",
                answer: ["Luzon Wide", "Metro Manila", "Visayas Wide"]
            }],
            open: true
        },
        {
            title: "Professional Background",
            detail: [{
                header: "Language and Dialect:",
                answer: ["English", "Filipino", "Tagalog"]
            },
            {
                header: "Date Admitted to the Bar:",
                answer: "January 28, 1998"
            },
            {
                header: "IBP:",
                answer: ["072434", "Cavite", "June 12, 2015"]
            },
            {
                header: "MCLE:",
                answer: ["I have MCLE Compliance", "VI-00563314", "February 22, 2018 - February  22, 2020"]
            },
            {
                header: "Concentration of Law Practice:",
                answer: ["Corporation and Partnership Law", "Criminal Law", "Family Law"]
            },
            {
                header: "Areas of Practice:",
                answer: ["Luzon Wide", "Metro Manila", "Visayas Wide"]
            }],
            open: false
        },
        {
            title: "Online Availability",
            detail: "",
            open: false
        }
    ])
    return (
        <div>
            <section id="profile-bg" className="h-100">
                <div className="container pt-5 mt-5">
                    <div className="row">
                        <div className="col-3">
                            <Image src={profilePic} alt="profile-img" />
                        </div>
                        <div className="col-6 mr-auto d-flex flex-column justify-content-center">
                            <h3 className="text-gold">John Doe</h3>
                            <hr className="text-gold" />
                            <div className="d-flex justify-content-between">
                                <h4 className="text-light">Business Lawyer</h4>
                                <div className="d-flex align-items-center justify-content-center">
                                    <a className=" text-decoration-none text-white px-2"><Image src="/instagram.svg" alt="Instagram-icon" width={16} height={16} /><span className="ms-2"></span></a>
                                    <a className=" text-decoration-none text-white px-2"><Image src="/linkedin.svg" alt="LinkedIn-icon" width={16} height={16} /><span className="ms-2"></span></a>
                                    <a className=" text-decoration-none text-white px-2"><Image src="/facebook.svg" alt="Facebook-icon" width={16} height={16} /><span className="ms-2"></span></a>
                                    <a className=" text-decoration-none text-white px-2"><Image src="/twitter.svg" alt="Twitter-icon" width={16} height={16} /><span className="ms-2"></span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-8">
                            <div className="text-white py-3">
                                <div>
                                    <p className="mb-4" >Men of Law Corporate,  believes that every person deserves access to justice. That&apos;s why we offer safe, affordable advice about any issue you may have without any hidden agenda.  At LawServe, we believe that every person deserves access to justice. That&apos;s why we offer safe, affordable advice about any issue you may have without any hidden agenda. That&apos;s why we offer safe, affordable advice about any issue you may have without any hidden agenda.  At LawServe, we believe that every person deserves access to justice. That&apos;s why we offer safe, affordable advice about any issue you may have without any hidden agenda. </p>
                                    <p>Men of Law Corporate,  believes that every person deserves access to justice. That&apos;s why we offer safe, affordable advice about any issue you may have without any hidden agenda.  At LawServe, we believe that every person deserves access to justice. That&apos;s why we offer safe, affordable advice about any issue you may have without any hidden agenda. That&apos;s why we offer safe, affordable advice about any issue you may have without any hidden agenda.  At LawServe, we believe that every person deserves access to justice. That&apos;s why we offer safe, affordable advice about any issue you may have without any hidden agenda. </p>
                                </div>

                            </div>
                        </div>
                        <div className="col-12 col-md-3 offset-md-1 d-flex flex-column justify-content-end pb-3 mb-4">
                            <button className="btn hero-btn bg-gold mb-3" type="button">
                                Consult
                            </button>
                            <button className="btn hero-btn bg-gold mb-3" type="button">
                                Docs
                            </button>
                            <button className="btn hero-btn bg-gold" type="button">
                                Works
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section id="profile-tabs" className="dark-gray-bg pt-2">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <button className="btn btn-tab text-light">Lawyer Information</button>
                            <button className="btn btn-tab text-light">Professional Background</button>
                            <button className="btn btn-tab text-light">Online Availability</button>
                        </div>
                    </div>
                </div>
            </section>
            <section id="profile-tabs" className="dark-bg pt-2">
                {accords.map((accord, i) => (
                    <>
                        <ProfileAccordion accord={accord} index={i} />
                    </>
                ))}
            </section>
            <div className="footer-divider w-100 bg-dark mb-6"></div>
        </div>
    )
}

export default profile