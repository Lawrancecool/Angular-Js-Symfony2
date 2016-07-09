<?php
/**
 * Groups configuration for default Minify implementation
 * @package Minify
 */

/** 
 * You may wish to use the Minify URI Builder app to suggest
 * changes. http://yourdomain/min/builder/
 *
 * See http://code.google.com/p/minify/wiki/CustomSource for other ideas
 **/

return array(
    'css' => array
    (



    ),
    'js' => array
    (
        "//lib/jquery.js",
      /*  "//prod/scripts/admin-lte.js",//Admin Themes Query Stars Here
        "//prod/scripts/admin-lte-all.js",
        "//prod/scripts/admin-lte-calendar.js",
        "//prod/scripts/admin-lte-flot.js",
        "//prod/scripts/admin-lte-forms.js",
        "//prod/scripts/admin-lte-morris.js",
        "//prod/scripts/admin-lte-wysiwyg.js",
        "//prod/scripts/common.js",
        "//prod/scripts/modernizr.js",
        "//prod/scripts/tools.js",//Admin Themes Query Ends Here*/
        "//bundles/router.js",
        "//js/fos_js_routes.js",
        "//lib/angular/angular.js",
        "//lib/angular/angular-ui-router.js",
        "//lib/angular/http-auth-interceptors.js",
        "//scripts/app.js",
        "//js/services.js",
        "//js/controllers.js",
        "//js/directives.js",
        "//js/filters.js",

    ),
);