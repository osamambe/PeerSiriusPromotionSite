import React, { useState } from "react";

export default function Header() {
  // State: メニューの開閉状態（アイコンの見た目と連動）を管理
  const [isOpen, setIsOpen] = useState(false);

  // クリックイベントハンドラ
  const toggleMenu = () => {
    // 現在の状態の真逆（trueならfalse、falseならtrue）に切り替える
    setIsOpen(!isOpen);
  };

  // サイトのメニュー項目
  const menuItems = [
    "NEWS",
    "PROFILES",
    "GALLERY",
    "VIDEOS",
    "HISTORY",
    "ARCHIVES",
    "BLOG",
  ];

  return (
    <header className="header">
      {/* サイトタイトル/ロゴ */}
      <div className="logo">
        {/* ロゴ画像をクリックするとトップページ（ルートパス /）に遷移する */}
        <a href="/">
          <img
            src="/images/logo.png"
            alt="PeerSirius ロゴ"
            className="header-logo"
          />
        </a>
      </div>

      {/* ハンバーガーアイコン（is-openクラスを直接付与） */}
      <button
        className={`hamburger ${isOpen ? "is-open" : ""}`}
        onClick={toggleMenu} // Stateの切り替えを実行
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>

      {/* メニューリスト：isOpenの状態に応じて表示/非表示を切り替える */}
      <nav className={`menu ${isOpen ? "is-open" : ""}`}>
        <ul>
          {menuItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
