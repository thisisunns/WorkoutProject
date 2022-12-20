import { MenuRounded, VideoCallRounded, DirectionsRun, Event, Apps, Person } from '@material-ui/icons'

import React from 'react'
import "./topBar.css"
export default function TopBar() {
    return (
        <div className='topBarContainer'>
            <div className='topBarLeft'>
                <div className='topBarLeftInner'>
                    <MenuRounded className="menuBtn" />
                </div>
            </div>
            <div className="topBarCenter">

                <div className="centerBtn">
                    <VideoCallRounded className="btn" />
                    LIVE
                </div>

                <div className="centerBtn">
                    <Event className="btn" />
                    MEMBERSHIPS
                </div>

                <div className="centerBtn">
                    <DirectionsRun className="btn" />
                    PLANS
                </div>

                <div className="centerBtn">
                    <Apps className="btn" />
                    MORE
                </div>

            </div>
            <div className='topBarRight'>
                <div className='topBarRightInner'>
                    <Person />
                    Login
                </div></div>
        </div>
    )
}
