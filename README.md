{
  "name": "truffle-client",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@emotion/react": "^11.11.1",
    "@emotion/styled": "^11.11.1",
    "@mui/material": "^5.14.1",
    "@mui/icons-material": "^5.14.1",
    "@testing-library/jest-dom": "^6.1.5",
    "@testing-library/react": "^14.0.0",
    "@testing-library/user-event": "^14.5.0",
    "ipfs-api": "^26.1.2",
    "ipfs-http-client": "^63.0.0",
    "material-ui-dropzone": "^3.6.2",
    "moment": "^2.29.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.14.0",
    "react-scripts": "^5.0.1",
    "react-video-cover": "^2.0.0",
    "web3": "^1.10.1"
  },
  "scripts": {
    "start": "cross-env NODE_OPTIONS=--openssl-legacy-provider react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
