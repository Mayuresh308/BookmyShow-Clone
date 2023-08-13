import React from 'react'
import './SubNavBar.css'

function SubNavBar() {
    return(
        <div class="subnavbar">
            <ul class='navitem-left'>
                <li><a href='#Movies'>Movies</a></li>
                <li><a href='#Movies'>Stream</a></li>
                <li><a href='#Movies'>Events</a></li>
                <li><a href='#Movies'>Plays</a></li>
                <li><a href='#Movies'>Sports</a></li>
                <li><a href='#Movies'>Activities</a></li>
                <li><a href='#Movies'>Buzz</a></li>
            </ul>
            <ul class='navitem-right'>
                <li><a href='#Movies'>ListYourShow</a></li>
                <li><a href='#Movies'>Corporates</a></li>
                <li><a href='#Movies'>Offers</a></li>
                <li><a href='#Movies'>Gift Cards</a></li>
            </ul>
        </div>
    )
}

export default SubNavBar
