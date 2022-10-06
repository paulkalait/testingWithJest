import React from "react";
import Header from "./component/Header/Header";
import "./App.scss";
import Headline from "./component/Headline/Headline";
import Button from "./component/Button/Button";
import ListItem from "./component/ListItem/ListItem";
import { useDispatch, useSelector } from "react-redux";
import {fetchPosts}  from "./actions/index.js";

const tempArr = [
  {
    fName: "Joe",
    lName: "Bloggs",
    email: "at@gmail.com",
    age: 24,
    online: true,
  },
];



const App = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts)

  const fetch = () => {
    dispatch(fetchPosts())
  }
  const configureButton = {
    buttonText: "Get Posts",
    emitEvent: fetch,
  };
  
  return (
    <div className="App" data-test="appComponent">
      <Header />

      <section className="main" >
        <Button {...configureButton} />
        <Headline
          header="post"
          desc="Click the button to render Posts"
          tempArr={tempArr}
        />
        {posts.length > 0 && (
          <div>
            {posts.map((post, index) => {
              const { title, body } = post;
              const configListItem = {
                title,
                desc: body,
              };
              return <ListItem key={index} {...configListItem} />;
            })}
          </div>
        )}
      </section>
    </div>
  );
};

export default App;
