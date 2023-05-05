import { Switch, Route } from "react-router-dom";
import { memo, FC } from "react";
import { Login } from "../components/pages/Login";
import { homeRoutes } from "./HomeRoutes";
import { Page404 } from "../components/pages/Page404";

export const Router: FC = memo(() => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Login />} />
      <Route
        path="/home"
        render={({ match: { url } }) => (
          <Switch>
            {homeRoutes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="/" render={() => <Page404 />} />
    </Switch>
  );
});
