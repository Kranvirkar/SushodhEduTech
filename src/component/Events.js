const Events = () => {
    return (
        <main id="main">
            {/* Breadcrumbs */}
            <div className="breadcrumbs aos-init aos-animate" data-aos="fade-in">
                <div className="container">
                    <h2>Events</h2>
                </div>
            </div>


            {/* Events Section */}
            <div className="how-section1">
                {/* Event 1 */}
                <div className="row">
                    <div className="col-md-6 how-img">
                        <img src="assets/img/eventmarch22.jpeg" className="img-fluid " alt="Event"/>
                    </div>
                    <div className="col-md-6">
                        <h4><b>Name Of Event:</b></h4>
                        <p className="text-muted">SuShodh Bagda Research Award-2022</p><br/>

                        <h4><b>Date:</b></h4>
                        <p className="text-muted">Nomination Period for Awards 1st March - 10th April 2022</p> <br/>

                        <p className="text-muted">
                            The purpose of <b>SuShodh Bagda Award-2022</b> is to recognize those who have made
                            significant contributions in Research that have influenced positive change in the
                            field of academic, clinical, and administrative research over an extended period
                            from Jan 2021 to March 2022.
                        </p><br/>

                        <h4>File your Nomination here:</h4>
                        <a href="https://forms.gle/3DU6c4jrbeB7yGCL9" className="text-muted">
                            https://forms.gle/3DU6c4jrbeB7yGCL9
                        </a>
                    </div>
                </div>
                <br/>
                <br/>

                {/* Event 2 */}
                <div className="row">
                    <div className="col-md-6">
                        <h4><b>Name Of Event:</b></h4>
                        <p className="text-muted">Research writing and publication conference.</p><br/>

                        <h4><b>Date:</b></h4>
                        <p className="text-muted">17th JAN 2022</p> <br/>

                        <h4><b>Venue:</b></h4>
                        <p className="text-muted">
                            Government College of Nursing Ajmer (Associated J.L.N. Hospital, Rajkiya Mahila
                            Chikitsalay Campus, Lohagal)
                        </p><br/>
                    </div>
                    <div className="col-md-6 how-img">
                        <img src="assets/img/event1.jpg" className="img-fluid" alt="Event"/>
                    </div>
                </div>
                <br/>
                <br/>

                {/* Event 3 */}
                <div className="row">
                    <div className="col-md-6 how-img">
                        <img src="assets/img/FB_IMG_15832296781204725.jpg" className="img-fluid"
                             alt="Event"/><br/><br/>
                        <img src="assets/img/FB_IMG_158.jpg" className="img-fluid" alt="Event"/>
                    </div>
                    <div className="col-md-6">
                        <h4><b>Name Of Event:</b></h4>
                        <p className="text-muted">National conference on novel coronavirus infection.</p><br/>

                        <h4><b>Date:</b></h4>
                        <p className="text-muted">14 March 2020</p> <br/>

                        <h4><b>Venue:</b></h4>
                        <p className="text-muted">SuShodh Edutech Private Limited</p><br/>
                    </div>
                </div>
                <br/>
                <br/>
                {/* Event 4 */}
                <div className="row">
                    <div className="col-md-6">
                        <h4><b>Name Of Event:</b></h4>
                        <p className="text-muted">Research Workshop.</p><br/>

                        <h4><b>Date:</b></h4>
                        <p className="text-muted">24 June to 29 June 2018</p><br/>

                        <h4><b>Venue:</b></h4>
                        <p className="text-muted">SuShodh Edutech Private Limited</p><br/>
                    </div>
                    <div className="col-md-6 how-img">
                        <img src="assets/img/agendda.JPG" className="img-fluid" alt="Event"/>
                        <img src="assets/img/agendda1.JPG" className="img-fluid" alt="Event"/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Events;