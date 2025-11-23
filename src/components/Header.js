import React, { useState } from "react";
// import "./Header.css"; // 👈 この行を削除しました。空のCSSを参照するのをやめます。

export default function Header() {
  // メニューが開いているかどうかの状態を管理
  const [isOpen, setIsOpen] = useState(false); // メニューの開閉を切り替える関数

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }; // サイトのメニュー項目

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
      {/* サイトタイトル/ロゴ */} <div className="logo">スマホ表示用_NEWS</div>{" "}
      {/* ハンバーガーアイコン（クリックで状態を切り替える） */}{" "}
      <button className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div> <div className="bar"></div>
        <div className="bar"></div>{" "}
      </button>{" "}
      {/* メニューリスト（isOpenの状態に応じて表示/非表示を切り替える） */}{" "}
      <nav className={`menu ${isOpen ? "is-open" : ""}`}>
        {" "}
        <ul>
          {" "}
          {menuItems.map((item) => (
            <li key={item}>{item}</li>
          ))}{" "}
        </ul>{" "}
      </nav>{" "}
    </header>
  );
}
