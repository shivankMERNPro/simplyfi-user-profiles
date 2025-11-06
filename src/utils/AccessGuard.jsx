import { useEffect, useRef, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const AccessGuard = ({
  children,
  meta,
  isAuthenticated,
  role,
  getDefaultRoute,
}) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [redirect, setRedirect] = useState(null);
  const prevValidRoute = useRef(getDefaultRoute());

  const prevAuth = useRef(isAuthenticated);
  const prevRole = useRef(role);

  // ------------------------------------------------------------
  // 1️. Validate access control (auth + role + public logic)
  // ------------------------------------------------------------
  useEffect(() => {
    const { public: isPublic, roles = [] } = meta || {};

    if (isPublic && isAuthenticated) {
      if (prevValidRoute.current !== currentPath) {
        toast.error("Public route is not allowed for authenticated users.");
        setRedirect(prevValidRoute.current);
      }
      return;
    }

    if (roles.length > 0 && !isAuthenticated) {
      toast.error("You must be logged in to access this page!");
      setRedirect(getDefaultRoute());
      return;
    }

    if (roles.length > 0 && !roles.includes(role)) {
      toast.warning(`Your role "${role}" cannot access ${currentPath}!`);
      setRedirect(prevValidRoute.current);
      return;
    }

    prevValidRoute.current = currentPath;
  }, [currentPath, meta, isAuthenticated, role]);

  // ------------------------------------------------------------
  // 2. Reload once when auth or role actually changes
  // ------------------------------------------------------------
  useEffect(() => {
    const authChanged = prevAuth.current !== isAuthenticated;
    const roleChanged = prevRole.current !== role;

    if (authChanged || roleChanged) {
      console.log("Auth or role changed → reloading once...");
      window.location.reload();
    }

    prevAuth.current = isAuthenticated;
    prevRole.current = role;
  }, [isAuthenticated, role]);

  // ------------------------------------------------------------
  // 3. Redirect if access invalid
  // ------------------------------------------------------------
  if (redirect && redirect !== currentPath) {
    return <Navigate to={redirect} replace />;
  }

  return children;
};

export default AccessGuard;
