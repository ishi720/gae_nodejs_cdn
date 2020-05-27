# gae_nodejs_cdn

### 概要

**Google App Engine**上でCDNサービスが作れます

### Badge

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/e8a45eaae890424ebbb6c5f79237bc9e)](https://www.codacy.com/manual/ishi720/gae_nodejs_cdn?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ishi720/gae_nodejs_cdn&amp;utm_campaign=Badge_Grade)


### セットアップ手順

- このプロジェクトをフォークする
- CDNで配信するjsパッケージをインストールする
```shell
# jqueryを配信したい場合
$ yarn install jquery
```
- Google App Engineへデプロイする
  - CDNサービスプロジェクトを作成
  - デプロイ環境の整備
  - デプロイする
  ```shell
  $ gcloud app deploy -q --project {YOUR GAE PROJECT} --no-promote
  ```
- デプロイしたサービスを確認する

```
https://{YOUR GAE PROJECT}.appspot.com/node_modules/jquery/dist/jquery.js
```
