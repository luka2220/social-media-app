import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useReducer,
} from "react";

// Components
import Login from "./components/Login";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";

// Reducers
import PostReducer from "./reducer";

// Context for sending user to components without the need of props
export const UserContext = createContext();
export const PostContext = createContext({ posts: [] });

function App() {
  const [user, setUser] = useState("");
  const initialPostState = useContext(PostContext);

  const [state, dispatch] = useReducer(PostReducer, initialPostState);

  useEffect(() => {
    document.title = user ? `${user}'s feed` : "Login";
  }, [user]);

  if (!user) {
    return <Login setUser={setUser} />;
  }

  return (
    <PostContext.Provider value={{ state, dispatch  }}>
      <UserContext.Provider value={user}>
        <Header user={user} setUser={setUser} />
        <CreatePost user={user} />
        <PostList posts={state.posts} />
      </UserContext.Provider>
    </PostContext.Provider>
  );
}

export default App;
