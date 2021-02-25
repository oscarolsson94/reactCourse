import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id)
        setBlogs(newBlogs);
    };

    useEffect(() => { //runs every time website renders (when state changes)
        console.log('use effect ran');
    }, [name]); //empty array will make it run only on initial refresh
                //watches the name variable, if the value if it changes, the function runs

  return (
    <div className="home">
          <BlogList blogs={blogs} title="All Blogs" />
          <button onClick={() => setName('luigi')}>change name</button>
    </div>
  );
}
 
export default Home;