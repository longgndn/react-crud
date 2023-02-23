// import { FC, ReactNode } from "react";
// import Redirect from "./Redirect";

// type IProps = {
//   condition?: boolean;
//   redirectTo: string;
//   children: ReactNode;
// };

// const ProtectedRoutes: FC<IProps> = ({ condition, redirectTo, children }) => {
//   return condition ? <>{children}</> : <Redirect to={redirectTo} />;
// };

// export default ProtectedRoutes;

import React from "react";

const ProtectRoute = () => {
  return <div>ProtectRoute</div>;
};

export default ProtectRoute;
