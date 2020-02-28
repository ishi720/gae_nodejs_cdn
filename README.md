# gae_nodejs_cdn

### 概要

**Google App Engine**上でCDNサービスが作れます

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
