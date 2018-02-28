(function() {
    if (window.ksRunnerInit) return;

    // This line gets patched up by the cloud
    var pxtConfig = {
    "relprefix": "/pxt-phaser-ce/",
    "workerjs": "/pxt-phaser-ce/worker.js",
    "tdworkerjs": "/pxt-phaser-ce/tdworker.js",
    "monacoworkerjs": "/pxt-phaser-ce/monacoworker.js",
    "pxtVersion": "3.4.12",
    "pxtRelId": "",
    "pxtCdnUrl": "/pxt-phaser-ce/",
    "commitCdnUrl": "/pxt-phaser-ce/",
    "blobCdnUrl": "/pxt-phaser-ce/",
    "cdnUrl": "/pxt-phaser-ce/",
    "targetVersion": "0.0.0",
    "targetRelId": "",
    "targetUrl": "",
    "targetId": "phaserce",
    "simUrl": "/pxt-phaser-ce/simulator.html",
    "partsUrl": "/pxt-phaser-ce/siminstructions.html",
    "runUrl": "/pxt-phaser-ce/run.html",
    "docsUrl": "/pxt-phaser-ce/docs.html",
    "isStatic": true
};

    var scripts = [
        "/pxt-phaser-ce/highlight.js/highlight.pack.js",
        "/pxt-phaser-ce/bluebird.min.js",
        "/pxt-phaser-ce/typescript.js",
        "/pxt-phaser-ce/semantic.js",
        "/pxt-phaser-ce/marked/marked.min.js",
        "/pxt-phaser-ce/lzma/lzma_worker-min.js",
        "/pxt-phaser-ce/blockly/blockly_compressed.js",
        "/pxt-phaser-ce/blockly/blocks_compressed.js",
        "/pxt-phaser-ce/blockly/msg/js/en.js",
        "/pxt-phaser-ce/pxtlib.js",
        "/pxt-phaser-ce/pxtcompiler.js",
        "/pxt-phaser-ce/pxtblocks.js",
        "/pxt-phaser-ce/pxteditor.js",
        "/pxt-phaser-ce/pxtsim.js",
        "/pxt-phaser-ce/target.js",
        "/pxt-phaser-ce/pxtrunner.js"
    ]

    if (typeof jQuery == "undefined")
        scripts.unshift("/pxt-phaser-ce/jquery.js")

    var pxtCallbacks = []

    window.ksRunnerReady = function(f) {
        if (pxtCallbacks == null) f()
        else pxtCallbacks.push(f)
    }

    window.ksRunnerWhenLoaded = function() {
        pxt.docs.requireHighlightJs = function() { return hljs; }
        pxt.setupWebConfig(pxtConfig || window.pxtWebConfig)
        pxt.runner.initCallbacks = pxtCallbacks
        pxtCallbacks.push(function() {
            pxtCallbacks = null
        })
        pxt.runner.init();
    }

    scripts.forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.head.appendChild(script);
    })

} ())
