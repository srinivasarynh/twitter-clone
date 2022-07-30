import React, { useState } from "react";
import "./tweetBox.css";
import { Button, Avatar } from "@material-ui/core";
import db from "../firebase";

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'bramhi',
            username: 'ursbramhi',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://th.bing.com/th/id/OIP.0oTn8W0obnmlrWIwcxv5AQHaE6?pid=ImgDet&rs=1"
        });

        setTweetImage('');
        setTweetMessage('');
    }
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                <Avatar src="https://yt3.ggpht.com/a/AGF-l78mBheWBfrS4WDA1ROXOxHj6YhIl8IVbIqMGw=s900-c-k-c0xffffffff-no-rj-mo"/>
                <input placeholder="what's happening?" type="text" value={tweetMessage} onChange={e => setTweetMessage(e.target.value)}/>
                </div>
                <input placeholder="Optional: Enter image URL" type="text" className="tweetBox__inputImage" value={tweetImage} onChange={e => setTweetImage(e.target.value)}/>
                <Button type="submit" onClick={sendTweet} className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;