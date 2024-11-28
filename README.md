# 環境構築

1. .env.localを作成して以下を記述

```
NEXTAUTH_SECRET=""

POSTGRES_URL=""
POSTGRES_PRISMA_URL=""
POSTGRES_URL_NO_SSL=""
POSTGRES_URL_NON_POOLING=""
POSTGRES_USER=""
POSTGRES_HOST=""
POSTGRES_PASSWORD=""
POSTGRES_DATABASE=""
```

NEXTAUTH_SECRETは `openssl rand -base64 32` で生成したものを使用

2. パッケージをインストール

```
yarn install
```

3. local起動

```
yarn dev
```
