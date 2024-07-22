import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Helmet>
      <title>Stetic Glam</title>
      <meta property="og:title" content="Stetic Glam" />
      <meta
        property="og:description"
        content=" Stetic Glam se dedica a ofrecer tratamientos avanzados de belleza y
            cuidado personal. Nuestra misión es realzar la belleza y confianza
            de nuestros clientes mediante servicios de alta calidad, adaptados a
            sus necesidades individuales."
      />
      <meta
        property="og:image"
        content="https://www.svgrepo.com/show/530292/bushes-of-leaves.svg"
      />
      <meta
        property="og:url"
        content="https://portfolio-next-three-omega.vercel.app/"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Stetic Glam" />
      <meta
        name="twitter:description"
        content=" Stetic Glam se dedica a ofrecer tratamientos avanzados de belleza y
            cuidado personal. Nuestra misión es realzar la belleza y confianza
            de nuestros clientes mediante servicios de alta calidad, adaptados a
            sus necesidades individuales."
      />
      <meta
        name="twitter:image"
        content="https://www.svgrepo.com/show/530292/bushes-of-leaves.svg"
      />
    </Helmet>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
