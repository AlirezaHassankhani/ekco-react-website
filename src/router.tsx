import Landing from './pages/Landing/Landing'
import Exams from './pages/Exams/Exams'
import AboutUs from './pages/AboutUs/AboutUs'
import ContactUs from './pages/ContactUs/ContactUs'
import Questions from './pages/Questions/Questions'
import ShoppingCart from './pages/ShoppingCart/ShoppingCart'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'


import UserPanel from './pages/UserPanel/UserPanel'
import UserDashboard from './pages/UserDashboard/UserDashboard'
import UserResult from './pages/UserResult/UserResult'
import UserQuizzes from './pages/UserQuizzes/UserQuizzes'
import UserEditProfile from './pages/UserEditProfile/UserEditProfile'
import UserChangePass from './pages/UserChangePass/UserChangePass'

import PrivateComponent from './PrivateComponent/PrivateComponent'

import AdminPanel from './pages/AdminPanel/AdminPanel'
import AdminDashboard from './pages/AdminDashboard/AdminDashboard'
import AdminQuestions from './pages/AdminQuestions/AdminQuestions'
import AddQuestion from './pages/AddQuestion/AddQuestion'
import AdminQuizzes from './pages/AdminQuizzes/AdminQuizzes'
import AdminUsersHandle from './pages/AdminUsersHandle/AdminUsersHandle'
import AdminEditProfile from './pages/AdminEditProfile/AdminEditProfile'
import AdminChangePass from './pages/AdminChangePass/AdminChangePass'

import CreateQuizze from './pages/CreateQuizze/CreateQuizze'
import StepFirstQuizze from './pages/StepFirstQuizze/StepFirstQuizze'
import StepSecondQuizze from './pages/StepSecondQuizze/StepSecondQuizze'
import StepEndQuizze from './pages/StepEndQuizze/StepEndQuizze'

export let routes = [
    { path: '/', element: <Landing /> },
    { path: '/exams', element: <Exams /> },
    { path: '/about-us', element: <AboutUs /> },
    { path: '/contact-us', element: <ContactUs /> },
    { path: '/questions', element: <Questions /> },
    { path:'/shopping-cart', element: <ShoppingCart /> },
    { path: '/login', element: <Login /> },
    { path:'/sign-up', element: <SignUp /> },
    { path:'/forgot-password', element: <ForgotPassword /> },


    { path:'/user-panel', element: <PrivateComponent><UserPanel /></PrivateComponent>, children: [
        { path: 'user-dashboard', element: <UserDashboard /> },
        { path: 'user-result', element: <UserResult /> },
        { path: 'user-quizzes', element: <UserQuizzes /> },
        { path: 'user-edit-profile', element: <UserEditProfile /> },
        { path: 'user-change-pass', element: <UserChangePass /> }
    ] },


    { path: '/admin-panel', element: <PrivateComponent><AdminPanel /></PrivateComponent>, children: [
        { path: 'admin-dashboard', element: <AdminDashboard /> },
        { path: 'admin-questions', element: <AdminQuestions /> },
        { path: 'add-questions', element: <AddQuestion /> },
        { path: 'admin-quizzes', element: <AdminQuizzes /> },
        { path: 'admin-users-handle', element: <AdminUsersHandle /> },
        { path: 'admin-edit-profile', element: <AdminEditProfile /> },
        { path: 'admin-change-pass', element: <AdminChangePass /> },
        { path: 'create-quizze', element: <CreateQuizze />, children: [
            { path: 'first-step', element: <StepFirstQuizze /> },
            { path: 'second-step', element: <StepSecondQuizze /> },
            { path: 'end-step', element: <StepEndQuizze /> }
        ] }
    ] }
]