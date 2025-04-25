import { useEffect, useState } from "react";
import axios from "axios";

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/api/events")
            .then((response) => {
                setEvents(response.data);
            })
            .catch((error) => {
                console.error("Error fetching events:", error);
            });
    }, []);

    return (
        <main id="main">
            <div className="breadcrumbs aos-init aos-animate" data-aos="fade-in">
                <div className="container">
                    <h2>Events</h2>
                </div>
            </div>

            <div className="how-section1">
                {events.map((event, index) => {
                    const imageContent = (
                        <div className="col-md-6 how-img">
                            {event.image && (
                                <img src={event.image} className="img-fluid" alt={`Event ${index + 1}`} />
                            )}
                            {event.images && event.images.map((img, idx) => (
                                <img key={idx} src={img} className="img-fluid" alt={`Event ${index + 1} - ${idx + 1}`} />
                            ))}
                        </div>
                    );

                    const textContent = (
                        <div className="col-md-6">
                            <h4><b>Name Of Event:</b></h4>
                            <p className="text-muted">{event.name}</p><br />

                            <h4><b>Date:</b></h4>
                            <p className="text-muted">{event.date}</p><br />

                            {event.venue && (
                                <>
                                    <h4><b>Venue:</b></h4>
                                    <p className="text-muted">{event.venue}</p><br />
                                </>
                            )}

                            {event.description && <p className="text-muted">{event.description}</p>}

                            {event.nominationLink && (
                                <>
                                    <h4>File your Nomination here:</h4>
                                    <a href={event.nominationLink} className="text-muted" target="_blank" rel="noreferrer">
                                        {event.nominationLink}
                                    </a>
                                </>
                            )}
                            <br />
                            <br />
                        </div>
                    );

                    return (
                        <div className="row" key={event.id || index}>
                            {index % 2 === 0 ? (
                                <>
                                    {textContent}
                                    {imageContent}
                                </>
                            ) : (
                                <>
                                    {imageContent}
                                    {textContent}
                                </>
                            )}
                            <br /><br />
                        </div>
                    );
                })}
            </div>
        </main>
    );
};

export default Events;
