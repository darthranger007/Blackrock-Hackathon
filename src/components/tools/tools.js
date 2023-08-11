import React from 'react'
import NavbarMain from '../homepage/NavbarMain';
import ContactUs from '../homepage/contact';
import '../../assets/css/tools.css'


const Tools = () => {
  return (
    <div>
      <NavbarMain />
      <br />
      <p id='mainhead'>Useful Links</p>
      <a id='link' href="https://npstrust.org.in/nps-calculator" target='_blank'>NPS Calculator</a>
      <br />
      <a id='link' href="https://groww.in/calculators/apy-calculator" target='_blank'>Atal pension Yojana Calculator</a>
      <br />
      <a id='link' href="https://www.mutualfundssahihai.com/en/calculators" target='_blank'>Mutual Fund Calculator</a>
      <br />
      <br></br>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <ContactUs />
    </div>
  )
}

export default Tools