import React from "react";
import { connect } from "react-redux";
import { clubSelector, membersSelector } from "./Selectors";

const Output = ({ clubName, members }) => {
  let array = [];
  if (members)
    for (let i = 0; i < members.length; i++) {
      array.push(<li>{members[i].firstName}</li>);
      array.push(<li>{members[i].lastName}</li>);
    }
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
