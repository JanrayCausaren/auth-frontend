import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
import HomePage from "@/features/landing/pages/HomePage";
import AuthLayout from "@/layout/AuthLayout";
import LandingLayout from "@/layout/LandingLayout";
import RootLayout from "@/layout/RootLayout";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        // index: true,
        path: "/",
        element: <LandingLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
        ],
      },
      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          {
            path: "login",
            index: true,
            element: <LoginPage />,
          },
          {
            path: "register",
            element: <RegisterPage />,
          },
        ],
      },
    ],
  },
]);

export default router;

// export const router = createBrowserRouter([
//   {
//     element: <RootLayout />,
//     children: [
//       {
//         element: <LandingLayout />,
//         children: [{ index: true, element: <HomePage /> }],
//       },
//       {
//         element: <AuthLayout />,
//         children: [
//           { path: "login", element: <LoginPage /> },
//           { path: "register", element: <RegisterPage /> },
//         ],
//       },
//       {
//         element: <ProtectedRoute />,
//         children: [
//           {
//             element: <DashboardLayout />,
//             children: [
//               { path: "dashboard", element: <DashboardPage /> },
//               { path: "users", element: <UsersPage /> },
//               { path: "profile", element: <ProfilePage /> },
//             ],
//           },
//         ],
//       },
//     ],
//   },
// ]);
