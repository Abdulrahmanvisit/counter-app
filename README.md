# Counter App

A simple, interactive counter application built with React and Vite, styled with Tailwind CSS.

## Features

✨ **Core Functionality:**
- **Increment Button** (+) — Increases the counter by 1
- **Decrement Button** (-) — Decreases the counter by 1 (minimum value is 0)
- **Reset Button** — Resets the counter back to 0

🎨 **UI/UX:**
- Clean, modern design with Tailwind CSS
- Smooth animations on count changes (scale effect)
- Responsive layout that works on all screen sizes
- Color-coded buttons for better visual feedback
- Hover effects on buttons for better interactivity

## Tech Stack

- **React** — UI library
- **Vite** — Fast build tool and dev server
- **Tailwind CSS** — Utility-first CSS framework
- **JavaScript (ES6+)** — Modern JavaScript syntax

## Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/counter-app.git
cd counter-app
```

2. Install dependencies:
```bash
npm install
```

## Running the Project

### Development Mode
Start the dev server with hot reload:
```bash
npm run dev
```
The app will be available at `http://localhost:5173`

### Build for Production
Create an optimized production build:
```bash
npm run build
```

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
counter-app/
├── src/
│   ├── components/
│   │   └── Counter.jsx          # Main counter component
│   ├── App.jsx                  # App root component
│   ├── main.jsx                 # React entry point
│   ├── index.css                # Global styles
│   └── App.css                  # App styles
├── public/                       # Static assets
├── package.json                 # Project dependencies
├── vite.config.js               # Vite configuration
└── README.md                    # This file
```

## How It Works

The Counter component manages the count state using React's `useState` hook:

```jsx
const [count, setCount] = useState(0);
```

When you click any button, the count updates and a smooth scale animation plays on the counter display.

**Animation Details:**
- Triggered on every button click
- Count number scales up to 110% then back to 100%
- Animation duration: 300ms

## Component: Counter.jsx

The main component located at `src/components/Counter.jsx` includes:
- State management for counter and animation
- Three button handlers (increment, decrement, reset)
- Animation trigger function
- Tailwind CSS styling

## Learning Outcomes

This project demonstrates:
- React hooks (`useState`, `useEffect` via `setTimeout`)
- Event handling in React
- Conditional CSS classes
- Tailwind CSS for styling
- Component-based architecture
- Animation with CSS transitions

## Future Enhancements

Potential features to add:
- Increment/decrement by custom amount
- Display count in different formats (binary, hex, etc.)
- Save count to localStorage
- Dark mode toggle
- Sound effects on button click
- Statistics (clicks count, max value reached, etc.)

## License

This project is open source and available under the MIT License.

## Author

Created as a learning project to understand React fundamentals and modern web development practices.
