var fetch = require('node-fetch');


async function logInOrder(urls) {
    // 并发读取远程URL
    urls=['https://tc39.github.io/ecma262/','https://tc39.github.io/ecma262/','https://tc39.github.io/ecma262/']
    const textPromises = urls.map(async url => {
      const response = await fetch(url);
      const html = await response.text();
      return html.match(/<title>([\s\S]+)<\/title>/i)[1];
    });
  
    // 按次序输出
    for (const textPromise of textPromises) {
      textPromise.then(console.logs);
    }
  }

  logInOrder();

