"use strict";
var React = require('react');
$ = jQuery = require('jquery');

var ExtraPage = React.createClass({
    render: function() {
        return (
            <div className="container-fluid">
                <h1 className="text-center">Dungeons and Dragons Character Sheet</h1>
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <button className="charButton btn btn-primary btn-lg" href="">Login to Existing Character</button>
                        <button className="charButton btn btn-primary btn-lg" href="">Create new Character</button>
                    </div>
                </div>   
            </div>
        );
    }
});

module.exports = ExtraPage;