const API_URL = "https://open.api.com/v1/data";
const WRONG_URL = "https://open.api.com/v1/wrong";

function getData(url) {
    // 3초 뒤 url 이 API_URL과 같다면 성공으로 처리를, 아닐 경우 실패로 처리를 하게 해주세요
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

// ...
getData(API_URL)
    .then(() => getData(WRONG_URL))
    .catch((err) => {
        console.error(err);
    })
    // getData(API_URL), getData(WRONG_URL) 각각 성공과 실패에 대한 처리를 코드작성해주세요.