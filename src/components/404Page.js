"use strict";
var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
    render: function() {
        return (
            <div className="container">
                <h1 className="text-center">404: Page Not Found</h1>
                <div className="text-center">
                    <p> Nothing to see here, move along. </p>
                    <button className="btn "><Link to="app"> Back Home </Link></button>
                </div>   
            </div>
        );
    }
});

module.exports = NotFoundPage;