## PERFIST
### Simple Web Application Performance Measurement Reporter

[![npm](https://img.shields.io/badge/npm%20package-20-brightgreen)](https://www.npmjs.com/package/perfist)
<br>
> Minified Size : `1kB`  
> Minified + Gzipped Size : `569B` 


PERFIST is a simple web application measurement reporter. It can use in every browsers and does not effect your apps 
performance.
If you want to see how to make integration. You can visit links below.

- Test App For Make Measurement :
    - Demo Url: https://performance-test-app.vercel.app/
    - Github Url: https://github.com/oguzergul/performance-test-app

## Installation

Install the dependencies and devDependencies and start the server.

#### npm
```javascript
$ npm install perfist --save 
```
#### yarn
```javascript
$ yarn add perfist
```
#### CDN
```javascript
<script href="https://cdn.jsdelivr.net/npm/perfist@1.0.2" crossorigin="anonymous"></script>
```
## Example usage for Vue.js App

```javascript
<template>
    <h1>Perfist Example</h1>
</template>

<script>
import performance from "perfist";
export default {
  name: 'App',
  mounted() {
      performance.analysePerformance("localhost:3000"); // send data to localhost:3000
  }
}
</script>
```
##### This example shows us how to use perfist. Perfist accept one parameter as a URL <br> and it sends measurement data to this endpoint.

## Example output:


```javascript
{
  files: Array,
  measurement_date: Date,
  url: String,
  user_agent: String,
  ttfbTime: Number,
  fcpTime: Number,
  domLoadTime: Number,
  windowLoadTime: Number,
  resourcesLoadTime: Number
}
```

## License

MIT
