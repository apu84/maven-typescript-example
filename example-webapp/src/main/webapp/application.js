/**
 * Bootstraps the example application:
 *  Loads the WebJAR'ed example library via RequireJS and instantiates some logic from this library
 *  TODO: replace hard coded version by ${project.version}
 */
require(['./webjars/example-library-js/0.1.0-SNAPSHOT/demo.js'], function(demo) {

    // fetch canvas element
    var canvas = window.document.getElementById("canvas");

    // instantiate and run scene
    new demo.TrianglesScene(canvas).start();
});