import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const EventList = ({ events, onEdit, onDelete }) => {
    return (
        <Row>
            {events.map(event => (
                <Col md={6} lg={4} key={event.id} className="mb-4">
                    <Card>
                        {event.image && <Card.Img variant="top" src={event.image} />}
                        <Card.Body>
                            <Card.Title>{event.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{event.date}</Card.Subtitle>
                            {event.venue && <Card.Text><strong>Venue:</strong> {event.venue}</Card.Text>}
                            {event.description && <Card.Text>{event.description}</Card.Text>}
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
                            <Button variant="info" size="sm" onClick={() => onEdit(event)} className="me-2">Edit</Button>
                            <Button variant="danger" size="sm" onClick={() => onDelete(event.id)}>Delete</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default EventList;
