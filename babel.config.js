module.exports = {

  presets: [
    ["@babel/env", {
      modules: false,
      //useBuiltIns: 'usage',  

      /*
       * Enable this to see the detailled preset configuration when running babel 
       */
      //debug: true,
    }]
  ],


  sourceMaps: "inline"

};
