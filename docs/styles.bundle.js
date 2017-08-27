webpackJsonp(["styles"],{

/***/ "../../../../../src/fonts/OpenSans-Regular.ttf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "OpenSans-Regular.629a55a7e793da068dc5.ttf";

/***/ }),

/***/ "../../../../../src/fonts/fontawesome-webfont.eot":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fontawesome-webfont.25a32416abee198dd821.eot";

/***/ }),

/***/ "../../../../../src/fonts/fontawesome-webfont.eot?v=":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fontawesome-webfont.25a32416abee198dd821.eot";

/***/ }),

/***/ "../../../../../src/fonts/fontawesome-webfont.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fontawesome-webfont.aaaa09ff4577c5fb35ad.svg";

/***/ }),

/***/ "../../../../../src/fonts/fontawesome-webfont.ttf?v=":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fontawesome-webfont.1dc35d25e61d819a9c35.ttf";

/***/ }),

/***/ "../../../../../src/fonts/fontawesome-webfont.woff?v=":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fontawesome-webfont.c8ddf1e5e5bf3682bc7b.woff";

/***/ }),

/***/ "../../../../../src/styles.styl":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../stylus-loader/index.js?{\"sourceMap\":false,\"paths\":[]}!../../../../../src/styles.styl");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--11-1!../node_modules/postcss-loader/index.js??postcss!../node_modules/stylus-loader/index.js??ref--11-3!./styles.styl", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--11-1!../node_modules/postcss-loader/index.js??postcss!../node_modules/stylus-loader/index.js??ref--11-3!./styles.styl");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../stylus-loader/index.js?{\"sourceMap\":false,\"paths\":[]}!../../../../../src/styles.styl":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  width: 100%;\n}\nbody:before,\nbody:after {\n  content: \"\";\n  display: table;\n}\nbody:after {\n  clear: both;\n}\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\nbody {\n  margin: 0;\n}\narticle,\ndetails,\nsection,\nsummary,\naside,\nmain,\nmenu,\nnav,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup {\n  display: block;\n}\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n[hidden],\ntemplate {\n  display: none;\n}\na {\n  background-color: transparent;\n}\na:active,\na:hover {\n  outline: 0;\n}\nabbr[title] {\n  border-bottom: 1px dotted;\n}\ndfn {\n  font-style: italic;\n}\nmark {\n  background: #ff0;\n  color: #000;\n}\nb,\nstrong {\n  font-weight: bold;\n}\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\nimg {\n  border: 0;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\nfigure {\n  margin: 1em 40px;\n}\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\npre {\n  overflow: auto;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  font: inherit;\n  margin: 0;\n}\nbutton {\n  overflow: visible;\n}\nbutton,\nselect {\n  text-transform: none;\n}\nbutton,\nhtml input[type='button'],\ninput[type='reset'],\ninput[type='submit'] {\n  cursor: pointer;\n  -webkit-appearance: button;\n}\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\ninput {\n  line-height: normal;\n}\ninput[type='checkbox'],\ninput[type='radio'] {\n  box-sizing: border-box;\n  padding: 0;\n}\ninput[type='number']::-webkit-inner-spin-button,\ninput[type='number']::-webkit-outer-spin-button {\n  height: auto;\n}\ninput[type='search'] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box;\n}\ninput[type='search']::-webkit-search-cancel-button,\ninput[type='search']::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\nlegend {\n  border: 0;\n  padding: 0;\n}\ntextarea {\n  overflow: auto;\n}\noptgroup {\n  font-weight: bold;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd,\nth {\n  padding: 0;\n}\ninput,\nbutton {\n  margin: 0;\n  padding: 0;\n}\ninput::-moz-focus-inner,\nbutton::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n@font-face {\n  font-family: FontAwesome;\n  font-style: normal;\n  font-weight: normal;\n  src: url(" + __webpack_require__("../../../../../src/fonts/fontawesome-webfont.eot?v=") + "#4.0.3);\n  src: url(" + __webpack_require__("../../../../../src/fonts/fontawesome-webfont.eot") + "?#iefix&v=#4.0.3) format(\"embedded-opentype\"), url(" + __webpack_require__("../../../../../src/fonts/fontawesome-webfont.woff?v=") + "#4.0.3) format(\"woff\"), url(" + __webpack_require__("../../../../../src/fonts/fontawesome-webfont.ttf?v=") + "#4.0.3) format(\"truetype\"), url(" + __webpack_require__("../../../../../src/fonts/fontawesome-webfont.svg") + "#fontawesomeregular?v=#4.0.3) format(\"svg\");\n}\n@font-face {\n  font-family: \"Open Sans Light\";\n  font-style: normal;\n  font-weight: normal;\n  src: url(" + __webpack_require__("../../../../../src/fonts/OpenSans-Regular.ttf") + ") format(\"truetype\");\n}\nhtml,\nbody,\n#container {\n  height: 100%;\n}\nbody {\n  background: #252423;\n  font: 16px \"Times New Roman\", \"Open Sans Light\", \"Georgia\", \"Helvetica Neue\", \"Helvetica\", \"Microsoft YaHei\", \"WenQuanYi Micro Hei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  -webkit-text-size-adjust: 100%;\n}\n.outer {\n  max-width: 1220px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.outer:before,\n.outer:after {\n  content: \"\";\n  display: table;\n}\n.outer:after {\n  clear: both;\n}\n.inner {\n  display: inline;\n  float: left;\n  width: 98.33333333333333%;\n  margin: 0 0.833333333333333%;\n}\n.left,\n.alignleft {\n  float: left;\n}\n.right,\n.alignright {\n  float: right;\n}\n.clear {\n  clear: both;\n}\n#container {\n  position: relative;\n}\n.mobile-nav-on {\n  overflow: hidden;\n}\n#wrap {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transition: 0.2s ease-out;\n  z-index: 1;\n  background: #252423;\n}\n.mobile-nav-on #wrap {\n  left: 280px;\n}\n.article-date,\n.article-category-link,\n.archive-year {\n  text-decoration: none;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  color: #a4a4a4;\n  margin-bottom: 1em;\n  margin-left: 5px;\n  line-height: 1em;\n  font-weight: bold;\n}\n.article-inner,\n.article-entry .button,\n.article-more-link a,\n#comments,\n.archive-article-inner,\n#page-nav,\n#toc,\n#toc.toc-aside,\n.error-wrap,\n.error-link {\n  background: none repeat scroll 0 0 #333534;\n  box-shadow: 1px 1px 4px rgba(0,0,0,0.9);\n  border: 1px solid #696969;\n  border-radius: 3px;\n}\n.article-entry h1 {\n  font-size: 2em;\n}\n.article-entry h2 {\n  font-size: 1.5em;\n}\n.article-entry h3 {\n  font-size: 1.3em;\n}\n.article-entry h4 {\n  font-size: 1.2em;\n}\n.article-entry h5 {\n  font-size: 1em;\n}\n.article-entry h6 {\n  font-size: 1em;\n  color: #a4a4a4;\n}\n.article-entry hr {\n  border: 1px dashed #696969;\n}\n.article-entry strong {\n  font-weight: bold;\n}\n.article-entry em,\n.article-entry cite {\n  font-style: italic;\n}\n.article-entry sup,\n.article-entry sub {\n  font-size: 0.75em;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n.article-entry sup {\n  top: -0.5em;\n}\n.article-entry sub {\n  bottom: -0.2em;\n}\n.article-entry small {\n  font-size: 0.85em;\n}\n.article-entry acronym,\n.article-entry abbr {\n  border-bottom: 1px dotted;\n}\n.article-entry ul,\n.article-entry ol,\n.article-entry dl {\n  margin: 0 20px;\n  line-height: 1.6em;\n}\n.article-entry ul ul,\n.article-entry ol ul,\n.article-entry ul ol,\n.article-entry ol ol {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.article-entry ul {\n  list-style: disc;\n}\n.article-entry ol {\n  list-style: decimal;\n}\n.article-entry dt {\n  font-weight: bold;\n}\n.article {\n  margin: 50px 0;\n}\n.article-inner {\n  overflow: hidden;\n  background: #1f1f1f;\n}\n.article-index:before,\n.article-meta:before,\n.article-index:after,\n.article-meta:after {\n  content: \"\";\n  display: table;\n}\n.article-index:after,\n.article-meta:after {\n  clear: both;\n}\n.article-date {\n  float: left;\n  font-family: \"Georgia\", \"Microsoft YaHei\", \"Times New Roman\", serif;\n}\n.article-category {\n  float: left;\n  line-height: 1em;\n  color: #ccc;\n  margin-left: 8px;\n}\n.article-category:before {\n  content: \"\\2022\";\n}\n.article-category-link {\n  margin: 0 12px 1em;\n}\n.article-header {\n  padding: 20px 20px 0;\n}\n.article-title {\n  text-decoration: none;\n  font-size: 2em;\n  font-weight: bold;\n  color: #c4c4c4;\n  line-height: 1.1em;\n  transition: color 0.2s;\n}\n.article-title a,\n.article-title:hover {\n  color: #4183c4;\n}\n.article-entry {\n  color: #f0f0f0;\n  padding: 0 20px;\n}\n.article-entry:before,\n.article-entry:after {\n  content: \"\";\n  display: table;\n}\n.article-entry:after {\n  clear: both;\n}\n.article-entry strong {\n  color: #f92676;\n}\n.article-entry p,\n.article-entry table {\n  line-height: 1.6em;\n  margin: 1.6em 0;\n}\n.article-entry h1,\n.article-entry h2,\n.article-entry h3,\n.article-entry h4,\n.article-entry h5,\n.article-entry h6 {\n  font-weight: bold;\n}\n.article-entry h1,\n.article-entry h2,\n.article-entry h3,\n.article-entry h4,\n.article-entry h5,\n.article-entry h6 {\n  line-height: 1.1em;\n  margin: 1.1em 0;\n}\n.article-entry h1,\n.article-entry h2 {\n  color: #9c9;\n}\n.article-entry h3,\n.article-entry h4 {\n  color: #6cc;\n}\n.article-entry h5,\n.article-entry h6 {\n  color: #69c;\n}\n.article-entry a {\n  color: #4183c4;\n  text-decoration: none;\n}\n.article-entry a:hover {\n  text-decoration: underline;\n}\n.article-entry ul,\n.article-entry ol,\n.article-entry dl {\n  margin-top: 1.6em;\n  margin-bottom: 1.6em;\n}\n.article-entry li ul,\n.article-entry li ol {\n  margin-left: 30px;\n}\n.article-entry li ul li:before,\n.article-entry li ol li:before {\n  content: \"\";\n  background: #dedede;\n}\n.article-entry li.task-list {\n  list-style: none;\n}\n.article-entry li.task-list::before {\n  display: none;\n}\n.article-entry li:hover {\n  background: rgba(158,188,226,0.21);\n}\n.article-entry img,\n.article-entry video {\n  max-width: 100%;\n  height: auto;\n  display: block;\n  margin: auto;\n  background-color: transparent;\n}\n.article-entry .button {\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1em;\n  padding: 6px 10px;\n  border-radius: 10px;\n  background: #502829;\n  color: #a4a4a4;\n  font-family: \"Times New Roman\", \"Open Sans Light\", \"Georgia\", \"Helvetica Neue\", \"Helvetica\", \"Microsoft YaHei\", \"WenQuanYi Micro Hei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  box-shadow: 1px 1px 4px rgba(0,0,0,0.9);\n  border: 1px solid #696969;\n}\n.article-entry .button:hover {\n  background: #4183c4;\n  color: #fff;\n  text-decoration: none;\n  text-shadow: 0 1px #31699f;\n}\n.article-entry iframe {\n  border: none;\n}\n.article-entry table {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n.article-entry th {\n  font-weight: bold;\n  border-bottom: 3px solid #696969;\n  padding-bottom: 0.5em;\n}\n.article-entry td {\n  border-bottom: 1px solid #696969;\n  padding: 10px 0;\n}\n.article-entry table {\n  color: #f0f0f0 !important;\n  margin-bottom: 16px;\n  border-radius: 3px;\n  border-collapse: initial;\n}\n.article-entry table thead th {\n  font-weight: bold;\n  font-size: 22px;\n  line-height: 2em;\n  text-align: center;\n  background: #181818 !important;\n}\n.article-entry table th,\n.article-entry table td {\n  padding: 6px 13px;\n  box-shadow: 1px 1px 1px rgba(0,0,0,0.9);\n  border: 1px solid #696969;\n  border-radius: 3px;\n}\n.article-entry blockquote {\n  font-family: \"Open Sans Light\", \"Georgia\", \"Microsoft YaHei\", \"Times New Roman\", serif;\n  text-align: left;\n  border-left: 5px solid rgba(152,232,99,0.8);\n  margin: 0.65em 0 0.65em 4%;\n  padding-left: 1%;\n  padding-right: 1%;\n}\n.article-entry blockquote footer {\n  font-size: 16px;\n  margin: 1.6em 0;\n  font-family: \"Times New Roman\", \"Open Sans Light\", \"Georgia\", \"Helvetica Neue\", \"Helvetica\", \"Microsoft YaHei\", \"WenQuanYi Micro Hei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n.article-entry blockquote footer cite:before {\n  content: \"\\2014\";\n  padding: 0 0.5em;\n}\n.article-entry .pullquote {\n  text-align: left;\n  width: 45%;\n  margin: 0;\n}\n.article-entry .pullquote.left {\n  margin-left: 0.5em;\n  margin-right: 1em;\n}\n.article-entry .pullquote.right {\n  margin-right: 0.5em;\n  margin-left: 1em;\n}\n.article-entry .caption {\n  color: #a4a4a4;\n  display: block;\n  font-size: 0.9em;\n  margin-top: 0.5em;\n  position: relative;\n  text-align: center;\n}\n.video-container {\n  position: relative;\n  padding-top: 56.25%;\n  height: 0;\n  overflow: hidden;\n}\n.video-container iframe,\n.video-container object,\n.video-container embed {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  margin-top: 0;\n}\n.article-more-link {\n  background-image: -webkit--webkit-linear-gradient(top, transparent, #000);\n  background-image: -webkit--moz-linear-gradient(top, transparent, #000);\n  background-image: -webkit--ms-linear-gradient(top, transparent, #000);\n  background-image: -moz--webkit-linear-gradient(top, transparent, #000);\n  background-image: -moz--moz-linear-gradient(top, transparent, #000);\n  background-image: -moz--ms-linear-gradient(top, transparent, #000);\n  background-image: -ms--webkit-linear-gradient(top, transparent, #000);\n  background-image: -ms--moz-linear-gradient(top, transparent, #000);\n  background-image: -ms--ms-linear-gradient(top, transparent, #000);\n  background-image: -o--webkit-linear-gradient(top, transparent, #000);\n  background-image: -o--moz-linear-gradient(top, transparent, #000);\n  background-image: -o--ms-linear-gradient(top, transparent, #000);\n  background-image: -o-linear-gradient(to bottom, transparent, #000);\n  position: relative;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100px;\n  overflow: hidden;\n  margin: 0px -20px;\n  padding: 15px 20px;\n  text-align: center;\n}\n.article-more-link a {\n  position: relative;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1em;\n  padding: 6px 10px;\n  border-radius: 10px;\n  background: #502829;\n  color: #a4a4a4;\n  margin: 0 auto;\n  top: 75px;\n}\n.article-more-link a:hover {\n  background: #4183c4;\n  color: #fff;\n  text-decoration: none;\n  text-shadow: 0 1px #31699f;\n}\n.article-footer {\n  font-size: 0.85em;\n  line-height: 1.6em;\n  border-top: 1px solid #696969;\n  padding-top: 1.6em;\n  margin: 0 20px 20px;\n}\n.article-footer:before,\n.article-footer:after {\n  content: \"\";\n  display: table;\n}\n.article-footer:after {\n  clear: both;\n}\n.article-footer a {\n  color: #fff;\n  text-decoration: none;\n}\n.article-footer a:hover {\n  color: #c4c4c4;\n}\n.article-tag-list-item {\n  float: left;\n  margin-right: 10px;\n}\n.article-comment-link {\n  float: right;\n}\n.article-comment-link:before {\n  content: \"\\F075\";\n  font-family: FontAwesome;\n  padding-right: 8px;\n}\n.article-share-link {\n  cursor: pointer;\n  float: right;\n  margin-left: 20px;\n}\n.article-share-link:before {\n  content: \"\\F064\";\n  font-family: FontAwesome;\n  padding-right: 6px;\n}\n#article-nav {\n  position: relative;\n}\n#article-nav:before,\n#article-nav:after {\n  content: \"\";\n  display: table;\n}\n#article-nav:after {\n  clear: both;\n}\n@media screen and (min-width: 768px) {\n  #article-nav {\n    margin: 50px 0;\n  }\n  #article-nav:before {\n    width: 8px;\n    height: 8px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-top: -4px;\n    margin-left: -4px;\n    content: \"\";\n    border-radius: 50%;\n    background: #696969;\n    box-shadow: 0 1px 2px #fff;\n  }\n}\n.article-nav-link-wrap {\n  text-decoration: none;\n  color: #a4a4a4;\n  box-sizing: border-box;\n  margin-top: 50px;\n  text-align: center;\n  display: block;\n}\n.article-nav-link-wrap:hover {\n  color: #c4c4c4;\n}\n@media screen and (min-width: 768px) {\n  .article-nav-link-wrap {\n    width: 50%;\n    margin-top: 0;\n  }\n}\n@media screen and (min-width: 768px) {\n  #article-nav-newer {\n    float: left;\n    text-align: right;\n    padding-right: 20px;\n  }\n}\n@media screen and (min-width: 768px) {\n  #article-nav-older {\n    float: right;\n    text-align: left;\n    padding-left: 20px;\n  }\n}\n.article-nav-caption {\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  color: #696969;\n  line-height: 1em;\n  font-weight: bold;\n}\n#article-nav-newer .article-nav-caption {\n  margin-right: -2px;\n}\n.article-nav-title {\n  font-size: 0.85em;\n  line-height: 1.6em;\n  margin-top: 0.5em;\n}\n.article-share-box {\n  position: absolute;\n  display: none;\n  background: #fff;\n  box-shadow: 1px 2px 10px rgba(0,0,0,0.2);\n  border-radius: 3px;\n  margin-left: -145px;\n  overflow: hidden;\n  z-index: 1;\n}\n.article-share-box.on {\n  display: block;\n}\n.article-share-input {\n  width: 100%;\n  background: none;\n  box-sizing: border-box;\n  font: 14px \"Times New Roman\", \"Open Sans Light\", \"Georgia\", \"Helvetica Neue\", \"Helvetica\", \"Microsoft YaHei\", \"WenQuanYi Micro Hei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  padding: 0 15px;\n  color: #c4c4c4;\n  outline: none;\n  border: 1px solid #696969;\n  border-radius: 3px 3px 0 0;\n  height: 36px;\n  line-height: 36px;\n}\n.article-share-links {\n  background: #252423;\n}\n.article-share-links:before,\n.article-share-links:after {\n  content: \"\";\n  display: table;\n}\n.article-share-links:after {\n  clear: both;\n}\n.article-share-twitter,\n.article-share-facebook,\n.article-share-pinterest,\n.article-share-google {\n  width: 50px;\n  height: 36px;\n  display: block;\n  float: left;\n  position: relative;\n  color: #999;\n}\n.article-share-twitter:before,\n.article-share-facebook:before,\n.article-share-pinterest:before,\n.article-share-google:before {\n  font-size: 20px;\n  font-family: FontAwesome;\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -10px;\n  margin-left: -10px;\n  text-align: center;\n}\n.article-share-twitter:hover,\n.article-share-facebook:hover,\n.article-share-pinterest:hover,\n.article-share-google:hover {\n  color: #fff;\n}\n.article-share-twitter:before {\n  content: \"\\F099\";\n}\n.article-share-twitter:hover {\n  background: #00aced;\n  text-shadow: 0 1px #008abe;\n}\n.article-share-facebook:before {\n  content: \"\\F09A\";\n}\n.article-share-facebook:hover {\n  background: #3b5998;\n  text-shadow: 0 1px #2f477a;\n}\n.article-share-pinterest:before {\n  content: \"\\F0D2\";\n}\n.article-share-pinterest:hover {\n  background: #cb2027;\n  text-shadow: 0 1px #a21a1f;\n}\n.article-share-google:before {\n  content: \"\\F0D5\";\n}\n.article-share-google:hover {\n  background: #dd4b39;\n  text-shadow: 0 1px #be3221;\n}\n.article-gallery {\n  background: #000;\n  position: relative;\n}\n.article-gallery-photos {\n  position: relative;\n  overflow: hidden;\n}\n.article-gallery-img {\n  display: none;\n  max-width: 100%;\n}\n.article-gallery-img:first-child {\n  display: block;\n}\n.article-gallery-img.loaded {\n  position: absolute;\n  display: block;\n}\n.article-gallery-img img {\n  display: block;\n  max-width: 100%;\n  margin: 0 auto;\n}\n.toggle-content {\n  max-height: 250px;\n  transition: 0.5s;\n}\n#comments {\n  color: #f0f0f0;\n  padding: 20px;\n  margin: 50px 0;\n}\n#comments a {\n  color: #4183c4;\n}\n.archives-wrap {\n  margin: 50px 0;\n}\n.archives:before,\n.archives:after {\n  content: \"\";\n  display: table;\n}\n.archives:after {\n  clear: both;\n}\n.archive-year-wrap {\n  margin-bottom: 1em;\n}\n.archives {\n  -webkit-column-gap: 10px;\n  column-gap: 10px;\n}\n@media screen and (min-width: 480px) and (max-width: 767px) {\n  .archives {\n    -webkit-column-count: 2;\n    column-count: 2;\n  }\n}\n@media screen and (min-width: 768px) {\n  .archives {\n    -webkit-column-count: 3;\n    column-count: 3;\n  }\n}\n.archive-article {\n  -webkit-column-break-inside: avoid;\n  page-break-inside: avoid;\n  overflow: hidden;\n  break-inside: avoid-column;\n}\n.archive-article-inner {\n  padding: 10px;\n  margin-bottom: 15px;\n  background-color: #1f1f1f;\n}\n.archive-article-title {\n  text-decoration: none;\n  font-weight: bold;\n  color: #f0f0f0;\n  transition: color 0.2s;\n  line-height: 1.6em;\n}\n.archive-article-title:hover {\n  color: #4183c4;\n}\n.archive-article-footer {\n  margin-top: 1em;\n}\n.archive-article-date {\n  color: #a4a4a4;\n  text-decoration: none;\n  font-size: 0.85em;\n  line-height: 1em;\n  margin-bottom: 0.5em;\n  display: block;\n}\n#page-nav {\n  margin: 50px auto;\n  background: #1f1f1f;\n  text-align: center;\n  color: #a4a4a4;\n  overflow: hidden;\n}\n#page-nav:before,\n#page-nav:after {\n  content: \"\";\n  display: table;\n}\n#page-nav:after {\n  clear: both;\n}\n#page-nav a,\n#page-nav span {\n  padding: 10px 20px;\n}\n#page-nav a {\n  color: #a4a4a4;\n  text-decoration: none;\n}\n#page-nav a:hover {\n  background: #2ca6cb;\n  color: #fff;\n}\n#page-nav .prev {\n  float: left;\n}\n#page-nav .next {\n  float: right;\n}\n#page-nav .page-number {\n  display: inline-block;\n}\n@media screen and (max-width: 479px) {\n  #page-nav .page-number {\n    display: none;\n  }\n}\n#page-nav .current {\n  color: #c4c4c4;\n  font-weight: bold;\n}\n#page-nav .space {\n  color: #696969;\n}\n.archive ul {\n  list-style: none;\n  margin-left: 20px;\n  margin-top: -26px;\n  border-left: 4px solid #cacaca;\n}\n@media mq-mobile, mq-tablet {\n  .archive ul {\n    margin-left: 6px;\n  }\n}\n.archive ul li {\n  padding-left: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.archive ul li:before {\n  content: \"\";\n  border-color: transparent #cacaca;\n  border-style: solid;\n  border-width: 0.35em 0 0.35em 0.45em;\n  display: block;\n  height: 0;\n  width: 0;\n  left: -1em;\n  top: 1em;\n  position: relative;\n}\n.archive ul li time {\n  margin-right: 8px;\n  color: #c4c4c4;\n  font-size: 20px;\n}\n.archive ul li a {\n  text-decoration: none;\n  color: #4183c4;\n  font-size: 20px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n@media mq-tablet, mq-mobile {\n  .archive ul li a {\n    display: block;\n    width: 100%;\n    text-overflow: ellipsis;\n  }\n}\n.archive .archive-item {\n  margin-bottom: 20px;\n  padding-bottom: 10px;\n  border-bottom: 1px dashed #ddd;\n}\n.archive .archive-year {\n  font-size: 30px;\n  margin-bottom: 30px;\n}\n.archive .archive-article-title {\n  width: 100%;\n}\n.archive .archive-tag {\n  text-decoration: none;\n  font-size: 0.85em;\n  line-height: 0.8em;\n  float: right;\n  text-overflow: ellipsis;\n}\n@media mq-tablet, mq-mobile {\n  .archive .archive-tag {\n    width: 100%;\n  }\n  .archive .archive-tag .article-tag-list-item {\n    width: 100%;\n  }\n  .archive .archive-tag .article-tag-list {\n    width: 100%;\n  }\n}\n.archive .archive-tag ul,\n.archive .archive-tag li {\n  margin: 0 3px;\n}\n@media screen and (min-width: 480px) and (max-width: 767px) {\n  .archive .archive-tag ul,\n  .archive .archive-tag li {\n    display: block;\n  }\n}\n@media screen and (min-width: 768px) {\n  .archive .archive-tag ul,\n  .archive .archive-tag li {\n    display: block;\n  }\n}\n.archive .archive-tag a {\n  text-decoration: none;\n  color: #a4a4a4;\n  white-space: nowrap;\n}\n@media mq-tablet, mq-mobile {\n  .archive .archive-tag a {\n    display: block;\n    width: 100%;\n    text-overflow: ellipsis;\n  }\n}\n#footer {\n  background: #262a30;\n  padding: 20px 0;\n  border-top: 1px solid #696969;\n  color: #a4a4a4;\n}\n#footer a {\n  color: #4183c4;\n  text-decoration: none;\n}\n#footer a:hover {\n  color: #2ca6cb;\n}\n#footer-info {\n  line-height: 1.6em;\n  font-size: 0.85em;\n}\n.social-group {\n  font-size: 2em;\n  margin: 5px 0;\n}\n.social-group a {\n  padding: 0 4px;\n}\n[class^=\"icon-\"],\n[class*=\" icon-\"] {\n  font-family: FontAwesome;\n  font-weight: normal;\n  font-style: normal;\n  text-decoration: inherit;\n  -webkit-font-smoothing: antialiased;\n  margin-right: 0.3em;\n}\n[class^=\"icon-\"],\n[class*=\" icon-\"] {\n  display: inline;\n  width: auto;\n  height: auto;\n  line-height: normal;\n  vertical-align: baseline;\n  background-image: none;\n  background-position: 0 0;\n  background-repeat: repeat;\n  margin-top: 0;\n  color: #f0f0f0;\n}\n[class^=\"icon-\"]:hover,\n[class*=\" icon-\"]:hover {\n  color: #2ca6cb;\n}\n.icon-weibo:before {\n  content: \"\\F18A\";\n}\n.icon-github:before {\n  content: \"\\F09B\";\n}\n.icon-facebook-sign:before {\n  content: \"\\F082\";\n}\n.icon-google-plus-sign:before {\n  content: \"\\F0D4\";\n}\n.icon-download:before {\n  content: \"\\F019\";\n}\n.icon-reply:before {\n  content: \"\\F122\";\n}\n.icon-github-alt:before {\n  content: \"\\F113\";\n}\n.icon-googles:before {\n  content: \"\\F1A0\";\n}\n.icon-star:before {\n  content: \"\\F005\";\n}\n.icon-home:before {\n  content: \"\\F015\";\n}\n.icon-archive:before {\n  content: \"\\F187\";\n}\n.icon-user:before {\n  content: \"\\F007\";\n}\n.icon-tags:before {\n  content: \"\\F02C\";\n}\n.icon-camera:before {\n  content: \"\\F030\";\n}\n.icon-trophy:before {\n  content: \"\\F091\";\n}\n.icon-file-o:before {\n  content: \"\\F0F6\";\n  color: #2ca6cb;\n}\n.icon-child:before {\n  content: \"\\F1AE\";\n  color: #2ca6cb;\n}\n.icon-uhunt {\n  font-family: impact;\n  background-color: #f0f0f0;\n  color: #262a30;\n  font-size: 18px;\n  border-radius: 5px;\n  position: relative;\n  top: -5px;\n  padding: 3px 2px;\n}\n.icon-uhunt:hover {\n  background-color: #2ca6cb;\n  color: #262a30;\n}\n.icon-backward:before {\n  content: \"\\F04A\";\n}\n.icon-forward:before {\n  content: \"\\F04E\";\n}\n.icon-repeat:before {\n  content: \"\\F01E\";\n}\n.icon-refresh:before {\n  content: \"\\F021\";\n}\n.icon-random:before {\n  content: \"\\F074\";\n}\n.icon-play:before {\n  content: \"\\F04B\";\n}\n.icon-pause:before {\n  content: \"\\F04C\";\n}\n.icon-pause:before {\n  content: \"\\F04C\";\n}\n.icon-volume-up:before {\n  content: \"\\F028\";\n}\n.icon-volume-off:before {\n  content: \"\\F026\";\n}\n.icon-menu:before {\n  content: \"\\F03A\";\n}\n.icon-gotop:before {\n  content: \"\\F062\";\n}\n.icon-godown:before {\n  content: \"\\F063\";\n}\n.icon-music:before {\n  content: \"\\F001\";\n}\n.icon-mail:before {\n  content: \"\\F003\";\n}\n.icon-power:before {\n  content: \"\\F011\";\n}\n.icon-learn:before {\n  content: \"\\F044\";\n}\n.article-entry pre,\n.article-entry .highlight {\n  background: #2d2d2d;\n  margin: 20px -24px 0px -24px;\n  padding: 15px 20px;\n  border-style: solid;\n  border-color: #696969;\n  border-radius: 4px;\n  border-width: 1px 1px;\n  overflow: auto;\n  color: #ccc;\n  line-height: 25.6px;\n}\n.article-entry .highlight .gutter pre,\n.article-entry .gist .gist-file .gist-data .line-numbers {\n  color: #666;\n  font-size: 0.85em;\n}\n.article-entry pre,\n.article-entry code {\n  font-family: \"Source Code Pro\", Consolas, Monaco, Menlo, Consolas, monospace, \"Microsoft YaHei\";\n}\n.article-entry code {\n  font-size: 90%;\n  color: #c0c0c0;\n  background-color: #2d2d2d;\n  border: 1px solid #696969;\n  border-radius: 3px;\n  font-family: Monaco, Consolas;\n  margin: 0 2px;\n  padding: 0.2em 0.3em;\n  font-weight: 400;\n}\n.article-entry pre code {\n  background: none;\n  text-shadow: none;\n  padding: 0;\n  border: none;\n}\n.article-entry .highlight pre {\n  border: none;\n  margin: 0;\n  padding: 0;\n}\n.article-entry .highlight table {\n  margin: 0;\n  width: auto;\n}\n.article-entry .highlight td {\n  border: none;\n  padding: 0;\n  box-shadow: none;\n}\n.article-entry .highlight figcaption {\n  font-size: 0.85em;\n  color: #999;\n  line-height: 1em;\n  margin-bottom: 1em;\n}\n.article-entry .highlight figcaption:before,\n.article-entry .highlight figcaption:after {\n  content: \"\";\n  display: table;\n}\n.article-entry .highlight figcaption:after {\n  clear: both;\n}\n.article-entry .highlight figcaption a {\n  float: right;\n}\n.article-entry .highlight .gutter pre {\n  text-align: right;\n  padding-right: 20px;\n}\n.article-entry .gist {\n  margin: 0 -20px;\n  border-style: solid;\n  border-color: #696969;\n  border-width: 1px 0;\n  background: #2d2d2d;\n  padding: 15px 20px 15px 0;\n}\n.article-entry .gist .gist-file {\n  border: none;\n  font-family: \"Source Code Pro\", Consolas, Monaco, Menlo, Consolas, monospace, \"Microsoft YaHei\";\n  margin: 0;\n}\n.article-entry .gist .gist-file .gist-data {\n  background: none;\n  border: none;\n}\n.article-entry .gist .gist-file .gist-data .line-numbers {\n  background: none;\n  border: none;\n  padding: 0 20px 0 0;\n}\n.article-entry .gist .gist-file .gist-data .line-data {\n  padding: 0 !important;\n}\n.article-entry .gist .gist-file .highlight {\n  margin: 0;\n  padding: 0;\n  border: none;\n}\n.article-entry .gist .gist-file .gist-meta {\n  background: #2d2d2d;\n  color: #999;\n  font: 0.85em \"Times New Roman\", \"Open Sans Light\", \"Georgia\", \"Helvetica Neue\", \"Helvetica\", \"Microsoft YaHei\", \"WenQuanYi Micro Hei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  text-shadow: 0 0;\n  padding: 0;\n  margin-top: 1em;\n  margin-left: 20px;\n}\n.article-entry .gist .gist-file .gist-meta a {\n  color: #4183c4;\n  font-weight: normal;\n}\n.article-entry .gist .gist-file .gist-meta a:hover {\n  text-decoration: underline;\n}\npre .comment,\npre .title {\n  color: #999;\n}\npre .variable,\npre .attribute,\npre .tag,\npre .regexp,\npre .ruby .constant,\npre .xml .tag .title,\npre .xml .pi,\npre .xml .doctype,\npre .html .doctype,\npre .css .id,\npre .css .class,\npre .css .pseudo {\n  color: #f2777a;\n}\npre .number,\npre .preprocessor,\npre .built_in,\npre .literal,\npre .params,\npre .constant {\n  color: #f99157;\n}\npre .class,\npre .ruby .class .title,\npre .css .rules .attribute {\n  color: #9c9;\n}\npre .string,\npre .value,\npre .inheritance,\npre .header,\npre .ruby .symbol,\npre .xml .cdata {\n  color: #9c9;\n}\npre .css .hexcolor {\n  color: #6cc;\n}\npre .function,\npre .python .decorator,\npre .python .title,\npre .ruby .function .title,\npre .ruby .title .keyword,\npre .perl .sub,\npre .javascript .title,\npre .coffeescript .title {\n  color: #69c;\n}\npre .keyword,\npre .javascript .function {\n  color: #c9c;\n}\n@media screen and (max-width: 479px) {\n  #mobile-nav {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 280px;\n    height: 100%;\n    background: #191919;\n    border-right: 1px solid #fff;\n  }\n}\n@media screen and (max-width: 479px) {\n  .mobile-nav-link {\n    display: block;\n    color: #a4a4a4;\n    text-decoration: none;\n    padding: 15px 20px;\n    font-weight: bold;\n  }\n  .mobile-nav-link:hover {\n    color: #fff;\n  }\n}\n#toc.toc-article {\n  background: #252423;\n  margin: 1.6em 0 1.6em 2em;\n  line-height: 1.5em;\n  font-size: 0.9em;\n  border-radius: 4px;\n  min-height: 20px;\n  margin-bottom: 15px;\n  box-shadow: 0 1px 1px rgba(0,0,0,0.05) inset;\n  margin-right: -24px;\n  max-width: 30%;\n}\n#toc.toc-article h2,\n#toc.toc-article ol,\n#toc.toc-article li {\n  padding: 0 0.4em;\n  margin: 0;\n}\n#toc.toc-article h2,\n#toc.toc-article li {\n  cursor: pointer;\n}\n@media screen and (max-width: 479px) {\n  #toc.toc-article {\n    margin: 1.6em 0;\n    width: 100%;\n    max-width: 100%;\n  }\n}\n@media screen and (min-width: 480px) and (max-width: 767px) {\n  #toc.toc-article {\n    margin: 1.6em 0;\n    width: 30%;\n    max-width: 30%;\n  }\n}\n#toc {\n  line-height: 1.3em;\n  font-size: 0.8em;\n  padding: 15px;\n  float: right;\n}\n#toc .toc li {\n  list-style-type: none;\n}\n#toc .toc a {\n  color: #4183c4;\n  text-decoration: none;\n  font-family: \"Georgia\", \"Microsoft YaHei\", \"Times New Roman\", serif;\n  font-size: 14.4px;\n}\n#toc .toc a:hover {\n  text-decoration: underline;\n}\n#toc .toc-child {\n  padding-left: 1.5em;\n}\n#toc.toc-aside {\n  width: 13%;\n  position: fixed;\n  right: 2%;\n  top: 360px;\n  line-height: 1.5em;\n  max-height: 68%;\n  overflow: auto;\n  font-size: 1em;\n  color: color-heading;\n  opacity: 0.6;\n  transition: opacity 1s ease-out;\n}\n@media screen and (max-width: 479px) {\n  #toc.toc-aside {\n    width: 60%;\n    height: 40%;\n    right: 58px;\n    padding: 0 20px;\n    overflow: auto;\n  }\n}\n@media screen and (min-width: 480px) and (max-width: 767px) {\n  #toc.toc-aside {\n    width: 60%;\n    height: 40%;\n    right: 58px;\n    padding: 0 20px;\n    overflow: auto;\n  }\n}\n#toc.toc-aside h2 {\n  padding: 0.3em 0;\n  color: #f0f0f0;\n}\n#toc.toc-aside:hover {\n  transition: opacity 0.3s ease-out;\n  opacity: 1;\n}\n#toc.toc-aside a {\n  transition: color 1s ease-out;\n  text-decoration: none;\n  color: #4183c4;\n}\n#toc.toc-aside a:hover {\n  color: #1f1f1f;\n  transition: color 0.3s ease-out;\n}\n/* css3 animate */\n.animated {\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation-duration: 1s;\n  animation-duration: 1s;\n}\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.fadeIn {\n  -webkit-animation-name: fadeIn;\n  animation-name: fadeIn;\n}\n.fadeOut {\n  -webkit-animation-name: fadeOut;\n  animation-name: fadeOut;\n}\n.moveMain {\n  margin-left: 10% !important;\n}\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n    transform: translateY(-20px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n@keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n    transform: translateY(-20px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n    transform: translateY(0);\n  }\n}\n#ukagaka_controlpanel ul li,\n.ukagaka_box,\n.ukagaka_toc,\n.ukagaka_msg,\n.widget,\n#playblock {\n  background: none repeat scroll 0 0 #333534;\n  border: 1px solid #696969;\n  border-radius: 3px;\n  box-shadow: 1px 1px 4px rgba(0,0,0,0.9);\n  webkit-border-radius: 3px;\n  webkit-box-shadow: 1px 1px 4px rgba(0,0,0,0.9);\n}\n#ukagaka_controlpanel {\n  bottom: 10px;\n  float: right;\n  position: fixed;\n  right: 0;\n}\n#ukagaka_controlpanel ul {\n  margin: 7px 0;\n}\n#ukagaka_controlpanel ul li {\n  background: none repeat scroll 0 0 rgba(155,155,155,0.5);\n  color: #fff;\n  cursor: pointer;\n  display: block;\n  font-size: 18px;\n  height: 18px;\n  margin: 2px 5px;\n  padding: 8px 6px;\n  text-align: center;\n  text-decoration: none;\n  width: 20px;\n  line-height: 19.2px;\n}\n.ukagaka_block {\n  max-width: 200px;\n}\n#ukagaka_panel {\n  bottom: 250px;\n  font-family: \"Open Sans Light\", \"Georgia\", \"Microsoft YaHei\", \"Times New Roman\", serif;\n  position: fixed;\n  right: 5px;\n  width: 210px;\n  z-index: 9999;\n  text-align: left;\n}\n#ukagaka_panel span {\n  cursor: pointer;\n}\n.ukagaka_box,\n.ukagaka_toc,\n.ukagaka_msg {\n  background: #1f1f1f;\n  color: #f0f0f0;\n  font-family: \"Open Sans Light\", \"Georgia\", \"Microsoft YaHei\", \"Times New Roman\", serif;\n  font-size: 100%;\n  line-height: 1.25em;\n  max-width: 200px;\n  padding: 10px;\n}\n.ukagaka_box a,\n.ukagaka_toc a,\n.ukagaka_msg a {\n  color: #f0f0f0;\n  text-decoration: none;\n}\n#ukagaka_menubox,\n#ukagaka_renewlist,\n#ukagaka_sheetfield,\n#ukagaka_stringinput {\n  margin: 10px -10px -10px -10px;\n}\n.ukagaka_msg span#ukagaka_menu_btn_addstring,\n.ukagaka_msg span#ukagaka_menu_btn_renewlist,\n.ukagaka_msg span#ukagaka_menu_btn_exit,\n.ukagaka_msg span#ukagaka_btn_menu,\n.ukagaka_msg span#ukagaka_addmenu_add {\n  display: inline;\n  margin: 0.1em;\n  font-weight: bold;\n}\n.ukagaka_msg span#ukagaka_menu_btn_addstring:hover,\n.ukagaka_msg span#ukagaka_menu_btn_renewlist:hover,\n.ukagaka_msg span#ukagaka_menu_btn_exit:hover,\n.ukagaka_msg span#ukagaka_btn_menu:hover,\n.ukagaka_msg span#ukagaka_addmenu_add:hover {\n  color: #2ca6cb;\n}\n.ukagaka_msg span#ukagaka_menu_btn_addstring::before,\n.ukagaka_msg span#ukagaka_menu_btn_renewlist::before,\n.ukagaka_msg span#ukagaka_menu_btn_exit::before,\n.ukagaka_msg span#ukagaka_btn_menu::before,\n.ukagaka_msg span#ukagaka_addmenu_add::before {\n  padding-right: 0.5em;\n}\n.ukagaka_msg a {\n  color: #4183c4;\n  text-decoration: none;\n}\n.ukagaka_msg a:hover {\n  text-decoration: underline;\n}\n.ukagaka_img {\n  bottom: -20px;\n  max-height: 270px;\n  pointer-events: none;\n  position: fixed;\n  right: 0;\n}\n.ukagaka_log {\n  cursor: pointer;\n  position: relative;\n  right: 0;\n  width: 50px;\n}\n#ukagaka_stringinput > input {\n  width: 100%;\n  margin: 0 0 8px 0;\n}\n.typed-cursor {\n  -webkit-animation: blink 0.7s infinite;\n  animation: blink 0.7s infinite;\n  moz-animation: blink 0.7s infinite;\n  ms-animation: blink 0.7s infinite;\n  opacity: 1;\n  webkit-animation: blink 0.7s infinite;\n}\n.left {\n  float: left;\n}\n.right {\n  float: right;\n}\n.clear {\n  clear: both;\n}\n#background {\n  background-size: cover;\n  height: 100%;\n  khtml-user-select: none;\n  left: 0;\n  moz-background-size: cover;\n  moz-user-select: none;\n  ms-user-select: none;\n  o-user-select: none;\n  position: fixed;\n  top: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  webkit-background-size: cover;\n  webkit-user-select: none;\n  width: 100%;\n}\n#playblock {\n  margin: 2px 0;\n}\n#player {\n  margin: 4px -8px;\n  padding: 28px 16px;\n  position: relative;\n}\n#player i {\n  padding: 5px;\n}\n#player .ctrl {\n  line-height: 16px;\n  text-shadow: 0 1px 2px #000;\n}\n#player .ctrl .tag {\n  color: #f0f0f0;\n}\n#player .ctrl .tag span {\n  color: #ccc;\n  font-size: 12px;\n  margin-top: 5px;\n}\n#player .ctrl .control {\n  height: 25px;\n  margin-top: 10px;\n}\n#player .ctrl .control .volume .slider {\n  float: right;\n  margin-top: 5px;\n  width: 80px;\n}\n#player .ctrl .progress {\n  margin-top: 10px;\n}\n#player .ctrl .progress .timer {\n  color: #ccc;\n  font-size: 12px;\n  margin-top: 8px;\n  font-family: \"Open Sans Light\", Georgia, serif;\n}\n#player .ctrl .tag strong,\n#player .ctrl .tag span {\n  display: inline-block;\n  padding: 0 3px;\n  text-overflow: ellipsis;\n}\n#player .ctrl .icon:hover,\n#player .ctrl i.enable {\n  opacity: 0.5;\n}\n#player .ctrl .progress .repeat.once,\n#player .ctrl .progress .repeat.all {\n  opacity: 0.5;\n}\n.slider {\n  background: rgba(0,0,0,0.3);\n  border-radius: 5px;\n  box-shadow: 0 1px 2px rgba(0,0,0,0.5) inset;\n  cursor: pointer;\n  height: 5px;\n  khtml-border-radius: 5px;\n  moz-border-radius: 5px;\n  moz-box-shadow: 0 1px 2px rgba(0,0,0,0.5) inset;\n  ms-border-radius: 5px;\n  o-border-radius: 5px;\n  o-box-shadow: 0 1px 2px rgba(0,0,0,0.5) inset;\n  position: relative;\n  webkit-border-radius: 5px;\n  webkit-box-shadow: 0 1px 2px rgba(0,0,0,0.5) inset;\n}\n.slider a {\n  background: #fff;\n  border-radius: 50%;\n  height: 5px;\n  khtml-border-radius: 50%;\n  margin-left: -2.5px;\n  moz-border-radius: 50%;\n  moz-transition: opacity 0.3s;\n  ms-border-radius: 50%;\n  ms-transition: opacity 0.3s;\n  o-border-radius: 50%;\n  opacity: 0;\n  o-transition: opacity 0.3s;\n  position: absolute;\n  transition: opacity 0.3s;\n  webkit-border-radius: 50%;\n  webkit-transition: opacity 0.3s;\n  width: 5px;\n}\n.slider .loaded {\n  background: rgba(255,255,255,0.1);\n}\n.slider .pace {\n  background: #258fb8;\n}\n.slider:hover a,\n.slider.enable a {\n  opacity: 1;\n}\n.slider .loaded,\n.slider .pace {\n  border-radius: 5px;\n  height: 100%;\n  khtml-border-radius: 5px;\n  moz-border-radius: 5px;\n  ms-border-radius: 5px;\n  o-border-radius: 5px;\n  opacity: 0.7;\n  position: absolute;\n  webkit-border-radius: 5px;\n}\n@-webkit-keyframes blink {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes blink {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.chart {\n  background: none repeat scroll 0 0 #493d26;\n  box-shadow: 1px 1px 4px rgba(0,0,0,0.9);\n  border: 1px solid #696969;\n  border-radius: 3px;\n  width: 70%;\n  margin: 20px auto;\n  padding: 5px;\n}\n.tagbox {\n  margin: 2px;\n  color: #777;\n  padding: 15px;\n  border-radius: 3px;\n}\n.tagbox li {\n  line-height: 28px;\n}\n.tagbox li i {\n  opacity: 0.9;\n}\n.tagbox.inline li {\n  float: left;\n}\n.tagbox a {\n  border: 1px dashed #bbb;\n  border-radius: 3px;\n  padding: 2px 6px;\n  margin: 3px;\n  background: #696969;\n  display: inline-block;\n  color: #c4c4c4;\n  text-decoration: none;\n}\n.tagbox a span {\n  vertical-align: super;\n  font-size: 0.8em;\n}\n.tagbox a:hover {\n  background-color: #397bdd;\n  color: #fff;\n}\n.error-wrap {\n  color: #c4c4c4;\n}\n.error-inner {\n  margin: 0 33%;\n  text-align: left;\n  font-family: \"Open Sans Light\", \"Georgia\", \"Microsoft YaHei\", \"Times New Roman\", serif;\n}\n.error-inner p {\n  line-height: 1.6em;\n  margin: 1.6em 0;\n}\n.error-inner h1 {\n  font-size: 82px;\n}\n.error-inner h2 {\n  font-size: 75px;\n}\n.error-inner a {\n  text-transform: uppercase;\n  text-decoration: none;\n  text-align: center;\n  display: block;\n}\n@media screen and (max-width: 479px) {\n  .error-inner {\n    margin: 0 5%;\n  }\n}\n@media screen and (min-width: 480px) and (max-width: 767px) {\n  .error-inner {\n    margin: 0 5%;\n  }\n}\n.error-link {\n  line-height: 1em;\n  padding: 6px 10px;\n}\n.link1 {\n  color: #fff;\n  background: #7a3862;\n}\n.link2 {\n  color: #fff;\n  background: #9fb04e;\n}\n.tagcloud a {\n  display: inline-block;\n  text-decoration: none;\n  font-weight: normal;\n  font-size: 0.75rem;\n  height: 1.125rem;\n  line-height: 1.125rem;\n  padding: 0 5px 0 10px;\n  position: relative;\n  border-radius: 0 5px 5px 0;\n  margin: 5px 9px 5px 8px;\n  opacity: 0.9;\n}\n.tagcloud a.color0 {\n  background: #88acdb;\n  color: #fff;\n}\n.tagcloud a.color0::before {\n  border-right-color: #88acdb;\n}\n.tagcloud a.color1 {\n  background: #ffa07a;\n  color: #fff;\n}\n.tagcloud a.color1::before {\n  border-right-color: #ffa07a;\n}\n.tagcloud a.color2 {\n  background: #f08080;\n  color: #fff;\n}\n.tagcloud a.color2::before {\n  border-right-color: #f08080;\n}\n.tagcloud a.color3 {\n  background: #76becc;\n  color: #fff;\n}\n.tagcloud a.color3::before {\n  border-right-color: #76becc;\n}\n.tagcloud a.color4 {\n  background: #918597;\n  color: #fff;\n}\n.tagcloud a.color4::before {\n  border-right-color: #918597;\n}\n.tagcloud a.color5 {\n  background: #6fc0e4;\n  color: #fff;\n}\n.tagcloud a.color5::before {\n  border-right-color: #6fc0e4;\n}\n.tagcloud a.color6 {\n  background: #bc8f8f;\n  color: #fff;\n}\n.tagcloud a.color6::before {\n  border-right-color: #bc8f8f;\n}\n.tagcloud a:hover {\n  opacity: 1;\n  -webkit-transform: scale(1.06);\n  transform: scale(1.06);\n  background-color: hover-color;\n  border-color: hover-color;\n}\n.tagcloud a:hover::before {\n  border-right-color: hover-color;\n}\n.tagcloud a:before {\n  content: \"\\A\";\n  width: 0;\n  height: 0;\n  position: absolute;\n  top: 0;\n  left: -1.1rem;\n  border: 0.5625rem solid transparent;\n}\n.tagcloud a:after {\n  content: \"\\A\";\n  width: 4px;\n  height: 4px;\n  background-color: #fff;\n  border-radius: 4px;\n  box-shadow: 0 0 0 1px rgba(0,0,0,0.3);\n  position: absolute;\n  top: 0.4375rem;\n  left: 2px;\n}\n.tagcloud a {\n  margin-right: 5px;\n}\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.styl");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map