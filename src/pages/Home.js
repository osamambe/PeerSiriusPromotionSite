import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// トップページ全体のレイアウト
export default function Home() {
  return (
    <div>
      <Header />

      {/* メインコンテンツ領域（空でOK） */}
      <main
        style={{ minHeight: "80vh", textAlign: "center", paddingTop: "100px" }}
      >
        <h2>プロモーションサイト トップページ</h2>
      </main>

      <Footer />
    </div>
  );
}
