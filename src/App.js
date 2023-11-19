import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./assets/libs/@mdi/font/css/materialdesignicons.min.css";

import AuthSignup from "./pages/auth/authSignup";
import AuthSignupSuccess from "./pages/auth/authSignupSuccess";
import AuthLogin from "./pages/auth/authLogin";

import Switch from "./component/Switch";
import Index from "./pages/home";
import ProfileEdit from "./pages/user/profileEdit";
import RouteGuard from "./routeGuard";
import NotFound from "./pages/notFound";
import { GlobalLoading } from "react-global-loading";
import CreateCampaign from "./pages/campaign/createCampaign";
import DetailCampaign from "./pages/campaign/detailCampaign";
import Profile from "./pages/user/profile";
import ExploreCampaign from "./pages/campaign/exploreCampaign";
import { ToastContainer } from "react-toastify";
import StatusPage from "./pages/utility/status";
import Contact from "./pages/contact/contact";
import PagePrivacy from "./pages/utility/privacy";
import PageFaq from "./pages/utility/faq";
import PageAboutus from "./pages/utility/about";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalLoading />
      <ToastContainer />
      <Switch />
      <Routes>
        <Route index element={<Navigate to="/home" />} />
        <Route exact path="/home" element={<Index />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/status" element={<StatusPage />} />
        <Route exact path="/auth-login" element={<AuthLogin />} />
        <Route exact path="/auth-signup" element={<AuthSignup />} />
        <Route exact path="/profile/:id" element={<Profile />} />
        <Route exact path="/explore-campaign" element={<ExploreCampaign />} />
        <Route exact path="/detail-campaign/:id" element={<DetailCampaign />} />
        <Route
          exact
          path="/auth-signup-success"
          element={<AuthSignupSuccess />}
        />
        <Route exact path="/privacy" element={<PagePrivacy />} />
        <Route exact path="/faq" element={<PageFaq />} />
        <Route exact path="/about" element={<PageAboutus />} />
        <Route exact path="/" element={<RouteGuard />}>
          <Route exact path="/profile-edit" element={<ProfileEdit />} />
          <Route exact path="/create-campaign" element={<CreateCampaign />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
