<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" 
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<title>Expose the Objects</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<body>
<h1>Expose Me</h1>
<p>Going undercover to expose the document object's dirty little secrets..</p>

<script type="text/javascript">
//<![CDATA[

for (docprop in window.history) {
   document.writeln(docprop + "=");
   eval ("document.writeln(window.history['" + docprop + "'])");
   document.writeln("<br />");
}

//]]>
</script>
</body>
</html>
