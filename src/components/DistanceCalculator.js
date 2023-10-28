import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';


function DistanceCalculator() {
  
  const cities = {
    Mumbai: { x: 1, y: 5 },
    Kolkata: { x: 7, y: 2 },
    Chennai: { x: 6, y: 5 },
    Bangalore: { x: 4, y: 9 },
  };

  // Calculate the distance and convert into paise function

  function calculateDistance(start, end, middlestop = null) {
    if (!cities[start] || !cities[end] || (middlestop && !cities[middlestop])) {
      return 'Invalid city name';
    }
  
    const startCoords = cities[start];
    const endCoords = cities[end];
    const middlestopCoords = middlestop ? cities[middlestop] : null;
  
    let distance = 0;
  
    if (middlestopCoords) {
      distance += Math.sqrt(
        Math.pow(middlestopCoords.x - startCoords.x, 2) +
          Math.pow(middlestopCoords.y - startCoords.y, 2)
      );
  
      distance += Math.sqrt(
        Math.pow(endCoords.x - middlestopCoords.x, 2) +
          Math.pow(endCoords.y - middlestopCoords.y, 2)
      );
    } else {
      distance = Math.sqrt(
        Math.pow(endCoords.x - startCoords.x, 2) +
          Math.pow(endCoords.y - startCoords.y, 2)
      );
    }
  
    return Math.floor(distance * 100 * 100); // 10000 times for paise
  }


  // State for select start end middle city
  
  const [startCity, setStartCity] = useState('');
  const [endCity, setEndCity] = useState('');
  const [middleStopCity, setMiddleStopCity] = useState('');
  const [result, setResult] = useState('');

  

  const handleCalculateDistance = () => {
    const cost = calculateDistance(startCity, endCity, middleStopCity);
    setResult(`Total cost: ${cost} paise`);
  };

  return (
    <div className="distance-calculator">
    <Container >
      <h2 className="my-4">DistanceTracker</h2>
      <Row>
        <Col md={4}>
          <Form.Group controlId="startCity">
            <Form.Label>Start City:</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => setStartCity(e.target.value)}
            >
              <option value="">Select Start City</option>
              {Object.keys(cities).map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group controlId="endCity">
            <Form.Label>End City:</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => setEndCity(e.target.value)}
            >
              <option value="">Select End City</option>
              {Object.keys(cities).map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group controlId="middleStopCity">
            <Form.Label>Middle Stop City (Optional):</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => setMiddleStopCity(e.target.value)}
            >
              <option value="">None</option>
              {Object.keys(cities).map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Button
        variant="primary"
        onClick={handleCalculateDistance}
        className="my-4"
      >
        Get Distance
      </Button>
      <div>{result}</div>
    </Container>
    </div>
  );
}

export default DistanceCalculator;
