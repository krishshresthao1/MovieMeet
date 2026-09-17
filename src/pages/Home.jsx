import CreateRoom from "../components/room/CreateRoom";
import JoinRoom from "../components/room/JoinRoom";
import "../styles/home.css";

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">Watch together. Stay connected.</span>

          <h1>
            Your people.
            <br />
            Your room.
            <br />
            <span>Your watch.</span>
          </h1>

          <p>
            Create a private room, invite your friends, and watch YouTube videos
            together while chatting in real time.
          </p>

          <div className="room-actions">
            <CreateRoom />
            <JoinRoom />
          </div>
        </div>

        <div className="hero-preview">
          <div className="preview-window">
            <div className="preview-topbar">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>

              <span className="room-name">MovieMeet • Room K7X92P</span>
            </div>

            <div className="preview-content">
              <div className="fake-video">
                <div className="play-button">▶</div>
              </div>

              <div className="fake-chat">
                <div className="chat-title">Live Chat</div>

                <div className="fake-message">
                  <strong>Alex</strong>
                  <span>This part 😂</span>
                </div>

                <div className="fake-message">
                  <strong>Sam</strong>
                  <span>Bro watch this!</span>
                </div>

                <div className="fake-message">
                  <strong>You</strong>
                  <span>HAHAHAHA</span>
                </div>

                <div className="fake-input">Type a message...</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
