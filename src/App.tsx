import { useRoutes } from "react-router-dom";
import { routes } from "./router.tsx";
import AuthContext from "./context/AuthContext.ts";
import { useState } from "react";

function App() {

  let router = useRoutes(routes);
  let [login, setLogin] = useState<boolean>(true);

  return (
    <AuthContext.Provider
      value={{login}}
    >
      {router}
    </AuthContext.Provider>
  );
}

export default App;
