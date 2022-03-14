// .(점)으로 시작하는 파일은 숨긴 파일 

// import, export => ESM 에크마스크립트(=js 명칭 ) 모듈
// 그러나 node.js는 ESM을 지원하지 않고 CommonJS를 지원한다.
// 그래서 improt는 require()로 대신, export는 module.exports로 대신해서 쓴다

// import autoprefixer from 'autoprefixer'

// const autoprefixer = require('autoprefixer')

// export {
//   plugins: [
//     autoprefixer
//   ]
// }

// module.exports = {
//   plugins: [
//     autoprefixer
//   ]
// }

//간소화하면 autoprefixer = 'autoprefixer'

module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}