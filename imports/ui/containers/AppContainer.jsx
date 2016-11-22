import React from 'react';
import { NavLink } from '../modules/NavLink';

export const AppContainer = props => (
    <div className="container">
        <div className="row">
            <div className="col-sm-3">
                <ul className="nav nav-pills nav-stacked">
                    <NavLink to="/products">Products</NavLink>
                    <NavLink to="/customers">Customers</NavLink>
                    <NavLink to="/orders">Orders</NavLink>
                    <NavLink to="/news">News</NavLink>
                </ul>
            </div>

            <div className="col-sm-9">
                {props.children}
            </div>
        </div>
    </div>
);
