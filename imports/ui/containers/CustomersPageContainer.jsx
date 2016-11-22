import React from 'react';
import { NavLink } from '../modules/NavLink';

export const CustomersPageContainer = props => (
    <div className="customers-page-container">
        <ul className="nav nav-tabs">
            <NavLink to="/customers/general">General</NavLink>
            <NavLink to="/customers/addresses">Addresses</NavLink>
            <NavLink to="/customers/orders">Orders</NavLink>
        </ul>

        {props.children}
    </div>
);
