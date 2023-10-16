import React from "react";
import index from "../../pages/index";

export default function App(){
  const tweets = ['眠い', '疲れた',];
    return(
      <div className="userTweet">
      <div className="retweetDisplay">
        <p>深川泰斗/CEO@タイムツリーさんがリツイートしました</p>
      </div>
      <div className="user">
        <div className="userIcon">
          <img src=""/> 
        </div>
        <div className="name">
          <h5>上館誠也I哲学クラウドCEO</h5>
        </div>  
        <div className="userName">
          <p>@soiyaman1013</p>
        </div>
        <div className="elapsedTime">
          <p>・2時間</p>
        </div>  
        <div className="attached">
          <img src=""/>
        </div>  
      </div>  
      <div className="tweetText">
        <div className="text">
          <p>#</p>
        </div>
        <img src=""/>
      </div>
      <div className="action">
      </div>
    </div>  
    )
}

