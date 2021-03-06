// This example is from JavaScript: The Definitive Guide, 3rd Edition.
// That book and this example were Written by David Flanagan.
// They are Copyright (c) 1996, 1997, 1998 O'Reilly & Associates.
// This example is provided WITHOUT WARRANTY either expressed or implied.
// You may study, use, modify, and distribute it for any purpose,
// as long as this notice is retained.

import netscape.javascript.JSObject;    // These are the classes we'll use.
import java.applet.Applet;
import java.io.OutputStream;

// An output stream that sends HTML text to a newly created web browser window.
public class HTMLOutputStream extends OutputStream
{
    JSObject main_window;        // The initial browser window
    JSObject window;             // The new window we create
    JSObject document;           // The document of that new window
    static int window_num = 0;   // Used to give each new window a unique name

    // To create a new HTMLOutputStream, you must specify the applet that
    // will use it (this specifies a browser window) and the desired size
    // for the new window.
    public HTMLOutputStream(Applet applet, int width, int height)
    {
        // Get main browser window from the applet with JSObject.getWindow().
        main_window = JSObject.getWindow(applet);
        // Use JSObject.eval() to create a new window.
        window = (JSObject)
            main_window.eval("self.open(''," +
                             "'HTMLOutputStream" + window_num++ + "'," +
                             "'menubar,status,resizable,scrollbars," +
                             "width=" + width + ",height=" + height + "')");
        // Use JSObject.getMember() to get the document of this new window.
        document = (JSObject) window.getMember("document");
        // Then use JSObject.call() to open this document.
        document.call("open", null);
    }

    // This is the write() method required for all OutputStream subclasses.
    public void write(byte[] chars, int offset, int length)
    {
        // Create a string from the specified bytes.
        String s = new String(chars, 0, offset, length);
        // Store the string in an array for use with JSObject.call().
        Object[] args = { s };
        // Check to see if the window has been closed.
        boolean closed = ((Boolean)window.getMember("closed")).booleanValue();
        // If not, use JSObject.call() to invoke document.write().
        if (!closed) document.call("write", args);
    }
    // Here are two variants on the above method, also required.
    public void write(byte[] chars) { write(chars, 0, chars.length); }
    public void write(int c) { byte[] chars = {(byte)c}; write(chars, 0, 1); }

    // When the stream is closed, use JSObject.call() to call Document.close.
    public void close() { document.call("close", null); }

    // This method is unique to HTMLOutputStream. If the new window is
    // still open, use JSObject.call() to invoke Window.close() to close it.
    public void close_window()
    {
        boolean closed = ((Boolean)window.getMember("closed")).booleanValue();
        if (!closed) window.call("close", null);
    }
}
