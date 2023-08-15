import React from 'react'
import LogedPatient from '../components/LogedPatient'
import Apropos from '../components/Apropos'
import Questions from '../components/Questions'
import About from '../components/About'

const LogedUser = () => {
  return (
    <div>
        <LogedPatient />
        <Apropos />
        <Questions />
        <About />

    </div>
  )
}

export default LogedUser