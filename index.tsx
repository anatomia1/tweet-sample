import React, { useState, useEffect } from "react";

export default function App() {
  const [newTweet, setNewTweet] = useState("");
  const [tweets, setTweets] = useState<Tweet[]>([]);

  const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewTweet(event.target.value);
  };

  const addTweet = () => {
    if (newTweet.trim() !== "") {
      fetch("http://localhost:8000/tweets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ body: newTweet }),
      })
        .then((response) => response.json())
        .then((data) => {
          setTweets((prevTweets) => [
            { id: data.id, body: newTweet },
            ...prevTweets,
          ]);
        })
        .catch((error) => console.error("ツイートの追加に失敗しました", error));
      setNewTweet("");
    }
  };

  const fetchTweets = () => {
    fetch("http://localhost:8000/tweets")
      .then((response) => response.json())
      .then((data) => setTweets(data))
      .catch((error) => console.error("データの取得に失敗しました", error));
  };

  interface Tweet {
    id: number;
    body: string;
  }

  useEffect(() => {
    fetchTweets();
  }, []);

  return (
    <div className="Twitter">
      <div className="header">
        <h1>ホーム</h1>
      </div>

      <div className="form">
        <textarea
          className="textArea"
          value={newTweet}
          onChange={handleTextAreaChange}
        />
        <button className="btn" onClick={addTweet}>
          ツイートする
        </button>
      </div>

      <div className="expandLink">
        <p>3件のツイートを表示</p>
      </div>

      <div className="usersTweet">
        {tweets.map((tweet) => (
          <div className="userTweet" key={tweet.id}>
            <div className="retweetDisplay">
              <p>深川泰斗/CEO@タイムツリーさんがリツイートしました</p>
            </div>
            <div className="user">
              <div className="userIcon">
                <img src="" alt="User Icon" /> {/* ここに実際のユーザーアイコンのURLを指定 */}
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
                <img src="" alt="Attached Image" /> {/* ここに実際の画像ファイルのURLを指定 */}
              </div>
            </div>
            <div className="tweetText">
              <div className="text">
                <p>{tweet.body}</p>
              </div>
              <img src="" alt="Tweet Image" /> {/* ここに実際の画像ファイルのURLを指定 */}
            </div>
            <div className="action"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

