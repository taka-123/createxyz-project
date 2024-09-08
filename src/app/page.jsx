"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function MainComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const handleResize = () => setIsMenuOpen(window.innerWidth > 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 font-sans">
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold text-blue-600"
          >
            ロゴ
          </motion.h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {["ホーム", "特徴", "価格", "お問い合わせ"].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition duration-300"
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white"
          >
            <ul className="flex flex-col items-center py-4">
              {["ホーム", "特徴", "価格", "お問い合わせ"].map((item) => (
                <li key={item} className="py-2">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 transition duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </header>

      <main>
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-32">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl font-bold mb-6"
            >
              革新的な製品で未来を創造
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl mb-12"
            >
              私たちの製品があなたの生活を一変させます
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300 shadow-lg"
            >
              今すぐ体験する
            </motion.button>
          </div>
        </section>

        <section ref={ref} className="py-24">
          <div className="container mx-auto px-4">
            <motion.h2
              variants={fadeIn}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-center mb-16"
            >
              主な特徴
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  icon: "fas fa-rocket",
                  title: "高速パフォーマンス",
                  description: "驚異的な速さで処理を実行",
                },
                {
                  icon: "fas fa-shield-alt",
                  title: "最高レベルのセキュリティ",
                  description: "あなたのデータを完全に保護",
                },
                {
                  icon: "fas fa-headset",
                  title: "24時間365日サポート",
                  description: "いつでもどこでもサポート対応",
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={fadeIn}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition duration-300"
                >
                  <i
                    className={`${feature.icon} text-5xl text-blue-600 mb-6`}
                  ></i>
                  <h3 className="text-2xl font-semibold mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-900 text-white py-24">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl font-bold mb-8"
            >
              未来を切り開く準備はできていますか？
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl mb-12"
            >
              今すぐ始めて、驚くべき可能性を解き放ちましょう
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300 shadow-lg"
            >
              無料トライアルを開始
            </motion.button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">会社情報</h3>
            <p>革新的な製品で世界をリードする企業です。</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">リンク</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-400 transition duration-300">
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition duration-300">
                  利用規約
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition duration-300">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">フォローする</h3>
            <div className="flex space-x-4">
              {["fab fa-twitter", "fab fa-facebook", "fab fa-instagram", "fab fa-linkedin"].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="text-2xl hover:text-blue-400 transition duration-300"
                >
                  <i className={icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>© 2024 革新的製品株式会社. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}export default MainComponent;

