import { Navigate } from 'react-router-dom';

const AdminRouters = ({ isAdminLog, children }) => {
  return isAdminLog ? children : <Navigate to='/admin' />;
};

export default AdminRouters;
