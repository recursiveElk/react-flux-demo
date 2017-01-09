"use strict";
var React = require('react');
$ = jQuery = require('jquery');

var ExtraPage = React.createClass({
    render: function() {
        return (
            <div className="container">
                <h1 className="text-center">Dungeons and Dragons Character Sheet</h1>
                <div className="row">
                    <div className=".col-xs-6">
                        <button className="container-fluid btn btn-primary btn-lg btn-block" href="">Login to Existing Character</button>
                    </div>
                    <div className=".col-xs-6"> 
                        <button className="container-fluid btn btn-primary btn-lg btn-block" href="">Create new Character</button>
                    </div>
                </div>   
            </div>
        );
    }
});

module.exports = ExtraPage;