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
        <Route name="about" handler={require('./components/about/aboutPage')}/> 
        <Route name="extra" handler={require('./components/extra/extraPage')}/>
        <NotFoundRoute handler ={require('./components/404Page')}/>
    </Route>
);

module.exports = routes;