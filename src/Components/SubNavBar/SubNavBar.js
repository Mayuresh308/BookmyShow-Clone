import React from 'react'
import './SubNavBar.css'
import AppContainer from "../AppContainer/AppContainer";

function SubNavBar() {
    return(
        <div class="subnavbar">
            <AppContainer>
                <div class='subnav-content'>
                    <div class='navitem-left'>
                        <a href='#Movies'>Movies</a>
                        <a href='#Movies'>Stream</a>
                        <a href='#Movies'>Events</a>
                        <a href='#Movies'>Plays</a>
                        <a href='#Movies'>Sports</a>
                        <a href='#Movies'>Activities</a>
                    </div>
                    <div class='navitem-right'>
                        <a href='#Movies'>ListYourShow</a>
                        <a href='#Movies'>Corporates</a>
                        <a href='#Movies'>Offers</a>
                        <a href='#Movies'>Gift Cards</a>
                    </div>
                </div>
            </AppContainer>
        </div>
    )
}

export default SubNavBar
