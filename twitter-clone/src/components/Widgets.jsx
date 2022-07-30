import React from "react";
import "./widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import { TwitterShareButton, TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";

function Widgets() {
    return (
        <div className="widgets">
            <div className="widgets__input">
            <SearchIcon placeholder="widgets__searchIcon" />
            <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1552293574875656192"} />

                <TwitterTimelineEmbed sourceType="profile"
                screenName="TheDeverakonda"
                options={{height: 400}} />

                <TwitterShareButton url="" />
            </div>
        </div>
    )
}

export default Widgets;