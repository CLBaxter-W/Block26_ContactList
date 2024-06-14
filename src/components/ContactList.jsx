import React from "react";
import axios from "axios";
import ContactRow from "./ContactRow";
import { useEffect, useState } from "react";

export default function ContactList({ setSelectedContactId }) {
  const [contacts, setContacts] = useState(null);

  useEffect(() => {
    getAPIWithAxios();
  }, []);

  const getAPIWithAxios = async () => {
    try {
      const response = await axios.get(
        "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
      );

      console.log("contact list from API: ", response.data);

      setContacts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Contact List</h1>
      <table>
        <thead>
          <tr>
            <th colSpan="3">Contact List</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Phone</td>
          </tr>
          {contacts &&
            contacts.map((contact) => {
              return (
                <ContactRow
                  key={contact.id}
                  setSelectedContactId={setSelectedContactId}
                  newContact={contact}
                />
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
