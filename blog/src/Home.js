import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);

    const [name, setName] = useState('mario');

    useEffect(() => {
        fetch('http://localhost:8000/blogs') //fetch data from our json-server
            .then(res => {
                return res.json(); //convert json-object into javascript objects
            })
            .then(data => {
                console.log(data); //data is now an array of objects
                setBlogs(data);
            });
    }, []);

    // useEffect(() => { //runs every time website renders (when state changes)
    //     console.log('use effect ran');
    // }, [name]); //empty array will make it run only on initial refresh
    //             //watches the name variable, if the value if it changes, the function runs

  return (
    <div className="home">
          {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}
 
export default Home;