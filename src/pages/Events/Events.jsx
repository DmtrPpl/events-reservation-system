import React from 'react'
import CommonSection from '../../UI/CommonSection/CommonSection'
import EventList from '../../UI/EventCard/eventsList'


function Events() {
  return (
    <div>
       <CommonSection title = "Events" />
       <div className="footer-line"></div>
       <EventList />
    </div>
  )
}

export default Events