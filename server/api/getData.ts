import fs from "fs";
import csv from "csv-parser";

export default defineEventHandler(async (event) => {
  let fileData: any = [];

  // const dataToSend = fs
  //   .createReadStream("public/data.csv", "utf-8")
  //   .pipe(csv())
  //   .on("data", (data: any) => {
  //     fileData.push(data);
  //   })
  //   .on("end", () => {
  //     console.log(fileData.length);
  //   });

  const promise = new Promise((resolve, reject) => {
    fs.createReadStream("public/data.csv", "utf-8")
      .pipe(csv({ separator: ";" }))
      .on("data", (data: any) => {
        fileData.push(data);
      })
      .on("end", () => {
        resolve(fileData);
      })
      .on("error", (error: any) => {
        reject(error);
      });
  });

  return {
    data: await promise,
  };
});
