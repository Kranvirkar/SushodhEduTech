const Counts = () => {
    return (
        <section id="counts" className="counts section-bg">
            <div className="container">
                <div className="row counters">
                    <div className="col-lg-3 col-6 text-center">
                        <span data-toggle="counter-up">416</span>
                        <p>Students</p>
                    </div>
                    <div className="col-lg-3 col-6 text-center">
                        <span data-toggle="counter-up">8</span>
                        <p>Courses</p>
                    </div>
                    <div className="col-lg-3 col-6 text-center">
                        <span data-toggle="counter-up">28</span>
                        <p>Events</p>
                    </div>
                    <div className="col-lg-3 col-6 text-center">
                        <span data-toggle="counter-up">32</span>
                        <p>Trainers</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Counts;