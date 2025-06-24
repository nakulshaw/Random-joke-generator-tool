import https from "https";
import chalk from "chalk";

//defining getjokes function
const getJokes=()=>{
    // api url
    const url="https://official-joke-api.appspot.com/random_joke";
    // response
    https.get(url,(response)=>{
        let data="";
        response.on("data",(chunk)=>{
            data +=chunk;
        });
        response.on('end',()=>{
            let joke=JSON.parse(data);
            console.log(`Here is random ${joke.type} joke:`);
            console.log(chalk.red(`${joke.setup}`));
            console.log(chalk.white.bgGreen.bold(`${joke.punchline}`));
            
        })
        response.on("error",(err)=>{
            console.log(err);
        })
        
    })
}
getJokes();
