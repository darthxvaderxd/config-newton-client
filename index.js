import fetch from 'node-fetch';

const loadConfig = async (host, deploymentName, apiKey) => {
  try {
    const response = await fetch(
      `${host}/configs/${deploymentName}`,
      {
        method: 'GET',
        headers: {
          'x-api-key': apiKey,
          'content-type': 'application/json',
        },
      },
    );
    const results = await response.json();
    if (results.results && results.results.length > 0) {
      results.results.forEach((result) => {
        const { key = '', value = '' } = result;
        if (key && value) {
          process.env[key] = value;
        }
      });
    }
  } catch (e) {
    console.error(e);
  }
};

export default loadConfig;
