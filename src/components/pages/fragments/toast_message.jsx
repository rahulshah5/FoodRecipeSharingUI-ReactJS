// ToastMessage.jsx

import React from 'react';
import Toast from 'react-bootstrap/Toast';

const ToastMessage = ({ show, message, onClose }) => {
  return (
    <Toast show={show} onClose={onClose} style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
      <Toast.Header closeButton={true} style={{background:'#007bff', color:'white'}}>
        <strong className="me-auto" >Notification</strong>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
};

export default ToastMessage;
