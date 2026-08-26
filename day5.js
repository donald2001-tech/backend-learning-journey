const getWeather = new Promise((resolve, reject) =>
  {
    setTimeout(() => {
        resolve("Sunny")
    }, 800);
});

getWeather.then((name) =>
{
    console.log("Today's weather: Sunny");
});

console.log("Checking weather");                                                                                                                            