import { RouteConfig } from 'react-router-config';
import ClassDom  from "../components/class";
import Dom from "../components/index";

const routes: RouteConfig[] = [
    {
        path: '/home',
        component: Dom
    },
    {
        path: '/ClassDom',
        component: ClassDom
    }
]

export default routes;