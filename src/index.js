import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./general.css"
import Login from './my_components/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllRequests from './my_components/all-requests';
import Archives from './my_components/archives';
import OfferSend from './my_components/offerSend';
import RegisteredOk from './my_components/registeredOk';
import AgencyContextApi from './my_components/agencyContextApi';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AgencyContextApi>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App/>}/>
              <Route path="/registeredOk" element={<RegisteredOk/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/requests" element={<AllRequests/>}/>
              <Route path="/archives" element={<Archives/>}/>
              <Route path="/offerSend" element={<OfferSend/>}/>
        </Routes>
      </BrowserRouter>
    </AgencyContextApi>
</React.StrictMode>
);