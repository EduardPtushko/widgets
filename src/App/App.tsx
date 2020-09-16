import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

const Elements = lazy(() => import('../Elements'));
const Collections = lazy(() => import('../Collections'));
const NotFound = lazy(() => import('../shared/NotFound'));
const Views = lazy(() => import('../Views'));
const Modules = lazy(() => import('../Modules'));
import { Menu } from '../Menu/Menu';
import { Home } from '../shared/Home';
import { ErrorBoundary } from '../shared/ErrorBoundary';
import { Spinner } from '../shared/Spinner';

const App: React.FC = () => {
    return (
        <>
            <div className='ui container'>
                <Menu />
                <div className='segment'>
                    <ErrorBoundary>
                        <Suspense fallback={<Spinner />}>
                            <Switch>
                                <Route exact path='/'>
                                    <Home />
                                </Route>
                                <Route path='/elements'>
                                    <Elements />
                                </Route>
                                <Route path='/collections'>
                                    <Collections />
                                </Route>
                                <Route path='/views'>
                                    <Views />
                                </Route>
                                <Route path='/modules'>
                                    <Modules />
                                </Route>
                                <Route path='*'>
                                    <NotFound />
                                </Route>
                            </Switch>
                        </Suspense>
                    </ErrorBoundary>
                </div>
            </div>
        </>
    );
};

export default hot(App);
