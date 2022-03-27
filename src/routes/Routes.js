import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
//component
import { NavHeader} from '../components/styles/globalStyles';
import MenuNavbar from '../components/MenuNavbar';

//pages
import Index from '../pages/Index';
import Detail from '../pages/Detail';
import PageNotFound from '../pages/PageNotFound';

function Routes() {
  return (
    <>
      <NavHeader>
        <MenuNavbar></MenuNavbar>
      </NavHeader>
      <Switch>
        <Route exact path="/" component={() => <Redirect to="/index" />} />
        <Route exact path="/index" component={Index} />
        <Route exact path="/detail" component={Detail} />
        <Route path="*" exact={true} component={PageNotFound} />
      </Switch>
    </>
  )
}

export default Routes