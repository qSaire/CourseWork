import {ADMIN_ROUTE, ACCOUNT_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, PRIVACY_ROUTE, PROFILE_ROUTE, PLAY_ROUTE, MAIN_ROUTE} from "./utils/consts";
import Admin from "./pages/Admin";
import Account from "./pages/Account";
import Privacy from "./pages/Privacy";
import Play from "./pages/Play";
import Auth from "./pages/Auth";
import Main from "./pages/Main";
import Profile from "./pages/Profile";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: ACCOUNT_ROUTE,
        Component: Account
    },
    {
        path: PRIVACY_ROUTE,
        Component: Privacy
    },
    {
        path: PLAY_ROUTE,
        Component: Play
    },
    {
        path: PROFILE_ROUTE,
        Component: Profile
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    },



    {
        path: PLAY_ROUTE,
        Component: Play
    },{
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: ACCOUNT_ROUTE,
        Component: Account
    },
    {
        path: PRIVACY_ROUTE,
        Component: Privacy
    },
    {
        path: PROFILE_ROUTE,
        Component: Profile
    }


]