import React from "react";

const TopicDetail = props => {
  return <div>Topic ID : {props.match.params.id}</div>;
};

export default TopicDetail;
