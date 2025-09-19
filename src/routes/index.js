import Home from '@pages/Home';
import Following from '@pages/Following';
import Profile from '@pages/Profile';
import Upload from '@pages/Upload';
import Search from '@pages/Search';
import { HeaderOnly } from '../components/Layout';

const publicRoutes = [
    {
        path: '/',
        conponent: Home,
    },
    {
        path: '/following',
        conponent: Following,
    },
    {
        path: '/@:nickname',
        conponent: Profile,
    },
    {
        path: '/upload',
        conponent: Upload,
        layout: HeaderOnly
    },
    {
        path: '/search',
        conponent: Search,
        layout: null
    },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
