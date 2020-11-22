import {BottomNavigation, BottomNavigationAction, Button} from "@material-ui/core";
import React from "react";
import "./ComponentsCSS/Navbar.css";
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {NavLink} from "react-router-dom";


export const Navbar = () => {
    const [value, setValue] = React.useState(0);
    return (<>
            <nav className="container-fluid d-flex justify-content-between align-items-center">
                <img src="assets/images/stay_safe.svg" height="100px"/>
                <div className="d-flex">
                    <NavLink exact to='/'>
                        <div className="nav-item d-lg-flex d-none">
                            <Button variant="contained">
                                Home
                            </Button>
                        </div>
                    </NavLink>
                    <a href="/#staySafe">
                        <div className="nav-item d-lg-flex d-none">
                            <Button variant="contained" color="inherit">
                                Protect Yourself
                            </Button>
                        </div>
                    </a>
                    <a href='/#stats'>
                        <div className="nav-item d-lg-flex d-none">
                            <Button variant="contained" color="inherit">
                                Covid Statistics
                            </Button>
                        </div>
                    </a>
                    <NavLink exact to='/health-state'>
                        <div className="nav-item d-lg-flex d-none">
                            <Button variant="contained" color="inherit">
                                Check your Sympthoms
                            </Button>
                        </div>
                    </NavLink>
                    <NavLink exact to='/login'>
                        <div className="nav-item">
                            <Button variant="contained" color="inherit">
                                Login
                            </Button>
                        </div>
                    </NavLink>
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
