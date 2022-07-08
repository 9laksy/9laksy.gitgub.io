import React, { useState, useEffect } from 'react';

import {
    f7ready,
    App,
    Views,
    View,
    Toolbar,
    Link
} from 'framework7-react';


import routes from '../js/routes';
import store from '../js/store';

const MyApp = () => {


    // Framework7 Parameters
    const f7params = {
        name: 'Interest Calculator', // App name
        theme: 'auto', // Automatic theme detection

        // App store
        store: store,
        // App routes
        routes: routes,
        // Register service worker (only on production build)
        serviceWorker: process.env.NODE_ENV === 'production' ? {
            path: '/service-worker.js',
        } : {},
    };

    f7ready(() => {
        // Call F7 APIs here
    });

    return (
        <App {...f7params} >
            {/* Views/Tabs container */}
            <Views tabs className="safe-areas">
                {/* Tabbar for switching views-tabs */}
                <Toolbar tabbar labels bottom>
                    <Link tabLink="#view-calculator" tabLinkActive iconIos="f7:circle_grid_3x3_fill" 
                        iconAurora="f7:circle_grid_3x3_fill" iconMd="material:calculate" text="Calculator" />
                    <Link tabLink="#view-catalog" iconIos="f7:square_list_fill" iconAurora="f7:square_list_fill"
                        iconMd="material:view_list" text="History" />
                </Toolbar>

                {/* Catalog View */}
                <View id="view-catalog" name="catalog" tab url="/catalog/" />

                {/* Settings View */}
                <View id="view-calculator" tabActive main name="calculator" tab url="/calculator/" />
            </Views>
        </App>
    )
}
export default MyApp;