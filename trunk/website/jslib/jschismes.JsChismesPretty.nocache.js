function jschismes_JsChismesPretty(){
  var $wnd_0 = window, $doc_0 = document, $stats = $wnd_0.__gwtStatsEvent?function(a){
    return $wnd_0.__gwtStatsEvent(a);
  }
  :null, gwtOnLoad, bodyDone, base = '', metaProps = {}, values = [], providers = [], answers = [], onLoadErrorFunc, propertyErrorFunc;
  $stats && $stats({moduleName:'jschismes.JsChismesPretty', sessionId:$sessionId, subSystem:'startup', evtGroup:'bootstrap', millis:(new Date).getTime(), type:'begin'});
  if (!$wnd_0.__gwt_stylesLoaded) {
    $wnd_0.__gwt_stylesLoaded = {};
  }
  if (!$wnd_0.__gwt_scriptsLoaded) {
    $wnd_0.__gwt_scriptsLoaded = {};
  }
  function isHostedMode(){
    try {
      return $wnd_0.external && ($wnd_0.external.gwtOnLoad && $wnd_0.location.search.indexOf('gwt.hybrid') == -1);
    }
     catch (e) {
      return false;
    }
  }

  function maybeStartModule(){
    if (gwtOnLoad && bodyDone) {
      gwtOnLoad(onLoadErrorFunc, 'jschismes.JsChismesPretty', base);
      $stats && $stats({moduleName:'jschismes.JsChismesPretty', sessionId:$sessionId, subSystem:'startup', evtGroup:'moduleStartup', millis:(new Date).getTime(), type:'end'});
    }
  }

  function computeScriptBase(){
    var thisScript, markerId = '__gwt_marker_jschismes.JsChismesPretty', markerScript;
    $doc_0.write('<script id="' + markerId + '"><\/script>');
    markerScript = $doc_0.getElementById(markerId);
    thisScript = markerScript && markerScript.previousSibling;
    while (thisScript && thisScript.tagName != 'SCRIPT') {
      thisScript = thisScript.previousSibling;
    }
    function getDirectoryOfFile(path){
      var hashIndex = path.lastIndexOf('#');
      if (hashIndex == -1) {
        hashIndex = path.length;
      }
      var queryIndex = path.indexOf('?');
      if (queryIndex == -1) {
        queryIndex = path.length;
      }
      var slashIndex = path.lastIndexOf('/', Math.min(queryIndex, hashIndex));
      return slashIndex >= 0?path.substring(0, slashIndex + 1):'';
    }

    ;
    if (thisScript && thisScript.src) {
      base = getDirectoryOfFile(thisScript.src);
    }
    if (base == '') {
      var baseElements = $doc_0.getElementsByTagName('base');
      if (baseElements.length > 0) {
        base = baseElements[baseElements.length - 1].href;
      }
       else {
        base = getDirectoryOfFile($doc_0.location.href);
      }
    }
     else if (base.match(/^\w+:\/\//)) {
    }
     else {
      var img = $doc_0.createElement('img');
      img.src = base + 'clear.cache.gif';
      base = getDirectoryOfFile(img.src);
    }
    if (markerScript) {
      markerScript.parentNode.removeChild(markerScript);
    }
  }

  function processMetas(){
    var metas = document.getElementsByTagName('meta');
    for (var i = 0, n = metas.length; i < n; ++i) {
      var meta = metas[i], name_0 = meta.getAttribute('name'), content;
      if (name_0) {
        if (name_0 == 'gwt:property') {
          content = meta.getAttribute('content');
          if (content) {
            var value, eq = content.indexOf('=');
            if (eq >= 0) {
              name_0 = content.substring(0, eq);
              value = content.substring(eq + 1);
            }
             else {
              name_0 = content;
              value = '';
            }
            metaProps[name_0] = value;
          }
        }
         else if (name_0 == 'gwt:onPropertyErrorFn') {
          content = meta.getAttribute('content');
          if (content) {
            try {
              propertyErrorFunc = eval(content);
            }
             catch (e) {
              alert('Bad handler "' + content + '" for "gwt:onPropertyErrorFn"');
            }
          }
        }
         else if (name_0 == 'gwt:onLoadErrorFn') {
          content = meta.getAttribute('content');
          if (content) {
            try {
              onLoadErrorFunc = eval(content);
            }
             catch (e) {
              alert('Bad handler "' + content + '" for "gwt:onLoadErrorFn"');
            }
          }
        }
      }
    }
  }

  function __gwt_isKnownPropertyValue(propName, propValue){
    return propValue in values[propName];
  }

  function __gwt_getMetaProperty(name_0){
    var value = metaProps[name_0];
    return value == null?null:value;
  }

  function unflattenKeylistIntoAnswers(propValArray, value){
    var answer = answers;
    for (var i = 0, n = propValArray.length - 1; i < n; ++i) {
      answer = answer[propValArray[i]] || (answer[propValArray[i]] = []);
    }
    answer[propValArray[n]] = value;
  }

  function computePropValue(propName){
    var value = providers[propName](), allowedValuesMap = values[propName];
    if (value in allowedValuesMap) {
      return value;
    }
    var allowedValuesList = [];
    for (var k in allowedValuesMap) {
      allowedValuesList[allowedValuesMap[k]] = k;
    }
    if (propertyErrorFunc) {
      propertyErrorFunc(propName, allowedValuesList, value);
    }
    throw null;
  }

  providers['locale'] = function(){
    try {
      var locale;
      var defaultLocale = 'default' || 'default';
      if (locale == null) {
        var args = location.search;
        var startLang = args.indexOf('locale=');
        if (startLang >= 0) {
          var language = args.substring(startLang);
          var begin = language.indexOf('=') + 1;
          var end = language.indexOf('&');
          if (end == -1) {
            end = language.length;
          }
          locale = language.substring(begin, end);
        }
      }
      if (locale == null) {
        locale = __gwt_getMetaProperty('locale');
      }
      if (locale == null) {
        locale = $wnd_0['__gwt_Locale'];
      }
       else {
        $wnd_0['__gwt_Locale'] = locale || defaultLocale;
      }
      if (locale == null) {
        return defaultLocale;
      }
      while (!__gwt_isKnownPropertyValue('locale', locale)) {
        var lastIndex = locale.lastIndexOf('_');
        if (lastIndex == -1) {
          locale = defaultLocale;
          break;
        }
         else {
          locale = locale.substring(0, lastIndex);
        }
      }
      return locale;
    }
     catch (e) {
      alert('Unexpected exception in locale detection, using default: ' + e);
      return 'default';
    }
  }
  ;
  values['locale'] = {'default':0, en:1, es:2, fr:3, ja:4};
  providers['user.agent'] = function(){
    var ua = navigator.userAgent.toLowerCase();
    var makeVersion = function(result){
      return parseInt(result[1]) * 1000 + parseInt(result[2]);
    }
    ;
    if (ua.indexOf('opera') != -1) {
      return 'opera';
    }
     else if (ua.indexOf('webkit') != -1) {
      return 'safari';
    }
     else if (ua.indexOf('msie') != -1) {
      if (document.documentMode >= 8) {
        return 'ie8';
      }
       else {
        var result_0 = /msie ([0-9]+)\.([0-9]+)/.exec(ua);
        if (result_0 && result_0.length == 3) {
          var v = makeVersion(result_0);
          if (v >= 6000) {
            return 'ie6';
          }
        }
      }
    }
     else if (ua.indexOf('gecko') != -1) {
      var result_0 = /rv:([0-9]+)\.([0-9]+)/.exec(ua);
      if (result_0 && result_0.length == 3) {
        if (makeVersion(result_0) >= 1008)
          return 'gecko1_8';
      }
      return 'gecko';
    }
    return 'unknown';
  }
  ;
  values['user.agent'] = {gecko:0, gecko1_8:1, ie6:2, ie8:3, opera:4, safari:5};
  jschismes_JsChismesPretty.onScriptLoad = function(gwtOnLoadFunc){
    jschismes_JsChismesPretty = null;
    gwtOnLoad = gwtOnLoadFunc;
    maybeStartModule();
  }
  ;
  if (isHostedMode()) {
    alert('Cross-site hosted mode not yet implemented. See issue ' + 'http://code.google.com/p/google-web-toolkit/issues/detail?id=2079');
    return;
  }
  computeScriptBase();
  processMetas();
  $stats && $stats({moduleName:'jschismes.JsChismesPretty', sessionId:$sessionId, subSystem:'startup', evtGroup:'bootstrap', millis:(new Date).getTime(), type:'selectingPermutation'});
  var strongName;
  try {
    unflattenKeylistIntoAnswers(['fr', 'gecko'], 'file_1');
    unflattenKeylistIntoAnswers(['es', 'ie6'], 'file_3');
    unflattenKeylistIntoAnswers(['ja', 'ie6'], 'file_5');
    unflattenKeylistIntoAnswers(['fr', 'ie8'], 'file_8');
    unflattenKeylistIntoAnswers(['es', 'safari'], 'file_9');
    unflattenKeylistIntoAnswers(['ja', 'ie8'], 'file_11');
    unflattenKeylistIntoAnswers(['default', 'opera'], 'file_12');
    unflattenKeylistIntoAnswers(['ja', 'opera'], 'file_15');
    unflattenKeylistIntoAnswers(['ja', 'gecko1_8'], 'file_16');
    unflattenKeylistIntoAnswers(['en', 'safari'], 'file_17');
    unflattenKeylistIntoAnswers(['fr', 'safari'], 'file_18');
    unflattenKeylistIntoAnswers(['default', 'safari'], 'file_19');
    unflattenKeylistIntoAnswers(['en', 'ie6'], 'file_20');
    unflattenKeylistIntoAnswers(['es', 'gecko'], 'file_26');
    unflattenKeylistIntoAnswers(['en', 'opera'], 'file_28');
    unflattenKeylistIntoAnswers(['fr', 'gecko1_8'], 'file_29');
    unflattenKeylistIntoAnswers(['default', 'gecko1_8'], 'file_30');
    unflattenKeylistIntoAnswers(['default', 'ie8'], 'file_32');
    unflattenKeylistIntoAnswers(['default', 'ie6'], 'file_34');
    unflattenKeylistIntoAnswers(['en', 'gecko'], 'file_41');
    unflattenKeylistIntoAnswers(['es', 'opera'], 'file_42');
    unflattenKeylistIntoAnswers(['es', 'ie8'], 'file_47');
    unflattenKeylistIntoAnswers(['ja', 'safari'], 'file_48');
    unflattenKeylistIntoAnswers(['en', 'gecko1_8'], 'file_49');
    unflattenKeylistIntoAnswers(['default', 'gecko'], 'file_51');
    unflattenKeylistIntoAnswers(['en', 'ie8'], 'file_52');
    unflattenKeylistIntoAnswers(['fr', 'opera'], 'file_54');
    unflattenKeylistIntoAnswers(['fr', 'ie6'], 'file_55');
    unflattenKeylistIntoAnswers(['ja', 'gecko'], 'file_56');
    unflattenKeylistIntoAnswers(['es', 'gecko1_8'], 'file_60');
    strongName = answers[computePropValue('locale')][computePropValue('user.agent')];
  }
   catch (e) {
    return;
  }
  var onBodyDoneTimerId;
  function onBodyDone(){
    if (!bodyDone) {
      bodyDone = true;
      if (!__gwt_stylesLoaded['GWTCStandard.css']) {
        var l = $doc_0.createElement('link');
        __gwt_stylesLoaded['GWTCStandard.css'] = l;
        l.setAttribute('rel', 'stylesheet');
        l.setAttribute('href', base + 'GWTCStandard.css');
        $doc_0.getElementsByTagName('head')[0].appendChild(l);
      }
      if (!__gwt_stylesLoaded['GWTC.css']) {
        var l = $doc_0.createElement('link');
        __gwt_stylesLoaded['GWTC.css'] = l;
        l.setAttribute('rel', 'stylesheet');
        l.setAttribute('href', base + 'GWTC.css');
        $doc_0.getElementsByTagName('head')[0].appendChild(l);
      }
      maybeStartModule();
      if ($doc_0.removeEventListener) {
        $doc_0.removeEventListener('DOMContentLoaded', onBodyDone, false);
      }
      if (onBodyDoneTimerId) {
        clearInterval(onBodyDoneTimerId);
      }
    }
  }

  if ($doc_0.addEventListener) {
    $doc_0.addEventListener('DOMContentLoaded', function(){
      onBodyDone();
    }
    , false);
  }
  var onBodyDoneTimerId = setInterval(function(){
    if (/loaded|complete/.test($doc_0.readyState)) {
      onBodyDone();
    }
  }
  , 50);
  $stats && $stats({moduleName:'jschismes.JsChismesPretty', sessionId:$sessionId, subSystem:'startup', evtGroup:'bootstrap', millis:(new Date).getTime(), type:'end'});
  $stats && $stats({moduleName:'jschismes.JsChismesPretty', sessionId:$sessionId, subSystem:'startup', evtGroup:'loadExternalRefs', millis:(new Date).getTime(), type:'begin'});
  var compiledScriptTag = '"<script src=\\"' + base + strongName + '.cache.js\\"><\/scr" + "ipt>"';
  $doc_0.write('<script><!--\n' + 'window.__gwtStatsEvent && window.__gwtStatsEvent({' + 'moduleName:"jschismes.JsChismesPretty", sessionId:$sessionId, subSystem:"startup",' + 'evtGroup: "loadExternalRefs", millis:(new Date()).getTime(),' + 'type: "end"});' + 'window.__gwtStatsEvent && window.__gwtStatsEvent({' + 'moduleName:"jschismes.JsChismesPretty", sessionId:$sessionId, subSystem:"startup",' + 'evtGroup: "moduleStartup", millis:(new Date()).getTime(),' + 'type: "moduleRequested"});' + 'document.write(' + compiledScriptTag + ');' + '\n--><\/script>');
}

jschismes_JsChismesPretty();
