
# MUI Calendar with Badge icon

## MUI Dcumentation

https://mui.com/x/react-date-pickers/getting-started/

## Current MUI version
```
npm install @mui/x-date-pickers
npm install @mui/material @emotion/react @emotion/styled
"peerDependencies": {
  "react": "^17.0.0 || ^18.0.0",
  "react-dom": "^17.0.0 || ^18.0.0"
},
//All in documentation
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App({ children }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {children}
    </LocalizationProvider>
  );
}

```

## Development

Install dependencies:

```
npm i
```

Now, you can start a local web server by running:

```
npm run dev
```

And then open http://localhost:3000 to view it in the browser.

