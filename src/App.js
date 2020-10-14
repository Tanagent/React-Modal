import React, { useState } from "react";
import './App.css';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
      >
        Open Modal
      </button>

      {!showModal ? null : (
        <div
          className="modal-shade"
          onClick={() => setShowModal(false)}
        ></div>
      )}
      {!showModal ? null : (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <div>Modal Popup</div>    
            </div>
            <div>
              <button
                onClick={() => setShowModal(false)}
              >
                Close Modal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
