new ModuleFederationPlugin({
  name: "app_three_remote",
  library: { type: "var", name: "app_three_remote" },
  filename: "remoteEntry.js",
  exposes: {
    Button: "./src/Button"
  },
  shared: ["react", "react-dom"]
}),