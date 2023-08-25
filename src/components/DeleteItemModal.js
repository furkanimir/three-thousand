import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';


function DeleteItemModal({ item, show, handleClose }) {


  const denemeSonrayatis = async (id, header) => {
    console.log(id + " : " + header);

    if (!id) {
      console.error('silinecek öge bulunamdi');
      return;
    }
    try {
      const response = await fetch(`http://localhost:8080/api/v1/menus/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // Gerektiğine göre diğer başlıkları ekleyebilirsiniz
        },
      });

      if (response.status === 200) {
        console.log('Ürün başarıyla silindi.');
        handleClose();
        window.location.reload();
      } else {
        console.error('Ürün silinemedi. Sunucu yanıtı:', response.status);
      }
    } catch (error) {
      console.error('Ürün silme işlemi başarısız oldu:', error);
    }
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Item Detayi</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>ID: {item.id}</h5>
        <h5>Ad: {item.header}</h5>
        {/* Daha fazla özellik ekleyebilirsiniz */}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Kapat
        </Button>
        <Button variant="danger" onClick={() => { denemeSonrayatis(item.id, item.header) }}>
          Sil
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteItemModal