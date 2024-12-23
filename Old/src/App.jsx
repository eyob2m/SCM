import { Provider } from "react-redux"
import React from 'react'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Messages from "./pages/Messages"
import Notifications from "./pages/Notifications"
import Profile from "./pages/Profile"
import ProfileEdit from "./pages/ProfileEdit"
import Signup from "./pages/SignUp"
import Welcome from "./pages/Welcome"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { store } from "./app/store"


import Main from "./pages/main"
import Chatinbox from "./pages/ChatInbox"
function App() {

  return (
   <div className="max-w-[1920px] mx-auto">
    <Provider store={store}>
     <Router>
      <Routes>
        <Route  element={<Main />}>
        <Route path="/signup" element={<Signup />} />
        <Route path="/welcome" element={<Welcome />} />
    
     
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<ProfileEdit />} />
        <Route path="/chat/:name" element={<Chatinbox />} />
        <Route path="/login" element={<Login />} /></Route>
      </Routes>
    </Router>
    </Provider>
   </div>
  );
}
export default App
