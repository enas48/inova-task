import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {

        const result = await axios(`http://3.65.32.166/api/v2/storefront/products?filter[product_type]=digital&filter[sub_product_type]=book`, {
          headers: {
            Accept: "application/json",
          },
        });
        const data = result.data.data;
        setBooks(data);
      } catch (err) {
        console.log(err);

      }
    };

    fetchProjects();
  }, []);
  return (
    <div className="mx-auto max-w-screen-xl bg-[#0a0a0a]  text-[#fff] px-4 py-2 lg:px-8 lg:py-4">
      <h1 className='text-5xl text-center'>EXPLORE OUR E-BOOKS</h1>
      <Button className='bg-[#55e748] p-1 mt-2 mx-auto text-[#000] '>see All</Button>
      <div className="grid grid-cols-1  md:grid-cols-3 gap-4">
        {books.map((item) => (
          <Card className="mt-6 w-96 bg-[#222222] p-3  text-[#fff]">
            <CardHeader color="blue-gray" className="relative h-56">
              <img src={item?.attributes?.book?.image_url} alt="" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {item?.attributes?.name}
              </Typography>
           
            </CardBody>
            <CardFooter className="pt-0">
              <Link className="btn btn-primary btn-custom" to={`books/${item.id}`}>        <Button>Read More</Button></Link>

            </CardFooter>
          </Card>
        
))}
   

      </div>
    </div>
  )
}

export default Books