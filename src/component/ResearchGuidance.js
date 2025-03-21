import React from 'react';

function ResearchGuidance(props) {
    return (
        <>
            <div className="breadcrumbs" data-aos="fade-in">
                <div className="container">
                    <h2>Research Guidance Process</h2>
                </div>
            </div>
            <br/>
            <h4 style={{color: "darkgray"}}>
                We provide advice for completing doctoral research at every level of your research Dissertations at
                SuShodh.
                Whether you are just beginning the process of picking a subject or preparing a proposal, or have
                progressed enough and want assistance with analysis, we can provide a customised solution to help you
                overcome the bottleneck. You may engage a PhD guide to provide consistent direction.
            </h4>
            <br/>
            <h3 style={{color: "#5fcf80"}}>
                Over the years, we've refined our advisory methodology. The following are some significant features of
                this approach.
            </h3>
            <div className="how-section1">
                <div className="row">
                    <div className="col-md-3 how-img">
                        <img
                            src="assets/img/research/meeting.png"
                            className="rounded-circle img-fluid"
                            alt="Meeting"
                        />
                    </div>
                    <div className="col-md-9 serviceBox">
                        <h4>Step 1: Straight Meeting</h4>
                        <p className="text-muted">
                            Our goal with this service is to provide direct mentoring and
                            guidance to the candidate from our experts. To prevent
                            inconveniencing either company, only email communication is
                            available. Additionally, a weekly update call may be arranged upon
                            request.
                        </p>
                    </div>
                </div>
                <br/><br/><br/>
                <div className="row">
                    <div className="col-md-9 serviceBox">
                        <h4>Step 2: Working</h4>
                        <p className="text-muted">
                            In the initial level, work/consultation is given in skeleton style.
                            After a few iterations of this basic framework, a draft is offered
                            for discussion, and the work is then sent to the editor, who
                            polishes and completes the write-up.
                        </p>
                    </div>
                    <div className="col-md-3 how-img">
                        <img
                            src="assets/img/research/working.png"
                            className="rounded-circle img-fluid"
                            alt="Working"
                        />
                    </div>
                </div>
                <br/><br/><br/>
                <div className="row">
                    <div className="col-md-3 how-img">
                        <img
                            src="assets/img/research/statistics.png"
                            className="rounded-circle img-fluid"
                            alt="Statistics"
                        />
                    </div>
                    <div className="col-md-9 serviceBox">
                        <h4>Step 3: Involve a Statistician</h4>
                        <p className="text-muted">
                            The statistician participating (if any) works in a similar manner to
                            that described above, but with a more collaborative approach.
                            Before providing the proper answer, the statistician will explain
                            the study design, data cleaning, and several other details.
                        </p>
                    </div>
                </div>
                <br/><br/><br/>
                <div className="row">
                    <div className="col-md-9 serviceBox">
                        <h4>Step 4: Modifications/Revisions</h4>
                        <p className="text-muted">
                            You may request revisions to the written report or study design, as
                            long as they are justified. However, since we are not only a writing
                            service and work collaboratively, modifications are welcome till
                            submitted.
                        </p>
                    </div>
                    <div className="col-md-3 how-img">
                        <img
                            src="assets/img/research/revision.png"
                            className="img-fluid"
                            alt="Revisions"
                        />
                    </div>
                </div>
                <br/><br/><br/>
                <div className="row">
                    <div className="col-md-3 how-img">
                        <img
                            src="assets/img/research/contact.png"
                            className="rounded-circle img-fluid"
                            alt="Contact"
                        />
                    </div>
                    <div className="col-md-9 serviceBox">
                        <h4>Step 5: Query Resolution</h4>
                        <p className="text-muted">
                            Query resolution is strictly restricted to three times through
                            email. Additional consultations will be billed separately.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

            export default ResearchGuidance;