"use strict";
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var SetupForm = require('./setupForm');
var toastr = require('toastr');
$ = jQuery = require('jquery');
var Helper = require('../common/helperFunctions');

var dndSetupPage = React.createClass({
    mixins: [
        Router.Navigation
    ],

    statics: {
        willTransitionFrom: function(transition, component) {
            if (component.state.dirty && !confirm('Leave without saving?')) {
                transition.abort();
            }
        }
    },

    getInitialState: function() {
        return {
            character: { id: '', charName: '', password: '', detail1: '', detail2: '', detail3: '' },
            errors: {},
            dirty: false
        };
    },
    
    setCharacterState: function(event) {
        this.setState({dirty: true});
        var field = event.target.name;
        var value = event.target.value;
        this.state.character[field] = value;
        return this.setState({character: this.state.character});
    },
    
    characterFormIsValid: function() {
        var formIsValid = true;
        this.state.errors = {};

        if (this.state.character.charName.length < 2) {
            this.state.errors.charName = 'Character Name must be at least 2 characters';
            formIsValid = false;
        }
        if (this.state.character.password.length < 3) {
            this.state.errors.password = 'Password must be at least 3 characters';
            formIsValid = false;
        }
        if (Helper.hasNumber(this.state.character.charName)) {
            this.state.errors.charName = "Name can't consist of numbers";
            formIsValid = false;
        }

        //Save Character Here

        this.setState({errors: this.state.errors});
        return formIsValid;
    },

    setupCharacter: function(event) {
        event.preventDefault();

        if (!this.characterFormIsValid()) {
            console.log(this.state.errors);
            return;
        }
        
        toastr.success('Login Successful!');
        this.transitionTo('dnd');
        this.setState({dirty: false});

    },

    render: function() {
        return (
            <div className="container-fluid">
                <h1 className="text-center">Dungeons and Dragons Character Sheet</h1>
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <Link to="setup"><button className="charButton btn btn-primary btn-lg" href="">Create new Character</button></Link>
                        <SetupForm
                            character={this.state.character}
                            onChange={this.setCharacterState}
                            onSave={this.setupCharacter}
                            errors={this.state.errors}/>
                    </div>
                </div>   
            </div>
        );
    }
});

module.exports = dndSetupPage;