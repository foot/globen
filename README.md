globen
======

Little project for experimenting with the combo of: ClojureScript, goo-engine, d3, topojson

Building
------------

OSX

    brew install leiningen
    # get a compile watcher going
    lein cljsbuild auto
    # setup some local http server and then:
    open http://localhost:8000/../globen/
