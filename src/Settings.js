import settingsIcon from "./settings.png"


const Settings = ({display, settingsHandle}) => {
  console.log(display)
  return (
    <>
        <div className={"settings-menu " + display}></div>
        <div className="settings-container ">
            <img onClick={settingsHandle} className="settings-icon" src={settingsIcon} alt="settings"/>
        </div>
    </>
  )
}

export default Settings
