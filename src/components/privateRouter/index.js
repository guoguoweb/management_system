import { Navigate } from "react-router-dom";

import Main from "../../views/main/index";

const FadingRoute = () => {
  const auth = false;
  return auth ? <Main /> : <Navigate to="/" />;
};

export default FadingRoute;
