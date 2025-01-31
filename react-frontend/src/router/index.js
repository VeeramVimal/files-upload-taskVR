import React from "react";
//** Router Components*/
import { BrowserRouter as AppRouter, Routes, Route } from "react-router-dom";
//** components imported */
import NotFound from "../pages/not-found";
import { protectedRoutes, publicRoutes } from "./routes/routes";
import PublicRoutes from "./routes/public-routes";
import ProtectedRoutes from "./routes/protected-routes";

const Router = () => {
  // ** All of the available layouts

  return (
    <>
      <AppRouter>
        <Routes>

          <Route path="*" element={<NotFound />} />

          {/* protected routes imported */}
          <Route path="/" element={<ProtectedRoutes />}>
            {protectedRoutes.map((route) => {
              return <Route path={route.path} element={route.component} />;
            })}
          </Route>

          {/* public routes imported */}
          {publicRoutes.map((route) => {
            return (
              <Route path={route.path} element={<PublicRoutes />}>
                <Route path={`/${route.path}`} element={route.component} />
              </Route>
            );
          })}
          
        </Routes>
      </AppRouter>
    </>
  );
};
export default Router;
