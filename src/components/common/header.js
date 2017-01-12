"use strict";
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
    render: function() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <Link to="app"><img className="navbar-brand" src="images/brand.ico"/></Link>
                    <ul className="nav navbar-nav">
                        <li><Link to="app">Home</Link></li>
                        <li><Link to="authors">Authors</Link></li>
                        <li><Link to="about">About</Link></li> 
                        <li><Link to="dnd">DnD</Link></li> 
                    </ul> 
                </div>
            </nav>
        );
    }
});

module.exports = Header;