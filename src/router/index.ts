import { RouteConfig } from 'react-router-config';
import Dom from "../view/index";
import Dom2 from "../view/index";

const routes: RouteConfig[] = [
    {
        path: '/',
        component: Dom,
        routes: [
            {
                path: '/dom2',
                component: Dom2
            }
        ]
    }
]

export default routes;