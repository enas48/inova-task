import React from 'react'
import {
  Typography,
  Button,
} from "@material-tailwind/react";
const Footer = () => {
  return (
    <div className='bg-[#1e1e1e] flex-col  w-full flex items-center justify-center'>

      <div className='"mx-auto  bg-[#1e1e1e] border-b-2 border-slate-400  text-[#fff] max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 '>
        <div className="columns-1 lg:columns-3 ">
          <img alt="logo" src={process.env.PUBLIC_URL + '../../logo.svg'} />
          <div>
            Join our<br />
            Newsetter
          </div>


          <form action="#">
            <div className="max-w-sm mx-auto p-1 pr-0 flex items-center">
              <input type="email" placeholder="yourmail@example.com"
                className="flex-1 appearance-none rounded shadow p-3 text-grey-dark mr-2 focus:outline-none" />
              <button type="submit"
                className="bg-[#55e748]  text-white text-base font-semibold rounded-md shadow-md  p-3">Subscribe</button>
            </div>
          </form>

        </div>
      </div>


      <div className='"mx-auto bg-[#1e1e1e] mb-0 text-[#fff] max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 '>
        <div className="columns-1 lg:columns-3 ">
          <div>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Lorem Ipsum is simply dummy text of the printing and typesett ing industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </Typography>
          </div>
          <div>
            <ul className="mt-2 mb-4 flex flex-col bg-[#1e1e1e]  text-[#fff] gap-2">

              <Typography
                as="li"
                variant="small"
                className="flex items-center gap-x-2 p-1 font-medium"
              >
                <Button className='flex items-center gap-2'>Home </Button>

              </Typography>
              <Typography
                as="li"
                variant="small"
                className="flex items-center gap-x-2 p-1 font-medium"
              >
                <Button className='flex items-center gap-2'>News </Button>

              </Typography>
              <Typography
                as="li"
                variant="small"

                className="flex items-center gap-x-2 p-1 font-medium"
              >
                Courses

              </Typography>
              <Typography
                as="li"
                variant="small"

                className="flex items-center gap-x-2 p-1 font-medium"
              >

                E-books

              </Typography>
              <Typography
                as="li"
                variant="small"

                className="flex items-center gap-x-2 p-1 font-medium"
              >


                Contact Us

              </Typography>




            </ul>
          </div>
          <div>
            <ul className="mt-2 mb-4 flex flex-col bg-[#1e1e1e]  text-[#fff] gap-2">

              <Typography
                as="li"
                variant="small"
                className="flex items-center gap-x-2 p-1 font-medium"
              >
                <Button className='flex items-center gap-2'>Home </Button>

              </Typography>
              <Typography
                as="li"
                variant="small"
                className="flex items-center gap-x-2 p-1 font-medium"
              >
                <Button className='flex items-center gap-2'>News </Button>

              </Typography>
              <Typography
                as="li"
                variant="small"

                className="flex items-center gap-x-2 p-1 font-medium"
              >
                Courses

              </Typography>
              <Typography
                as="li"
                variant="small"

                className="flex items-center gap-x-2 p-1 font-medium"
              >

                E-books

              </Typography>
              <Typography
                as="li"
                variant="small"

                className="flex items-center gap-x-2 p-1 font-medium"
              >
                Contact Us
              </Typography>
            </ul>
          </div>
        </div>
      </div>

      <div className='"mx-auto border-b-2 border-slate-400  text-[#fff] max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 '>
      <Typography variant="h5" color="blue-gray" className="w-full absolute left-0 right-0 bg-[#0e0e0e] text-center p-2">
      2023 LOGO. All Rights Reserved.
        </Typography>
      </div>
    </div >
  )
}

export default Footer