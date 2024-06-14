import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList.jsx";
import SelectedContact from "./components/SelectedContact.jsx";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <div>
          <SelectedContact
            setSelectedContactId={setSelectedContactId}
            selectedContactId={selectedContactId}
          />
        </div>
      ) : (
        <div>
          <ContactList setSelectedContactId={setSelectedContactId} />
        </div>
      )}
    </>
  );
}

export default App;
