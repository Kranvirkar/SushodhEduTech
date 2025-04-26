import { useEffect, useState } from "react";
import axios from "axios";
import config from "../services/config";

const Events = () => {
    const [events, setEvents] = useState([]);
    const url =process.env.API_BASE_URL;
    console.log(url)
    useEffect(() => {
        axios.get(`${config.API_BASE_URL}/events`)
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
                            {event.images && event.images.length > 0 && event.images.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img.image.startsWith("data:") ? img.image : `data:image/jpeg;base64,${img.image}`}
                                    className="img-fluid mb-2"
                                    alt={`Event ${index + 1} - ${idx + 1}`}
                                    loading="lazy"
                                />
                            ))}
                        </div>
                    );

                    const textContent = (
                        <div className="col-md-6">
                            <h4><b>Name Of Event:</b></h4>
                            <p className="text-muted">{event.name}</p><br/>

                            <h4><b>Date:</b></h4>
                            <p className="text-muted">{event.date}</p><br/>

                            {event.venue && (
                                <>
                                    <h4><b>Venue:</b></h4>
                                    <p className="text-muted">{event.venue?.trim()}</p><br/>
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
                            <br/><br/>
                        </div>
                    );

                    return (
                        <div className="row mb-5" key={event.id || index}>
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
                        </div>
                    );
                })}
            </div>
        </main>
    );
};

export default Events;
