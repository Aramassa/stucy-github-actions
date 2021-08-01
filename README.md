# stucy-github-actions
github actions を作ってみる

# Debug(Local Run)

https://github.com/nektos/act

```
npm run all && 
act  -s GITHUB_TOKEN=${GITHUB_TOKEN} -W ${workflowname}
```

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

# 参考にするやつ

https://github.com/fountainhead/action-wait-for-check

# Lesson

## 0-1

持ってきたBoilerPlate を動かしてみる

## 1-1

* action.yml での パラメータの設定
* npm chalk を使ってみる

## 1-2

* github にアクセスしてみる
  * Issue の一覧を取得する
  * Issue本文の中身を一部取得して、テンプレートからファイルを生成する
