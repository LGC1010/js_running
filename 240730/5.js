function taskA() {
    return new Promise((resolve) => {
        const time = Math.floor(Math.random() * 5000);
        setTimeout(() => {
            resolve("Task A Complete");
        }, time);
    });
}

function taskB() {
    return new Promise((resolve) => {
        const time = Math.floor(Math.random() * 5000);
        setTimeout(() => {
            resolve("Task B Complete");
        }, time);
    });
}

function taskC() {
    return new Promise((resolve) => {
        const time = Math.floor(Math.random() * 5000);
        setTimeout(() => {
            resolve("Task C Complete");
        }, time);
    });
}

async function findFirstCompletedTask() {
    console.time("Parallel");
    try {
        const results = await Promise.race([taskA(), taskB(), taskC()]);
        console.log(results);
    } catch (error) {
        console.error("Error:", error);
    }
    console.timeEnd("Parallel");
}
findFirstCompletedTask().then();