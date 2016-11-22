import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import { AppContainer } from '../../ui/containers/AppContainer.jsx';
import { ProductsPageContainer } from '../../ui/containers/ProductsPageContainer.jsx';
import { CustomersPageContainer } from '../../ui/containers/CustomersPageContainer.jsx';
import { OrdersPageContainer } from '../../ui/containers/OrdersPageContainer.jsx';
import { NewsPageContainer } from '../../ui/containers/NewsPageContainer.jsx';
import { CustomersGeneralPage } from '../../ui/pages/CustomersGeneralPage.jsx';
import { CustomersAddressesPage } from '../../ui/pages/CustomersAddressesPage.jsx';
import { CustomersOrdersPage } from '../../ui/pages/CustomersOrdersPage.jsx';

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={AppContainer}>
            <Route path="products" component={ProductsPageContainer}/>
            <Route path="customers" component={CustomersPageContainer}>
                <Route path="general" component={CustomersGeneralPage}/>
                <Route path="addresses" component={CustomersAddressesPage}/>
                <Route path="orders" component={CustomersOrdersPage}/>
                <IndexRedirect to="addresses"/>
            </Route>
            <Route path="orders" component={OrdersPageContainer}/>
            <Route path="news" component={NewsPageContainer}/>
            <IndexRedirect to="customers"/>
        </Route>
    </Router>
);
