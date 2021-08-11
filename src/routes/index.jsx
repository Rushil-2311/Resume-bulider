import HomeLayout from "containers/home/HomeLayout";
import SignUp from "containers/auth/SignUp";
import SignIn from "containers/auth/SignIn";

const indexRoutes = [
  { path: "/signup", component: SignUp },
  { path: "/login", component: SignIn },
  { path: "/", component: HomeLayout }
];

export default indexRoutes;
