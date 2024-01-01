import { Routes, Route } from 'react-router-dom'

import Login from '../pages/Login'
import Signup from '../pages/Signup'

import Home from '../pages/Home'
import Events from '../pages/Events/Events'
import EventDetails from '../pages/Events/EventDetains'

import Venues from '../pages/Venues/Venues'
import VenueDetails from '../pages/Venues/VenueDetails'

import Artists from '../pages/Artists/Artists'
import ArtistDetails from '../pages/Artists/ArtistDetails'


import Settings from '../pages/Settings'
import Help from '../pages/Help'
import Layout from '../Layout/Layout'


const Routers = ( ) => {
    return (
        <Routes>
            <Route path="/" element={<Signup/>} />
            <Route path = "/signup" element={<Signup/>} />
            <Route path = "/login" element={<Login/>} />
            <Route path="/" element={<Layout />}> 
            <Route path = "/home" element={<Home/>} />
            <Route path = "/events" element={<Events/>} />
            <Route path = "/events/:id" element={<EventDetails/>} />
            <Route path = "/venues" element={<Venues/>} />
            <Route path = "/venues/:id" element={<VenueDetails/>} />
            <Route path = "/artists" element={<Artists/>} />
            <Route path = "/artists/:id" element={<ArtistDetails/>} />
            <Route path = "/help" element={<Help/>} />
            <Route path = "/settings" element={<Settings/>} />
            </Route>
        </Routes>
    );
};

export default Routers;