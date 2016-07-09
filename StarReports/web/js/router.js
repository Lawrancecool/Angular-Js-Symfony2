/**
 * Portions of this code are from the Google Closure Library,
 * received from the Closure Authors under the Apache 2.0 license.
 *
 * All other code is (C) 2011 FriendsOfSymfony and subject to the MIT license.
 */
(function() {var $JSCompiler_alias_FALSE$$ = !1, $JSCompiler_prototypeAlias$$, $goog$global$$ = this;
function $goog$exportPath_$$($name$$57$$, $opt_object$$) {
  var $parts$$ = $name$$57$$.split("."), $cur$$ = $goog$global$$;
  !($parts$$[0] in $cur$$) && $cur$$.execScript && $cur$$.execScript("var " + $parts$$[0]);
  for(var $part$$;$parts$$.length && ($part$$ = $parts$$.shift());) {
    !$parts$$.length && void 0 !== $opt_object$$ ? $cur$$[$part$$] = $opt_object$$ : $cur$$ = $cur$$[$part$$] ? $cur$$[$part$$] : $cur$$[$part$$] = {}
  }
}
;var $goog$array$ARRAY_PROTOTYPE_$$ = Array.prototype, $goog$array$forEach$$ = $goog$array$ARRAY_PROTOTYPE_$$.forEach ? function($arr$$14$$, $f$$, $opt_obj$$1$$) {
  $goog$array$ARRAY_PROTOTYPE_$$.forEach.call($arr$$14$$, $f$$, $opt_obj$$1$$)
} : function($arr$$15$$, $f$$1$$, $opt_obj$$2$$) {
  for(var $l$$2$$ = $arr$$15$$.length, $arr2$$ = "string" == typeof $arr$$15$$ ? $arr$$15$$.split("") : $arr$$15$$, $i$$14$$ = 0;$i$$14$$ < $l$$2$$;$i$$14$$++) {
    $i$$14$$ in $arr2$$ && $f$$1$$.call($opt_obj$$2$$, $arr2$$[$i$$14$$], $i$$14$$, $arr$$15$$)
  }
};
function $goog$structs$Map$$($opt_map$$, $var_args$$42$$) {
  this.$map_$ = {};
  this.$keys_$ = [];
  var $argLength$$2_i$$inline_6_i$$inline_78_res$$inline_81_res$$inline_86$$ = arguments.length;
  if(1 < $argLength$$2_i$$inline_6_i$$inline_78_res$$inline_81_res$$inline_86$$) {
    if($argLength$$2_i$$inline_6_i$$inline_78_res$$inline_81_res$$inline_86$$ % 2) {
      throw Error("Uneven number of arguments");
    }
    for(var $i$$57_key$$inline_83_keys$$inline_4$$ = 0;$i$$57_key$$inline_83_keys$$inline_4$$ < $argLength$$2_i$$inline_6_i$$inline_78_res$$inline_81_res$$inline_86$$;$i$$57_key$$inline_83_keys$$inline_4$$ += 2) {
      this.set(arguments[$i$$57_key$$inline_83_keys$$inline_4$$], arguments[$i$$57_key$$inline_83_keys$$inline_4$$ + 1])
    }
  }else {
    if($opt_map$$) {
      var $key$$inline_88_rv$$inline_77_values$$inline_5$$;
      if($opt_map$$ instanceof $goog$structs$Map$$) {
        $JSCompiler_StaticMethods_cleanupKeysArray_$$($opt_map$$);
        $i$$57_key$$inline_83_keys$$inline_4$$ = $opt_map$$.$keys_$.concat();
        $JSCompiler_StaticMethods_cleanupKeysArray_$$($opt_map$$);
        $key$$inline_88_rv$$inline_77_values$$inline_5$$ = [];
        for($argLength$$2_i$$inline_6_i$$inline_78_res$$inline_81_res$$inline_86$$ = 0;$argLength$$2_i$$inline_6_i$$inline_78_res$$inline_81_res$$inline_86$$ < $opt_map$$.$keys_$.length;$argLength$$2_i$$inline_6_i$$inline_78_res$$inline_81_res$$inline_86$$++) {
          $key$$inline_88_rv$$inline_77_values$$inline_5$$.push($opt_map$$.$map_$[$opt_map$$.$keys_$[$argLength$$2_i$$inline_6_i$$inline_78_res$$inline_81_res$$inline_86$$]])
        }
      }else {
        var $argLength$$2_i$$inline_6_i$$inline_78_res$$inline_81_res$$inline_86$$ = [], $i$$inline_82_i$$inline_87$$ = 0;
        for($i$$57_key$$inline_83_keys$$inline_4$$ in $opt_map$$) {
          $argLength$$2_i$$inline_6_i$$inline_78_res$$inline_81_res$$inline_86$$[$i$$inline_82_i$$inline_87$$++] = $i$$57_key$$inline_83_keys$$inline_4$$
        }
        $i$$57_key$$inline_83_keys$$inline_4$$ = $argLength$$2_i$$inline_6_i$$inline_78_res$$inline_81_res$$inline_86$$;
        $argLength$$2_i$$inline_6_i$$inline_78_res$$inline_81_res$$inline_86$$ = [];
        $i$$inline_82_i$$inline_87$$ = 0;
        for($key$$inline_88_rv$$inline_77_values$$inline_5$$ in $opt_map$$) {
          $argLength$$2_i$$inline_6_i$$inline_78_res$$inline_81_res$$inline_86$$[$i$$inline_82_i$$inline_87$$++] = $opt_map$$[$key$$inline_88_rv$$inline_77_values$$inline_5$$]
        }
        $key$$inline_88_rv$$inline_77_values$$inline_5$$ = $argLength$$2_i$$inline_6_i$$inline_78_res$$inline_81_res$$inline_86$$
      }
      for($argLength$$2_i$$inline_6_i$$inline_78_res$$inline_81_res$$inline_86$$ = 0;$argLength$$2_i$$inline_6_i$$inline_78_res$$inline_81_res$$inline_86$$ < $i$$57_key$$inline_83_keys$$inline_4$$.length;$argLength$$2_i$$inline_6_i$$inline_78_res$$inline_81_res$$inline_86$$++) {
        this.set($i$$57_key$$inline_83_keys$$inline_4$$[$argLength$$2_i$$inline_6_i$$inline_78_res$$inline_81_res$$inline_86$$], $key$$inline_88_rv$$inline_77_values$$inline_5$$[$argLength$$2_i$$inline_6_i$$inline_78_res$$inline_81_res$$inline_86$$])
      }
    }
  }
}
$goog$structs$Map$$.prototype.$count_$ = 0;
$goog$structs$Map$$.prototype.$version_$ = 0;
function $JSCompiler_StaticMethods_cleanupKeysArray_$$($JSCompiler_StaticMethods_cleanupKeysArray_$self$$) {
  if($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$count_$ != $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length) {
    for(var $srcIndex$$ = 0, $destIndex$$ = 0;$srcIndex$$ < $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length;) {
      var $key$$47$$ = $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$[$srcIndex$$];
      $goog$structs$Map$hasKey_$$($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$map_$, $key$$47$$) && ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$[$destIndex$$++] = $key$$47$$);
      $srcIndex$$++
    }
    $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length = $destIndex$$
  }
  if($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$count_$ != $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length) {
    for(var $seen$$2$$ = {}, $destIndex$$ = $srcIndex$$ = 0;$srcIndex$$ < $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length;) {
      $key$$47$$ = $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$[$srcIndex$$], $goog$structs$Map$hasKey_$$($seen$$2$$, $key$$47$$) || ($JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$[$destIndex$$++] = $key$$47$$, $seen$$2$$[$key$$47$$] = 1), $srcIndex$$++
    }
    $JSCompiler_StaticMethods_cleanupKeysArray_$self$$.$keys_$.length = $destIndex$$
  }
}
$goog$structs$Map$$.prototype.get = function $$goog$structs$Map$$$$get$($key$$48$$, $opt_val$$1$$) {
  return $goog$structs$Map$hasKey_$$(this.$map_$, $key$$48$$) ? this.$map_$[$key$$48$$] : $opt_val$$1$$
};
$goog$structs$Map$$.prototype.set = function $$goog$structs$Map$$$$set$($key$$49$$, $value$$50$$) {
  $goog$structs$Map$hasKey_$$(this.$map_$, $key$$49$$) || (this.$count_$++, this.$keys_$.push($key$$49$$), this.$version_$++);
  this.$map_$[$key$$49$$] = $value$$50$$
};
function $goog$structs$Map$hasKey_$$($obj$$59$$, $key$$53$$) {
  return Object.prototype.hasOwnProperty.call($obj$$59$$, $key$$53$$)
}
;var $goog$userAgent$detectedOpera_$$, $goog$userAgent$detectedIe_$$, $goog$userAgent$detectedWebkit_$$, $goog$userAgent$detectedGecko_$$;
function $goog$userAgent$getUserAgentString$$() {
  return $goog$global$$.navigator ? $goog$global$$.navigator.userAgent : null
}
$goog$userAgent$detectedGecko_$$ = $goog$userAgent$detectedWebkit_$$ = $goog$userAgent$detectedIe_$$ = $goog$userAgent$detectedOpera_$$ = $JSCompiler_alias_FALSE$$;
var $ua$$inline_8$$;
if($ua$$inline_8$$ = $goog$userAgent$getUserAgentString$$()) {
  var $navigator$$inline_9$$ = $goog$global$$.navigator;
  $goog$userAgent$detectedOpera_$$ = 0 == $ua$$inline_8$$.indexOf("Opera");
  $goog$userAgent$detectedIe_$$ = !$goog$userAgent$detectedOpera_$$ && -1 != $ua$$inline_8$$.indexOf("MSIE");
  $goog$userAgent$detectedWebkit_$$ = !$goog$userAgent$detectedOpera_$$ && -1 != $ua$$inline_8$$.indexOf("WebKit");
  $goog$userAgent$detectedGecko_$$ = !$goog$userAgent$detectedOpera_$$ && !$goog$userAgent$detectedWebkit_$$ && "Gecko" == $navigator$$inline_9$$.product
}
var $goog$userAgent$IE$$ = $goog$userAgent$detectedIe_$$, $goog$userAgent$GECKO$$ = $goog$userAgent$detectedGecko_$$, $goog$userAgent$WEBKIT$$ = $goog$userAgent$detectedWebkit_$$;
var $re$$inline_12$$;
if($goog$userAgent$detectedOpera_$$ && $goog$global$$.opera) {
  var $operaVersion$$inline_13$$ = $goog$global$$.opera.version;
  "function" == typeof $operaVersion$$inline_13$$ && $operaVersion$$inline_13$$()
}else {
  $goog$userAgent$GECKO$$ ? $re$$inline_12$$ = /rv\:([^\);]+)(\)|;)/ : $goog$userAgent$IE$$ ? $re$$inline_12$$ = /MSIE\s+([^\);]+)(\)|;)/ : $goog$userAgent$WEBKIT$$ && ($re$$inline_12$$ = /WebKit\/(\S+)/), $re$$inline_12$$ && $re$$inline_12$$.exec($goog$userAgent$getUserAgentString$$())
}
;function $fos$Router$$($opt_context$$5$$, $opt_routes$$) {
  this.$context_$ = $opt_context$$5$$ || {$base_url$:"", prefix:"", host:"", scheme:""};
  this.$setRoutes$($opt_routes$$ || {})
}
$fos$Router$$.$getInstance$ = function $$fos$Router$$$$getInstance$$() {
  return $fos$Router$$.$instance_$ ? $fos$Router$$.$instance_$ : $fos$Router$$.$instance_$ = new $fos$Router$$
};
$JSCompiler_prototypeAlias$$ = $fos$Router$$.prototype;
$JSCompiler_prototypeAlias$$.$setRoutes$ = function $$JSCompiler_prototypeAlias$$$$setRoutes$$($routes$$) {
  this.$routes_$ = new $goog$structs$Map$$($routes$$)
};
$JSCompiler_prototypeAlias$$.$setBaseUrl$ = function $$JSCompiler_prototypeAlias$$$$setBaseUrl$$($baseUrl$$) {
  this.$context_$.$base_url$ = $baseUrl$$
};
$JSCompiler_prototypeAlias$$.$getBaseUrl$ = function $$JSCompiler_prototypeAlias$$$$getBaseUrl$$() {
  return this.$context_$.$base_url$
};
$JSCompiler_prototypeAlias$$.$setPrefix$ = function $$JSCompiler_prototypeAlias$$$$setPrefix$$($prefix$$4$$) {
  this.$context_$.prefix = $prefix$$4$$
};
function $JSCompiler_StaticMethods_buildQueryParams$$($JSCompiler_StaticMethods_buildQueryParams$self$$, $prefix$$5$$, $params$$, $add$$) {
  var $name$$60$$, $rbracket$$ = RegExp(/\[\]$/);
  if($params$$ instanceof Array) {
    $goog$array$forEach$$($params$$, function($val$$28$$, $i$$66$$) {
      $rbracket$$.test($prefix$$5$$) ? $add$$($prefix$$5$$, $val$$28$$) : $JSCompiler_StaticMethods_buildQueryParams$$($JSCompiler_StaticMethods_buildQueryParams$self$$, $prefix$$5$$ + "[" + ("object" === typeof $val$$28$$ ? $i$$66$$ : "") + "]", $val$$28$$, $add$$)
    })
  }else {
    if("object" === typeof $params$$) {
      for($name$$60$$ in $params$$) {
        $JSCompiler_StaticMethods_buildQueryParams$$($JSCompiler_StaticMethods_buildQueryParams$self$$, $prefix$$5$$ + "[" + $name$$60$$ + "]", $params$$[$name$$60$$], $add$$)
      }
    }else {
      $add$$($prefix$$5$$, $params$$)
    }
  }
}
$JSCompiler_prototypeAlias$$.$getRoute$ = function $$JSCompiler_prototypeAlias$$$$getRoute$$($name$$61$$) {
  var $prefixedName$$ = this.$context_$.prefix + $name$$61$$;
  if($goog$structs$Map$hasKey_$$(this.$routes_$.$map_$, $prefixedName$$)) {
    $name$$61$$ = $prefixedName$$
  }else {
    if(!$goog$structs$Map$hasKey_$$(this.$routes_$.$map_$, $name$$61$$)) {
      throw Error('The route "' + $name$$61$$ + '" does not exist.');
    }
  }
  return this.$routes_$.get($name$$61$$)
};
$JSCompiler_prototypeAlias$$.$generate$ = function $$JSCompiler_prototypeAlias$$$$generate$$($name$$62$$, $opt_params_rv$$inline_24$$, $absolute$$) {
  var $route$$ = this.$getRoute$($name$$62$$), $params$$1$$ = $opt_params_rv$$inline_24$$ || {}, $res$$inline_20$$ = {}, $key$$inline_21$$;
  for($key$$inline_21$$ in $params$$1$$) {
    $res$$inline_20$$[$key$$inline_21$$] = $params$$1$$[$key$$inline_21$$]
  }
  var $url$$21$$ = "", $optional$$ = !0, $host$$1$$ = "";
  $goog$array$forEach$$($route$$.tokens, function($key$$inline_94_token$$4$$) {
    if("text" === $key$$inline_94_token$$4$$[0]) {
      $url$$21$$ = $key$$inline_94_token$$4$$[1] + $url$$21$$, $optional$$ = $JSCompiler_alias_FALSE$$
    }else {
      if("variable" === $key$$inline_94_token$$4$$[0]) {
        var $hasDefault_value$$55$$ = $key$$inline_94_token$$4$$[3] in $route$$.defaults;
        if($JSCompiler_alias_FALSE$$ === $optional$$ || !$hasDefault_value$$55$$ || $key$$inline_94_token$$4$$[3] in $params$$1$$ && $params$$1$$[$key$$inline_94_token$$4$$[3]] != $route$$.defaults[$key$$inline_94_token$$4$$[3]]) {
          if($key$$inline_94_token$$4$$[3] in $params$$1$$) {
            var $hasDefault_value$$55$$ = $params$$1$$[$key$$inline_94_token$$4$$[3]], $encodedValue_key$$inline_91$$ = $key$$inline_94_token$$4$$[3];
            $encodedValue_key$$inline_91$$ in $res$$inline_20$$ && delete $res$$inline_20$$[$encodedValue_key$$inline_91$$]
          }else {
            if($hasDefault_value$$55$$) {
              $hasDefault_value$$55$$ = $route$$.defaults[$key$$inline_94_token$$4$$[3]]
            }else {
              if($optional$$) {
                return
              }
              throw Error('The route "' + $name$$62$$ + '" requires the parameter "' + $key$$inline_94_token$$4$$[3] + '".');
            }
          }
          if(!(!0 === $hasDefault_value$$55$$ || $JSCompiler_alias_FALSE$$ === $hasDefault_value$$55$$ || "" === $hasDefault_value$$55$$) || !$optional$$) {
            $encodedValue_key$$inline_91$$ = encodeURIComponent($hasDefault_value$$55$$).replace(/%2F/g, "/"), "null" === $encodedValue_key$$inline_91$$ && null === $hasDefault_value$$55$$ && ($encodedValue_key$$inline_91$$ = ""), $url$$21$$ = $key$$inline_94_token$$4$$[1] + $encodedValue_key$$inline_91$$ + $url$$21$$
          }
          $optional$$ = $JSCompiler_alias_FALSE$$
        }else {
          $hasDefault_value$$55$$ && ($key$$inline_94_token$$4$$ = $key$$inline_94_token$$4$$[3], $key$$inline_94_token$$4$$ in $res$$inline_20$$ && delete $res$$inline_20$$[$key$$inline_94_token$$4$$])
        }
      }else {
        throw Error('The token type "' + $key$$inline_94_token$$4$$[0] + '" is not supported.');
      }
    }
  });
  "" === $url$$21$$ && ($url$$21$$ = "/");
  $goog$array$forEach$$($route$$.hosttokens, function($token$$5$$) {
    var $value$$56$$;
    if("text" === $token$$5$$[0]) {
      $host$$1$$ = $token$$5$$[1] + $host$$1$$
    }else {
      if("variable" === $token$$5$$[0]) {
        if($token$$5$$[3] in $params$$1$$) {
          $value$$56$$ = $params$$1$$[$token$$5$$[3]];
          var $key$$inline_97$$ = $token$$5$$[3];
          $key$$inline_97$$ in $res$$inline_20$$ && delete $res$$inline_20$$[$key$$inline_97$$]
        }else {
          $token$$5$$[3] in $route$$.defaults && ($value$$56$$ = $route$$.defaults[$token$$5$$[3]])
        }
        $host$$1$$ = $token$$5$$[1] + $value$$56$$ + $host$$1$$
      }
    }
  });
  $url$$21$$ = this.$context_$.$base_url$ + $url$$21$$;
  "_scheme" in $route$$.requirements && this.$context_$.scheme != $route$$.requirements._scheme ? $url$$21$$ = $route$$.requirements._scheme + "://" + ($host$$1$$ || this.$context_$.host) + $url$$21$$ : $host$$1$$ && this.$context_$.host !== $host$$1$$ ? $url$$21$$ = this.$context_$.scheme + "://" + $host$$1$$ + $url$$21$$ : !0 === $absolute$$ && ($url$$21$$ = this.$context_$.scheme + "://" + this.$context_$.host + $url$$21$$);
  var $opt_params_rv$$inline_24$$ = 0, $add$$1_key$$inline_25$$;
  for($add$$1_key$$inline_25$$ in $res$$inline_20$$) {
    $opt_params_rv$$inline_24$$++
  }
  if(0 < $opt_params_rv$$inline_24$$) {
    var $prefix$$6$$, $queryParams$$ = [];
    $add$$1_key$$inline_25$$ = function $$add$$1_key$$inline_25$$$($key$$57$$, $value$$57$$) {
      $value$$57$$ = "function" === typeof $value$$57$$ ? $value$$57$$() : $value$$57$$;
      $queryParams$$.push(encodeURIComponent($key$$57$$) + "=" + encodeURIComponent(null === $value$$57$$ ? "" : $value$$57$$))
    };
    for($prefix$$6$$ in $res$$inline_20$$) {
      $JSCompiler_StaticMethods_buildQueryParams$$(this, $prefix$$6$$, $res$$inline_20$$[$prefix$$6$$], $add$$1_key$$inline_25$$)
    }
    $url$$21$$ = $url$$21$$ + "?" + $queryParams$$.join("&").replace(/%20/g, "+")
  }
  return $url$$21$$
};
$JSCompiler_prototypeAlias$$.$generateAngularRoute$ = function $$JSCompiler_prototypeAlias$$$$generateAngularRoute$$($name$$63$$, $regex$$1$$) {
  var $route$$1$$ = this.$getRoute$($name$$63$$), $url$$22$$ = "";
  $goog$array$forEach$$($route$$1$$.tokens, function($token$$6$$) {
    if("text" === $token$$6$$[0]) {
      $url$$22$$ = $token$$6$$[1] + $url$$22$$
    }else {
      if("variable" === $token$$6$$[0]) {
        $url$$22$$ = "/{" + $token$$6$$[3] + "}" + $url$$22$$
      }else {
        throw Error('The token type "' + $token$$6$$[0] + '" is not supported.');
      }
    }
  });
  "" === $url$$22$$ && ($url$$22$$ = "/");
  $regex$$1$$ && ($url$$22$$ = "^" + $url$$22$$);
  return $url$$22$$
};
$goog$exportPath_$$("fos.Router", $fos$Router$$);
$goog$exportPath_$$("fos.Router.setData", function($data$$21$$) {
  var $router$$ = $fos$Router$$.$getInstance$();
  $router$$.$setBaseUrl$($data$$21$$.base_url);
  $router$$.$setRoutes$($data$$21$$.routes);
  "prefix" in $data$$21$$ && $router$$.$setPrefix$($data$$21$$.prefix);
  $router$$.$context_$.host = $data$$21$$.host;
  $router$$.$context_$.scheme = $data$$21$$.scheme
});
$fos$Router$$.getInstance = $fos$Router$$.$getInstance$;
$fos$Router$$.prototype.setRoutes = $fos$Router$$.prototype.$setRoutes$;
$fos$Router$$.prototype.setBaseUrl = $fos$Router$$.prototype.$setBaseUrl$;
$fos$Router$$.prototype.getBaseUrl = $fos$Router$$.prototype.$getBaseUrl$;
$fos$Router$$.prototype.generate = $fos$Router$$.prototype.$generate$;
$fos$Router$$.prototype.generateAngularRoute = $fos$Router$$.prototype.$generateAngularRoute$;
$fos$Router$$.prototype.setPrefix = $fos$Router$$.prototype.$setPrefix$;
$fos$Router$$.prototype.getRoute = $fos$Router$$.prototype.$getRoute$;
window.Routing = $fos$Router$$.$getInstance$();
})();
