import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import AllCommentPage from '../pages/AllCommentPage'
import AllTicketPage from '../pages/AllTicketPage'
import AddCommentPage from '../pages/AddCommentPage'
import AddTicketPage from '../pages/AddTicketPage'
import AddUserPage from '../pages/AddUserPage'
import AllUsersPage from '../pages/AllUserPage'
import AllStatusPage from '../pages/AllStatusPage'
import AddStatusPage from '../pages/AddStatusPage'
import AddPriorityPage from '../pages/AddPriorityPage'
import AllPriorityPage from '../pages/AllPriorityPage'
import UpdateTicketPage from '../pages/UpdateTicketPage'
import Protected from './Protected'
import About from '../pages/About'
import Page404 from '../pages/Page404'
const AppRoutes = () => (
    <>
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Page404 />} />
            
            {/* Protected Routes for all authenticated users */}
            <Route element={<Protected />}>
                <Route path='/tickets' element={<AllTicketPage />} />
                <Route path="/tickets/:ticketId" element={<AllCommentPage />} />
                <Route path="/tickets/:ticketId/add-comment" element={<AddCommentPage />} />
            </Route>

            {/* Customer Only */}
            <Route element={<Protected allowedRoles={['customer']} />}>
                <Route path="/tickets/new" element={<AddTicketPage />} />
            </Route>

            {/* Admin Only */}
            <Route element={<Protected allowedRoles={['admin']} />}>
                <Route path='/users' element={<AllUsersPage />} />
                <Route path="/users/new" element={<AddUserPage />} />
                <Route path="/statuses" element={<AllStatusPage />} />
                <Route path="/statuses/new" element={<AddStatusPage />} />
                <Route path="/priorities" element={<AllPriorityPage />} />
                <Route path="/priorities/new" element={<AddPriorityPage />} />
            </Route>

            {/* Admin and Agent */}
            <Route element={<Protected allowedRoles={['admin', 'agent']} />}>
                 <Route path="/tickets/:ticketId/edit" element={<UpdateTicketPage />} />
            </Route>

        </Routes>
    </>
)

export default AppRoutes