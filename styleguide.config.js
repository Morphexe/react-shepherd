const path = require("path");
module.exports = {
  title: "React Shepherd",
  components: "./src/components/**/[A-Z]*.js",
  showSidebar: false,
  theme: {
    baseBackground: "#fdfdfc",
    link: "#274e75",
    linkHover: "#90a7bf",
    border: "#e0d2de",
    font: ["Helvetica", "sans-serif"]
  },
  styles: {
    Playground: {
      preview: {
        paddingLeft: 0,
        paddingRight: 0,
        borderWidth: [[0, 0, 1, 0]],
        borderRadius: 0
      }
    },
    Markdown: {
      pre: {
        border: 0,
        background: "none"
      },
      code: {
        fontSize: 14
      }
    }
  },
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath);
    return `import { ${name} } from 'react-shepherd';`;
  },

  // Example of overriding the CLI message in local development.
  // Uncomment/edit the following `serverHost` entry to see in output
  // serverHost: 'your-domain',
  printServerInstructions(config) {
    // eslint-disable-next-line no-console
    console.log(
      `View your styleguide at: http://${config.serverHost}:${
        config.serverPort
      }`
    );
  },

  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,

          loader: "babel-loader"
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.svg$/,
          loader: "url-loader"
        }
      ]
    }
  },

  // // Override Styleguidist components
  styleguideComponents: {
    LogoRenderer: path.join(__dirname, "theme/Logo"),
    StyleGuideRenderer: path.join(__dirname, "theme/StyleGuide"),
    SectionsRenderer: path.join(__dirname, "theme/Section")
  },
  ignore: ["**/*.test.js", "**/index.js"],
  require: [
    path.join(
      __dirname,
      "./node_modules/tether-shepherd/dist/css/shepherd-theme-dark.css"
    )
  ]
};
