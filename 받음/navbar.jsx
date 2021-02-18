import './App.css';
import React, { Component } from 'react';

class navbar extends Component {
    render() {
        return (
            <>
                <nav className="navbar">
                    <div className="navbar_backspace">
                        <i className="fas fa-arrow-left"></i>
                    </div>

                    <div className="navbar_title">
                        <h3>홈</h3>
                    </div>

                    <div className="navbar_menu">
                        <div className="navbar_search">
                            <i className="fas fa-search"></i>
                        </div>
                        <div className="navbar_dot_rd">
                            <i className="fas fa-ellipsis-v"></i>
                        </div>
                    </div>
                </nav>
            </>
        );
    }
}

export default navbar;