module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {}, _tempexports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = __MODS__[modId].m; m._exports = m._tempexports; var desp = Object.getOwnPropertyDescriptor(m, "exports"); if (desp && desp.configurable) Object.defineProperty(m, "exports", { set: function (val) { if(typeof val === "object" && val !== m._exports) { m._exports.__proto__ = val.__proto__; Object.keys(val).forEach(function (k) { m._exports[k] = val[k]; }); } m._tempexports = val }, get: function () { return m._tempexports; } }); __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1592871987676, function(require, module, exports) {


// Mine a string for require calls and export the module names
// Extract all require calls using a proper state-machine parser.
module.exports = mine;
function mine(js) {
  js = "" + js;
  var names = [];
  var state = 0;
  var ident;
  var quote;
  var name;
  var start;

  var isIdent = /[a-z0-9_.$]/i;
  var isWhitespace = /[ \r\n\t]/;

  function $start(char) {
    if (char === "/") {
      return $slash;
    }
    if (char === "'" || char === '"') {
      quote = char;
      return $string;
    }
    if (isIdent.test(char)) {
      ident = char;
      return $ident;
    }
    return $start;
  }

  function $ident(char) {
    if (isIdent.test(char)) {
      ident += char;
      return $ident;
    }
    if (char === "(" && ident === "require") {
      ident = undefined;
      return $call;
    } else {
      if (isWhitespace.test(char)){
        if (ident !== 'yield' && ident !== 'return'){
          return $ident;
        }
      }
    }
    return $start(char);
  }

  function $call(char) {
    if (isWhitespace.test(char)) return $call;
    if (char === "'" || char === '"') {
      quote = char;
      name = "";
      start = i + 1;
      return $name;
    }
    return $start(char);
  }

  function $name(char) {
    if (char === quote) {
      return $close;
    }
    if (char === "\\") {
      return $nameEscape;
    }
    name += char;
    return $name;
  }

  function $nameEscape(char) {
    if (char === "\\") {
      name += char;
    } else {
      name += JSON.parse('"\\' + char + '"');
    }
    return $name;
  }

  function $close(char) {
    if (isWhitespace.test(char)) return $close;
    if (char === ")" || char === ',') {
      names.push({
        name: name,
        offset: start
      });
    }
    name = undefined;
    return $start(char);
  }

  function $string(char) {
    if (char === "\\") {
      return $escape;
    }
    if (char === quote) {
      return $start;
    }
    return $string;
  }

  function $escape() {
    return $string;
  }

  function $slash(char) {
    if (char === "/") return $lineComment;
    if (char === "*") return $multilineComment;
    return $start(char);
  }

  function $lineComment(char) {
    if (char === "\r" || char === "\n") return $start;
    return $lineComment;
  }

  function $multilineComment(char) {
    if (char === "*") return $multilineEnding;
    return $multilineComment;
  }

  function $multilineEnding(char) {
    if (char === "/") return $start;
    if (char === "*") return $multilineEnding;
    return $multilineComment;
  }

  state = $start;
  for (var i = 0, l = js.length; i < l; i++) {
    state = state(js[i]);
  }
  return names;
}

}, function(modId) {var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1592871987676);
})()
//# sourceMappingURL=index.js.map