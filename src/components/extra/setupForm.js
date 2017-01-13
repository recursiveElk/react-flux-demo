"use strict";

var React = require('react');
var Input = require('../common/textInput');
var Router = require('react-router');
var Link = require('react-router').Link;

var SetupForm = React.createClass({
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
                <Input 
                    name="detail1"
                    label="Detail 1"
                    value={this.props.character.detail1}
                    onChange={this.props.onChange}
                    error={this.props.errors.detail1} />
                <Input 
                    name="detail2"
                    label="Detail 2"
                    value={this.props.character.detail2}
                    onChange={this.props.onChange}
                    error={this.props.errors.detail2} />
                <Input 
                    name="detail3"
                    label="Detail 3"
                    value={this.props.character.detail3}
                    onChange={this.props.onChange}
                    error={this.props.errors.detail3} />
                <div className="row">
                    <Link to="dnd" className="navButton btn btn-default">Back</Link>
                    <input type="submit" value="Save" onClick={this.props.onSave} className="btn btn-default"/>
                </div>
            </form>
        );
    }
});

module.exports = SetupForm;