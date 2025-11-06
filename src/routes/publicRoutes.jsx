import UsersPage from "../pages/UsersPage";

const publicRoutes = [
  { path: "/users", element: <UsersPage />, meta: { public: true } },
];

export default publicRoutes;
