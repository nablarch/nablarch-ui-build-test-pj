/**
 * @module nablarch.ui
 */
define(['jquery', 'sugar'],
function($) {
  /**
   * @class nablarch.ui.selector
   */
  Object.merge($.expr.pseudos, {
   /**
    * 対象の要素が空でない場合に一致するセレクタ。
    *
    * input, select, textarea, option であれば、jQuery.fn.val、
    * それ以外であればjQuery.fn.textの結果で判定する。
    *
    * @for jQuery
    * @method jQuery.expr.is-not-blank
    */
    'is-not-blank': $.expr.createPseudo(isNotBlankSelector)
   /**
    * 対象の要素が空のに一致するセレクタ。
    *
    * input, select, textarea, option であれば、jQuery.fn.val、
    * それ以外であればjQuery.fn.textの結果で判定する。
    *
    * @for jQuery
    * @method jQuery.expr.is-blank
    */
  , 'is-blank':     $.expr.createPseudo(isBlankSelector)
   /**
    * 対象の要素に引数の値のいずれかが含まれる場合に一致するセレクタ。
    *
    * 要素はカンマ区切りで指定できる。
    *
    *
    * @for jQuery
    * @method jQuery.expr.is-value
    * @param values {String} 一致する値(カンマ区切り)
    */
  , 'is-value':    $.expr.createPseudo(isVal)
  });

  function isNotBlankSelector() {
    return function(element) {
      return !isBlank(element);
    };
  }

  function isBlankSelector() {
    return function(element) {
      return isBlank(element);
    };
  }

  function isBlank(element) {
    var $element = $(element)
      , content  = $element.is('select, input, textarea, option')
                 ? $element.val()
                 : $element.text();
    return !content || content.isBlank();
  }

  function isVal(selector) {
    return function(element) {
      var matched = false;
      selector.split(',').each(function(val) {
        matched = matched || $(element).val() === val.trim();
      });
      return matched;
    };
  }

});