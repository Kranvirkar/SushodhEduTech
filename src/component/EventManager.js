import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventForm from './EventForm';
import EventList from './EventList';
import { Container, Button, Spinner } from 'react-bootstrap';
import Dashboard from "../pages/Dashboard";
import DashboardHeader from "./DashboardHeader";

const EventManager = () => {
    const [events, setEvents] = useState([]);
    const [editingEvent, setEditingEvent] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:3001/api/events') // Replace with your actual API endpoint
            .then(response => {
                setEvents(response.data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching events:', err);
                setLoading(false);
            });
    }, []);

    const handleSave = (event) => {
        if (editingEvent) {
            const updated = events.map(e => e.id === editingEvent.id ? event : e);
            setEvents(updated);
        } else {
            setEvents([...events, { ...event, id: Date.now() }]);
        }
        setEditingEvent(null);
        setShowForm(false);
    };

    const handleEdit = (event) => {
        setEditingEvent(event);
        setShowForm(true);
    };

    const handleDelete = (id) => {
        setEvents(events.filter(e => e.id !== id));
    };

    if (loading) return <Spinner animation="border" variant="primary" className="m-5" />;

    return (

        <Container className="mt-3">
            <DashboardHeader></DashboardHeader>
            <Button className="mb-3" onClick={() => { setEditingEvent(null); setShowForm(true); }}>
                Add Event
            </Button>
            <EventList events={events} onEdit={handleEdit} onDelete={handleDelete} />
            <EventForm
                show={showForm}
                onClose={() => setShowForm(false)}
                onSave={handleSave}
                event={editingEvent}
            />
        </Container>
    );
};

export default EventManager;
