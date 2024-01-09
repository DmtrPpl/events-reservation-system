import React from 'react'
import CommonSection from '../../UI/CommonSection/CommonSection'
import EventList from '../../UI/EventCard/eventsList'
import Helmet from '../../Helmet/Helmet'


function Events() {
  return (
    <Helmet title='Events'>
    <div>
       <CommonSection title = "Events" />
       <div className="footer-line"></div>
       <EventList />
    </div>
    </Helmet>
  )
}

export default Events