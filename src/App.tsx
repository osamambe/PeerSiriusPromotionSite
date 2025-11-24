import React from "react";
import "./App.css";
import { FaGem, FaCrown, FaKey, FaCoins } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <div className="pixel-sky"></div>
      <div className="pixel-ruins-bg"></div>

      <div className="adventure-container">
        <header className="game-header">
          <p className="score-text">SCORE: 9999990</p>
          <p className="stage-text">STAGE: FINAL</p>
        </header>

        <main className="main-content">
          <div className="treasure-pile">
            <img
              src={process.env.PUBLIC_URL + "/images/logo.png"}
              className="App-logo pixelated"
              alt="PeerSirius Logo"
            />
            <h1 className="game-title">
              <span className="title-word color-1">GREAT</span>
              <span className="title-word color-2">TREASURE</span>
              <br />
              FOUND!
            </h1>
            <p className="game-subtitle">
              ついに でんせつの おたからを はっけん した！
            </p>
          </div>

          <div className="treasure-chests">
            <div className="chest-item">
              <div className="chest-lid-container">
                <FaKey className="treasure-icon icon-key" />
                <div className="chest-lid"></div>
              </div>
              <div className="chest-base">
                <h3>新プロモーションサイト開設！</h3>
                <p>みちなる かのうせいを かいほう せよ！</p>
              </div>
            </div>

            <div className="chest-item main-chest">
              <div className="chest-lid-container">
                <FaCrown className="treasure-icon icon-crown" />
                <div className="chest-lid"></div>
              </div>
              <div className="chest-base">
                <h3>オレさまの サイキョウ サービス</h3>
                <p>ダレにも まけない 圧倒的な パワー！</p>
              </div>
            </div>

            <div className="chest-item">
              <div className="chest-lid-container">
                <FaGem className="treasure-icon icon-gem" />
                <div className="chest-lid"></div>
              </div>
              <div className="chest-base">
                <h3>かがやく ざいほう</h3>
                <p>キミの ビジネスを キラキラにする ぜ！</p>
              </div>
            </div>
          </div>

          <div className="cta-area">
            <p className="cta-text">
              <FaCoins className="coin-icon" />
              つぎの ぼうけんへ しゅっぱつ だ！
              <FaCoins className="coin-icon" />
            </p>
            <button className="nes-btn is-primary">START ADVENTURE</button>
          </div>
        </main>

        <footer className="game-footer">
          <p>© PeerSirius Adventure Corp. 199X-202X</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
