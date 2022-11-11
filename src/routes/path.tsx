import { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import Layout from '../pages/Layout'
import ChatPage from '../pages/Chat'
import { LoginPage } from "../pages/LoginPage";
import NoMatch from "../pages/NoMatch";
import { RequireAuth } from "../pages/RequireAuth";

export enum pathLocations {
  layout = '/',
  NoMatch = '*',
  loginPage = '/login-page',
  chatPage = '/chat-page'
}

export const routes: RouteObject[] = [
  {
    path: pathLocations.layout,
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },

      { index: true, path: pathLocations.chatPage, element: <RequireAuth><ChatPage /></RequireAuth> },
      { path: pathLocations.loginPage, element: <LoginPage /> },
      { path: pathLocations.NoMatch, element: <NoMatch /> },
    ],
  },
];