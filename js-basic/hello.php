<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<title>History,Screen,Navigator</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
<?php $ip =  $_SERVER["REMOTE_ADDR"]; echo "Hello $ip";  ?>
<h1>history object</h1>
<a href="" onclick="history.back();return false">history.back()</a><br />
<a href="" onclick="history.go(-2);return false">history.go(-2)</a><br /><br />
<a href="" onclick="history.forward();return false">history.forward()</a><br />

<h1>screen object</h1>
<script type="text/javascript">
//<![CDATA[

document.writeln("screen.availTop: " + screen.availTop + "<br />");
document.writeln("screen.availLeft: " + screen.availLeft + "<br />");
document.writeln("screen.availWidth: " + screen.availWidth + "<br />");
document.writeln("screen.availHeight: " + screen.availHeight + "<br />");
document.writeln("screen.colorDepth: " + screen.colorDepth + "<br />");
document.writeln("screen.pixelDepth: " + screen.pixelDepth + "<br />"); 

document.writeln("<h1>navigator object</h1>");

document.writeln("navigator.userAgent: " + navigator.userAgent + "<br />");
document.writeln("navigator.appName: " + navigator.appName + "<br />");
document.writeln("navigator.appCodeName: " + navigator.appCodeName + "<br />");
document.writeln("navigator.appVersion: " + navigator.appVersion + "<br />");
document.writeln("navigator.appMinorVersion: " + navigator.appMinorVersion + "<br />");
document.writeln("navigator.platform: " + navigator.platform + "<br />");
document.writeln("navigator.cookieEnabled: " + navigator.cookieEnabled + "<br />");
document.writeln("navigator.onLine: " + navigator.onLine + "<br />");
document.writeln("navigator.userLanguage: " + navigator.userLanguage + "<br />");
document.writeln("navigator.mimeTypes[1].description: " + navigator.mimeTypes[1].description + "<br />");
document.writeln("navigator.mimeTypes[1].type: " + navigator.mimeTypes[1].type + "<br />");
document.writeln("navigator.plugins[3].description: " + navigator.plugins[3].description + "<br />");
//]]>
</script>
</body>
</html>
