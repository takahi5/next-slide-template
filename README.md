# Next Document Framework

TypeScript + zod で定義した `document` から、印刷対応スライドを生成する Next.js フレームワークです。

## Features

- App Router ベースの `/documents/[documentId]` ルーティング
- `data/documents/*.ts` を追加するだけで資料を公開
- `zod` による実行時バリデーション
- A4 landscape 印刷スタイル
- 初期サンプル: `marketing-proposal`（PDF風主要7スライド）

## Structure

```text
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── documents/
│       ├── layout.tsx
│       ├── page.tsx
│       ├── slide-framework.css
│       └── [documentId]/
│           └── page.tsx
├── components/
│   ├── document-renderer.tsx
│   ├── slide-block-renderer.tsx
│   └── slide-page.tsx
├── data/
│   ├── schema.ts
│   ├── types.ts
│   └── documents/
│       ├── index.ts
│       └── marketing-proposal.ts
└── public/images/
    ├── people/
    └── products/
```

## Getting Started

```bash
pnpm install
pnpm dev
```

Open:
- Home: [http://localhost:3000](http://localhost:3000)
- Documents list: [http://localhost:3000/documents](http://localhost:3000/documents)
- Sample: [http://localhost:3000/documents/marketing-proposal](http://localhost:3000/documents/marketing-proposal)

## Add a New Document

1. `data/documents/new-document.ts` を作成
2. `DocumentDefinition` を `satisfies` で定義
3. `data/documents/index.ts` に登録

```ts
import type { DocumentDefinition } from "@/data/types";

export const newDocument = {
  meta: {
    id: "new-document",
    title: "New Document",
    description: "Sample description",
    updatedAt: "2026-02-21",
    tags: ["sample"],
  },
  theme: {
    background: "#ece7df",
    surface: "#f5f1eb",
    ink: "#3f2a1a",
    muted: "#5c4b3f",
    accent: "#9a785d",
    line: "#cbb9a8",
    wave: "#97775d",
    blob: "#dbcabe",
    pillText: "#f5f1eb",
  },
  slides: [
    {
      id: "cover",
      blocks: [
        {
          type: "heroCover",
          title: "Title",
          subtitle: "SUBTITLE",
          byline: "BY TEAM",
          year: "2030",
        },
      ],
    },
  ],
} satisfies DocumentDefinition;
```

## zod Validation

`data/documents/index.ts` で `documentSchema.parse()` を実行しているため、スキーマ違反は起動時/ビルド時に失敗します。

確認コマンド:

```bash
pnpm build
```

## Slide Block Types

- `heroCover`
- `teamCircleProfiles`（4人の円形プロフィール）
- `aboutOvalProfile`（左テキスト + 右オーバル画像）
- `portfolioImageCollage`（左テキスト + 右3面コラージュ）
- `threePillColumns`
- `numberedTwoColumnList`
- `trackerTable`

## Placeholder Images

画像は `public/images/people/` と `public/images/products/` に配置しています。  
ドキュメント定義では `src: "/images/people/<file>"` または `src: "/images/products/<file>"` のように `public/` からの絶対パスで指定してください。

## Print

ブラウザ印刷で以下を選択してください。

- Paper: A4
- Orientation: Landscape
- Margin: Default（`@page` で0設定）
- Background graphics: ON

各スライドは1ページずつ改ページされます。
