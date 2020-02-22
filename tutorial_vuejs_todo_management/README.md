# turorial_vuejs_todo_management

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## To get started:
```
    cd tutorial_vuejs_tdo_management
    npm run dev
```

## git
- master

- develop

## ファイル構成
※ 一部省略
```
tutorial_vuejs_todo_management$ tree
./index.html
./src
├── App.vue
├── assets
│   └── logo.png
├── components
│   └── Hello.vue
├── main.js
└── router
    └── index.js
```
## Vueコンポーネントファイルでしていること
ひと通り見終えたので、このコンポーネントで行っているであろうことをまとめてみます。

- \<template> にhtml構造の記述
- \<script> にjsを記述　html中に書かれているmsgもここで定義
- \<style> にcssを記述

上記の3点をひとまとめにして*.vue というファイルとしているようです。

html、js、cssは分けて記載するのが一般的ですが、コンポーネントという考えでは、それらをまとめて記述することで、再利用性や、見通しを良くしています。
責務の分担という意味ではオブジェクト指向的でもあります。

Vueコンポーネントの詳細は以下のドキュメントを参照下さい。

    コンポーネント(https://jp.vuejs.org/v2/guide/components.html)
    Vue Component の仕様(https://vue-loader.vuejs.org/ja/start/spec.html)


## \<script>タグではVueコンポーネントのオプションのオブジェクトをエクスポートします。
```
Vue.component('my-component',{
  // オプション
})
```
ここではVueコンポーネントに渡す引数として、dataを渡しています。
このときdataは
* 関数であること
* コンポーネントで扱いたいデータをオブジェクトに定義し、returnする

ことで定義したデータは\<template> の中で{{ }}を囲うことで出力することができます。

画面に出力されているWelcome to Your Vue.js App はVueインスタンスの中に定義されたmsgを出力していることがわかります。

## 参考
- https://qiita.com/sin_tanaka/items/29769266b3b078ea0f7c

- https://qiita.com/yuno_miyako/items/23a0cae66b2f87adaf2f

- https://qiita.com/sin_tanaka/items/6d5d9089eb76dda4ce88
    - Module build failed: TypeError: this.getResolve is not a function
    https://qiita.com/gosairei1207/items/95454ec5a396bd5f05fd
    
