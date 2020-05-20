// Configuration

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  // other webpack configs...
  plugins: [
    new ModuleFederationPlugin({
      name: "app_one_remote",
      remotes: {
        app_two: "app_two_remote",
        app_three: "app_three_remote"
      },
      exposes: {
        'AppContainer':'./src/App'
      },
      shared: ["react", "react-dom","react-router-dom"]
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      chunks: ["main"]
    })
  ]
}



// Setting up build orchestration

<head>
  <script src="http://localhost:3002/app_one_remote.js"></script>
  <script src="http://localhost:3003/app_two_remote.js"></script>
</head>
<body>
  <div id="root"></div>
</body>




// Consuming code from a remote

const Dialog = React.lazy(() => import("app_two_remote/Dialog"));

const Page1 = () => {
    return (
        <div>
            <h1>Page 1</h1>
            <React.Suspense fallback="Loading Material UI Dialog...">
                <Dialog />
            </React.Suspense>
        </div>
    );
}

export default Page1;



// And the router looks pretty standard:

import { Route, Switch } from "react-router-dom";

import Page1 from "./pages/page1";
import Page2 from "./pages/page2";
import React from "react";

const Routes = () => (
  <Switch>
    <Route path="/page1">
      <Page1 />
    </Route>
    <Route path="/page2">
      <Page2 />
    </Route>
  </Switch>
);

export default Routes;