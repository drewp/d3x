# Dependencies

## Included
   * [d3 1.8.3](http://mbostock.github.com/d3/)
   * [ace 0.1.3](http://ace.ajax.org/)
   * [jquery 1.5.2](http://jquery.com/)
   * [jquery-ui 1.8.10](http://jqueryui.com)

## Other
   * [Twisted](http://twistedmatrix.com/)
     The dev script uses Twisted to provide a static web server.  A static
     web server is particularly useful with Google Chrome which is
     especially restrictive when talking to the local filesystem.

# Download & Usage

    git clone git://github.com/dreid/d3x.git
    cd d3x
    git submodules update --init
    ./dev

Visit [http://localhost:8080/d3x.html](http://localhost:8080/d3x.html) in your
browser.

# Screenshot

![Basic UI](https://github.com/dreid/d3x/raw/master/screenshot.png)
