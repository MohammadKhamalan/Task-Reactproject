import "./Navbar.scss";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import VideogameAssetOutlinedIcon from '@mui/icons-material/VideogameAssetOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import { Darkmodecontext } from '../context/Darkmodecontext';
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { useContext } from "react";
const Navbar=()=>{
    const { toggle, darkMode } = useContext(Darkmodecontext);

    return(
        <div>
        <div className="navbar">
<div className="left">
    <FacebookOutlinedIcon />
    {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} />
        )}
    <div className="search">
<SearchOutlinedIcon/>
<input type='text'placeholder='Search Facebook' />
</div>
</div>
<div className="center">
    <HomeOutlinedIcon/>
    <OndemandVideoOutlinedIcon/>
    <StorefrontOutlinedIcon/>
    <Groups2OutlinedIcon/>
    <VideogameAssetOutlinedIcon/>
</div>
<div className="right">
<div className="icon">
<MenuOutlinedIcon/>
<ForumOutlinedIcon/>
<NotificationsNoneOutlinedIcon/>
</div>
<div>
    <img src="/Capture.PNG" alt="" className="profile" />
</div>

        </div>
    
        </div>
        
        </div>
    )
}
export default Navbar