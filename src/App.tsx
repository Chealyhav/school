import {
  Authenticated,
  ErrorComponent,
  HttpError,
  Refine,
} from "@refinedev/core";
import {  DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import routerBindings, {
  CatchAllNavigate,
  DocumentTitleHandler,
  NavigateToResource,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import { authProvider } from "./authProvider";
import { Layout } from "./components/layout";
import {
  BlogPostCreate,
  BlogPostEdit,
  BlogPostList,
  BlogPostShow,
} from "./pages/blog-posts";
import {
  CategoryCreate,
  CategoryEdit,
  CategoryList,
  CategoryShow,
} from "./pages/categories";
import { ContactPage } from "./pages/home/contact";
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
                name: "test",
                list: "/test/list",
                create: "/test/create",
                edit: "/test/edit/:id",
                show: "/homepage",
                meta: {
                  canDelete: true,
                },
              },
              {
                name: "blog_posts",
                list: "/blog-posts",
                create: "/blog-posts/create",
                edit: "/blog-posts/edit/:id",
                show: "/blog-posts/show/:id",
                meta: {
                  canDelete: true,
                },
              },
              {
                name: "categories",
                list: "/categories",
                create: "/categories/create",
                edit: "/categories/edit/:id",
                show: "/categories/show/:id",
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
                <Route
                  index
                  element={<NavigateToResource resource="test" />}
                />
                <Route path="/test">
                  <Route index element={<Home />} />
                  <Route path="list" element={<List />} />
                  <Route path="create" element={<Create />} />
                  <Route path="edit/:id" element={<Edit />} />
                  <Route path="show/:id" element={<BlogPostShow />} />
                </Route>

                <Route path="/blog-posts">
                  <Route index element={<BlogPostList />} />
                  <Route path="create" element={<BlogPostCreate />} />
                  <Route path="edit/:id" element={<BlogPostEdit />} />
                  <Route path="show/:id" element={<BlogPostShow />} />
                </Route>
                <Route path="/categories">
                  <Route index element={<CategoryList />} />
                  <Route path="create" element={<CategoryCreate />} />
                  <Route path="edit/:id" element={<CategoryEdit />} />
                  <Route path="show/:id" element={<CategoryShow />} />
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
                <Route path="/home">
                  <Route index element={<LayoutHomepage />} />
                  <Route path="contact" element={<ContactPage />} />
                  <Route path="contact" element={<ContactPage />} />
                </Route>
                <Route path="/home" element={<LayoutHomepage />} />
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
