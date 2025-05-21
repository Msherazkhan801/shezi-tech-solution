import React from 'react';
import { Switch, Route } from 'react-router';

export default (
    <Switch>
        <Route exact path="/" />
        <Route exact path="/who-we-are" />
        <Route exact path="/contact-us" />
        <Route exact path="/blogs" />
        <Route exact path="/work" />
        <Route exact path="/careers" />
        <Route exact path="/technologies" />
        <Route exact path="/work/:slug"  />
        <Route exact path="/careers/:slug" />
        <Route exact path="/blog/:slug" />
        {/* <Route exact path="/team" /> */}
    </Switch>
)