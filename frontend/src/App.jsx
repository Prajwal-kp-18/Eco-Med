import React from 'react';
import './App.css';
import Navbar from './Container/Navbar/Navbar';
import Header from './Container/Header/Header';
import Feedback from './Container/Feedback/Feedback';
import News from './Container/News/News';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LoginForm from './Container/Login/LoginForm';
import Admin from './Container/Landing/Admin';
import FaqPage from './Container/Faq/FaqPage';
import Testimonials from './Container/Testimonials/Testimonials';

import SearchPage from './Container/SearchPage/SearchPage';
import Stats from './Container/Stats/Stats';
import Footer from './Container/Footer/Footer';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Navbar />
          <Header />
          <Stats />
          <Testimonials />
          <Footer />
        </>
      ),
    },
    {
      path: '/search',
      element: (
        <>
          <Navbar />
          <SearchPage />
          <Footer />
        </>
      ),
    },
    {
      path: '/news',
      element: (
        <>
          <Navbar />
          <News />
          <Footer />
        </>
      ),
    },
    {
      path: '/complaints',
      element: (
        <>
          <Navbar />
          <Feedback />
          <Footer />
        </>
      ),
    },
    {
      path: '/faq',
      element: (
        <>
          <Navbar />
          <FaqPage />
          <Footer />
        </>
      ),
    },
    {
      path: '/login',
      element: (
        <>
          <LoginForm />
        </>
      ),
    },
    {
      path: '/admin',
      element: (
        <>
          <Admin />
        </>
      ),
    },
  ]);
  return (
    <div className="app">
      {/* <Navbar /> */}
      <RouterProvider router={router} />
      {/* <div className="app">
        <Header />
        <Feedback />
        <News />
      </div> */}
    </div>
  );
};

export default App;
