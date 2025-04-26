import React, { useEffect, useState, useCallback, useRef } from 'react';
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

    const [validated, setValidated] = useState(false);
    const formRef = useRef(null); // reference to the form

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

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = formRef.current;
        if (form && form.checkValidity() === false) {
            e.stopPropagation();
            setValidated(true);

            // Auto-focus first invalid field
            const firstInvalidField = form.querySelector(':invalid');
            if (firstInvalidField) {
                firstInvalidField.focus();
            }
            return;
        }

        const newEvent = { ...event, ...formData };
        onSave(newEvent);
        onClose(); // Close modal after save
    };

    return (
        <Modal show={show} onHide={onClose} centered>
            <Form noValidate validated={validated} onSubmit={handleSubmit} ref={formRef}>
                <Modal.Header closeButton>
                    <Modal.Title>{event ? 'Edit Event' : 'Add New Event'}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form.Group className="mb-3" controlId="eventName">
                        <Form.Label>Event Name</Form.Label>
                        <Form.Control
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter event name"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Event name is required.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="eventDate">
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                            name="date"
                            type="date"
                            value={formData.date}
                            onChange={handleChange}
                            placeholder="DD-MM-YYYY"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Date is required.
                        </Form.Control.Feedback>
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="eventDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            placeholder="Event description"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Description is required.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="eventVenue">
                        <Form.Label>Venue</Form.Label>
                        <Form.Control
                            name="venue"
                            value={formData.venue}
                            onChange={handleChange}
                            placeholder="Venue"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Venue is required.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="eventImage">
                        <Form.Label>Image Attachment(s)</Form.Label>
                        <Form.Control
                            name="image"
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={(e) => {
                                const files = Array.from(e.target.files);
                                setFormData(prev => ({
                                    ...prev,
                                    image: files
                                }));
                            }}
                            required={!event?.image || event.image.length === 0}
                        />
                        <Form.Control.Feedback type="invalid">
                            Please attach at least one image.
                        </Form.Control.Feedback>
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="eventNominationLink">
                        <Form.Label>Nomination Link</Form.Label>
                        <Form.Control
                            name="nominationLink"
                            value={formData.nominationLink}
                            onChange={handleChange}
                            placeholder="Paste nomination form link"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Nomination link is required.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>Cancel</Button>
                    <Button variant="primary" type="submit">
                        {event ? 'Update Event' : 'Create Event'}
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};

export default React.memo(EventForm);
