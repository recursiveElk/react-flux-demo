"use strict";

var React = require('react');
var Input = require('../common/textInput');
var Router = require('react-router');
var Link = require('react-router').Link;

var LoginForm = React.createClass({
    propTypes: {
        character: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },

    render: function() {
        return (
            <form>
                <Input 
                    name="charName"
                    label="Character Name"
                    value={this.props.character.charName}
                    onChange={this.props.onChange}
                    error={this.props.errors.charName} />
                <Input 
                    name="password"
                    label="Password"
                    value={this.props.character.password}
                    onChange={this.props.onChange}
                    error={this.props.errors.password} />
                <div className="row">
                    <Link to="dnd" className="navButton btn btn-default">Back</Link>
                    <input type="submit" value="Save" onClick={this.props.onSave} className="btn btn-default"/>
                </div>
            </form>
        );
    }
});

module.exports = LoginForm;