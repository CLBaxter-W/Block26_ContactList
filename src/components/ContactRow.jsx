import React from "react";

export default function ContactRow({ setSelectedContactId, newContact }) {
  return (
    <tr
      onClick={() => {
        setSelectedContactId(newContact.id);
      }}
    >
      <td>{newContact.name}</td>
      <td>{newContact.email}</td>
      <td>{newContact.phone}</td>
    </tr>
  );
}
