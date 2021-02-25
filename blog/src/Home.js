import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    // useEffect(() => { //runs every time website renders (when state changes)
    //     console.log('use effect ran');
    // }, [name]); //empty array will make it run only on initial refresh
    //             //watches the name variable, if the value if it changes, the function runs

  return (
      <div className="home">
          {error && <div> {error} </div>}
          {isPending && <div>Loading...</div>} 
          {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}
 
export default Home;