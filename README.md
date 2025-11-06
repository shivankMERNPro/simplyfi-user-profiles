# Simplyfi User Profile

A modern React Vite project to manage user profiles.  
This boilerplate includes **Vite**, **TailwindCSS**, **Ant Design**, **Redux Toolkit**, **React Query**, and **React Hook Form**, making it scalable, maintainable, and interview-ready.

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Folder Structure](#folder-structure)  
- [Installation](#installation)  
- [Scripts](#scripts)  
- [Dependencies & Their Use Cases](#dependencies--their-use-cases)  
- [Development Guidelines](#development-guidelines)  
- [Testing](#testing)  
- [Linting & Formatting](#linting--formatting)  

---

## Project Overview

This project is designed to manage **user profiles** efficiently with:

- CRUD operations for users  
- Editable user forms with validation  
- Search and filter functionality  
- Favorite marking for users  
- Persistent Redux store  
- Responsive UI using TailwindCSS and Ant Design  

It’s ideal for demonstrating React, Redux, and frontend best practices in interviews.

---

## Features

- Scalable folder structure for large applications  
- Responsive UI components using **Ant Design** and **TailwindCSS**  
- CRUD-ready functionality with Redux Toolkit  
- Favorite marking and search/filter support  
- Forms managed with **React Hook Form**  
- Persistent Redux store using **redux-persist**  
- Async state management with **React Query**  
- Linting, formatting, and pre-commit hooks for clean code  
- Unit testing with **Vitest** and **React Testing Library**  

---

## Tech Stack

- **Frontend:** React 19.x  
  - Used for building a fast, component-based, and maintainable UI with reusable components.

- **Bundler:** Vite 7.x  
  - Provides lightning-fast development server, hot module replacement (HMR), and optimized production build.

- **UI Library:** Ant Design 5.x  
  - Prebuilt, responsive, and customizable UI components that speed up development and maintain a consistent design.

- **Styling:** TailwindCSS 3.x, PostCSS, Autoprefixer  
  - TailwindCSS allows utility-first CSS for rapid, consistent styling.  
  - PostCSS and Autoprefixer ensure cross-browser CSS compatibility.

- **State Management:** Redux Toolkit 2.x + Redux Persist  
  - Redux Toolkit simplifies Redux setup with less boilerplate.  
  - Redux Persist ensures that user data remains saved across page reloads.

- **Async Data:** React Query 5.x  
  - Handles server-state caching, background refetching, and synchronization with UI efficiently.

- **Form Handling:** React Hook Form 7.x  
  - Simplifies form state management and validation with minimal re-renders, improving performance.

- **HTTP Client:** Axios  
  - Easy-to-use promise-based HTTP client for API requests with support for interceptors and error handling.

- **Security:** Crypto-js, DOMPurify, jwt-decode  
  - **Crypto-js:** Encrypt/decrypt sensitive data on client side.  
  - **DOMPurify:** Prevent XSS attacks by sanitizing HTML inputs.  
  - **jwt-decode:** Decode JWT tokens for authentication and authorization flows.

- **Notifications:** React Toastify  
  - Provides toast notifications to enhance user experience with minimal setup.

- **Testing:** Vitest + React Testing Library  
  - **Vitest:** Fast and modern testing framework compatible with Vite.  
  - **React Testing Library:** Ensures components work as expected from the user’s perspective.



---

## Installation

1. Clone the repository:
```bash
git clone https://github.com/shivankMERNPro/simplyfi-user-profiles.git
cd simplyfi-user-profile
```

```bash
  npm install
```

```bash
npm run preview
```


---

## Available Scripts

```bash
  npm run dev 
```
```bash
  npm run build   
```
```bash
  npm run preview  
```
```bash
  npm run lint:fix 
```
```bash
  npm run format   
```
```bash
  npm run test    
```
```bash
  npm run clean  
```
