import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},

  addIntialPosts: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newpostList = currPostList;
  if (action.type === "DELETE_POST") {
    newpostList = currPostList.filter(
      (post) => post.id !== action.payload.PostId
    );
  } else if (action.type === "ADD_POST") {
    newpostList = [action.payload, ...currPostList];
  } else if (action.type === "ADD_INTAIL_POST") {
    newpostList = action.payload.posts;
  }
  return newpostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (postTitle, postBody) => {
    console.log(postTitle, postBody);
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now().toString(), // Convert to string
        title: postTitle,
        body: postBody,
        reactions: 0,
        tags: [], // Initialize tags as an empty array or add them if needed
      },
    });
  };

  const addIntialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INTAIL_POST",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (PostId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        PostId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{ postList, addPost, addIntialPosts, deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
