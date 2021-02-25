import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/blogs') //fetch data from our json-server
            .then(res => {
                if (!res.ok) { // error coming back from server
                    throw Error('could not fetch the data for that resource');
                } 
                return res.json(); //convert json-object into javascript objects
            })
            .then(data => {
                console.log(data); //data is now an array of objects
                setBlogs(data);
                setIsPending(false); //used to create loading message while data is being fetched
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);
                setError(null);
            })
    }, []);

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