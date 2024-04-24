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
import { authProvider } from "./lib/authProvider";
import { AboutPage } from "./pages/web-page/abouts";
import { ContactPage } from "./pages/web-page/contact";
import { HomePage } from "./pages/web-page/home";
import { ClassesPage } from "./pages/web-page/classes";

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
              // {
              //   name: "image",
              //   list: "/test/list",
              //   create: "/test/create",
              //   edit: "/test/edit/:id",
              //   show: "/homepage",
              //   meta: {
              //     canDelete: true,
              //   },
              // },
              {
                name: "image",
                list: "/image/list",
                create: "/image/create",
                edit: "/test/edit/:id",
                show: "/homepage",
                meta: {
                  canDelete: true,
                },
              },
              // {
              //   name: "about",
              //   list: "/test/list",
              //   create: "/about/create",
              //   edit: "/test/edit/:id",
              //   show: "/homepage",
              //   meta: {
              //     canDelete: true,
              //   },
              // },
              
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
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/classes" element={<ClassesPage />} />
                <Route path="*" element={<ErrorComponent />} />
              </Route>
              <Route
                element={
                  <Authenticated
                    key="authenticated-inner"
                    fallback={<CatchAllNavigate to="/home" />}
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


        
                <Route path="/image">
                  <Route index element={<List />} />
                  <Route path="list" element={<List />} />
                  <Route path="create" element={<Create />} />
                  <Route path="edit/:id" element={<Edit />} />
                </Route>
                <Route path="*" element={<ErrorComponent />} />
        
                <Route
                  index
                  element={<NavigateToResource resource="image" />}
                />
                <Route path="/image">
                  <Route index element={<List />} />
                  <Route path="list" element={<List />} />
                  <Route path="create" element={<Create />} />
                  <Route path="edit/:id" element={<Edit />} />
                </Route>
                <Route path="*" element={<ErrorComponent />} />
              </Route>
              <Route
                element={
                  <Authenticated
                    key="authenticated-outer"
                    fallback={<Outlet />}
                  >
                    <NavigateToResource />
                  </Authenticated>
                }
              >
              </Route>
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
