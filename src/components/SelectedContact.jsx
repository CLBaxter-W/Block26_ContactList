import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

export default function SelectedContact({
  setSelectedContactId,
  selectedContactId,
}) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    getAPIWithAxios();
  }, []);

  const getAPIWithAxios = async () => {
    try {
      const response = await axios.get(
        `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
      );

      console.log("contact from API: ", response.data);

      setContact(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {contact ? (
        <div>
          <ul className="list-group list-group-add">Selected Contact Info</ul>
          <li className="list-group-item list-group-item-add">
            Contact Name: {contact.name}
          </li>
          <li className="list-group-item list-group-item-add">
            Contact User Name: {contact.username}
          </li>
          <li className="list-group-item list-group-item-add">
            Contact Email: {contact.email}
          </li>
          <li className="list-group-item list-group-item-add">
            Contact Phone: {contact.phone}
          </li>
          <li className="list-group-item list-group-item-add">
            Company Name: {contact.company.name}
          </li>

          <p>
            <button
              type="button"
              className="btn btn-primary"
              text="Return to List"
              onClick={() => {
                setSelectedContactId(null);
              }}
            >
              Return to List
            </button>
          </p>
        </div>
      ) : (
        <div> loading ..... </div>
      )}
    </div>
  );
}
