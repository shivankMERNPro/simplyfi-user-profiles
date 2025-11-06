import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import publicRoutes from "./publicRoutes";
import LoaderPage from "../pages/commonPages/LoaderPage";
import NotFoundPage from "../pages/errorPages/NotFoundPage";

export default function ParentRoute() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoaderPage />}>
        <Routes>
          {publicRoutes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={element} />
          ))}

          {/* Redirect root path "/" → "/users" */}
          <Route path="/" element={publicRoutes[0].element} />

          {/* 404 fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
