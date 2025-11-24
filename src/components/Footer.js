import React from "react";
// 以下の行が必要です。フッターでアイコンを表示するために FaYoutube, FaTwitter, FaTiktok をインポートします。
import { FaYoutube, FaTwitter, FaTiktok } from "react-icons/fa";

export default function Footer() {
  const snsLinks = [
    { name: "X", icon: FaTwitter, url: "https://twitter.com/" },
    { name: "TikTok", icon: FaTiktok, url: "https://www.tiktok.com/" },
    { name: "YouTube", icon: FaYoutube, url: "https://www.youtube.com/" },
  ];

  return (
    <footer className="footer">
      <div className="sns-links">
        {/* SNSアイコンをレンダリング */}
        <div style={{ display: "inline-flex", gap: "20px" }}>
          {snsLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              // アイコンの色を白（--text-star）に設定
              style={{ color: "var(--text-star)" }}
            >
              <link.icon />
            </a>
          ))}
        </div>
      </div>

      {/* 著作権表示 */}
      <p className="copyright">
        © {new Date().getFullYear()} PeerSirius. All rights reserved.
      </p>
    </footer>
  );
}
