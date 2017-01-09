"use strict";
var React = require('react');
$ = jQuery = require('jquery');

var ExtraPage = React.createClass({
    render: function() {
        return (
            <div className="container">
                <h1 className="text-center">Dungeons and Dragons Character Sheet</h1>
                <div className="row">
                    <div className=".col-md-6">
                        <div className="thumbnail">  
                            <button href="">Login to Existing Character</button>
                        </div>
                    </div>
                    <div className=".col-md-6">
                        <div className="thumbnail">  
                            <button href="">Create new Character</button>
                        </div>
                    </div>
                </div>   
            </div>
        );
    }
});

module.exports = ExtraPage;