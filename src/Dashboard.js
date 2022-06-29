import resetIcon from "./reset.png"
import Settings from "./Settings"
import { useState } from "react"


const Dashboard = ({settingsHandle, resetHandle}) => {
    const [dashboardStatusTable, setDashboardStatusTable] = useState({
        resetMenu: 'hide',
        settingsMenu: 'hide'
    })

    const handleSettingsClick = () => {
        if(dashboardStatusTable.settingsMenu === 'hide') {
            setDashboardStatusTable({
                resetMenu: 'hide',
                settingsMenu: 'show',
            })
        }
        else {
            setDashboardStatusTable({
                resetMenu: 'hide',
                settingsMenu: 'hide',
            })
        }
        settingsHandle()
    } 

    return (
        <div className="dashboard">
            <Settings settingsHandle={handleSettingsClick} display={dashboardStatusTable.settingsMenu}/>
            
            <img onClick={resetHandle} className="reset-icon" src={resetIcon} alt="settings"/>
        </div>
    ) 
}

export default Dashboard