var dateYear = {
  /*
    Not recommended setting configuration,
    using this "config" instead of using "setConfig".
  */
  config: {},
  
  /*
    Set config you need using this function.
    
    Config available:
      yearStart (number)
      separator (string)
      
    @return Object
  */
  setConfig: function(config) {
    this.config = config;
    return this;
  },
  
  /*
    Unless you don't set the config,
    this function still return the "correct" way.
    
    Default Config:
      yearStart: 2016
      separator: "-"
      
    @return String or Number
  */
  run: function() {
    var config = this.config,
      year = (new Date()).getFullYear(),
      date = config.yearStart || 2016,
      sprt = " " + (config.separator || "-") + " ",
      date = year > date ? date + sprt + year : date;
    return date;
  }
};