import { RouteObject } from "react-router-dom";
import { CounterPage } from "../pages/Counter";
import Course from "../pages/Course";
import Courses from "../pages/Courses";
import CoursesIndex from "../pages/CoursesIndex";
import Home from "../pages/Home";
import Layout from '../pages/Layout'
import ChatPage from '../pages/Chat'
import { LoginPage } from "../pages/LoginPage";
import NoMatch from "../pages/NoMatch";
import { PublicPage } from "../pages/PublicPage";
import { RequireAuth } from "../pages/RequireAuth";

export enum pathLocations {
  layout = '/',
  courses = '/courses',
  courseId = ':id',
  NoMatch = '*',
  reactFundamentalsId = "/courses/react-fundamentals",
  advancedReactId = "/courses/advanced-react",
  reactRouter = "/courses/react-router",
  publicPage = '/public-page',
  counterPage = '/counter-page',
  loginPage = '/login-page',
  chatPage = '/chat-page'
}

export const routes: RouteObject[] = [
  {
    path: pathLocations.layout,
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: pathLocations.courses,
        element: <Courses />,
        children: [
          { index: true, element: <CoursesIndex /> },
          { path: pathLocations.courseId, element: <Course /> },
        ],
      },
      { path: pathLocations.publicPage, element: <PublicPage /> },
      { index: true, path: pathLocations.chatPage, element: <RequireAuth><ChatPage /></RequireAuth> },
      { path: pathLocations.counterPage, element: <CounterPage /> },
      { path: pathLocations.loginPage, element: <LoginPage /> },
      { path: pathLocations.NoMatch, element: <NoMatch /> },
    ],
  },
];