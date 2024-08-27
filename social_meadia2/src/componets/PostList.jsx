import { useContext } from "react";
import Post from "./Post";
import styles from "./PostList.module.css";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
const PostList = () => {
  const { postList, addIntialPosts } = useContext(PostListData);
  const handleOnPostClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addIntialPosts(data.posts);
      });
  };

  return (
    <div className={styles.container}>
      {postList.length === 0 && (
        <WelcomeMessage onGetPostClick={handleOnPostClick}></WelcomeMessage>
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};
export default PostList;
