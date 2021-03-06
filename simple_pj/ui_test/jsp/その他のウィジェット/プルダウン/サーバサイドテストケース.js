runTest(
  必須属性テスト,
  nameAlias属性のテスト,
  elementLabelPattern属性のテスト
);

/**
 * 必須属性のテスト
 */
function 必須属性テスト() {
  var target = findTest('required')
    , labels = ['ラベル1', 'ラベル2' , 'ラベル3' ]
    , values = ['値1', '値2', '値3']
    , selected = [false, true, false];

  equal(target.label.text().compact(), '必須属性を指定', 'タイトル属性が設定されること');

  if (isConfirmationPage()) {
    equal(target.input.text().compact(), 'ラベル2', '選択された値が表示されていること');
    equal(target.error.length, 0, 'エラー表示領域そのものが存在しないこと');
  } else {
    equal(target.input.find('select > option').length, 3, 'プルダウンの要素数は3であること');

    values.each(function (value, index) {
      var $select = $(target.input.find('select > option')[index]);
      equal($select.val(), value, 'value属性が正しく設定されていること');
      equal($select.text().trim(), labels[index], 'labelが正しく設定されていること');
      equal($select.prop('selected'), selected[index], '選択状態が正しいこと')
    });

    ok(!target.error.find('div.nablarch_error').is('*'), 'エラーはないこと');
  }
}

/**
 * nameAlias属性のテスト
 */
function nameAlias属性のテスト() {
  var test = {
    nonNameAlias: function (testCase) {
      var target = findTest(testCase);
      if (isConfirmationPage()) {
        ok(!target.error.is('*'), 'エラー表示領域そのものが存在しないこと');
      } else {
        equal(target.input.find('select.nablarch_error').length, 1, 'nablarch_errorクラスが設定されること');
        equal(target.error.find('div.nablarch_error').length, 1, 'エラーメッセージが表示せれること');
      }
    },
    nameAlias   : function (testCase) {
      var target = findTest(testCase);
      if (isConfirmationPage()) {
        ok(!target.error.is('*'), 'エラー表示領域そのものが存在しないこと');
      } else {
        equal(target.input.find('select.nablarch_error').length, 1, 'nablarch_errorクラスが設定されること');
        ok(!target.error.find('div.nablarch_error').is('*'), 'エラーメッセージは表示されないこと');
      }
    }
  };

  test.nonNameAlias('not-nameAlias');
  test.nonNameAlias('nameAlias-blank');
  test.nameAlias('nameAlias');
}

function elementLabelPattern属性のテスト() {
  var labels = ['ラベル1', 'ラベル2' , 'ラベル3' ]
    , formatLabels = ['値1 - ラベル1', '値2 - ラベル2' , '値3 - ラベル3' ]
    , values = ['値1', '値2', '値3']
    , assertLabel = function (testCase, expectedLabels, confirmExpectedLabel) {
      var target = findTest(testCase)
        , $options = target.input.find('select > option');

      if (isConfirmationPage()) {
        equal(target.input.text().compact(), confirmExpectedLabel, 'divのボディ部に入力値が表示されていること');
      } else {
        $options.each(function (index, option) {
          var $option = $(option);

          equal($option.val(), values[index], target.testCase + ':value属性が設定されていること');
          equal($option.text().trim(), expectedLabels[index], target.testCase + ':labelが正しく設定されていること');
        });
      }
    };

  assertLabel('elementLabelPattern-none', labels, 'ラベル1');
  assertLabel('elementLabelPattern-blank', labels, 'ラベル2');
  assertLabel('elementLabelPattern-not-blank', formatLabels, '値3 - ラベル3');
}

function findTest(testCase) {
  var $test = $('span.test-case.' + testCase)
    , $text_div = $test.next('.field.pulldown');

  return {
    testCase: $test.text(),
    label: $text_div.find('label'),
    input: $text_div.find('div.field-content'),
    error: $text_div.find('div.fielderror')
  }
}
