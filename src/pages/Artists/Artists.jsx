import React from 'react'
import ArtistsList from '../../UI/ArtistCard/artistList'
import CommonSection from '../../UI/CommonSection/CommonSection'


function Artists() {
  return (
    <div>
       <CommonSection title = "Artists" />
       <div className="footer-line"></div>
      <ArtistsList />
    </div>
  )
}

export default Artists