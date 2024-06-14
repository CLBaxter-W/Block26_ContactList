import React from "react";

export default function ContactRow({ newContact }) {
  return (
    <tr>
      <td>{newContact.name}</td>
      <td>{newContact.email}</td>
      <td>{newContact.phone}</td>
    </tr>
  );
}
