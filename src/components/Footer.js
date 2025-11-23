import React from "react";
import { FaYoutube, FaTwitter, FaTiktok } from "react-icons/fa"; // アイコンライブラリを使用

export default function Footer() {
  // リンク先は適宜変更してください
  const snsLinks = [
    { name: "X", icon: FaTwitter, url: "https://X.com/" },
    { name: "TikTok", icon: FaTiktok, url: "https://www.tiktok.com/" },
    { name: "YouTube", icon: FaYoutube, url: "https://www.youtube.com/" },
  ];

  return (
    <footer className="footer">
      <div className="sns-links">
        {snsLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* React-Iconsでインポートしたアイコンを使用 */}
            <link.icon size={24} />
          </a>
        ))}
      </div>

      <p className="copyright">© COPYRIGHT</p>
    </footer>
  );
}
