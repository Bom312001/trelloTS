import React, { FC, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import DefaultLayout, {
  DefaultLayoutProps,
} from "./layouts/DefaultLayout/DefaultLayout";
import { Fragment } from "react"; // chỉ là thẻ chứa, và k sinh ra thẻ thật trong DOM
import { publicRoutes, RouteItem } from "./routes";
import Login from "./layouts/components/login/Login";
import routes from "./config/routes";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem("email");
    console.log(email);
    navigate(email ? routes.home : routes.login);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Routes>
        {publicRoutes.map((route: RouteItem, index) => {
          const Page = route.component;
          let Layout: FC<DefaultLayoutProps> = DefaultLayout;
          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page></Page>
                </Layout>
              }
            />
          );
        })}
        <Route path={routes.login} element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
