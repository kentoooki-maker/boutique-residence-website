/**
 * BR&CO. News Data
 * ─────────────────────────────────────────────
 * 新しいニュースを追加するときはこのファイルの先頭に
 * 以下の形式でオブジェクトを追加してください。
 * index.html の帯と news.html の一覧が自動で更新されます。
 *
 * {
 *   date:     "YYYY.MM.DD",
 *   category: "Space" | "Event" | "Academia" | "Startup" | ... （ゴールドバッジ）
 *   type:     "Announcement" | "Press Release" | ...           （グレーバッジ）
 *   title:    "記事タイトル",
 *   url:      "news_***.html"
 * }
 */

const BR_NEWS = [
  {
    date:     "2026.04.01",
    category: "Academia",
    type:     "Announcement",
    title:    "代表取締役 大木 健人、九州大学 BeCAT（ビーキャット）のプロジェクトインキュベーターに就任",
    url:      "news_becat.html"
  },
  {
    date:     "2025.07.30",
    category: "Event",
    type:     "Press Release",
    title:    "日本建築学会大会2025に合わせて開催される「レム・コールハース講演会」の特別協賛社に決定",
    url:      "news_rem_koolhaas.html"
  },
  {
    date:     "2025.06.18",
    category: "Startup",
    type:     "Press Release",
    title:    "Fukuoka Growth Nextのアクセラレーションプログラム「High Growth Program」に採択されました",
    url:      "news_fgn.html"
  },
  {
    date:     "2025.05.20",
    category: "Event",
    type:     "Press Release",
    title:    "CIC Fukuoka開業記念イベントにて、代表・大木健人がPitch登壇",
    url:      "news_cic.html"
  }
];
