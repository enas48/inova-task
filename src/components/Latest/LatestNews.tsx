import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
const LatestNews = () => {
  return (
    <div className="mx-auto max-w-screen-xl bg-[#0a0a0a]  text-[#fff] px-4 py-2 lg:px-8 lg:py-4">
      <h1 className='text-5xl text-center'>Latest News</h1>
      <div className="grid grid-cols-1  md:grid-cols-3 gap-4">

        <Card className="mt-6 w-96 bg-[#222222] p-3  text-[#fff]">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>

          </CardBody>
          <CardFooter className="pt-0">
            <Button>Blog</Button>
          </CardFooter>
        </Card>
        <Card className="mt-6 w-96 bg-[#222222] p-3  text-[#fff]">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>

          </CardBody>
          <CardFooter className="pt-0">
            <Button>Blog</Button>
          </CardFooter>
        </Card>
        <Card className="mt-6 w-96 bg-[#222222] p-3  text-[#fff]">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>

          </CardBody>
          <CardFooter className="pt-0">
            <Button>Blog</Button>
          </CardFooter>
        </Card>
        <Card className="mt-6 w-96 bg-[#222222] p-3  text-[#fff]">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>

          </CardBody>
          <CardFooter className="pt-0">
            <Button>Blog</Button>
          </CardFooter>
        </Card>
        <Card className="mt-6 w-96 bg-[#222222] p-3  text-[#fff]">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>

          </CardBody>
          <CardFooter className="pt-0">
            <Button>Blog</Button>
          </CardFooter>
        </Card>
        <Card className="mt-6 w-96 bg-[#222222] p-3  text-[#fff]">
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              UI/UX Review Check
            </Typography>

          </CardBody>
          <CardFooter className="pt-0">
            <Button>Blog</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default LatestNews