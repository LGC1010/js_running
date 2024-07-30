const API_URL = "https://open.api.com/v1/data";
const WRONG_URL = "https://open.api.com/v1/wrong";

function getData(url) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          if (url == API_URL) {
              console.log('성공');
              resolve(true);
          } else {
              reject('false')
              console.log('실패');
          }
      }, 1000)
  })
}

async function runTasksUrl(url) {
    try {
        const result = await getData(url);
        console.log(result);
    } catch (error) {
        console.error("Error:", error);
    }
}
// ...
runTasksUrl(API_URL).then(() => runTasksUrl(WRONG_URL))