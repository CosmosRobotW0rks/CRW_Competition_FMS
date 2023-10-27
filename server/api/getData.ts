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

  const promise: any = new Promise((resolve, reject) => {
    fs.createReadStream("public/data.csv", "utf-8")
      .pipe(csv({ separator: "," }))
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

  let newData: Array<any> = [];
  let oldData: any = await promise;

  for (let index = 0; index < oldData.length; index++) {
    const element = oldData[index];
    if (element.point > oldData[index + 1].point) {
      newData.push(element);
    }
  }
  console.log(newData);

  return {
    data: await promise,
    newData: newData,
  };
});
