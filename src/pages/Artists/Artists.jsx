import React from 'react'
import ArtistsList from '../../UI/ArtistCard/artistList'
import CommonSection from '../../UI/CommonSection/CommonSection'
import Helmet from '../../Helmet/Helmet'


function Artists() {
  return (
    <Helmet title='Artists'>
    <div>
       <CommonSection title = "Artists" />
       <div className="footer-line"></div>
      <ArtistsList />
    </div>
    </Helmet>
  )
}

export default Artists