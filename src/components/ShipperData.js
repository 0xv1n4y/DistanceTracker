import React, { useState } from 'react';
import { Form, Table } from 'react-bootstrap';

const cities = {
  Mumbai: { x: 1, y: 5 },
  Kolkata: { x: 7, y: 2 },
  Chennai: { x: 6, y: 5 },
  Bangalore: { x: 4, y: 9 },
};

const shippers = [
  {
    shipperId: 'borzo',
    rating: 4,
    availableCities: ['Mumbai', 'Bangalore', 'Chennai'],
  },
  {
    shipperId: 'wefast',
    rating: 4.5,
    availableCities: ['Mumbai', 'Vizag', 'Chennai'],
  },
  {
    shipperId: 'dunzo',
    rating: 4.1,
    availableCities: ['Vizag', 'Bangalore', 'Chennai'],
  },
];

const ShipperData = () => {
  // State for selected city, sorted shippers, and filtered city
  const [selectedCity, setSelectedCity] = useState('');
  const [sortedShippers, setSortedShippers] = useState([]);
  const [filterCity, setFilterCity] = useState('');

  // Handle city selection
  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
    // Filter shippers for the selected city
    const filteredShippers = shippers.filter((shipper) =>
      shipper.availableCities.includes(city)
    );
    setSortedShippers(filteredShippers);
  };

  // Handle sorting by rating
  const handleSortChange = (e) => {
    const sortType = e.target.value;
    if (sortType === 'asc') {
      setSortedShippers([...sortedShippers].sort((a, b) => a.rating - b.rating));
    } else if (sortType === 'desc') {
      setSortedShippers([...sortedShippers].sort((a, b) => b.rating - a.rating));
    }
  };

  // Handle filtering by available city
  const handleFilterChange = (e) => {
    setFilterCity(e.target.value);
  };

  return (
    <div className='shipper-data-container'>
      <h2>Shipper Data</h2>
      <Form.Group controlId="citySelect">
        <Form.Label>Select a City </Form.Label>
        <Form.Control as="select" onChange={handleCityChange}>
          <option value="">Select a City</option>
          {Object.keys(cities).map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="sortSelect">
        <Form.Label>Sort by Rating </Form.Label>
        <Form.Control as="select" onChange={handleSortChange}>
          <option value="">Select</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="filterSelect">
        <Form.Label>Filter by Available City </Form.Label>
        <Form.Control as="select" onChange={handleFilterChange}>
          <option value="">All Cities</option>
          {Object.keys(cities).map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Shipper ID</th>
            <th>Rating</th>
            <th>Available Cities</th>
          </tr>
        </thead>
        <tbody>
          {sortedShippers
            .filter((shipper) =>
              filterCity ? shipper.availableCities.includes(filterCity) : true
            )
            .map((shipper) => (
              <tr key={shipper.shipperId}>
                <td>{shipper.shipperId}</td>
                <td>{shipper.rating}</td>
                <td>{shipper.availableCities.join(', ')}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ShipperData;
