{
  "name": "stock-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@fortawesome/fontawesome-svg-core": "^1.2.36",
    "@fortawesome/free-solid-svg-icons": "^5.15.4",
    "@fortawesome/react-fontawesome": "^0.1.16",
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "@types/styled-components": "^5.1.18",
    "classnames": "^2.3.1",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-marquee-slider": "1.1.5",
    "react-scripts": "4.0.3",
    "styled-components": "5.3.3",
    "typescript": "^4.5.4",
    "url": "0.11.0",
    "web-vitals": "^1.1.2"
  },
  "scripts": {
    "start": "react-scripts --openssl-legacy-provider start",
    "build": "react-scripts --openssl-legacy-provider build",
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
    ],
    "proxy": "http://localhost:5000"
  }
}
