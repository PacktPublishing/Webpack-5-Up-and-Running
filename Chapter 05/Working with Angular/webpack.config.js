entry: {
 'app': './src/main.ts'
},

entry: {
 app: 'src/app.ts',
 vendor: 'src/vendor.ts'
},
output: {
 filename: '[name].js'
}

import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/http';
import '@angular/router';
// RxJS
import 'rxjs'