import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "NEWS", path: "/news" },
    { name: "PROFILES", path: "/profiles" },
    { name: "GALLERY", path: "/gallery" },
    { name: "VIDEOS", path: "/videos" },
    { name: "HISTORY", path: "/history" },
    { name: "ARCHIVES", path: "/archives" },
    { name: "BLOG", path: "/blog" },
  ];

  return (
    <>
      {/* --- ヘッダーバー --- */}
      <header
        className="header"
        style={{
          backgroundColor: "rgba(5, 5, 16, 0.7)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          borderBottom: "2px solid var(--accent-cyber-blue)",
          zIndex: 1001,
        }}
      >
        {/* ロゴ */}
        <div className="logo">
          <Link to="/">
            {/* 【修正点】ロゴのパスを正しいもの（/logo.png）に変更し、画像タグを復活 */}
            <img
              src="/logo.png"
              alt="PEER SIRIUS"
              className="header-image-logo"
            />
          </Link>
        </div>

        {/* ハンバーガーボタン */}
        <button onClick={toggleMenu} className="hamburger">
          {/* 上の線 (1本目) */}
          <motion.div
            animate={
              isOpen
                ? { rotate: 45, y: 8, backgroundColor: "var(--accent-cyan)" }
                : { rotate: 0, y: 0, backgroundColor: "var(--text-star)" }
            }
            className="bar"
            style={{ boxShadow: "2px 2px 0px var(--accent-pink)" }}
          />
          {/* 真ん中の線 (2本目 - 消失用) */}
          <motion.div
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="bar"
            style={{
              backgroundColor: "var(--text-star)",
              boxShadow: "2px 2px 0px var(--accent-pink)",
            }}
          />
          {/* 下の線 (3本目) */}
          <motion.div
            animate={
              isOpen
                ? { rotate: -45, y: -8, backgroundColor: "var(--accent-cyan)" }
                : { rotate: 0, y: 0, backgroundColor: "var(--text-star)" }
            }
            className="bar"
            style={{ boxShadow: "2px 2px 0px var(--accent-pink)" }}
          />
        </button>
      </header>

      {/* --- フルスクリーンメニュー --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mobile-menu"
          >
            <ul>
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    to={item.path}
                    onClick={toggleMenu}
                    // メニューの背景が暗いため、文字色を白 (var(--text-star)) に維持
                    style={{
                      color: "var(--text-star)",
                      textDecoration: "none",
                    }}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
