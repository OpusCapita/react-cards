import React from 'react';
import { Panel, Grid, Row, Col } from 'react-bootstrap';
import CardsExampleComponent from '../components/cards-example.component';
import GithubLogo from '../images/logo-github.svg';

export default () => (
  <Grid>
    <Row>
      <Col xs={11} md={8} lg={6}>
        <Row>
          <Col xs={10}>
            <h3>React cards</h3>
          </Col>
          <Col xs={2}>
            <a
              href="https://github.com/OpusCapita/react-cards"
              style={{ marginTop: '20px', display: 'block' }}
            >
              <GithubLogo />
            </a>
          </Col>
        </Row>
        <Panel>
          <CardsExampleComponent />
        </Panel>
      </Col>
    </Row>
  </Grid>
);
