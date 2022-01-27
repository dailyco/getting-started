# webpack-react
| CRA 를 사용하지 않고 리액트 개발 환경 설정하기 (feat. `webpack`)

<br/><br/>

## 리액트 설치
```bash
yarn add react react-dom
```

<br/>

## 웹팩 설치
```bash
yarn add -D webpack webpack-cli webpack-dev-server

# module 및 plugin 설치
yarn add -D babel-loader css-loader
yarn add -D html-webpack-plugin mini-css-extract-plugin

# 바벨 설치
yarn add -D @babel/core @babel/preset-env @babel/preset-react
```
<br/>

## 바벨 설정
```js
// ./babel.config.js

module.exports = {
  presets: ['@babel/preset-react', '@babel/preset-env'],
};
```

<br/>

## 웹팩 설정
```js
// ./webpack.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        port: 5000,
        hot: true,
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: '/node_modules/',
            loader: 'babel-loader',
          },
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './public/index.html',
        }),
        new MiniCssExtractPlugin({ filename: 'app.css' }),
    ],
};
```

<br/>

## html (index.html) 파일
```html
<!-- ./public/index.html -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>
```

<br/>

## js (index.js) 파일
```js
// ./src/index.js

import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

ReactDom.render(<App />, document.getElementById('root'));
```

<br/>

## React App 컴포넌트
```jsx
// ./src/components/App.jsx

import React from 'react';
import './App.css';

const App = () => {
  return <div className='container' />;
};

export default App;
```

```css
/* ./src/components/App.css */

.container {
    height: 200px;
    background-color: blueviolet;
}
```

<br/>

## 스크립트 명령어 추가
```json
// ./package.json

"scripts": {
  "dev": "webpack-dev-server & open http://localhost:5000/",
  "build": "webpack"
}
```