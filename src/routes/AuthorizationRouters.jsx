import { Routes, Route } from 'react-router-dom'

import Login from '../pages/Login'
import Signup from '../pages/Signup'


const AuthorizationRouters = ( ) => {
    return (
    <Routes>
        <Route path="/" element={<Signup/>} />
        <Route path = "/signup" element={<Signup/>} />
        <Route path = "/login" element={<Login/>} />
    </Routes>
    );
};

export default AuthorizationRouters;