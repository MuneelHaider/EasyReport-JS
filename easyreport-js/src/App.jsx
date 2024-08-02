import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import LoginPage from './components/login'
import Navbar from './components/navbar'
//import Availability from './components/AvaibiltyList'
import Appointment from './components/DoctorAppointment'

function App() {
 // 

  return (
    <div className="App">

<div>
<Navbar />
</div>

<div >
<Appointment />
</div>


    </div>
  )
}

export default App
