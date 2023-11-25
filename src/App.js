import { Routes, Route, Outlet, Navigate } from "react-router-dom";

import useUserStore from "./stores/LoginUser.js";
import Layout from "./pages/Layout.js";
import LoginPage from "./pages/Auth/LoginPage.js";
import SignUpPage from "./pages/Auth/SignUpPage.js";
import MyPage from "./pages/MyPage.js";
import LabListPage from "./pages/LabListPage.js";
import BoardListPage from "./pages/BoardListPage.js";
import HomePage from "./pages/Homepage.js";
import Contact from "./pages/Contact.js";
import ContactEmail from "./pages/ContactEmail.js";

import { AxiosInterceptor } from "./api/axios.js";
import LabDetailPage from "./pages/LabDetailPage.js";
import LabWritePage from "./pages/LabWritePage.js";
import { SnackbarProvider } from "notistack";
import StyledMaterialDesignContent from "./lib/styles/CustomSnackbarProvider.js";

const AuthRoute = () => {
  const { isLogin } = useUserStore();
  return isLogin ? <Outlet /> : <Navigate to="/auth/login" />;
};

const App = () => {
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      Components={{
        default: StyledMaterialDesignContent,
        success: StyledMaterialDesignContent,
        error: StyledMaterialDesignContent,
        warning: StyledMaterialDesignContent,
        info: StyledMaterialDesignContent,
      }}
    >
      <AxiosInterceptor />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/signup" element={<SignUpPage />} />
          <Route path="/lab" element={<LabListPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contactemail" element={<ContactEmail />} />
          <Route path="/lab/:labId" element={<LabDetailPage />} />

          <Route path="/board" element={<BoardListPage />} />
          <Route element={<AuthRoute />}>
            <Route path="/my" element={<MyPage />} />
            <Route path="/lab/write" element={<LabWritePage />} />
          </Route>
        </Route>
      </Routes>
    </SnackbarProvider>
  );
};

export default App;
