import React, { useState, useEffect } from 'react';
import { Container, Button, Spinner } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import EventForm from './EventForm';
import EventList from './EventList';
import DashboardHeader from "./DashboardHeader";
import api from "../services/api";
import config from "../services/config";

const EventManager = () => {
    const [events, setEvents] = useState([]);
    const [editingEvent, setEditingEvent] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [loading, setLoading] = useState(true);
    const url=config.API_BASE_URL
    const fetchEvents = async () => {
        try {
            const response = await api.get(`${url}/events`);
            setEvents(response.data);
        } catch (err) {
            console.error("Error fetching events:", err);
            toast.error("Failed to load events.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    const handleSave = async (event) => {
        try {
            if (editingEvent) {
                await api.put(`${url}/events/${editingEvent.id}`, event);
                toast.success("Event updated successfully!");
            } else {
                await api.post(`${url}/events`, event);
                toast.success("Event created successfully!");
            }

            await fetchEvents();
            setEditingEvent(null);
            setShowForm(false);
        } catch (err) {
            console.error("Error saving event:", err);
            toast.error("Failed to save event. Please try again.");
        }
    };

    const handleEdit = (event) => {
        setEditingEvent(event);
        setShowForm(true);
    };

    const handleDelete = async (id) => {
        const confirm = window.confirm("Are you sure you want to delete this event?");
        if (!confirm) return;

        try {
            await api.delete(`${url}/events/${id}`);
            toast.success("Event deleted successfully!");
            await fetchEvents();
        } catch (err) {
            console.error("Error deleting event:", err);
            toast.error("\u274C Failed to delete event. Please try again.");
        }
    };

    if (loading) return <Spinner animation="border" variant="primary" className="m-5" />;

    return (
        <Container className="mt-3 pt-3">
            <DashboardHeader />
            <Button className="mt-5 mb-3" onClick={() => { setEditingEvent(null); setShowForm(true); }}>
                Add Event
            </Button>
            <EventList events={events} onEdit={handleEdit} onDelete={handleDelete} />
            <EventForm
                show={showForm}
                onClose={() => setShowForm(false)}
                onSave={handleSave}
                event={editingEvent}
            />
            <ToastContainer position="top-right" autoClose={3000} />
        </Container>
    );
};

export default EventManager;
