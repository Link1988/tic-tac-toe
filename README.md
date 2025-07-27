# 🎮 Tic-Tac-Toe Game

A modern, interactive tic-tac-toe game built with **Next.js**, **React**, and **TypeScript**!

## ✨ Features

- **🎯 Classic Gameplay**: Classic tic-tac-toe game
- **⏰ Countdown Timer**: Each player has 10 seconds to make their move
- **🎨 Friendly UI**: Modern design with smooth animations and hover effects built with Tailwind CSS
- **📱 Responsive Design**: Friendly for all devices (desktop, tablet and mobile).
- **🏆 Win Detection**: Automatic winner detection and tie game handling
- **🔄 Reset Game**: Start a new game anytime with the reset button
- **🧪 Comprehensive Testing**: Full test coverage with Jest and React Testing Library.

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd tic-tac-toe
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) and start playing! 🎉

## 🏗️ Project Structure

```
tic-tac-toe/
├── src/
│   ├── components/         # React components
│   │   ├── Board.tsx       # Main game board
│   │   ├── Square.tsx      # Individual game squares
│   │   └── Icons/          # X and O icons
│   ├── hooks/              # Custom React hooks
│   │   └── useCountdown.ts # Timer functionality
│   ├── helpers/            # Game logic utilities
│   │   └── getWinner.ts    # Win detection logic
│   └── pages/              # Pages
├── __tests__/              # Test files
└── public/                 # Static assets
```

## 🧪 Testing

This project includes comprehensive unit tests to ensure everything works perfectly:

### Run Tests
```bash
npm test
# or
yarn test
# or
pnpm test
```

### Test Coverage
```bash
npm run test:coverage
```

## 🛠️ Built With

- **[Next.js](https://nextjs.org/)** - React framework for production
- **[React](https://reactjs.org/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling
- **[Jest](https://jestjs.io/)** - Testing framework
- **[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)** - Component testing
