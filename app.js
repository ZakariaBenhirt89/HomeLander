const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config()

const app = express();

// Enable CORS for all origins
app.use(cors());

// Parse request bodies as JSON
app.use(bodyParser.json());
const post = process.env.PORT || 5000;

// Define a route to handle the POST request to HubSpot API
app.post('/api/hubspot', async (req, res) => {
    try {
        console.log(req.body);
        let dataReq = JSON.stringify({
            "properties": req.body
          });
        const { data } = await axios.post(
          'https://api.hubapi.com/crm/v3/objects/contacts',
          dataReq,
          {
            headers: {
                'Content-Type': 'application/json', 
              'Authorization': `Bearer ${process.env.HUBSPOT_KEY}`, // Replace with your actual HubSpot API key
            },
          }
        );
        res.json(data);
      } catch (error) {
        console.error('Error sending data:', error);
        res.status(500).json({ error: 'An error occurred' });
      }
});

app.listen( port , () => {
  console.log(`Server running`);
});
