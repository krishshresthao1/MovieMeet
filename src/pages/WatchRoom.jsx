import { useState } from "react";
import "../styles/room.css";

function WatchRoom() {
  const [url, setUrl] = useState("");
  const [videoId, setVideoId] = useState("");

  const extractVideoId = (youtubeUrl) => {
    try {
      const parsedUrl = new URL(youtubeUrl);

      if (parsedUrl.hostname.includes("youtu.be")) {
        return parsedUrl.pathname.slice(1);
      }

      if (parsedUrl.hostname.includes("youtube.com")) {
        return parsedUrl.searchParams.get("v");
      }

      return null;
    } catch {
      return null;
    }
  };

  const handleWatch = () => {
    const id = extractVideoId(url);

    if (!id) {
      alert("Please enter a valid YouTube URL.");
      return;
    }

    setVideoId(id);
  };

  return (
    <div className="room-page">
      {/* Header */}
      <header className="room-header">
        <div className="room-brand">
          <div className="brand-logo">W</div>
          <span>WE</span>
        </div>

        <div className="room-info">
          <span className="room-label">ROOM</span>
          <strong>K7X92P</strong>
        </div>

        <div className="room-users">
          <span className="online-dot"></span>
          <span>4 watching</span>
        </div>
      </header>

      {/* Main */}
      <main className="room-main">
        {/* Video section */}
        <section className="video-section">
          <div className="video-container">
            {videoId ? (
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <div className="empty-video">
                <div className="empty-video-icon">▶</div>

                <h2>Nothing playing yet</h2>

                <p>Paste a YouTube video link below to start watching.</p>
              </div>
            )}
          </div>

          {/* Video input */}
          <div className="video-input-wrapper">
            <input
              type="text"
              placeholder="Paste a YouTube video URL..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleWatch();
                }
              }}
            />

            <button onClick={handleWatch}>Watch</button>
          </div>

          {/* Video information */}
          <div className="video-info">
            <div>
              <span className="playing-label">
                {videoId ? "NOW PLAYING" : "READY"}
              </span>

              <h1>{videoId ? "YouTube video" : "Watch something together"}</h1>
            </div>

            <div className="video-actions">
              <button>♡</button>
              <button>↗</button>
            </div>
          </div>
        </section>

        {/* Chat */}
        <aside className="chat-panel">
          <div className="chat-header">
            <div>
              <h2>Chat</h2>
              <span>4 people in this room</span>
            </div>

            <button className="chat-menu">•••</button>
          </div>

          <div className="messages">
            <div className="message">
              <div className="avatar avatar-purple">A</div>

              <div className="message-content">
                <div className="message-name">
                  Alex
                  <span>7:32 PM</span>
                </div>

                <p>Yo everyone 👋</p>
              </div>
            </div>

            <div className="message">
              <div className="avatar avatar-blue">S</div>

              <div className="message-content">
                <div className="message-name">
                  Sam
                  <span>7:32 PM</span>
                </div>

                <p>What are we watching?</p>
              </div>
            </div>

            <div className="message">
              <div className="avatar avatar-green">K</div>

              <div className="message-content">
                <div className="message-name">
                  You
                  <span>7:33 PM</span>
                </div>

                <p>Found something 😂</p>
              </div>
            </div>
          </div>

          <div className="chat-input">
            <input type="text" placeholder="Send a message..." />

            <button>↑</button>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default WatchRoom;
