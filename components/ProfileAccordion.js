import React from "react"
const ProfileAccordion = ({ accord, index }) => {
    return (
        <div
            className={(accord.open ? 'open' : "") + "accordion dark-bg"}
            key={index}
        >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-gold pt-3">{accord.title}</h2>
                        <hr className="text-gold" />

                    </div>
                </div>
            </div>
            <div className="gray-bg pt-2">
                <div className="container">
                    <div className="row">
                        {accord.title != "Online Availability" ? accord.detail.map((info) => (
                            <>
                                <div className="col-12 col-md-6 text-light my-3">
                                    <div className="dark-gray-bg p-3">
                                        <h4>{info.header}</h4>
                                    </div>
                                    <div className="dark-bg py-2 px-3 d-flex flex-column justify-content-center">
                                        {(Array.isArray(info.answer)) ?
                                            info.answer.map((ans) => <p key="">{ans}</p>)
                                            :
                                            <p>{info.answer}</p>}
                                    </div>
                                </div>
                            </>
                        )) 
                        : ""
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileAccordion
