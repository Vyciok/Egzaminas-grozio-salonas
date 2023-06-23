import Post from "../Post";
import { useEffect, useState } from "react";

export default function IndexPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);
  return (
    <>
      <div>
        <img
          src="https://cdn1.onlithuania.com/content/uploads/2022/09/Baseinas-horizontaliai.jpg"
          className="img-portrait"
          alt=""
        />
        <h2 className="h2-pas">Paslaugos</h2>
      </div>
      {posts.length > 0 && posts.map((post) => <Post {...post} />)}
    </>
  );
}
