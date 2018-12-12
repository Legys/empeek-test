import * as React from "react";
import Aside from "src/components/main/Aside";
import Comments from "src/components/main/Comments";
import Notes from "src/components/main/Notes";

class MainPageContainer extends React.Component {
  public render() {
    return (
      <div>
        Main page
        <Aside />
        <Notes />
        <Comments />
      </div>
    );
  }
}

export default MainPageContainer;
