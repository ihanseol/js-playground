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

<script type="text/javascript">
//<![CDATA[

for (i in history) {

   document.writeln(i + "<br />");
}

for (var p = 0; p < history.item.length; p++) {
   document.writeln(history.item[p]);
}
//]]>
</script>
</body>
</html>
