import React from 'react'
import  '../static/style/navigation.css'
import dashboardIcon from '../static/dashboard_icon.svg'
import scheduleIcon from '../static/schedule_icon.svg'
import settingIcon from '../static/setting_icon.svg'
import userIcon from '../static/user_icon.svg'
import transactionIcon from '../static/transaction_icon.svg'
import { slide as Menu } from 'react-burger-menu'

const Navigation = ({className,openmenu}) => {
   const showSettings =(event)=> {
        event.preventDefault();
      }
    return (
        <div>
                <Menu isOpen={openmenu}  pageWrapId={ "page-wrap" } outerContainerId='outer-container' >
            <div id='page-wrap' className={`navigation ${className}`}>

                <div className="menu-item text-wrapper">Help</div>
                <div className="menu-item div">Contact Us</div>
                <div className="menu-item text-wrapper-2">Settings</div>
                <div className="menu-item text-wrapper-3">Users</div>
                <div className="menu-item text-wrapper-4">Schedules</div>
                <div className="menu-item text-wrapper-5">Transactions</div>
                <div className="menu-item text-wrapper-6">Dashboard</div>

                <img
                    className="transaction-icon"
                    alt="Transaction icon"
                    src={transactionIcon}
                />
                <img
                    className="schedule-icon"
                    alt="Schedule icon"
                    src={scheduleIcon}
                />
                <img
                    className="dashboard-icon"
                    alt="Dashboard icon"
                    src={dashboardIcon}
                />
                <img className="setting-icon" alt="Setting icon" src={settingIcon} />
                <img className="user-icon" alt="User icon" src={userIcon} />
                <div className="text-wrapper-7">Board.</div>

            </div>
                </Menu>

                <div id='page-wrap' className={`without-menu navigation ${className}`}>

                <div className="menu-item text-wrapper">Help</div>
                <div className="menu-item div">Contact Us</div>
                <div className="menu-item text-wrapper-2">Settings</div>
                <div className="menu-item text-wrapper-3">Users</div>
                <div className="menu-item text-wrapper-4">Schedules</div>
                <div className="menu-item text-wrapper-5">Transactions</div>
                <div className="menu-item text-wrapper-6">Dashboard</div>

                <img
                    className="transaction-icon"
                    alt="Transaction icon"
                    src={transactionIcon}
                />
                <img
                    className="schedule-icon"
                    alt="Schedule icon"
                    src={scheduleIcon}
                />
                <img
                    className="dashboard-icon"
                    alt="Dashboard icon"
                    src={dashboardIcon}
                />
                <img className="setting-icon" alt="Setting icon" src={settingIcon} />
                <img className="user-icon" alt="User icon" src={userIcon} />
                <div className="text-wrapper-7">Board.</div>

            </div>
        </div>
    )
}

export default Navigation
