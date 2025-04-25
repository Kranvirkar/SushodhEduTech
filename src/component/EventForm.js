import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EventForm = ({ show, onClose, onSave, event }) => {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        description: '',
        venue: '',
        image: '',
        nominationLink: ''
    });

    useEffect(() => {
        if (event) {
            setFormData({
                name: event.name || '',
                date: event.date || '',
                description: event.description || '',
                venue: event.venue || '',
                image: event.image || '',
                nominationLink: event.nominationLink || ''
            });
        } else {
            setFormData({
                name: '',
                date: '',
                description: '',
                venue: '',
                image: '',
                nominationLink: ''
            });
        }
    }, [event]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        const newEvent = {
            ...event,
            ...formData
        };
        onSave(newEvent);
    };

    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>{event ? 'Edit Event' : 'Add New Event'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Event Name</Form.Label>
                        <Form.Control
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter event name"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            placeholder="e.g. 1st March - 10th April 2025"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Event description"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Venue</Form.Label>
                        <Form.Control
                            name="venue"
                            value={formData.venue}
                            onChange={handleChange}
                            placeholder="Venue"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            placeholder="e.g. assets/img/eventmarch22.jpeg"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Nomination Link</Form.Label>
                        <Form.Control
                            name="nominationLink"
                            value={formData.nominationLink}
                            onChange={handleChange}
                            placeholder="Paste nomination form link"
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>Cancel</Button>
                <Button variant="primary" onClick={handleSubmit}>
                    {event ? 'Update Event' : 'Create Event'}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EventForm;
