import React from 'react'
import Client from '../layout/client/Client'
import Download from '../layout/download/Download'
import Gift from '../layout/gift/Gift'

const LandingPage = () => {
  return (
    <div>
      <Gift />
      <Client />
      <Download />
    </div>
  )
}

export default LandingPage