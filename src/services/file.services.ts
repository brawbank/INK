// // file.service.ts
// import { Injectable } from '@angular/core';
// import * as fs from 'fs';

// @Injectable({
//   providedIn: 'root'
// })
// export class FileService {
//   saveToFile(data: any, filePath: string): Promise<void> {
//     return new Promise((resolve, reject) => {
//       fs.writeFile(filePath, JSON.stringify(data), (err: any) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve();
//         }
//       });
//     });
//   }
// }
