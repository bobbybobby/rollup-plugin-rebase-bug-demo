# rollup-plugin-rebase-bug-demo
Demonstration for a bug with rollup-plugin-rebase

Reproduce bug : 

```
yarn install
yarn run build
```

Then inspect the file `dist/client/util/myutil.js`. 
You see that it requires the less file with `require('../../server/assets/util~fjMwjQrM.less')`. 
This required path is wrong : I don't know why it puts a `server` directory in the path. Even if we ignore the `/server` part, the
depth seems wrong, it should go three directories up instead of two. Expected path : `../../../util~fjMwjQrM.less`.
