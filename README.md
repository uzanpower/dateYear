<b>How to use this app.</b>

Default config
  - config already has default value inside the apps but you can still edit whatever you want.
  - default value:
      
<pre>
{
  yearStart: 2016,
  separator: "-"
}
</pre>
      
  - how to edit config:
    
<pre>
dateYear.setConfig({
  yearStart: 2015, //Set whatever year u want, Number or String
  separator: "~" //Set what ever u want, example using 2016 ~ 2017
});
</pre>
      
How to run the app
  - after u already set the config or not, u can use this app.
  - how to use:
  
<pre>
dateYear.run();
</pre>

  - ..and the app execute.
  - the app is returned number or string so it's will be not showing anything until you show it.

<b>Example Using</b>

<pre>
<span id="date"></span>

<script src="dateYear.js" type="type/javascript"></script>
<script>
  document.getElementById("date").innerHTML = dateYear.setConfig({
    yearStart: 2015
  }).run();
</script>
</pre>