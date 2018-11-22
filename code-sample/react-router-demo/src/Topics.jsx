import React from "react";
import { Link, Route } from "react-router-dom";
import TopicDetail from "./TopicDetail"

const Topics = props => {
  return (
    <div>
      <Link to={`${props.match.url}/1`}>Topic 1</Link><br/>
      <Link to={`${props.match.url}/2`}>Topic 2</Link><br/>
      <Link to={`${props.match.url}/3`}>Topic 3</Link><br/>
      <hr/>

      <Route path={`${props.match.url}/:id`} component={TopicDetail}/>
    </div>
  );
};

export default Topics;
