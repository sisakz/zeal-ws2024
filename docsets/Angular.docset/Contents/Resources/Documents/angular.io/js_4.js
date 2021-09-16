
    // Report fatal errors to Google Analytics
    window.onerror = function () {
      ga('send', 'exception', { exDescription: formatError.apply(null, arguments), exFatal: true });

      function formatError(msg, url, line, col, e) {
        var stack;
        msg = msg.replace(/^Error: /, '');
        if (e && e.stack) {
          stack = e.stack
            // strip the leading "Error: " from the stack trace
            .replace(/^Error: /, '')
            // strip the message from the stack trace, if present
            .replace(msg + '\n', '')
            // strip leading spaces
            .replace(/^ +/gm, '')
            // strip all leading "at " for each frame
            .replace(/^at /gm, '')
            // replace long urls with just the last segment: `filename:line:column`
            .replace(/(?: \(|@)http.+\/([^/)]+)\)?(?:\n|$)/gm, '@$1\n')
            // replace "eval code" in Edge
            .replace(/ *\(eval code(:\d+:\d+)\)(?:\n|$)/gm, '@???$1\n')
        } else {
          line = line || '?';
          col = col || '?';
          stack = url + ':' + line + ':' + col;
        }
        return (msg + '\n' + stack).substr(0, 150);
      }
    };
  