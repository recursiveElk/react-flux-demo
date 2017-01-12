"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;

var routes = (
    <Route name="app" path = "/" handler = {require('./components/app')}>
        <DefaultRoute handler={require('./components/homePage')}/>
        <Route name="authors" handler={require('./components/authors/authorPage')}/>
        <Route name="addAuthor" path="author" handler={require('./components/authors/manageAuthorPage')}/>
        <Route name="manageAuthor" path="author/:id" handler={require('./components/authors/manageAuthorPage')}/>
        <Route name="about" handler={require('./components/about/aboutPage')}/> 
        <Route name="dnd" handler={require('./components/extra/dndStartPage')}/>
        <Route name="login" path="dnd/login" handler={require('./components/extra/dndLoginPage')}/>
        <Route name="setup" path="dnd/setup" handler={require('./components/extra/dndSetupPage')}/>
        <NotFoundRoute handler ={require('./components/404Page')}/>
    </Route>
);

module.exports = routes;