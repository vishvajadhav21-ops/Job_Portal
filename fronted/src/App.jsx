import Navbar from "./components/shared/Navbar"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup"
import Jobs from "./components/Jobs";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import JobDescription from "./components/JobDescription";
import Comapnies from "./components/admin/Comapnies";
import CompaniesCreate from "./components/admin/CompaniesCreate";
import CompanySetup from "./components/admin/CompanySetup";
import CompanyJob from "./components/admin/CompanyJob";
import PostJob from "./components/admin/PostJob";
import Applicants from "./components/admin/Applicants";



const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/jobs',
    element: <Jobs />
  },
  {
    path: '/description/:id',
    element: <JobDescription />
  },
  {
    path: '/browse',
    element: <Browse />
  },
  {
    path: '/profile',
    element: <Profile />
  },

  // for admin 
  {
    path: '/admin/companies',
    element: <Comapnies />
  },
  {
    path: '/admin/companies/create',
    element: <CompaniesCreate />
  },
  {
    path: '/admin/companies/:id',
    element: <CompanySetup />
  },
   {
    path: '/admin/jobs',
    element: <CompanyJob/>
  },
   {
    path: '/admin/jobs/post',
    element: <PostJob />
  },
   {
    path: '/admin/jobs/:id/applicants',
    element: <Applicants />
  },

])

function App() {
  return (
    <>
      {/* <Navbar/> */}
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App
