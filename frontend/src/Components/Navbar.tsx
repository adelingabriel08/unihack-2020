import {BottomNavigation, BottomNavigationAction, Button} from "@material-ui/core";
import React from "react";
import "./ComponentsCSS/Navbar.css";
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';


export const Navbar = () => {
  const [value, setValue] = React.useState(0);
    return (<>
            <nav className="container-fluid d-flex justify-content-between align-items-center">
                <img src="assets/images/stay_safe.svg" height="100px"/>
                <div className="d-flex">
                    <div className="nav-item d-lg-flex d-none">
                        {/* icon here */}
                        <Button variant="contained" color="inherit" style={{color: "#1DB954"}}>
                            Home
                        </Button>
                    </div>
                    <div className="nav-item d-lg-flex d-none">
                        {/* icon here */}
                        <Button variant="contained" color="inherit">
                            Covid Statistics
                        </Button>
                    </div>
                    <div className="nav-item d-lg-flex d-none">
                        {/* icon here */}
                        <Button variant="contained" color="inherit">
                            Protect Yourself
                        </Button>
                    </div>
                    <div className="nav-item d-lg-flex d-none">
                        {/* icon here */}
                        <Button variant="contained" color="inherit">
                            Check your Sympthoms
                        </Button>
                    </div>
                    <div className="nav-item">
                        {/* icon here */}
                        <Button variant="contained" color="inherit">
                            Login
                        </Button>
                    </div>
                </div>
            </nav>
            <nav className="d-lg-none">
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    showLabels
                    className="bottom-nav"
                >
                    <BottomNavigationAction label="Recents" icon={<RestoreIcon/>}/>
                    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon/>}/>
                    <BottomNavigationAction label="Nearby" icon={<LocationOnIcon/>}/>
                </BottomNavigation>
                );
            </nav>
        </>
    );
};
