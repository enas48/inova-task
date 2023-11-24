import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { FaChevronDown } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
const Header = () => {
  const [openNav, setOpenNav] = useState(false);


  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex bg-[#1e1e1e]  text-[#fff]  flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-10">
      <Typography
        as="li"
        variant="small"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <Link to="/" className="flex items-center text-[#55e748] ">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"

        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <Menu>
          <MenuHandler>
            <Button className='flex items-center gap-2'>News <FaChevronDown /></Button>
          </MenuHandler>
          <MenuList>
            <MenuItem>All News</MenuItem>
            <MenuItem>Olympia Tournaments</MenuItem>

          </MenuList>
        </Menu>
      </Typography>
      <Typography
        as="li"
        variant="small"

        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <Link to="/" className="flex items-center  ">
          Courses
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"

        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <Link to="/" className="flex items-center  ">
          E-books
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"

        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <Link to="/" className="flex items-center  ">

          Contact Us
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"

        className="flex items-center gap-x-2 p-1 ml-auto font-medium"
      >
        <Link to="/" className="flex items-center  ">
          <FaShoppingCart />
          Cart
        </Link>
      </Typography>




    </ul>
  );


  return (
    <header className='bg-[#0a0a0a]  w-100 '>
      <Navbar className="mx-auto bg-[#0a0a0a]  text-[#fff] max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 border-b-2 border-slate-400">
        <div className="containجer mx-auto flex items-center justify-between text-blue-gray-900">


          <Typography
            className="ml-auto cursor-pointer py-1.5 font-medium "
          >
            العربية
          </Typography>

        </div>
      </Navbar>


      <Navbar className="mx-auto max-w-screen-xl bg-[#0a0a0a]  text-[#fff] px-4 py-2 lg:px-8 lg:py-4">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Link to='/'>


            <img alt="logo" src={process.env.PUBLIC_URL + '../../logo.svg'} />

          </Link>



          <div className="flex items-center ">
            <Link to="/">

              <Button variant="text" size="sm" className="hidden p-1 lg:inline-block ">
                <span>Sign In</span>
              </Button>
            </Link>or
            <Link to="/">
              <Button
                variant="gradient"
                size="sm"
                className="hidden  p-1 lg:inline-block "
              >
                <span>Sign up</span>
              </Button>
            </Link>
          </div>



          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-[#0f1e25] hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>


        <MobileNav open={openNav}>
          <div className="container mx-auto">

            <div className="flex items-center lg:hidden">
              <Link to="/">
                <Button fullWidth variant="text" size="sm" className=" p-1">
                  <span>Sign In</span>
                </Button>
              </Link>or
              <Link to="/">
                <Button
                  fullWidth
                  variant="gradient"
                  size="sm"
                  className="p-1"
                >
                  <span>Sign up</span>
                </Button>
              </Link>
            </div>

          </div>
          {navList}
        </MobileNav>
      </Navbar>
      <Navbar className="mx-auto bg-[#1e1e1e]   text-[#fff] max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 border-b-2 border-slate-400">
        <div className="hidden lg:block">{navList}</div>
      </Navbar>
    </header>

  )
}

export default Header