"use strict";
var React = require('react');
$ = jQuery = require('jquery');

var About = React.createClass({
    render: function() {
        return (
            <div className="container">
                <h1>About</h1>
                <p> This application uses the following technologies: </p> 
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                        <li>Node</li>
                        <li>Gulp</li>
                        <li>Broswerify</li>
                        <li>Bootstrap</li>
                    </ul> 
            </div>
        );
    }
});

module.exports = About;