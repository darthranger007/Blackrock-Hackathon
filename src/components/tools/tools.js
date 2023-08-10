import React from 'react'
import NavbarMain from '../homepage/NavbarMain';
import ContactUs from '../homepage/contact';

const Tools = () => {
  return (
    <div>
    <NavbarMain />
    <br />
      <a href="https://npstrust.org.in/nps-calculator" target='_blank'>NPS Calculator</a>
      <br />
      <a href="https://groww.in/calculators/apy-calculator" target='_blank'>Atal pension Yojana Calculator</a>
      <br />
      <a href="https://www.mutualfundssahihai.com/en/calculators" target='_blank'>Mutual Fund Calculator</a>
      <br />
      <ContactUs />
    </div>
  )
}

export default Tools