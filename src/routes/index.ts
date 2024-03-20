import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

const ResumeEditor = lazy(() => import('@/pages/home/homePage'));
const Error = lazy(() => import('@/pages/error/errorPage'));

export const router = createBrowserRouter([
  {
    path: '/',
    Component: ResumeEditor
  },
  {
    path: '/*',
    Component: Error
  }
]);
