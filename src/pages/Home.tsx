


import LatestNews from "src/components/Latest/LatestNews";
import Books from "../components/books/Books"
import Courses from "src/components/cources/Cources";
function Home(props) {

  return (
    <div className="bg-[#0a0a0a]  text-[#fff] ">

      <div className=" max-w-full  relative">
        <img alt="banner" className="w-full absloute" src={process.env.PUBLIC_URL + '../../banner.webp'} />
        {/* <button className="absloute top-50%">d</button> */}
      </div>

      <LatestNews />
      <Courses/>
      <Books/>
    </div>
  );
}

export default Home;
