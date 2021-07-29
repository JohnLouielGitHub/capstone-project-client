const ProfileAccordion = ({ title }) => {
    return (
        <div className="accordion">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="lexyellow">{title}</h2>
                        <hr className="lexyellow" />
                    </div>
                </div>
            </div>
            <div className="gray-bg pt-2">
                <div className="container">
                    <div className="row">
                        <div className="col-6 text-light">
                            <div className="dark-gray-bg p-3">
                                <h4>Roll of Attorney Number:</h4>
                            </div>
                            <div className="dark-bg py-2 px-3 d-flex flex-column justify-content-center">
                                <p>12312</p>
                            </div>
                        </div>
                        <div className="col-6 text-light">
                            <div className="dark-gray-bg p-3">
                                <h4>Roll of Attorney Number:</h4>
                            </div>
                            <div className="dark-bg py-2 px-3 d-flex flex-column justify-content-center">
                                <p>12312</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileAccordion
