import React, { useRef, useState } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
//import interactionPlugin from '@fullcalendar/interaction'
import AddEventModal from './AddEventModal';
import axios from "axios";
import moment from "moment";

export default function () {
    const [modalOpen, setModalOpen] = useState(false);
    const [events, setEvents] = useState([]);
    const calendarRef = useRef(null);

    const onEventAdded = event => {
        let calendarApi = calendarRef.current.getApi()
        calendarApi.addEvent({
            start: moment(event.start).toDate(),
            end: moment(event.end).toDate(),
            title: event.title
        });
    };

    async function handleEventAdd(data) {
        await axios.post('/api/calendar/create-event', data.event);
        console.log('works', data.event);
    }

    async function handleDatesSet(data) {
        const response = await axios.get("/api/calendar/get-events?start=" +moment(data.start).toISOString() +"&end="+moment(data.end).toISOString())
        setEvents(response.data);
    }
    /*
    async function handleEventDelete(data){

    }
    */
    return (
        <section>
            <button onClick={() => setModalOpen(true)}>Add Event</button>
                <div style ={{position: "relative", zIndex: 0}}>
                    <FullCalendar
                        ref={calendarRef}
                        events={events}
                        plugins={[dayGridPlugin]}
                        /*headerToolbar={{
                            left: 'prev,next today',
                            center: 'title',
                            right: 'dayGridMonth,timeGridWeek,timeGridDay'
                          }}*/
                        initialView="dayGridMonth"
                        eventAdd={(event) => handleEventAdd(event)}
                        datesSet ={(date) => handleDatesSet(date)}
                        //eventDelete={(event) => handleEventDelete(event)}
                    />
                </div>

            <AddEventModal 
            isOpen={modalOpen} 
            onClose={() => setModalOpen(false)} 
            onEventAdded={event => onEventAdded(event)}
            />

        </section>
    )
/*
    renderSidebar() {
        return (
          <div className='demo-app-sidebar'>
            <div className='demo-app-sidebar-section'>
              <h2>Instructions</h2>
              <ul>
                <li>Select dates and you will be prompted to create a new event</li>
                <li>Drag, drop, and resize events</li>
                <li>Click an event to delete it</li>
              </ul>
            </div>
            <div className='demo-app-sidebar-section'>
              <label>
                <input
                  type='checkbox'
                  checked={this.state.weekendsVisible}
                  onChange={this.handleWeekendsToggle}
                ></input>
                toggle weekends
              </label>
            </div>
            <div className='demo-app-sidebar-section'>
              <h2>All Events ({this.state.currentEvents.length})</h2>
              <ul>
                {this.state.currentEvents.map(renderSidebarEvent)}
              </ul>
            </div>
          </div>
        )
      }
      */
}