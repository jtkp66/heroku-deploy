import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import SurveyCreate from "./surveys/SurveyCreate";
import SurveyEdit from "./surveys/SurveyEdit";
import SurveyDelete from "./surveys/SurveyDelete";
import SurveyList from "./surveys/SurveyList";
import SurveyShow from "./surveys/SurveyShow";
import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <div className="container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={SurveyList} />
            <Route path="/surveys/new" exact component={SurveyCreate} />
            <Route path="/surveys/edit/:id" exact component={SurveyEdit} />
            <Route path="/surveys/delete/:id" exact component={SurveyDelete} />
            <Route path="/surveys/:id" exact component={SurveyShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
