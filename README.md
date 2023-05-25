# gae_nodejs_cdn

### 概要

**Google App Engine**上でCDNサービスが作れます

### Badge

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/8766526c356c41238aa1aaaf24f4ada8)](https://app.codacy.com/gh/ishi720/gae_nodejs_cdn/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)


### セットアップ手順

- このプロジェクトをフォークする
- CDNで配信するjsパッケージをインストールする
```shell
# jqueryを配信したい場合
$ yarn add jquery
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
