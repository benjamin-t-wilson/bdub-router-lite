import useRouterLite from "./lib/useRouterLite";

import Home from "./Home";
import Test from "./Test";
import Extra from "./Extra";

function App() {
  const routes = [
    { path: "/", action: (data) => <Home {...data} /> },
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
