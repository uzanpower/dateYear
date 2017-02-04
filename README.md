<h2>How to use this app</h2>

<b>Explanation</b>
  - Example Set yearStart = 2016
  - Example Set separator = "-"
  - Example Set date client = 2017
  - if date client ERORR, will shown the (yearStart). Output: 2016
  - if yearStart == date client, will shown the (yearStart). Output: 2016
  - if yearStart < date client, will shown the (yearStart + separator + date client). Output: 2016 - 2017

<b>Default config</b>
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
  yearStart: 2015,
  separator: "~"
});
</pre>
      
<b>How to run the app</b>
  - after u already set the config or not, u can use this app.
  - how to use:
  
<pre>
dateYear.run();
</pre>

  - ..and the app execute.
  - the app is returned number or string so it's will be not showing anything until you show it.

<b>Example Using</b>

<pre>
&lt;span id="date"&gt;&lt;/span&gt;

&lt;script src="dateYear.js" type="type/javascript"&gt;&lt;/script&gt;
&lt;script&gt;
  document.getElementById("date").innerHTML = dateYear.setConfig({
    yearStart: 2015
  }).run();
&lt;/script&gt;
</pre>
