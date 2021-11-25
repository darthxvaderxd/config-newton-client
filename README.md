## config-newton-client

Node module for use with config-newton. This module allows you
to connect and get various config settings for config-newton.

The configuration will be loaded to `process.env`

## usage

```javascript
import loadConfig from 'config-newton-client';
loadConfig(
    'http://localhost:3200',
    'dev',
    'my-api-key',
);
```
