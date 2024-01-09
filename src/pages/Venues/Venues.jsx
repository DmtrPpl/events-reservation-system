import React from 'react'
import VenuesList from '../../UI/VenueCard/VenueList'
import CommonSection from '../../UI/CommonSection/CommonSection'
import Helmet from '../../Helmet/Helmet'

function Venues() {
  return (
    <Helmet title='Venues'>
    <div>
      <CommonSection title = "Venues" />
      <div className="footer-line"></div>
      <VenuesList />
    </div>
    </Helmet>
  )
}

export default Venues