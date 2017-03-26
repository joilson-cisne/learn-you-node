var http = require('http');
var bl = require('bl');

//// solution 1
// var url1 = process.argv[2];
// var url2 = process.argv[3];
// var url3 = process.argv[4];
//
// http.get(url1, response => {
//   response.pipe(bl((err, data) => {
//     console.log(data.toString());
//     http.get(url2, response => {
//       response.pipe(bl((err, data) => {
//         console.log(data.toString());
//         http.get(url3, response => {
//           response.pipe(bl((err, data) => {
//             console.log(data.toString());
//           }));
//         });
//       }));
//     });
//   }));
// });

//// solution 2
// function httpGet(i) {
//   http.get(process.argv[2 + i], response => {
//     response.pipe(bl((err, data) => {
//       console.log(data.toString());
//       if (i < 3) {
//         httpGet(i+1);
//       }
//     }));
//   });
// }

// httpGet(0);

// solution 3
var result = [];
var count = 0;

function printResults() {
  for (var i = 0; i < result.length; i++) {
    console.log(result[i]);
  }
}

function httpGet(i) {
  http.get(process.argv[2 + i], response => {
    response.pipe(bl((err, data) => {
      result[i] = data.toString();
      ++count;

      if (count == 3) {
        printResults();
      }
    }));
  });
}

for (var i = 0; i < 3; i++) {
  httpGet(i);
}
