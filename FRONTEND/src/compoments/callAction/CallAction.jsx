import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import TenisCallToAction from '../../../public/tenisCallToAction.png';
import './CallAction.css';
const CallToAction = () => {
  return (
    <div className="call-to-action">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="text-center">
            <img
              src={TenisCallToAction}
              alt="Air Jordan"
              className="call-to-action__image"
            />
          </Col>
          <Col lg={6}>
            <div className="call-to-action__content">
              <span className="call-to-action__highlight">
                Oferta especial
              </span>
              <h1 className="call-to-action__title">
                Air Jordan edição de colecionador
              </h1>
              <p className="call-to-action__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.
              </p>
              <Button
                variant="primary"
                className="call-to-action__button"
              >
                Ver Oferta
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CallToAction;
