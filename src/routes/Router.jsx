import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/homePage/HomePage";
import LoginPage from "../pages/authPages/LoginPage";
import RegisterPage from "../pages/authPages/RegisterPage";
import ForgotPassPage from "../pages/authPages/ForgotPassPage";
import ChallengesPage from "../pages/challengesPages/challengesPage/ChallengesPage";
import ChallengeDetailPage from "../pages/challengesPages/challengeDetailPage/ChallengeDetailPage";
import AddChallengePage from "../pages/challengesPages/addChallengePage/AddChallengePage";
import MyActivitiesPage from "../pages/userActivityPages/myActivitiesPage/MyActivitiesPage";
import MyActivityDetailPage from "../pages/userActivityPages/myActivityDetailPage/MyActivityDetailPage";
import ErrorPage from "../pages/errorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import AuthProvider from "../context/AuthProvider";

const router = createBrowserRouter([
    {
        path: '/',
        element:
            <AuthProvider>
                <MainLayout></MainLayout>
            </AuthProvider>,
        children: [
            {
                path: '',
                element: <HomePage></HomePage>,
            },
            {
                path: '/challenges',
                element: <ChallengesPage></ChallengesPage>,
            },
            {
                path: '/challenges/:id',
                element:
                    <PrivateRoute>
                        <ChallengeDetailPage></ChallengeDetailPage>
                    </PrivateRoute>
            },
            {
                path: '/challenges/add',
                element:
                    <PrivateRoute>
                        <AddChallengePage></AddChallengePage>
                    </PrivateRoute>

            },
            {
                path: '/my-activities',
                element:
                    <PrivateRoute>
                        <MyActivitiesPage></MyActivitiesPage>
                    </PrivateRoute>,
            },
            {
                path: '/my-activities/:id',
                element:
                    <PrivateRoute>
                        <MyActivityDetailPage></MyActivityDetailPage>
                    </PrivateRoute>,
            },
            {
                path: '/auth/login',
                element: <LoginPage></LoginPage>,
            },
            {
                path: '/auth/register',
                element: <RegisterPage></RegisterPage>,
            },
            {
                path: '/auth/forgotPass',
                element: <ForgotPassPage></ForgotPassPage>,
            },



        ]
    },
    {
        path: '/*',
        element: <ErrorPage></ErrorPage>,
    }
]);

export default router;