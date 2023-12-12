import useRouterLite from "@bdub/router-lite";

import Home from "./Home";
import Test from "./Test";
import Extra from "./Extra";
import Motd from "./Motd";

function App() {
  const routes = [
    { path: "/", action: (data) => <Home {...data} /> },
    {
      path: "/motd",
      action: async (data) => {
        const resp = await fetch("https://api.chucknorris.io/jokes/random");
        const json = await resp.json();
        data.message = json;
        return <Motd {...data} />;
      },
    },
    { path: "/test/extra", action: (data) => <Extra {...data} /> },
    {
      path: "/test/:id",
      action: (data) => <Test {...data} />,
    },
  ];

  const renderedElement = useRouterLite(routes);

  return renderedElement;
}

export default App;
