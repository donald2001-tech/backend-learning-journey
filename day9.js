const loginUser = new Promise((resolve, reject) => {
    setTimeout (() => {
        let success = false;

        if (success) {
            resolve("Login successful")
        } else {
            reject("Login failed")
        };
    }, 1000);
});

async function attemptLogin() {
    console.log("Logging in...");
    try {
        const result = await loginUser;
        console.log(result);
    } catch (error) {
        console.log(error);
    };
};
attemptLogin();