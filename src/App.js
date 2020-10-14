import React, { useState } from "react";
import './App.css';

function App() {
  const [showTimePointModal, setShowTimePointModal] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShowTimePointModal(true)}
      >
        Open Modal
      </button>

      {!showTimePointModal ? null : (
        <div
          className="modal-shade"
          onClick={() => setShowTimePointModal(false)}
        ></div>
      )}
      {!showTimePointModal ? null : (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <div>Modal Popup</div>    
            </div>
            <div>
              <button
                onClick={() => setShowTimePointModal(false)}
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
