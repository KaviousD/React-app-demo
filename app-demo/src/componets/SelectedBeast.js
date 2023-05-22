import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { Button } from "react-bootstrap";
const ImageComp = (props) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClose = () => props.setShow(false);
    const handleShow = () => props.setShow(true);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <Modal show={props.showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{props.showbeast.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img width={200} alt="" src={props.showbeast.image_url}></img></Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Review next
                </Button>
            </Modal.Footer>
        </Modal>
    );
};





export default ImageComp;
