// This example is from JavaScript: The Definitive Guide, 3rd Edition.
// That book and this example were Written by David Flanagan.
// They are Copyright (c) 1996, 1997, 1998 O'Reilly & Associates.
// This example is provided WITHOUT WARRANTY either expressed or implied.
// You may study, use, modify, and distribute it for any purpose,
// as long as this notice is retained.

/*
 * FILE: listanchors.js
 * The function listanchors() is passed a document as its argument, and
 * opens a new window to serve as a "navigation window" for that
 * document. The new window displays a list of all anchors in the document.
 * Clicking on any anchor in the list causes the document to scroll to 
 * the position of that anchor.
 */

// First, figure out what browser we're running in.
// Assume Navigator, but check for IE. We assume version 4 of either.
listanchors.nav = true;  
if (navigator.appName.indexOf("Microsoft") != -1) listanchors.nav = false;

// Now define the function. Pass the document that is to have its anchors
// listed as the sole argument. Call it once the document is fully (or
// mostly) parsed, not at the beginning of the document.
function listanchors(d) {
    // Open the new window.
    var newwin = window.open("", "navwin", 
		             "menubar=yes,scrollbars=yes,resizable=yes," +
			     "width=600,height=300");

    // Give it a title.
    newwin.document.writeln("<H1>Navigation Window:<BR>" +
			    document.title + "</H1>");
    // List all anchors.
    for(var i = 0; i < d.anchors.length; i++) {
        // For each anchor object, determine the text to display. 
	// First, try to get the text between <A> and </A> using a 
	// browser-dependent property. If none, use the name instead.
        var text;
        var a = d.anchors[i];
	if (listanchors.nav) text = a.text;  // Navigator 4
        else text = a.innerText;             // Internet Explorer 4
	if ((text == null) || (text == '')) text = a.name;

	// Now output that text as a link. Note the use of the location
	// property of the original window.
        newwin.document.write('<A HREF="#' + a.name + '"' +
			      ' onClick="opener.location.hash=\'' + a.name + 
			      '\'; return false;">'); 
	newwin.document.write(text);
        newwin.document.writeln('</A><BR>');
    }
    newwin.document.close();   // Never forget to close the document!
}
