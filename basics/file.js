const fs= require("fs");
const quote ="prevention is better than cure";

// fs.writeFile("./backup/awesome.html" , quote, (err) => {
//     console.log("completed the text");
// });

// for(let i=1;i<=10;i++) {
//     fs.writeFile(`./backup/awesome-${i}.html` , quote, (err) => {
//         console.log("completed the text");
//     });
// }

// console.log(process.argv);
// const noOfFiles = process.argv[2];

// for(let i=1;i<= noOfFiles;i++) {
//     fs.writeFile(`./backup/awesome-${i}.html` , quote, (err) => {
//         console.log("completed the text");
//     });
// }

fs.readFile("./cool.txt","utf-8",(err,data)=>{
    if(err) {
        console.log("something went wrong",err);
    
    }else {
        console.log(data);
    }
});

const quote3="\nsing in the rain song in the rain";

fs.appendFile("./nice.txt",quote3, (err)=>{
    console.log("update file");
});