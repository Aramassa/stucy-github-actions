# study-github-actions
github actions を作ってみる

# Debug(Local Run)

https://github.com/nektos/act

```
npm run all && 
act  -s GITHUB_TOKEN=${GITHUB_TOKEN} -W ${workflowname}
```

※ env: GITHUB_TOKEN は事前に設定しておくこと

# Lesson 作り方

https://github.com/actions/typescript-action

↑上記のリポジトリが BoilerPlate なので持ってくる

```sh
wget https://github.com/actions/typescript-action/archive/refs/heads/main.zip
unzip main.zip
mv typescript-action-main ${LessonDir}
```

## 注意事項

* GITHUB_TOKEN という secret がないと checkout@v2 が失敗する

## 教訓

Action内での処理は lib にまとめるとよいが、libを `@action/core` パッケージに依存させると、テストが書きにくく、GitHub Action 以外で使いにくいlibになってしまうので注意。
（理想は別の npm として実装して、ただ使うだけにすることかもしれないが、正直やりすぎ）

# 参考にするやつ

## wait for check

https://github.com/fountainhead/action-wait-for-check

## create pull request

https://github.com/peter-evans/create-pull-request

# Lesson

## 0_1

持ってきたBoilerPlate を動かしてみる

## 1_1

* action.yml での パラメータの設定
* npm chalk を使ってみる

## 1_2

* github にアクセスしてみる
  * Issue の一覧を取得する
  * Issue本文の中身を一部取得して、テンプレート(YAML)からファイルを生成する
  * 実行処理の記述が取得できない場合はエラー終了する


