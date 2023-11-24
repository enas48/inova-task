import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState<any>();

  useEffect(() => {
    const fetchProjects = async () => {
      try {

        const result = await axios(`http://3.65.32.166/api/v2/storefront/products/${id}`, {
          headers: {
            Accept: "application/json",
          },
        });

        const data = result.data.data;
        setBook(data);
        console.log(data.attributes.book?.image_url)
      } catch (err) {
        console.log(err);

      }
    };

    fetchProjects();
  }, []);
  return (
    <div className=" bg-[#0a0a0a]  text-[#fff] max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 mx-auto">

      <h1>{book?.attributes?.name}</h1>
      <img src={book?.attributes.book.image_url} alt='' />
    </div>
  )
}

export default BookDetails