import React from "react";
import { connect } from "react-redux";
import { clubSelector, membersSelector } from "./Selectors";

const Output = ({ clubName, members }) => {
  let array = [];
  if (members)
    members.forEach(el => {
      array.push(<li>{el.firstName}</li>);
      array.push(<li>{el.lastName}</li>);
    })
  return (
    <div>
      <ul>
        <li>{clubName}</li>
        {array}
      </ul>
    </div>
  );
};

export default connect(state => ({
  clubName: clubSelector(state),
  members: membersSelector(state)
}))(Output);
