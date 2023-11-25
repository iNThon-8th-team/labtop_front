import { Routes, Route, Outlet, Navigate } from "react-router-dom";

import useUserStore from "./stores/LoginUser.js";
import Layout from "./pages/Layout.js";
import LoginPage from "./pages/Auth/LoginPage.js";
import SignUpPage from "./pages/Auth/SignUpPage.js";
import MyPage from "./pages/MyPage.js";
import LabListPage from "./pages/LabListPage.js";
import BoardListPage from "./pages/BoardListPage.js";
import HomePage from "./pages/Homepage.js";
import { AxiosInterceptor } from "./api/axios.js";
import LabDetailPage from "./pages/LabDetailPage.js";

const AuthRoute = () => {
  const { isLogin } = useUserStore();
  return isLogin ? <Outlet /> : <Navigate to="/auth/login" />;
};

const App = () => {
  return (
    <>
      <AxiosInterceptor />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/signup" element={<SignUpPage />} />

          <Route path="/lab" element={<LabListPage />} />

          <Route path="/lab/:labId" element={<LabDetailPage />} />
          <Route path="/board" element={<BoardListPage />} />

          <Route element={<AuthRoute />}>
            <Route path="/my" element={<MyPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
