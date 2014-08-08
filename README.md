globen
======

Little project for experimenting with the combo of: ClojureScript, goo-engine, d3, topojson

### Demo ###
http://foot.github.io/globen/

### Building ###

OSX

    brew install leiningen
    # get a compile watcher going
    lein cljsbuild auto
    # setup some local http server and then:
    python -m SimpleHTTPServer
    open http://localhost:8000/
