"use strict";
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
$ = jQuery = require('jquery');

var dndStartPage = React.createClass({
    render: function() {
        return (
            <div className="container-fluid">
                <h1 className="text-center">Dungeons and Dragons Character Sheet</h1>
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <Link to="login"><button className="charButton btn btn-primary btn-lg" href="">Login to Existing Character</button></Link>
                        <Link to="setup"><button className="charButton btn btn-primary btn-lg" href="">Create new Character</button></Link>
                    </div>
                </div>   
            </div>
        );
    }
});

module.exports = dndStartPage;