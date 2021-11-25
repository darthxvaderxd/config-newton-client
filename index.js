import fetch from 'node-fetch';

const loadConfig = async (host, deploymentName, apiKey) => {
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
  if (results?.error) {
    throw new Error(results.error);
  }
  if (results.results && results.results.length > 0) {
    results.results.forEach((result) => {
      const { key = '', value = '' } = result;
      if (key && value) {
        process.env[key] = value;
      }
    });
  }
};

export default loadConfig;
