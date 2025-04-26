import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import './EventList.css'; // We'll create this css file

const EventList = ({ events, onEdit, onDelete }) => {
    return (
        <Row>
            {events.map(event => (
                <Col md={6} lg={4} key={event.id} className="mb-4">
                    <Card className="shadow event-card h-100">
                        {event.images && event.images.length > 0 && (
                            <Card.Img variant="top" src={event.images[0].image} className="event-image" />
                        )}
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>{event.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{event.date}</Card.Subtitle>
                            {event.venue && <Card.Text><strong>Venue:</strong> {event.venue}</Card.Text>}
                            {event.description && (
                                <Card.Text className="event-description">
                                    {event.description}
                                </Card.Text>
                            )}
                            <div className="mt-auto d-flex">
                                {event.nominationLink && (
                                    <Button
                                        variant="outline-primary"
                                        size="sm"
                                        href={event.nominationLink}
                                        target="_blank"
                                        className="me-2"
                                    >
                                        Nominate
                                    </Button>
                                )}
                                <div className="">
                                    <Button variant="info" size="sm" onClick={() => onEdit(event)} className="m-1">Edit</Button>
                                    <Button variant="danger" size="sm" onClick={() => onDelete(event.id)}>Delete</Button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>

    );
};

export default EventList;
