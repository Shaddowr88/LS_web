import App from "../App";
import HomeScreen from "../screens/HomeScreen";
import Project from "../screens/ProjectScreen";



const RoutesList =   [
    {
        name:'index',
        path: "/",
        element: <HomeScreen/>,
    },

    {

        path: "/project/:ProjectId",
        element: <Project/>,
    },

    {
        path: "*",
        element: <App/>,
},

];

export default RoutesList
