import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Events from '../pages/Events/Events'
import EventDetails from '../pages/Events/EventDetains'

import Venues from '../pages/Venues/Venues'
import VenueDetails from '../pages/Venues/VenueDetails'

import Artists from '../pages/Artists/Artists'
import ArtistDetails from '../pages/Artists/ArtistDetails'


import Settings from '../pages/Settings'
import Help from '../pages/Help'


const Routers = ( ) => {
    return (
    <Routes>
        <Route path = "/home" element={<Home/>} />
        <Route path = "/events" element={<Events/>} />
        <Route path = "/events/:id" element={<EventDetails/>} />
        <Route path = "/venues" element={<Venues/>} />
        <Route path = "/venues/:id" element={<VenueDetails/>} />
        <Route path = "/artists" element={<Artists/>} />
        <Route path = "/artists/:id" element={<ArtistDetails/>} />
        <Route path = "/help" element={<Help/>} />
        <Route path = "/settings" element={<Settings/>} />
    </Routes>
    );
};

export default Routers;