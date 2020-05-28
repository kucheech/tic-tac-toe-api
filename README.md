# Tic Tac Toe API

## Source

https://github.com/kucheech/tic-tac-toe-api

## Deployment

The API is currently being deployed at \
endpoint: https://9nvjwdpikb.execute-api.ap-southeast-1.amazonaws.com \
stage: test

## Methods

GET /

- To serve as a health check indicator of API

GET /version

- Retrieve API version information
- requires AWS API Gateway API key

## Documentation

- Postman collection and environment are available in the /documentation folder
- to obtain a AWS API Gateway API key for x-api-key

## Testing

```
npm test
npm t -- full
npm run coverage
```

## Update

```
claudia update --profile <aws profile> --version <api stage>
npm run deploy-test
```
