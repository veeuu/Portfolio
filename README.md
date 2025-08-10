# Vidhisha Kamble Portfolio

This is a personal portfolio website for **Vidhisha Rajani Kamble**, built with [React](https://react.dev/) and styled with custom CSS and [Tailwind CSS](https://tailwindcss.com/). The site showcases skills, projects, and contact information.

## Features

- **Responsive Design**: Works on desktop and mobile devices.
- **About Section**: Brief introduction and background.
- **Skills Section**: Categorized technical skills.
- **Projects Section**: Highlights major projects with links to GitHub repositories.
- **Contact & Social Links**: LinkedIn, GitHub, Email, and Instagram.
- **Downloadable Resume**: Quick access to resume PDF.

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