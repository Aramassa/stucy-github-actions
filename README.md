# stucy-github-actions
github actions を作ってみる

# Debug

https://github.com/nektos/act

```
act -w ${workflowname}
```

# Lesson 作り方

https://github.com/actions/typescript-action

↑上記のリポジトリが BoilerPlate なので持ってくる

```sh
wget https://github.com/actions/typescript-action/archive/refs/heads/main.zip
unzip main.zip
mv typescript-action-main ${LessonDir}
```

## 修正する箇所

.github/workflows/test.yml

```
- uses: actions/checkout@v2
```

この部分は act でテストする際にエラーになってしまうので、削除しておく。

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

