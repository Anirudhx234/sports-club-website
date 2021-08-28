import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends React.Component {
    render() {
        const link = {
            textDecoration: 'none',
          };
        return (
            <div className="navbar" ref={this.props.reference}>
                <Link style={link} to="/home" >
                    <h3 >Home</h3>
                </Link>
                <Link style={link} to="/execs">
                    <h3>Execs</h3>
                </Link>
                <Link style={link} to="/sports-committees"> 
                    <h3>Sports + Committees</h3>
                </Link>
                <Link style={link} to="/events-schedule">
                    <h3>Events + Schedule</h3>
                </Link>
                <Link style={link} to="/generalinfo">
                    <h3>General Info</h3>
                </Link>
            </div>
        );
    }
}

export default Navbar;