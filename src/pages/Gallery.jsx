import React, { useState, useEffect } from 'react';

const Gallery = () => {
  // State for storing HTML content from the GET request
  const [htmlContent, setHtmlContent] = useState('');
  const [loading, setLoading] = useState(false);

  // Default query parameters
  const [params, setParams] = useState({
    date: '2025-03-18',
    departure_city: 'all',
    arrival_city: 'all',
    adult: '1',
    child: '0',
    infant: '0',
  });

  // Build the URL based on the params
  const buildUrl = () => {
    const baseUrl = 'https://flyola.in/flight';
    const searchParams = new URLSearchParams(params).toString();
    return `${baseUrl}?${searchParams}`;
  };

  // Fetch the page (HTML) when the component first loads or when `params` changes
  useEffect(() => {
    const fetchFlights = async () => {
      setLoading(true);
      try {
        const response = await fetch(buildUrl(), { method: 'GET' });
        const html = await response.text();
        setHtmlContent(html);
      } catch (error) {
        console.error('Error fetching flights:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
  }, [params]);

  // Handle form changes (update state, which triggers new GET request)
  const handleChange = (e) => {
    setParams({ ...params, [e.target.name]: e.target.value });
  };

  // Optional: Provide a manual refresh button or fetch on form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Because `params` is already being watched in useEffect,
    // updating `params` will automatically trigger a new GET request.
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Flight Search (GET Request Demo)</h1>

      {/* Simple form for updating query parameters */}
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <div>
          <label>
            Date:&nbsp;
            <input
              type="date"
              name="date"
              value={params.date}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Departure City:&nbsp;
            <select
              name="departure_city"
              value={params.departure_city}
              onChange={handleChange}
            >
              <option value="all">All</option>
              <option value="BHO">BHO</option>
              <option value="JLR">JLR</option>
              <option value="HJR">HJR</option>
              {/* Add other city codes if needed */}
            </select>
          </label>
        </div>

        <div>
          <label>
            Arrival City:&nbsp;
            <select
              name="arrival_city"
              value={params.arrival_city}
              onChange={handleChange}
            >
              <option value="all">All</option>
              <option value="BHO">BHO</option>
              <option value="JLR">JLR</option>
              <option value="HJR">HJR</option>
              {/* Add other city codes if needed */}
            </select>
          </label>
        </div>

        <div>
          <label>
            Adult:&nbsp;
            <input
              type="number"
              name="adult"
              min="1"
              max="6"
              value={params.adult}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Child:&nbsp;
            <input
              type="number"
              name="child"
              min="0"
              max="6"
              value={params.child}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Infant:&nbsp;
            <input
              type="number"
              name="infant"
              min="0"
              max="6"
              value={params.infant}
              onChange={handleChange}
            />
          </label>
        </div>

        {/* Optional: manual refresh button; 
            the GET request also fires automatically on every change */}
        <button type="submit" style={{ marginTop: '10px' }}>
          Refresh
        </button>
      </form>

      {loading && <p>Loading flights...</p>}

      {/* Display the HTML directly (for testing). 
          In production, consider parsing or sanitizing! */}
      {!loading && (
        <div
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          style={{ border: '1px solid #ccc', padding: '10px' }}
        />
      )}
    </div>
  );
};



export default Gallery;


