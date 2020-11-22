import React from 'react';
import { Switch, Route, useRouteMatch, NavLink } from 'react-router-dom';
import { Biography } from '../Biography/Biography';
import { Companies } from '../Companies/Companies';
import { Partners } from '../Partners/Partners';

export const Tabs: React.FC = () => {
    const { path, url } = useRouteMatch();

    return (
        <div className="ui grid">
            <div className="four wide column">
                <div className="ui vertical fluid tabular menu">
                    <NavLink exact className="item" to={`${url}`}>
                        Biography
                    </NavLink>
                    <NavLink className="item" to={`${url}/companies`}>
                        Companies
                    </NavLink>
                    <NavLink className="item" to={`${url}/partners`}>
                        Partners
                    </NavLink>
                </div>
            </div>
            <div className="twelve wide stretched column">
                <div className="ui segment">
                    <Switch>
                        <Route exact path={`${path}`}>
                            <Biography />
                        </Route>
                        <Route path={`${path}/companies`}>
                            <Companies />
                        </Route>
                        <Route path={`${path}/partners`}>
                            <Partners />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
};
