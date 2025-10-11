# Vidhisha Kamble Portfolio ✨

A modern, Gen Z-style personal portfolio website for **Vidhisha Rajani Kamble**, built with [React](https://react.dev/) and featuring cutting-edge design elements. This portfolio showcases skills, projects, and contact information with a focus on user experience and visual appeal.

## 🚀 Features

- **🌓 Dark/Light Theme Toggle**: Seamless theme switching with system preference detection
- **📱 Fully Responsive Design**: Optimized for all devices and screen sizes
- **✨ Modern Glassmorphism UI**: Beautiful glass-like effects and backdrop blur
- **🎨 Gradient Animations**: Dynamic color transitions and hover effects
- **⚡ Smooth Animations**: Floating elements, typing effects, and micro-interactions
- **🎯 Interactive Elements**: Hover states, button animations, and visual feedback
- **📊 Personal Stats**: Dynamic counters and achievement highlights
- **🔗 Social Integration**: Direct links to all professional platforms
- **📄 Resume Access**: One-click resume download functionality
- **♿ Accessibility**: WCAG compliant with focus states and reduced motion support

## Folder Structure

```
my-app/
  ├── public/
  │   ├── favicon.ico
  │   ├── index.html
  │   └── ...
  ├── src/
  │   ├── assets/           # Images and resume PDF
  │   ├── components/       # React components (Navbar, Hero, About, Skills, Projects, Footer)
  │   ├── App.js
  │   ├── App.css
  │   └── ...
  ├── .gitignore
  ├── package.json
  └── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/veeuu/Portfolio.git
   cd Portfolio/my-app
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build for Production

```sh
npm run build
```
The optimized build will be in the `build/` folder.

## Customization

- **Profile Info**: Update your details in [`Hero.js`](src/components/Hero.js) and [`Navbar.js`](src/components/Navbar.js).
- **Skills & Projects**: Edit [`Skills.js`](src/components/Skills.js) and [`Projects.js`](src/components/Projects.js).
- **Resume**: Replace `Vidhisha_Resume.pdf` in [`src/assets/`](src/assets/) with your own.

## License

This project is for personal portfolio use. Feel free to fork and adapt for your own portfolio.

---