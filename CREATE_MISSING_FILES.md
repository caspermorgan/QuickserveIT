# Quick File Creation Guide

Copy-paste these complete files directly into GitHub:

## 1. client/src/components/Header.jsx
```jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">QuickServe IT</Link>
        <div className="space-x-6">
          <Link to="/" className="hover:text-blue-200">Home</Link>
          <Link to="/services" className="hover:text-blue-200">Services</Link>
          <Link to="/about" className="hover:text-blue-200">About</Link>
          <Link to="/contact" className="hover:text-blue-200">Contact</Link>
          <Link to="/referral" className="hover:text-blue-200">Referral</Link>
          <Link to="/login" className="hover:text-blue-200">Login</Link>
        </div>
      </nav>
    </header>
  );
}
```

## 2. client/src/components/Footer.jsx
```jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2025 QuickServe IT. All rights reserved.</p>
        <p className="mt-2 text-gray-400">Fast. Trusted. Local.</p>
      </div>
    </footer>
  );
}
```

## 3. client/src/pages/Home.jsx
```jsx
import React from 'react';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-bold text-center mb-6">Welcome to QuickServe IT</h1>
      <p className="text-xl text-center text-gray-600">Your trusted local technology partner</p>
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Fast Service</h3>
          <p>Quick response times for all your IT needs</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Trusted</h3>
          <p>Reliable solutions you can count on</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Local</h3>
          <p>Community-focused service</p>
        </div>
      </div>
    </div>
  );
}
```

## 4-10. All Other Pages (Services, About, Contact, Referral, Login, Dashboard, NotFound)

Use this template for each, just change the title:

```jsx
import React from 'react';

export default function [PageName]() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">[PageName] Page</h1>
      <p className="text-gray-600">Content coming soon...</p>
    </div>
  );
}
```

## 11-12. Context Files

### client/src/context/ThemeContext.jsx
```jsx
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
export default ThemeContext;
```

### client/src/context/AuthContext.jsx
```jsx
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
export default AuthContext;
```

## 13-14. CSS Files

### client/src/index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

### client/src/styles/globals.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
}

.container {
  max-width: 1200px;
}
```

## 15. Utils File

### client/src/utils/reportWebVitals.js
```javascript
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
```

---

**QUICK ACTION**: 
1. Go to each file path listed above
2. Click "Add file" > "Create new file"
3. Copy-paste the code
4. Commit

Total files needed: ~15
Time estimate: 10-15 minutes
