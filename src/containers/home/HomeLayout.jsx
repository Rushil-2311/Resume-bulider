import React from "react";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import dashRoutes from "routes/dashRoutes";
// import ProtectedRoute from "routes/protectedRoute";
import { Route, Switch } from "react-router-dom";

const DashLayout = () => {
  return (
    <section className="home-layout">
      <header className="header">
        <Header />
      </header>
      <main className="main-content">
        <Switch>
          {/* <ProtectedRoute> */}
          {dashRoutes.map((prop, key) => {
            return (
              <Route
                exact
                path={prop.path}
                component={prop.component}
                key={key}
              />
            );
          })}
          {/* </ProtectedRoute> */}
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </section>
  );
};

export default DashLayout;
