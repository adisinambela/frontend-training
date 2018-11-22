import React from "react";

const AddressBookDetail = props => {
  return (
    <div>
      Name : {props.name} <br />
      Address: {props.address} <br />
      <button onClick={() => props.handleDelete(props.id)}>X</button>
      <br />
      <hr />
    </div>
  );
};

export default AddressBookDetail;
