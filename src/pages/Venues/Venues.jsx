import React from 'react'
import VenuesList from '../../UI/VenueCard/VenueList'
import CommonSection from '../../UI/CommonSection/CommonSection'

function Venues() {
  return (
    <div>
      <CommonSection title = "Venues" />
      <div className="footer-line"></div>
      <VenuesList />
    </div>
  )
}

export default Venues