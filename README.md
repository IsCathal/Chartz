Chartz

## Introduction

Welcome to Chartz, a demo project designed to showcase the capabilities of creating beautiful and interactive charts using modern web technologies. This project leverages Next.js for server-side rendering and routing, React for building user interfaces, and Recharts for creating responsive and customizable charts. The combination of these technologies enables developers to build robust and efficient data visualization applications.

## Technologies Used

### Frontend

- Next.js (v14.2.5): A React framework that enables server-side rendering and static site generation, improving the performance and SEO of the application.
- React (v18): A JavaScript library for building user interfaces, enabling the creation of reusable UI components.
- Recharts (v2.12.7): A composable charting library built on React components, providing a range of chart types and customization options.
- Tailwind CSS: A utility-first CSS framework for rapidly building custom designs without leaving the HTML.

### UI Components

- @radix-ui/react-select (v2.1.1): A library for building accessible and customizable select components in React.
- Lucide React (v0.408.0): An icon library for React, providing a wide range of customizable icons.

### Utilities

- Class Variance Authority (v0.7.0): A library for managing class name variations.
- clsx (v2.1.1): A utility for constructing className strings conditionally.
- Tailwind Merge (v2.4.0): A tool for merging Tailwind CSS classes efficiently.
- Tailwind CSS Animate (v1.0.7): A plugin for adding animations to Tailwind CSS projects.

### Development Tools

- TypeScript (v5): A superset of JavaScript that adds static types, enhancing code quality and developer productivity.
- ESLint (v8): A tool for identifying and fixing problems in JavaScript code, ensuring code consistency and quality.
- Playwright (v1.45.2): A framework for showcasing web applications, providing the ability to record and showcase chart interactions.

## Getting Started

To get started with Chartz, follow these steps:

1. Clone the repository:

```sh
git clone https://github.com/yourusername/chartz.git
cd chartz
```

2. Install dependencies:

```sh
npm install
```

3. Run the development server:

```sh
npm run dev
```

4. Build the project for production:

```sh
npm run build
```

5. Start the production server:

```sh
npm start
```

6. Lint the code:

```sh
npm run lint
```

## Recording Charts with Playwright

Playwright is used in this project to record and showcase the interactions with charts. This feature is particularly useful for creating demonstrations and documentation, allowing users to see the charts in action.

To use Playwright for recording chart interactions:

1. Record interactions:

```sh
node test.js
```

This will open a browser where you can interact with the charts and record those interactions. The recorded script can then be used to showcase the chart's functionality in a demo or documentation.

## Conclusion

Chartz demonstrates how to build a modern web application with powerful data visualization capabilities. By leveraging Next.js, React, and Recharts, this project showcases the potential of creating dynamic and interactive charts. Additionally, Playwright provides robust recording functionalities to showcase and document the chart interactions effectively.

## For 60 fps

brew install ffmpeg
