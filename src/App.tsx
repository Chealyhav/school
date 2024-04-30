import {
  Authenticated,
  ErrorComponent,
  HttpError,
  Refine,
} from "@refinedev/core";
import { DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/admin/layout";

import { Home } from "./pages/admin-page/home";
import { List } from "./pages/admin-page/home/list";
import dataProvider from "@refinedev/simple-rest";
// import { Create } from "./pages/admin-page/home/create";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Edit } from "./pages/admin-page/home/edit";
import axios from "axios";
import { Create } from "./pages/admin-page/home/create";
import { notificationProvider } from "./lib/notification";
import { LayoutHomepage } from "./components/school-web/layout";
import { AboutPage } from "./pages/web-page/abouts";
import { ContactPage } from "./pages/web-page/contact-us";
import { HomePage } from "./pages/web-page/home";
import { ClassesPage } from "./pages/web-page/classes";
import { authProvider } from "./lib/authProvider";
import { Dashboard } from "./pages/admin-page/dashboard";
import { ListBannerHome } from "./pages/admin-page/banner-home/list";
import { EditBannerHome } from "./pages/admin-page/banner-home/edit";
import { CreateBannerHome } from "./pages/admin-page/banner-home/create";
import { ListBanner } from "./pages/admin-page/banner/list";
import { CreateBanner } from "./pages/admin-page/banner/create";
import { EditBanner } from "./pages/admin-page/banner/edit";
import { BlogPage } from "./pages/web-page/blog";
import { TeacherPage } from "./pages/web-page/teacher";
import { ListStudent } from "./pages/admin-page/student/list";
import { CreateStudent } from "./pages/admin-page/student/create";
import { EditStudent } from "./pages/admin-page/student/edit";
import { ListTeacher } from "./pages/admin-page/teacher/list";
import { CreateTeacher } from "./pages/admin-page/teacher/create";
import { EditTeacher } from "./pages/admin-page/teacher/edit";
import { ListClasses } from "./pages/admin-page/classes/list";
import { CreateClasses } from "./pages/admin-page/classes/create";
import { EditClasses } from "./pages/admin-page/classes/edit";
import { ListAbout } from "./pages/admin-page/about/list";
import { CreateAbout } from "./pages/admin-page/about/create";
import { EditAbout } from "./pages/admin-page/about/edit";
import { ListContact } from "./pages/admin-page/contact/list";
import { CreateContact } from "./pages/admin-page/contact/create";
import { EditContact } from "./pages/admin-page/contact/edit";
import { ListBlog } from "./pages/admin-page/blog/list";
import { CreateBlog } from "./pages/admin-page/blog/create";
import { EditBlog } from "./pages/admin-page/blog/edit";

// initialize axios
export const API_URL = "http://127.0.0.1:8000/";
export const axiosInstance = axios.create();
axiosInstance.defaults.baseURL = API_URL;

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const customError: HttpError = {
      ...error,
      message: error.response?.data?.message,
      statusCode: error.response?.status,
    };

    return Promise.reject(customError);
  }
);
function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <DevtoolsProvider>
          <Refine
            dataProvider={dataProvider("http://127.0.0.1:8000/collection/api")}
            routerProvider={routerBindings}
            authProvider={authProvider}
            notificationProvider={notificationProvider}
            resources={[
              {
                name: "student",
                list: "/student",
                create: "/student/create",
                edit: "/student/edit/:id",
                show: "/homepage",
                meta: {
                  canDelete: true,
                },
              },
              {
                name: "teacher",
                list: "/teacher",
                create: "/teacher/create",
                edit: "/teacher/edit/:id",
                meta: {
                  canDelete: true,
                },
              },
              {
                name: "classes",
                list: "/classes",
                create: "/classes/create",
                edit: "/classes/edit/:id",
                meta: {
                  canDelete: true,
                },
              },

              {
                name: "dashboard",
                list: "/test/list",
                create: "/test/create",
                edit: "/test/edit/:id",
                show: "/homepage",
                meta: {
                  canDelete: true,
                },
              },
              {
                name: "image",
                list: "/image/list",
                create: "/image/create",
                edit: "/image/edit/:id",
                show: "/homepage",
                meta: {
                  canDelete: true,
                },
              },
              {
                name: "about",
                list: "/test/list",
                create: "/about/create",
                edit: "/test/edit/:id",
                show: "/homepage",
                meta: {
                  canDelete: true,
                },
              },
              {
                name: "bannerhome",
                list: "/bannerhome",
                create: "/bannerhome/create",
                edit: "/bannerhome/edit/:id",
                meta: {
                  canDelete: true,
                },
              },
              {
                name: "banner",
                list: "/banner",
                create: "/banner/create",
                edit: "/banner/edit/:id",
                meta: {
                  canDelete: true,
                },
              },
              {
                name: "contact",
                list: "/contact",
                create: "/contact/create",
                edit: "/contact/edit/:id",
                meta: {
                  canDelete: true,
                },
              },
              {
                name: "blog",
                list: "/blog",
                create: "/blog/create",
                edit: "/blog/edit/:id",
                meta: {
                  canDelete: true,
                },
              },
            ]}
            options={{
              syncWithLocation: true,
              warnWhenUnsavedChanges: true,
              useNewQueryKeys: true,
            }}
          >
            <Routes>
              <Route
                element={
                  <LayoutHomepage>
                    <Outlet />
                  </LayoutHomepage>
                }
              >
                <Route index element={<HomePage />} />
                <Route path="/Abouts" element={<AboutPage />} />
                <Route path="/Contacts" element={<ContactPage />} />
                <Route path="/Class" element={<ClassesPage />} />
                <Route path="/Blogs" element={<BlogPage />} />
                <Route path="/Teachers" element={<TeacherPage />} />
                <Route path="*" element={<ErrorComponent />} />
              </Route>

              <Route
                element={
                  <Authenticated
                    key="authenticated-inner"
                    fallback={<CatchAllNavigate to="/" />}
                    redirectOnFail="/"
                  >
                    <Layout>
                      <Outlet />
                      <ToastContainer
                        position="top-right"
                        autoClose={4000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="colored"
                        className="pr-4 w-80"
                      />
                    </Layout>
                  </Authenticated>
                }
              >
                <Route path="/dashboard" element={<Dashboard />} />
                {/* ------admin--------- */}
                <Route path="/student">
                  <Route index element={<ListStudent />} />
                  <Route path="/student/create" element={<CreateStudent />} />
                  <Route path="/student/edit/:id" element={<EditStudent />} />
                </Route>
                <Route path="/teacher">
                  <Route index element={<ListTeacher />} />
                  <Route path="/teacher/create" element={<CreateTeacher  />} />
                  <Route path="/teacher/edit/:id" element={<EditTeacher />} />
                </Route>
                <Route path="/classes">
                  <Route index element={<ListClasses />} />
                  <Route path="/classes/create" element={<CreateClasses />} />
                  <Route path="/classes/edit/:id" element={<EditClasses />} />
                </Route>
                {/* ------end admin--------- */}

                <Route path="/image">
                  <Route index element={<List />} />
                  <Route path="/image/list" element={<List />} />
                  <Route path="/image/create" element={<Create />} />
                  <Route path="/image/edit/:id" element={<Edit />} />
                </Route>
                <Route path="/bannerhome">
                  <Route index element={<ListBannerHome />} />
                  <Route
                    path="/bannerhome/create"
                    element={<CreateBannerHome />}
                  />
                  <Route
                    path="/bannerhome/edit/:id"
                    element={<EditBannerHome />}
                  />
                </Route>
                <Route path="/banner">
                  <Route index element={<ListBanner />} />
                  <Route path="/banner/create" element={<CreateBanner />} />
                  <Route path="/banner/edit/:id" element={<EditBanner />} />
                </Route>
                <Route path="/about">
                  <Route index element={<ListAbout />} />
                  <Route path="/about/create" element={<CreateAbout />} />
                  <Route path="/about/edit/:id" element={<EditAbout />} />
                </Route>
                <Route path="/contact">
                  <Route index element={<ListContact />} />
                  <Route path="/contact/create" element={<CreateContact />} />
                  <Route path="/contact/edit/:id" element={<EditContact />} />
                </Route>
                <Route path="/blog">
                  <Route index element={<ListBlog />} />
                  <Route path="/blog/create" element={<CreateBlog />} />
                  <Route path="/blog/edit/:id" element={<EditBlog />} />
                </Route>
                <Route path="*" element={<ErrorComponent />} />
              </Route>
              <Route
                element={
                  <Authenticated
                    key="authenticated-outer"
                    fallback={<Outlet />}
                  >
                    <NavigateToResource resource="image" />
                  </Authenticated>
                }
              ></Route>
            </Routes>

            <RefineKbar />
            <UnsavedChangesNotifier />
            <DocumentTitleHandler />
          </Refine>
        </DevtoolsProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
