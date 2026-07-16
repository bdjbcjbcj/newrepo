import React from 'react'
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
function  Nav() {
  return (
    <div>
        


    <Navbar fluid rounded className='bg-red-200 p-4'>
      <NavbarBrand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse className='' >
        <NavbarLink href="#" active>
          Home
        </NavbarLink>
        <NavbarLink href="#about">About</NavbarLink>
        <NavbarLink href="#Services">Services</NavbarLink>
        <NavbarLink href="#pricing">Pricing</NavbarLink>
        <NavbarLink href="#contact">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>

    </div>
  )
}

export default  Nav