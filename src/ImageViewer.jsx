import React, { useState } from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import './index.css';

const ImageViewer = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <Container fluid className="d-flex flex-column align-items-center">
      <Row className="justify-content-center mb-4">
        <Col xs="auto">
          {}
          <div
            className="image-container"
            style={{ backgroundImage: `url(${selectedImage})` }}
          >
            <Image src={selectedImage} fluid className="main-image" />
          </div>
        </Col>
      </Row>

      <Row className="thumbnail-row justify-content-center">
        {}
        {images.map((image, index) => (
          <Col xs="auto" key={index} className="thumbnail-col">
            <Button
              variant="link"
              onClick={() => setSelectedImage(image)}
              className={`thumbnail-button ${
                selectedImage === image ? 'selected' : ''
              }`}
            >
              <Image src={image} thumbnail className="thumbnail-image" />
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ImageViewer;
