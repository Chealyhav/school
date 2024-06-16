import {
  Authenticated,
  Refine,
} from "@refinedev/core";
import { DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbarProvider } from "@refinedev/kbar";
import routerBindings, {
  CatchAllNavigate,
  NavigateToResource,
} from "@refinedev/react-router-v6";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components/admin/layout";
import dataProvider from "@refinedev/simple-rest";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notificationProvider } from "./lib/notification";
import { LayoutHomepage } from "./components/school-web/layout";
import { ContactPage } from "./pages/web-page/contact-us";
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
import { CreateStudent } from "./pages/admin-page/student/create";
import { EditStudent } from "./pages/admin-page/student/edit";
import { CreateTeacher } from "./pages/admin-page/teacher/create";
import { EditTeacher } from "./pages/admin-page/teacher/edit";
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
import { API_URL } from "./api/url";
import { ListTeacher } from "./pages/admin-page/teacher";
import { ListStudent } from "./pages/admin-page/student";
import ErrorPage from "./pages/error/404";
import { ListClasses } from "./pages/admin-page/classes";
import { CreateUser } from "./pages/admin-page/auth/create";
import { ListUser } from "./pages/admin-page/auth";
import { ClassesPage } from "./pages/web-page/classes";
import { HomePage } from "./pages/web-page/home";
import { ListParent } from "./pages/admin-page/patrent";
import { CreateParent } from "./pages/admin-page/patrent/create";
import { EditParent } from "./pages/admin-page/patrent/edit";
import { ListSubject } from "./pages/admin-page/subject";
import { CreateSubject } from "./pages/admin-page/subject/create";
import { EditSubject } from "./pages/admin-page/subject/edit";


function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <DevtoolsProvider>
          <Refine
            dataProvider={dataProvider(`${API_URL}/collection/api`)}
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
                name: "group",
                list: "/group",
                create: "/group/create",
                edit: "/group/edit/:id",
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
                name: "subjects",
                list: "/subjects",
                create: "/subjects/create",
                edit: "/subjects/edit/:id",
                meta: {
                  canDelete: true,
                },
              },
              {
                name: "parent",
                list: "/parent",
                create: "/parent/create",
                edit: "/parent/edit/:id",
                meta: {
                  canDelete: true,
                },
              },
              {
                name: "register",
                list: "/register",
                create: "/register/create",
                meta: {
                  canDelete: true,
                },
              },
              {
                name: "about",
                list: "/about",
                create: "/about/create",
                edit: "/about/edit/:id",
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
                {/* <Route path="/Abouts" element={<AboutPage />} /> */}
                <Route path="/Contacts" element={<ContactPage />} />
                <Route path="/Class" element={<ClassesPage />} />
                <Route path="/Blogs" element={<BlogPage />} />
                <Route path="/Teachers" element={<TeacherPage />} />
                <Route path="*" element={<ErrorPage />} />
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
                  <Route path="/teacher/create" element={<CreateTeacher />} />
                  <Route path="/teacher/edit/:id" element={<EditTeacher />} />
                </Route>
                <Route path="/classes">
                  <Route index element={<ListClasses />} />
                  <Route path="/classes/create" element={<CreateClasses />} />
                  <Route path="/classes/edit/:id" element={<EditClasses />} />
                </Route>
                <Route path="/subjects">
                  <Route index element={<ListSubject />} />
                  <Route path="/subjects/create" element={<CreateSubject/>} />
                  <Route path="/subjects/edit/:id" element={<EditSubject />} />
                </Route>
                <Route path="/parent">
                  <Route index element={<ListParent />} />
                  <Route path="/parent/create" element={<CreateParent />} />
                  <Route path="/parent/edit/:id" element={<EditParent />} />
                </Route>
                {/* ------end admin--------- */}

                <Route path="/register">
                   <Route index element={<ListUser />} />
                  <Route path="/register/create" element={<CreateUser />} />
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
                
              </Route>
              <Route
                element={
                  <Authenticated
                    key="authenticated-outer"
                    fallback={<Outlet />}
                  >
                    <NavigateToResource resource="student" />
                  </Authenticated>
                }
              ></Route>
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Refine>
        </DevtoolsProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
