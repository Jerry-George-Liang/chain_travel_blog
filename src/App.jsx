import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './components/layout/Layout';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark">
      <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <Suspense fallback={<LoadingSpinner />}>
              <HomePage />
            </Suspense>
          } />
          <Route path="about" element={
            <Suspense fallback={<LoadingSpinner />}>
              <AboutPage />
            </Suspense>
          } />
          <Route path="projects" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ProjectsPage />
            </Suspense>
          } />
          <Route path="projects/:id" element={
            <Suspense fallback={<LoadingSpinner />}>
              <ProjectDetailPage />
            </Suspense>
          } />
          <Route path="blog" element={
            <Suspense fallback={<LoadingSpinner />}>
              <BlogPage />
            </Suspense>
          } />
          <Route path="blog/:id" element={
            <Suspense fallback={<LoadingSpinner />}>
              <BlogDetailPage />
            </Suspense>
          } />
          <Route path="*" element={
            <Suspense fallback={<LoadingSpinner />}>
              <NotFoundPage />
            </Suspense>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
