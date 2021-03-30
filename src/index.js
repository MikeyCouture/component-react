import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import AprrovalCard from "./ApprovalCard";
//👆 Importing dependicies that we need

//👇 app component

const App = () => {
  return (
    <div className="ui container comments">
      <AprrovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to want to continue?
        </div>
      </AprrovalCard>
      <AprrovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="today at 4:45PM"
          comment="Nice one!"
          avatar={faker.image.image()}
        />
      </AprrovalCard>
      <AprrovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="today at 11:00AM"
          comment="lol love this"
          avatar={faker.image.image()}
        />
      </AprrovalCard>
      <AprrovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="yesterday at 3:35PM"
          comment="keep up the great work!"
          avatar={faker.image.image()}
        />
      </AprrovalCard>
    </div>
  );
};

//👇 Rendering app component
ReactDOM.render(<App />, document.querySelector("#root"));
