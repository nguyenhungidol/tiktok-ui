import routeConfigs from '../config/routes';

import Home from '@pages/Home';
import Following from '@pages/Following';
import Profile from '@pages/Profile';
import Upload from '@pages/Upload';
import Search from '@pages/Search';
import { HeaderOnly } from '../components/Layout';

const publicRoutes = [
    {
        path: routeConfigs.home,
        conponent: Home,
    },
    {
        path: routeConfigs.following,
        conponent: Following,
    },
    {
        path: routeConfigs.profile,
        conponent: Profile,
    },
    {
        path: routeConfigs.upload,
        conponent: Upload,
        layout: HeaderOnly,
    },
    {
        path: routeConfigs.search,
        conponent: Search,
        layout: null,
    },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
