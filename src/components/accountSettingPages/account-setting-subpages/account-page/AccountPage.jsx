import React from 'react'
import { Route, Routes } from 'react-router-dom';
import ProfilePageFooter from '../../profile-page-foot/ProfilePageFooter';
import ProfilePageHeader from '../../profile-page-head/ProfilePageHeader';
import EditAccountPage from '../edit-account-page/EditAccountPage';
import ViewAccountPage from '../view-account-page/ViewAccountPage';
import './AccountPage.css';

function AccountPage() {
  return (
    <div className='accountpage'>
            <div className="mx1080">
        <ProfilePageHeader />
            <Routes>
                <Route path="/" element={<ViewAccountPage />} />
                <Route path="/edit" element={<EditAccountPage />} />
            </Routes>
        <ProfilePageFooter />
            </div>
    </div>
  )
}

export default AccountPage