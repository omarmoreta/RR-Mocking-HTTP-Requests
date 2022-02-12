import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [gitHubName, setGitHubName] = useState("");
  const [gitHubURL, setGitHubURL] = useState("");
  const [gitHubImageURL, setGitHubImageURL] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/omarmoreta")
      .then((res) => res.json())
      .then((data) => {
        setGitHubName(data.name);
        setGitHubURL(data.html_url);
        setGitHubImageURL(data.avatar_url);
      });
  }, []);

  return (
    <div className="App">
      <h1>Github Profile Info:</h1>
      <h2>{gitHubName}</h2>
      <a href={gitHubURL}>
        <button>GitHub Page</button>
      </a>
      <div>
        <img src={gitHubImageURL} alt="Github profile image" />
      </div>
    </div>
  );
}

export default App;
