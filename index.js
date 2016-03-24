'use strict';

module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
    /**
     * http://eslint.org/docs/rules/comma-dangle
     *
     * 複数行の時はケツカンマをつける。一行の場合はつけない。
     *
     * warn:
     *
     *     let foo = { a: 'b', };
     *     let foo = {
     *       a: 'b'
     *     };
     *
     * ok:
     *
     *     let foo = { a: 'b' };
     *     let foo = {
     *       a: 'b',
     *     };
     *
     */
    'comma-dangle': ['warn', 'always-multiline'],

    /**
     * http://eslint.org/docs/rules/no-cond-assign
     *
     * 条件式内での代入はしない
     *
     * warn:
     *
     *     if (x = 1) {
     *       // ...
     *     }
     *
     *     while ((a = 1)) {
     *     }
     *
     */
    'no-cond-assign': ['warn', 'always'],

    /**
     * http://eslint.org/docs/rules/no-console
     *
     * Allow console
     *
     */
    'no-console': 'off',

    /**
     * http://eslint.org/docs/rules/no-constant-condition
     *
     * 条件式に直接リテラルは書かない
     *
     * warn:
     *
     *     if (true) {
     *     }
     *
     *     while(1) {
     *     }
     *
     * ok:
     *
     *     if (x) {
     *     }
     *
     *     while(a > 10) {
     *     }
     *
     */
    'no-constant-condition': 'warn',

    /**
     * http://eslint.org/docs/rules/no-control-regex
     *
     * 正規表現に制御文字を使った場合に警告する
     *
     * warn:
     *
     *     let re = /\\x1f/;
     *
     */
    'no-control-regex': 'warn',

    /**
     * http://eslint.org/docs/rules/no-debugger
     *
     * debuggerがある場合は警告する
     *
     */
    'no-debugger': 'warn',

    /**
     * http://eslint.org/docs/rules/no-dupe-args
     *
     * 仮引数の名前が重複を許可しない。
     * strictモードではエラーになるためエラーにする。
     *
     * error:
     *
     *     function foo(a, b, a) {
     *       console.log(a);
     *     }
     *
     */
    'no-dupe-args': 'error',

    /**
     * http://eslint.org/docs/rules/no-dupe-keys
     *
     * オブジェクトで同一のキーを警告する
     *
     * warn:
     *
     *     let foo = {
     *       a: 'b',
     *       a: 'c',
     *     };
     *
     */
    'no-dupe-keys': 'warn',

    /**
     * http://eslint.org/docs/rules/no-duplicate-case
     *
     * switch文のcaseに同一の値があった場合に警告する
     *
     * warn:
     *
     *     switch (x) {
     *       case 1:
     *         // ...
     *       case 1:
     *         // ...
     *     }
     *
     */
    'no-duplicate-case': 'warn',

    /**
     * http://eslint.org/docs/rules/no-empty
     *
     * 空のブロックがあった場合に警告する
     *
     * warn:
     *
     *     if (x) {
     *     }
     *
     * try-catchで何もせずにエラーを握りつぶす場合はコメントを書く
     *
     * ok:
     *
     *     try {
     *       // ...
     *     }
     *     catch (err) {
     *       // do nothing
     *     }
     *
     */
    'no-empty': 'warn',

    /**
     * http://eslint.org/docs/rules/no-empty-character-class
     *
     * 正規表現で空のブラケット（`[]`）があった場合に警告する
     *
     * warn:
     *
     *     let re = /abc[]/;
     *
     */
    'no-empty-character-class': 'warn',

    /**
     * http://eslint.org/docs/rules/no-ex-assign
     *
     * catchに渡される変数への代入を警告する
     *
     * warn:
     *
     *     try {
     *       // ...
     *     }
     *     catch (err) {
     *       err = 'foo';
     *     }
     *
     */
    'no-ex-assign': 'warn',

    /**
     * http://eslint.org/docs/rules/no-extra-boolean-cast
     *
     * if文の条件式など必要ない箇所でのBooleanキャスティングを警告する
     *
     * warn:
     *
     *     if (!!foo) {
     *       // ...
     *     }
     *
     *     let foo = !!foo ? 'a' : 'b';
     *
     */
    'no-extra-boolean-cast': 'warn',

    /**
     * http://eslint.org/docs/rules/no-extra-parens
     *
     * function式に不必要な丸カッコがあった場合に警告する。
     *
     * warn:
     *
     *     let foo = (function() { return 1; });
     *
     * allにした場合以下の様な式も警告になるが、カッコがあったほうが
     * わかりやすいケースもあるのでこれは許容する。
     *
     *     let foo = (a * b) + c;
     *
     */
    'no-extra-parens': ['warn', 'functions'],

    /**
     * http://eslint.org/docs/rules/no-extra-semi
     *
     * 不要なセミコロンを警告する
     *
     * warn:
     *
     *     let foo = 'bar';;
     *
     *     function foo() {
     *       // ...
     *     };
     *    /
    'no-extra-semi': 'warn',

    /**
     * http://eslint.org/docs/rules/no-func-assign
     *
     * functionで作った関数に代入をおこなった場合に警告する
     *
     * warn:
     *
     *     function foo() {
     *       //...
     *     }
     *
     *     foo = 'bar';
     *
     */
    'no-func-assign': 'warn',

    /**
     * http://eslint.org/docs/rules/no-inner-declarations
     *
     * ブロックスコープ内でfunction文やvarでの変数宣言を警告する。
     *
     * warn:
     *
     *     if (x) {
     *       function foo() {
     *         // ...
     *       }
     *     }
     *
     *     while (x) {
     *       var a = 'b';
     *     }
     *
     * ok:
     *
     *     var a;
     *     while (x) {
     *       a = 'b';
     *     }
     *
     *     while (x) {
     *       let a = 'b';
     *     }
     *
     */
    'no-inner-declarations': ['warn', 'both'],

    /**
     * http://eslint.org/docs/rules/no-invalid-regexp
     *
     * invalidな正規表現をエラーにする
     *
     * error:
     *
     *     let re = new RegExp('[');
     *
     */
    'no-invalid-regexp': 'error',

    /**
     * http://eslint.org/docs/rules/no-irregular-whitespace
     *
     * \u00A0 (No-Break Space) などのwhitespaceを警告する
     *
     */
    'no-irregular-whitespace': 'warn',

    /**
     * http://eslint.org/docs/rules/no-negated-in-lhs
     *
     * 不正な`in`をエラーにする
     *
     * error:
     *
     *     if (!a in b) {
     *       // do something
     *     }
     *
     * ok:
     *
     *     if (!(a in b)) {
     *       // do something
     *     }
     *
     */
    'no-negated-in-lhs': 'error',

    /**
     * http://eslint.org/docs/rules/no-obj-calls
     *
     * `Math`や`JSON`を関数として呼び出した場合にエラーにする
     *
     * error:
     *
     *     let x = Math();
     *     let y = JSON();
     *
     */
    'no-obj-calls': 'error',

    /**
     * http://eslint.org/docs/rules/no-regex-spaces
     *
     * 正規表現に2つ以上のスペースがあった場合に警告する
     *
     * warn:
     *
     *     let re = /foo   bar/;
     *
     * ok:
     *
     *     let re = /foo {3}bar/;
     *
     */
    'no-regex-spaces': 'warn',

    /**
     * http://eslint.org/docs/rules/no-sparse-arrays
     *
     * Arrayリテラル内で空の要素があった場合に警告する
     *
     * warn:
     *
     *     let a = ['foo', , 'bar'];
     *
     */
    'no-sparse-arrays': 'warn',

    /**
     * http://eslint.org/docs/rules/no-unexpected-multiline
     *
     * セミコロンがない場合に次の行にが続けて処理されるようなケースを
     * 警告する。セミコロンを必須にしていれば関係ない。
     *
     * warn:
     *
     *     let foo = bar
     *     (1 || 2).baz();
     *
     */
    'no-unexpected-multiline': 'warn',

    /**
     * http://eslint.org/docs/rules/no-unreachable
     *
     * 到達不能なコードを警告する
     *
     * warn:
     *
     *     function foo() {
     *       return true;
     *       console.log("done");
     *     }
     *
     */
    'no-unreachable': 'warn',

    /**
     * http://eslint.org/docs/rules/use-isnan
     *
     * NaNとの比較を警告する。比較したい場合はisNaNを使う。
     *
     * warn:
     *
     *     if (foo === NaN) {
     *       // ...
     *     }
     *
     * ok:
     *
     *     if (isNaN(foo)) {
     *       // ...
     *     }
     *    /
    'use-isnan': 'warn',

    /**
     * http://eslint.org/docs/rules/valid-jsdoc
     *
     * JSDocのチェックはしない
     *
     */
    'valid-jsdoc': 'off',

    /**
     * http://eslint.org/docs/rules/valid-typeof
     *
     * typeofの比較が不正な場合に警告する
     *
     * warn:
     *
     *     typeof foo === 'strong';
     *
     */
    'valid-typeof': 'warn',

    /**
     * http://eslint.org/docs/rules/accessor-pairs
     *
     * getterだけ、setterだけの場合のチェックはしない。
     * どっちかだけほしい場合もある。
     *
     */
    'accessor-pairs': 'off',

    /**
     * http://eslint.org/docs/rules/array-callback-return
     *
     * Array.prototypeのメソッドでreturnが必要なケースでreturnがない
     * 場合に警告する。
     *
     * warn:
     *
     *     let arr = [1, 2, 3].map(x => {
     *       x * 2;
     *     });
     *
     */
    'array-callback-return': 'warn',

    /**
     * http://eslint.org/docs/rules/block-scoped-var
     *
     * ブロック内でのvarを警告する
     *
     * warn:
     *
     *     if (x) {
     *       var a = 'b';
     *     }
     *
     */
    'block-scoped-var': 'warn',

    /**
     * http://eslint.org/docs/rules/complexity
     *
     * Conditional Complexityはチェックしない
     * ref: https://ja.wikipedia.org/wiki/%E5%BE%AA%E7%92%B0%E7%9A%84%E8%A4%87%E9%9B%91%E5%BA%A6
     *
     */
    'complexity': 'off',

    /**
     * http://eslint.org/docs/rules/consistent-return
     *
     * `return`の整合性チェックをしない。例えばこういうケースで`condition`
     * が偽の場合は`false`を返せというチェック。
     *
     *     function foo() {
     *       // ...
     *
     *       if (condition) {
     *         return true;
     *       }
     *     }
     *
     */
    'consistent-return': 'off',

    /**
     * http://eslint.org/docs/rules/curly
     *
     * ブロックを伴わないifやforを警告する。ただし`if (x) return;`のような
     * Guardは書きたいので、改行を伴わない場合のみ許可する
     *
     * warn:
     *
     *     if (x)
     *       foo();
     *
     * ok:
     *
     *     if (x) {
     *       foo();
     *     }
     *
     *     if (x) return;
     *
     */
    'curly': ['warn', 'multi-line'],

    /**
     * http://eslint.org/docs/rules/default-case
     *
     * switch文でdefaultの有無のチェックはしない。必要ない場合もある。
     *
     */
    'default-case': 'off',

    /**
     * http://eslint.org/docs/rules/dot-location
     *
     * オブジェクトをチェインするときドットは先頭にくるようにする
     *
     * warn:
     *
     *     arr.map(x => x + 1).
     *         foo().
     *         bar();
     *
     * ok:
     *
     *     arr.map(x => x + 1)
     *        .foo()
     *        .bar();
     *
     */
    'dot-location': ['warn', 'property'],

    /**
     * http://eslint.org/docs/rules/dot-notation
     *
     * オブジェクトのプロパティアクセスで不必要に`[]`を使った場合に警告する
     *
     * warn:
     *
     *     foo['bar'] = 'baz';
     *
     */
    'dot-notation': 'warn',

    /**
     * http://eslint.org/docs/rules/eqeqeq
     *
     * 比較に`==`を使った場合に警告する。ただし`null`との比較の場合のみ
     * 許可する（値が`undefined`か`null`の場合をチェックするイディオム）
     *
     * warn:
     *
     *     if (x == 1) {
     *       // ...
     *     }
     *
     * ok:
     *
     *     if (x === 1) {
     *       // ...
     *     }
     *
     *     if (x == null) {
     *       // ...
     *     }
     *
     */
    'eqeqeq': ['warn', 'allow-null'],

    /**
     * http://eslint.org/docs/rules/guard-for-in
     *
     * for-inでhasOwnPropertyのチェックをしない
     *
     */
    'guard-for-in': 'off',

    /**
     * http://eslint.org/docs/rules/no-alert
     *
     * alertやconfirmは許可する
     *
     */
    'no-alert': 'off',

    /**
     * http://eslint.org/docs/rules/no-caller
     *
     * `arguments.caller`、`arguments.callee`をエラーにする。
     * strictモードではエラーになるため。
     *
     */
    'no-caller': 'error',

    /**
     * http://eslint.org/docs/rules/no-case-declarations
     *
     * ブロックを伴わないcaseでの`let`や`const`を警告する
     *
     * warn:
     *
     *     switch (foo) {
     *       case 1:
     *         let x = 1;
     *         break;
     *     }
     *
     * ok:
     *
     *     switch (foo) {
     *       case 1: {
     *         let x = 1;
     *         break;
     *       }
     *     }
     *
     */
    'no-case-declarations': 'warn',

    /**
     * http://eslint.org/docs/rules/no-div-regex
     *
     * `/=foo`のような正規表現を許可する。`/=`演算子と見間違えるので
     * わかりづらいということらしいが`/=`とかそもそも見かけない。
     *
     */
    'no-div-regex': 'off',

    /**
     * http://eslint.org/docs/rules/no-else-return
     *
     * `else`の前にreturnするケースを許容する。
     *
     * ok:
     *
     *     if (x) {
     *       // do something
     *       return foo;
     *     }
     *     else {
     *       // do something
     *       return baz;
     *     }
     *
     */
    'no-else-return': 'off',

    /**
     * http://eslint.org/docs/rules/no-empty-function
     *
     * 空の関数を許可する。空の関数を定義したい場合もある。
     *
     */
    'no-empty-function': 'off',

    /**
     * http://eslint.org/docs/rules/no-empty-pattern
     *
     * 分割代入するときに受け取る側が空の場合に警告する
     *
     * warn:
     *
     *     let {} = foo;
     *     let [] = bar;
     *
     */
    'no-empty-pattern': 'warn',

    /**
     * http://eslint.org/docs/rules/no-eq-null
     *
     * `null`の比較を`==`で行うケースを許容する（ref: eqeqeq）
     *
     */
    'no-eq-null': 'off',

    /**
     * http://eslint.org/docs/rules/no-eval
     *
     * evalの利用をチェックしない。
     * 基本的に使わないけどlintで弾くほどでもない。
     *
     */
    'no-eval': 'off',

    /**
     * http://eslint.org/docs/rules/no-extend-native
     *
     * ネイティブオブジェクトの拡張を警告する。
     *
     * warn:
     *
     *     Object.prototype.foo = 'bar';
     *
     */
    'no-extend-native': 'warn',

    /**
     * http://eslint.org/docs/rules/no-extra-bind
     *
     * 不必要なFunction.prototype.bindを警告する
     *
     * warn:
     *
     *     let foo = function (x) {
     *       return x;
     *     }.bind(bar);
     *
     */
    'no-extra-bind': 'warn',

    /**
     * http://eslint.org/docs/rules/no-extra-label
     *
     * 不必要なラベルを警告する
     *
     * warn:
     *
     *     A: while (a) {
     *       break A;
     *     }
     *    /
    'no-extra-label': 'warn',

    /**
     * http://eslint.org/docs/rules/no-fallthrough
     *
     * breakのないcaseの後にcaseがくる場合に警告する
     *
     * warn:
     *
     *     switch(foo) {
     *       case 1:
     *         doSomething();
     *       case 2:
     *         doSomething();
     *     }
     *
     * ok:
     *
     *     switch(foo) {
     *       case 1:
     *         doSomething();
     *         break;
     *       case 2:
     *         doSomething();
     *     }
     *
     */
    'no-fallthrough': 'warn',

    /**
     * http://eslint.org/docs/rules/no-floating-decimal
     *
     * 整数部を省略したfloatリテラルを警告する
     *
     * warn:
     *
     *     let x = .5;
     *
     * ok:
     *
     *     let x = 0.5;
     *
     */
    'no-floating-decimal': 'warn',

    /**
     * http://eslint.org/docs/rules/no-implicit-coercion
     *
     * 暗黙の型変換は許容する。
     * ただし`~foo.indexOf(...)`だけはわかりにくいので許可しない。
     *
     * warn:
     *
     *     let a = ~b.indexOf('.');
     *
     * ok:
     *
     *     let a = !!b;
     *     let a = +b;
     *     let a = '' + b;
     *     let a = b.indexOf('.') !== -1;
     *
    'no-implicit-coercion': ['warn', {
      number: false,
      string: false,
      allow: ['!!'],
    /
    }],

    /**
     * http://eslint.org/docs/rules/no-implicit-globals
     *
     * グローバルスコープになるvarやfunctionに警告を出す。
     * ただしmoduleを有効にしている場合moduleスコープになるのでは警告はでない。
     *
     */
    'no-implicit-globals': 'warn',

    /**
     * http://eslint.org/docs/rules/no-implied-eval
     *
     * setTimeoutやsetIntervalに文字列を渡して暗黙的にevalになるケースを警告する
     *
     * warn:
     *
     *     setTimeout("alert('Hi!');", 100);
     *
     * ok:
     *
     *     setTimeout(() => {
     *       alert('Hi!');
     *     }, 100);
     *
     */
    'no-implied-eval': 'warn',

    /**
     * http://eslint.org/docs/rules/no-invalid-this
     *
     * 不正な場所でthisを使った場合に警告する。
     *
     * warn:
     *
     *     function foo() {
     *       this.a = 0;
     *     }
     *
     */
    'no-invalid-this': 'warn',

    /**
     * http://eslint.org/docs/rules/no-iterator
     *
     * SpiderMonkey拡張の__iterator__を警告する
     *
     * warn:
     *
     *     foo.__iterator__ = function () {};
     *
     */
    'no-iterator': 'warn',

    /**
     * http://eslint.org/docs/rules/no-labels
     *
     * labelを警告する（labelは使わない）
     *
     * warn:
     *
     *     label:
     *       if (a) {
     *         break label;
     *       }
     *
     */
    'no-labels': 'warn',

    /**
     * http://eslint.org/docs/rules/no-lone-blocks
     *
     * 不必要なブロックを警告する
     *
     * warn:
     *
     *     {
     *       var foo = 'bar';
     *     }
     *
     */
    'no-lone-blocks': 'warn',

    /**
     * http://eslint.org/docs/rules/no-loop-func
     *
     * forやwhileのブロック内でvarで定義した変数を利用する関数を定義
     * した場合に警告する
     *
     * warn:
     *
     *     for (var i = 0; i < 10; i++) {
     *       $el.eq(i).on('click', () => console.log(i));
     *     }
     *
     * ok:
     *
     *     for (let i = 0; i < 10; i++) {
     *       $el.eq(i).on('click', () => console.log(i));
     *     }
     *
     */
    'no-loop-func': 'warn',

    /**
     * http://eslint.org/docs/rules/no-magic-numbers
     *
     * マジックナンバーを許容する
     *
     */
    'no-magic-numbers': 'off',

    /**
     * http://eslint.org/docs/rules/no-multi-spaces
     *
     * 不要なスペースを警告する。ただしオブジェクトや変数宣言時に整列
     * するケースでは許容する。
     *
     * warn:
     *
     *     let arr = [1,  2];
     *
     *     if (foo   === "bar") {
     *       //...
     *     }
     *
     * ok:
     *
     *     let a   = 'b';
     *     let foo = 'baz';
     *
     *     let foo = {
     *       foo: 'bar',
     *       a:   'c',
     *     };
     *
    'no-multi-spaces': ['warn', {
      exceptions: { VariableDeclarator: true },
    /
    }],

    /**
     * http://eslint.org/docs/rules/no-multi-str
     *
     * バックスラッシュを使った複数行の文字列リテラルを警告する
     *
     * warn:
     *
     *     let x = 'Line 1 \
     *              Line 2';
     *
     */
    'no-multi-str': 'warn',

    /**
     * http://eslint.org/docs/rules/no-native-reassign
     *
     * ネイティブオブジェクトに対する代入を警告する
     *
     * warn:
     *
     *     String = 'foo';
     *
     */
    'no-native-reassign': 'warn',

    /**
     * http://eslint.org/docs/rules/no-new
     *
     * 副作用を目的としたnewを警告する（newした結果を利用しないケース）
     *
     * warn:
     *
     *     new Person();
     *
     * ok:
     *
     *     let person = new Person();
     *
     */
    'no-new': 'warn',

    /**
     * http://eslint.org/docs/rules/no-new-func
     *
     * Functionコンストラクタに文字列を渡した場合に警告する
     *
     * warn:
     *
     *     let x = Function("a", "b", "return a + b");
     *     let x = new Function("a", "b", "return a + b");
     *
     */
    'no-new-func': 'warn',

    /**
     * http://eslint.org/docs/rules/no-new-wrappers
     *
     * String、Number、Booleanをnewしてオブジェクトを作る場合に警告する
     *
     * warn:
     *
     *     let s = new String('foo');
     *     let n = new Number(1);
     *     let b = new Boolean(false);
     *
     * ok:
     *
     *     let s = String('foo');
     *     let n = Number(1);
     *     let b = Boolean(false);
     *
     */
    'no-new-wrappers': 'warn',

    /**
     * http://eslint.org/docs/rules/no-octal
     *
     * 8進数リテラルをエラーにする。strictモードでエラーになるため。
     *
     * error:
     *
     *     let n = 071;
     *
     */
    'no-octal': 'error',

    /**
     * http://eslint.org/docs/rules/no-octal-escape
     *
     * 文字列中の8進数表記をエラーにする。strictモードでエラーになるため。
     *
     * error:
     *
     *     let s = '\045';
     *
     */
    'no-octal-escape': 'error',

    /**
     * http://eslint.org/docs/rules/no-param-reassign
     *
     * 仮引数の変数への再代入を許容する
     *
     * ok:
     *
     *     function(a) {
     *       a = 'b';
     *     }
     *
     */
    'no-param-reassign': 'off',

    /**
     * http://eslint.org/docs/rules/no-proto
     *
     * __proto__の利用を警告する
     *
     * warn:
     *
     *     let proto = obj.__proto__;
     *
     * ok:
     *
     *     let proto = Object.getPrototypeOf(obj);
     *
     */
    'no-proto': 'warn',

    /**
     * http://eslint.org/docs/rules/no-redeclare
     *
     * 変数宣言の重複を警告する
     *
     * warn:
     *
     *     let foo = 'a';
     *     let foo = 'b';
     *
     */
    'no-redeclare': 'warn',

    /**
     * http://eslint.org/docs/rules/no-return-assign
     *
     * returnの式での代入を警告する
     *
     * warn:
     *
     *     return foo = 'a';
     *     return (foo = bar + 1);
     *
     */
    'no-return-assign': ['warn', 'always'],

    /**
     * http://eslint.org/docs/rules/no-script-url
     *
     * javascript: のURLを警告する
     *
     * warn:
     *
     *     location.href = 'javascript:void(0)';
     *
     */
    'no-script-url': 'warn',

    /**
     * http://eslint.org/docs/rules/no-self-assign
     *
     * 代入する変数が同じ場合に警告する。
     *
     * warn:
     *
     *     foo = foo;
     *     [bar, baz] = [bar, qiz];
     *
     * ok:
     *
     *     foo = foo || 'bar';
     *
     */
    'no-self-assign': 'warn',

    /**
     * http://eslint.org/docs/rules/no-self-compare
     *
     * 同じ変数で比較する場合に警告する
     *
     * warn:
     *
     *     if (x === x) {
     *       // ...
     *     }
     *
     */
    'no-self-compare': 'warn',

    /**
     * http://eslint.org/docs/rules/no-sequences
     *
     * カンマによる複数式を警告する
     *
     * warn:
     *
     *     if (doSomething(), condition) {
     *       // ...
     *     }
     *
     */
    'no-sequences': 'warn',

    /**
     * http://eslint.org/docs/rules/no-throw-literal
     *
     * throwにリテラルを指定した場合に警告する
     *
     * warn:
     *
     *     throw 'error';
     *
     */
    'no-throw-literal': 'warn',

    /**
     * http://eslint.org/docs/rules/no-unmodified-loop-condition
     *
     * warn:
     *
     *     let foo;
     *     while (foo) {
     *       console.log(foo);
     *     }
     *
     * ok:
     *
     *     let foo;
     *     while (foo) {
     *       foo = doSomething();
     *     }
     *
     */
    'no-unmodified-loop-condition': 'warn',

    /**
     * http://eslint.org/docs/rules/no-unused-expressions
     *
     * 結果が利用されない式を警告する
     *
     * warn:
     *
     *     a + 1;
     *
     * 以下の様なショートハンドは許容する
     *
     * ok:
     *
     *     a && b();
     *     a ? b() : c();
     *
    'no-unused-expressions': ['warn', {
      allowShortCircuit: true,
      allowTernary: true,
    /
    }],

    /**
     * http://eslint.org/docs/rules/no-unused-labels
     *
     * 利用されないラベルを警告する
     *
     * warn:
     *
     *     A:
     *     while (x) {
     *       break;
     *     }
     *
     */
    'no-unused-labels': 'warn',

    /**
     * http://eslint.org/docs/rules/no-useless-call
     *
     * 不必要な`call`、`apply`を警告する
     *
     * warn:
     *
     *     foo.call(null, 1, 2, 3);
     *     foo.apply(null, [1, 2, 3]);
     *     obj.foo.call(obj, 1, 2, 3);
     *     obj.foo.apply(obj, [1, 2, 3]);
     *
     */
    'no-useless-call': 'warn',

    /**
     * http://eslint.org/docs/rules/no-useless-concat
     *
     * 不要な文字列連結を警告する
     *
     * warn:
     *
     *     let foo = 'bar' + 'baz';
     *
     */
    'no-useless-concat': 'warn',

    /**
     * http://eslint.org/docs/rules/no-void
     *
     * voidを警告する
     *
     * warn:
     *
     *     let foo = void 0;
     *
     */
    'no-void': 'warn',

    /**
     * http://eslint.org/docs/rules/no-warning-comments
     *
     * TODO、FIXME などのコメントを許容する
     *
     * ok:
     *
     *     // TODO: ...
     *
     */
    'no-warning-comments': 'off',

    /**
     * http://eslint.org/docs/rules/no-with
     *
     * withはstrictモードでエラーのためエラーにする
     *
     * error:
     *
     *     with (foo) {
     *       // ...
     *     }
     *    /
    'no-with': 'error',

    /**
     * http://eslint.org/docs/rules/radix
     *
     * parseIntの基数を指定しない場合に警告する。
     * 先頭が0の場合に8進数として処理されるのはIE8以下だが、`0x`で始まる
     * 場合に16進数として解釈されるので明示的に指定したおいたほうがよい。
     *
     * warn:
     *
     *     parseInt(str);
     *
     * ok:
     *
     *     parseInt(str, 10);
     *
     */
    'radix': 'warn',

    /**
     * http://eslint.org/docs/rules/vars-on-top
     *
     * スコープの途中での変数宣言は許容する
     *
     * ok:
     *
     *     function foo() {
     *       var a;
     *       a = 1;
     *       var b;
     *     }
     *
     */
    'vars-on-top': 'off',

    /**
     * http://eslint.org/docs/rules/wrap-iife
     *
     * 即時実行関数のカッコの位置が以下の場合に警告する
     *
     * warn:
     *
     *     (function() {
     *       // ...
     *     }());
     *
     * ok:
     *
     *     (function() {
     *       // ...
     *     })();
     *
     */
    'wrap-iife': ['warn', 'inside'],

    /**
     * http://eslint.org/docs/rules/yoda
     *
     * Yodaスタイルを警告する。ただしRangeの比較の場合は許可する
     *
     * warn:
     *
     *     if ('red' === color) {
     *       //
     *     }
     *
     * ok:
     *
     *     if (color === 'red') {
     *       //
     *     }
     *
     *     if (0 <= a && a <= 10) {
     *       // a is 0..10
     *     }
     *
     */
    'yoda': ['warn', 'never', { exceptRange: true }],

    /**
     * http://eslint.org/docs/rules/strict
     *
     * 'use strict'は必要なケースと必要ないケースの両方あるので
     * チェックしない。
     * 全てBabelで変換するようなプロジェクトではbabelが自動で付与するので
     * `[warn, never]`などにして'use strict'を警告するのがよい。
     *
     */
    'strict': 'off',

    /**
     * http://eslint.org/docs/rules/init-declarations
     *
     * 変数宣言時に同時に初期化するかどうかはチェックしない
     *
     * ok:
     *
     *     let foo = 1;
     *     let bar;
     *
     */
    'init-declarations': 'off',

    /**
     * http://eslint.org/docs/rules/no-catch-shadow
     *
     * catchのパラメータ名が外側のスコープで使われているケースを許容する
     *
     * ok:
     *
     *     let err = 'a';
     *     try {
     *       //
     *     }
     *     catch (err) {
     *       //
     *     }
     *
     */
    'no-catch-shadow': 'off',

    /**
     * http://eslint.org/docs/rules/no-shadow-restricted-names
     *
     * 変数名や関数名にNaNやundefinedなどを利用した場合に警告する
     *
     * warn:
     *
     *     let undefined = null;
     *     function NaN() {
     *       //
     *     }
     *    /
    'no-shadow-restricted-names': 'warn',

    /**
     * http://eslint.org/docs/rules/no-undef
     *
     * 未定義の変数名を用いた場合に警告する。ただしtypeofに指定する
     * 場合は許容する。
     *
     * warn:
     *
     *     let a = 'b';
     *     console.log(foo);
     *
     * ok:
     *
     *     if (typeof foo === 'undefined') {
     *       //
     *     }
     *
     */
    'no-undef': 'warn',

    /**
     * http://eslint.org/docs/rules/no-undef-init
     *
     * undefinedによる初期化を警告する
     *
     * warn:
     *
     *     let foo = undefined;
     *
     * ok:
     *
     *     let foo;
     *
     */
    'no-undef-init': 'warn',

    /**
     * http://eslint.org/docs/rules/no-undefined
     *
     * undefinedの利用を許容する。（no-undef-initと
     * no-shadow-restricted-namesによる警告以外での）
     *
     * ok:
     *
     *     function foo(a, b) {
     *       if (b === undefined) {
     *         //
     *       }
     *     }
     *
     */
    'no-undefined': 'off',

    /**
     * http://eslint.org/docs/rules/no-unused-vars
     *
     * 利用していない変数を警告する
     *
     * warn:
     *
     *     function foo(a) {
     *       console.log('x');
     *     }
     *
     *     let foo = 'bar';
     *     console.log(fooo);
     *
     * ただし仮引数で最後のものを利用している場合はその前の仮引数を
     * 利用していくてもよい
     *
     * ok:
     *
     *     function foo(a, b) {
     *       console.log(b);
     *     }
     *
     */
    'no-unused-vars': 'warn',

    /**
     * http://eslint.org/docs/rules/no-use-before-define
     *
     * 変数や関数を定義より先に利用した場合に警告する
     *
     * warn:
     *
     *   console.log(foo);
     *   var foo = 'bar';
     *
     *   fn();
     *   function fn() {
     *     //
     *   }
     *
     */
    'no-use-before-define': 'warn',

    /**
     * http://eslint.org/docs/rules/callback-return
     *
     * callbackが2回呼ばれるかどうかのチェックをしない
     *
     * ok:
     *
     *     function doSomething(err, callback) {
     *       if (err) {
     *         callback(err);
     *       }
     *       callback();
     *     }
     *
     */
    'callback-return': 'off',

    /**
     * http://eslint.org/docs/rules/global-require
     *
     * トップスコープ以外での`require`の利用を許容する
     *
     * ok:
     *
     *     if (foo) {
     *       require('foo');
     *     }
     *
     */
    'global-require': 'off',

    /**
     * http://eslint.org/docs/rules/handle-callback-err
     *
     * Node.jsスタイルのコールバックでエラーオブジェクトをハンドリング
     * しているかどうかのチェックをしない
     *
     * ok:
     *
     *     function loadData(err, data) {
     *       doSomething(data);
     *     }
     *
     */
    'handle-callback-err': 'off',

    /**
     * http://eslint.org/docs/rules/no-mixed-requires
     *
     * 一つの`var`や`let`でrequireとその他の変数宣言が混ざっている場合に
     * 警告する
     *
     * warn:
     *
     *     let foo = require('./foo'),
     *       a = 'b';
     *
     * ok:
     *
     *     let foo = require('./foo');
     *     let a = 'b';
     *
     */
    'no-mixed-requires': 'warn',

    /**
     * http://eslint.org/docs/rules/no-new-require
     *
     * requireした結果を直接newするケースをチェックしない
     *
     * ok:
     *
     *     let foo = new require('foo');
     *
     */
    'no-new-require': 'off',

    /**
     * http://eslint.org/docs/rules/no-path-concat
     *
     * __dirnameや__filenameを文字列結合する場合に警告する。
     * windowsで動かない場合があるので`path.join`等を使う
     *
     * warn:
     *
     *   let fullPath = __dirname + '/foo.js';
     *
     * ok:
     *
     *   let fullPath = path.join(__dirname, 'foo.js');
     *  /
    'no-path-concat': 'warn',

    /**
     * http://eslint.org/docs/rules/no-process-env
     *
     * process.envの利用を許容する
     *
     * ok:
     *
     *     if (process.env.NODE_ENV === "development") {
     *       //
     *     }
     *
     */
    'no-process-env': 'off',

    /**
     * http://eslint.org/docs/rules/no-process-exit
     *
     * process.exitの利用を許容する
     *
     * ok:
     *
     *     process.exit(0);
     *
     */
    'no-process-exit': 'off',

    /**
     * http://eslint.org/docs/rules/no-restricted-modules
     *
     * requireできるモジュールを制限しない
     *
     */
    'no-restricted-modules': 'off',

    /**
     * http://eslint.org/docs/rules/no-sync
     *
     * sync系のAPIの利用を許容する
     *
     * ok:
     *
     *     fs.existsSync(foo);
     *
     */
    'no-sync': 'off',

    /**
     * http://eslint.org/docs/rules/array-bracket-spacing
     *
     * 配列リテラルの最初と最後に空白がある場合に警告する
     *
     * warn:
     *
     *     let arr = [ 'foo', 'bar' ];
     *
     * ok:
     *
     *     var arr = ['foo', 'bar'];
     *
     */
    'array-bracket-spacing': 'warn',

    /**
     * http://eslint.org/docs/rules/block-spacing
     *
     * ブロック内部の最初と最後に空白がない場合に警告する
     *
     * warn:
     *
     *     if (x) {return;}
     *
     * ok:
     *
     *     if (x) { return; }
     *
     */
    'block-spacing': 'warn',

    /**
     * http://eslint.org/docs/rules/brace-style
     *
     * ブレースの開始は同一行に書き、閉じブレースの後に`else`や`catch`
     * などが続く場合はブレースの後に改行して次の行に記述する。
     *
     * warn:
     *
     *     if (a1) {
     *       //
     *     } else {
     *       //
     *     }
     *
     * ok:
     *
     *     if (a1) {
     *       //
     *     }
     *     else {
     *       //
     *     }
     *
     */
    'brace-style': ['warn', 'stroustrup', { allowSingleLine: true }],

    /**
     * http://eslint.org/docs/rules/camelcase
     *
     * キャメルケース、アンダースコアケースはどちらも許容する
     *
     * ok:
     *
     *     let foo_bar = 'baz';
     *     let fooBar = 'baz';
     *
     */
    'camelcase': 'off',

    /**
     * http://eslint.org/docs/rules/comma-spacing
     *
     * カンマの前にはスペースなし、後ろにはスペースありとする
     *
     * warn:
     *
     *     let arr = [1 , 2];
     *     let arr = [1,2];
     *     let arr = [1 ,2];
     *
     * ok:
     *
     *     let arr = [1, 2];
     *
    'comma-spacing': ['warn', {
      before: false,
      after: true,
    /
    }],

    /**
     * http://eslint.org/docs/rules/comma-style
     *
     * カンマは後ろにつける
     *
     * warn:
     *
     *     let foo = {
     *         a: 'x'
     *       , b: 'y'
     *     };
     *
     * ok:
     *
     *     let foo = {
     *       a: 'x',
     *       b: 'y',
     *     };
     *
     */
    'comma-style': 'warn',

    /**
     * http://eslint.org/docs/rules/computed-property-spacing
     *
     * オブジェクトのブラケットでのプロパティ参照時に空白をいれない
     *
     * warn:
     *
     *     let foo = obj[ a ];
     *
     * ok:
     *
     *     let foo = obj[a];
     *
     */
    'computed-property-spacing': 'warn',

    /**
     * http://eslint.org/docs/rules/consistent-this
     *
     * thisを代入する場合の名前を制限しない
     *
     * ok:
     *
     *     let self = this;
     *     let _this = this;
     *     let that = this;
     *
     */
    'consistent-this': 'warn',

    /**
     * http://eslint.org/docs/rules/eol-last
     *
     * ファイルの最終行に改行文字がない場合に警告する
     *
     */
    'eol-last': 'warn',

    /**
     * http://eslint.org/docs/rules/func-names
     *
     * 関数名がない関数式を許容する
     *
     * ok:
     *
     *     let foo = function() {
     *       //
     *     };
     *
     *     setTimeout(function() {
     *       // ...
     *     }, 100);
     *
     */
    'func-names': 'off',

    /**
     * http://eslint.org/docs/rules/func-style
     *
     * 関数の定義は関数式と関数宣言どちらでもよい
     *
     * ok:
     *
     *     let foo = function() {
     *       //
     *     };
     *
     *     let foo = () => {
     *       //
     *     };
     *
     *     function foo() {
     *       //
     *     }
     *
     */
    'func-style': 'off',

    /**
     * http://eslint.org/docs/rules/id-blacklist
     *
     * 変数名にブラックリストを設けない
     *
     */
    'id-blacklist': 'off',

    /**
     * http://eslint.org/docs/rules/id-length
     *
     * 変数名の長さに制限を設けない
     *
     */
    'id-length': 'off',

    /**
     * http://eslint.org/docs/rules/id-match
     *
     * 変数名のパターンに制限を設けない
     *
     */
    'id-match': 'off',

    /**
     * http://eslint.org/docs/rules/indent
     *
     * インデントはスペース2つとする
     *
     */
    'indent': ['warn', 2],

    /**
     * http://eslint.org/docs/rules/jsx-quotes
     *
     * JSXのクオートはダブルクオート
     *
     */
    'jsx-quotes': ['warn', 'prefer-double'],

    /**
     * http://eslint.org/docs/rules/key-spacing
     *
     * プロパティ定義時のコロンの前はスペースなし、後ろにはスペース
     * 二つ以上を設ける
     *
     * warn:
     *
     *     let foo = {
     *       a : 'b',
     *       c :'d',
     *     };
     *
     * ok:
     *
     *     let foo = {
     *       a: 'b',
     *       c:   'd',
     *     };
     *
    'key-spacing': ['warn', {
      beforeColon: false,
      afterColon: true,
      mode: 'minimum',
    /
    }],

    /**
     * http://eslint.org/docs/rules/keyword-spacing
     *
     * `if`や`for`などのキーワードの前後にスペースを入れる
     *
     * warn:
     *
     *     if(foo){
     *       //
     *     }
     *
     *     return[1, 2, 3];
     *
     * ok:
     *
     *     if (foo) {
     *       //
     *     }
     *
     *     return [1, 2, 3];
     *
     */
    'keyword-spacing': 'warn',

    /**
     * http://eslint.org/docs/rules/linebreak-style
     *
     * 改行コードは \n とする
     *
     */
    'linebreak-style': ['warn', 'unix'],

    /**
     * http://eslint.org/docs/rules/lines-around-comment
     *
     * コメント前後の改行のスタイルを強制しない
     *
     */
    'lines-around-comment': 'off',

    /**
     * http://eslint.org/docs/rules/max-depth
     *
     * ネストの上限を強制しない
     *
     */
    'max-depth': 'off',

    /**
     * http://eslint.org/docs/rules/max-len
     *
     * 一行あたりの長さを制限しない
     *
     */
    'max-len': 'off',

    /**
     * http://eslint.org/docs/rules/max-nested-callbacks
     *
     * コールバックのネストの深さを制限しない
     *
     */
    'max-nested-callbacks': 'off',

    /**
     * http://eslint.org/docs/rules/max-params
     *
     * 引数の数を制限しない
     *
     */
    'max-params': 'off',

    /**
     * http://eslint.org/docs/rules/max-statements
     *
     * 式の数を制限しない
     *
     */
    'max-statements': 'off',

    /**
     * http://eslint.org/docs/rules/new-cap
     *
     * newする関数の最初が大文字でない場合に警告する
     *
     * warn:
     *
     *     let foo = new foo();
     *
     * ok:
     *
     *     let foo = new Foo();
     *
     */
    'new-cap': 'warn',

    /**
     * http://eslint.org/docs/rules/new-parens
     *
     * `()`を省略したnewに警告を出す
     *
     * warn:
     *
     *     let foo = new Foo;
     *
     * ok:
     *
     *     let foo = new Foo();
     *
     */
    'new-parens': 'warn',

    /**
     * http://eslint.org/docs/rules/newline-after-var
     *
     * 変数宣言の後の改行を強制しない
     *
     * ok:
     *
     *     let foo = 'bar';
     *     console.log(foo);
     *
     */
    'newline-after-var': 'off',

    /**
     * http://eslint.org/docs/rules/newline-before-return
     *
     * returnの前の改行を強制しない
     *
     * ok:
     *
     *     let foo = 'bar';
     *     return foo;
     *
     */
    'newline-before-return': 'off',

    /**
     * http://eslint.org/docs/rules/newline-per-chained-call
     *
     * メソッドチェインでの改行を強制しない
     *
     * ok:
     *
     *     _.chain({}).map(foo).filter(bar).value();
     *
     */
    'newline-per-chained-call': 'off',

    /**
     * http://eslint.org/docs/rules/no-array-constructor
     *
     * Arrayコンストラクタの利用を許容する
     *
     * ok:
     *
     *     let arr = Array(10);
     *
     */
    'no-array-constructor': 'off',

    /**
     * http://eslint.org/docs/rules/no-bitwise
     *
     * ビット演算子を利用した場合に警告を出す
     *
     * warn:
     *
     *     let x = y | z;
     *     let x = y & z;
     *     let x = y ^ z;
     *
     */
    'no-bitwise': 'warn',

    /**
     * http://eslint.org/docs/rules/no-continue
     *
     * continueの利用を制限しない
     *
     * ok:
     *
     *     while (x) {
     *       if (y) continue;
     *       //...
     *     }
     *
     */
    'no-continue': 'off',

    /**
     * http://eslint.org/docs/rules/no-inline-comments
     *
     * コードの後ろにコメントを書くことを許容する
     *
     * ok:
     *
     *     let foo = 'bar'; // comment
     *
     */
    'no-inline-comments': 'off',

    /**
     * http://eslint.org/docs/rules/no-lonely-if
     *
     * elseのブロック内に単独のif文がある場合に警告する
     *
     * warn:
     *
     *     if (foo) {
     *       //
     *     }
     *     else {
     *       if (bar) {
     *         // ...
     *       }
     *     }
     *
     * ok:
     *
     *     if (foo) {
     *       //
     *     }
     *     else if (bar) {
     *       // ...
     *     }
     *
     */
    'no-lonely-if': 'warn',

    /**
     * http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
     *
     * スペースとタブの混在を警告する
     *
     */
    'no-mixed-spaces-and-tabs': 'warn',

    /**
     * http://eslint.org/docs/rules/no-multiple-empty-lines
     *
     * 二行以上の空行を警告する
     *
     * warn:
     *
     *     let foo = 'bar';
     *
     *
     *     console.log(foo);
     *
     */
    'no-multiple-empty-lines': ['warn', { max: 1 }],

    /**
     * http://eslint.org/docs/rules/no-negated-condition
     *
     * if-elseの条件に否定演算子を用いることを許容する
     *
     * ok:
     *
     *     if (!a) {
     *       //
     *     }
     *     else {
     *       //
     *     }
     *
     */
    'no-negated-condition': 'off',

    /**
     * http://eslint.org/docs/rules/no-nested-ternary
     *
     * ネストした三項演算子を警告する
     *
     * warn:
     *
     *     let foo = a ? b : c === d ? e : f;
     *
     */
    'no-nested-ternary': 'warn',

    /**
     * http://eslint.org/docs/rules/no-new-object
     *
     * `new Object()`を警告する
     *
     * warn:
     *
     *     let obj = new Object();
     *
     */
    'no-new-object': 'warn',

    /**
     * http://eslint.org/docs/rules/no-plusplus
     *
     * `++`、`--`演算子を許容する
     *
     * ok:
     *
     *     let i = 0;
     *     i++;
     *    /
    'no-plusplus': 'off',

    /**
     * http://eslint.org/docs/rules/no-restricted-syntax
     *
     * ASTのノードタイプによるブラックリストを設定しない
     *
     */
    'no-restricted-syntax': 'off',

    /**
     * http://eslint.org/docs/rules/no-spaced-func
     *
     * 関数実行の`()`の前にスペースがある場合に警告する
     *
     * warn:
     *
     *     fn ();
     *
     */
    'no-spaced-func': 'warn',

    /**
     * http://eslint.org/docs/rules/no-ternary
     *
     * 三項演算子を許容する
     *
     * ok:
     *
     *     let foo = a ? b : c;
     *
     */
    'no-ternary': 'off',

    /**
     * http://eslint.org/docs/rules/no-trailing-spaces
     *
     * 行の末尾のスペースがあった場合に警告する
     *
     */
    'no-trailing-spaces': 'warn',

    /**
     * http://eslint.org/docs/rules/no-underscore-dangle
     *
     * アンダースコアつきの変数名を許容する
     *
     * ok:
     *
     *     let _foo = 'bar';
     *
     */
    'no-underscore-dangle': 'off',

    /**
     * http://eslint.org/docs/rules/no-unneeded-ternary
     *
     * 不要な条件式を警告する
     *
     * warn:
     *
     *     let foo = bar === 'baz' ? true : false;
     *
     * ok:
     *
     *     let foo = bar === 'baz';
     *
     */
    'no-unneeded-ternary': 'warn',

    /**
     * http://eslint.org/docs/rules/no-whitespace-before-property
     *
     * プロパティアクセスのドットの前後にスペースがあった場合に警告する
     *
     * warn:
     *
     *     obj. foo .bar();
     *
     * ok:
     *
     *     obj
     *       .foo
     *       .bar();
     *
     */
    'no-whitespace-before-property': 'warn',

    /**
     * http://eslint.org/docs/rules/object-curly-spacing
     *
     * オブジェクトのブラケットの最初と最後にスペースがない場合に警告する
     *
     * warn:
     *
     *     let foo = {bar: 'baz'};
     *
     * ok:
     *
     *     let foo = { bar: 'baz' };
     *
     */
    'object-curly-spacing': ['warn', 'always'],

    /**
     * http://eslint.org/docs/rules/one-var
     *
     * 変数宣言を一回で行うか、複数に分けて行うかの制限はしない
     *
     * ok:
     *
     *     function foo() {
     *       let a;
     *       let b;
     *     }
     *
     *     function bar() {
     *       let a, b;
     *     }
     *
     */
    'one-var': 'off',

    /**
     * http://eslint.org/docs/rules/one-var-declaration-per-line
     *
     * 変数宣言を一行で複数行うことを許容する
     *
     * ok:
     *
     *     let foo, bar, baz;
     *
     */
    'one-var-declaration-per-line': 'off',

    /**
     * http://eslint.org/docs/rules/operator-assignment
     *
     * `+=`などの演算子を許容する
     *
     * ok:
     *
     *     x += 1;
     *
     */
    'operator-assignment': 'off',

    /**
     * http://eslint.org/docs/rules/operator-linebreak
     *
     * 演算子間の改行スタイルを強制しない
     *
     * ok:
     *
     *     let foo = x +
     *               y +
     *               z;
     *
     *     let foo = x
     *               + y
     *               + z;
     *
     */
    'operator-linebreak': 'off',

    /**
     * http://eslint.org/docs/rules/padded-blocks
     *
     * ブロックの最初の行、最後の行に空白がある場合に警告する
     *
     * warn:
     *
     *     if (x) {
     *
     *       console.log(x);
     *
     *     }
     *
     */
    'padded-blocks': ['warn', 'never'],

    /**
     * http://eslint.org/docs/rules/quote-props
     *
     * ok:
     *
     *     let foo = { bar: 'xxx' };
     *     let foo = { 'bar': 'xxx' };
     *     let foo = {
     *       bar: 'xxx',
     *       'bar-baz': 'xxx',
     *     };
     *
     */
    'quote-props': 'off',

    /**
     * http://eslint.org/docs/rules/quotes
     *
     * 文字列リテラルにはシングルクオートを使う。ただし内容にシングル
     * クオートを含む場合はダブルクオートを許容する。また、テンプレート
     * リテラルが必要なケースではバッククオートの利用を許容する。
     *
     * warn:
     *
     *     let foo = "bar";
     *     let foo = `bar`;
     *
     * ok:
     *
     *     let foo = 'bar';
     *     let foo = "bar's";
     *     let foo = tag`bar`;
     *     let foo = `bar
     *     baz`;
     *     let foo = `bar${baz}`;
     *
     */
    'quotes': ['warn', 'single', 'avoid-escape'],

    /**
     * http://eslint.org/docs/rules/require-jsdoc
     *
     * JSDocを強制しない
     *
     */
    'require-jsdoc': 'off',

    /**
     * http://eslint.org/docs/rules/semi
     *
     * セミコロンがない場合に警告する
     *
     * warn:
     *
     *     let foo = 'bar'
     *
     */
    'semi': ['warn', 'always'],

    /**
     * http://eslint.org/docs/rules/semi-spacing
     *
     * セミコロンの前に空白がある場合、セミコロンの後ろに空白がない場合に
     * 警告する
     *
     * warn:
     *
     *     foo() ;
     *     foo();bar();
     *
     */
    'semi-spacing': 'warn',

    /**
     * http://eslint.org/docs/rules/sort-imports
     *
     * importの順序を強制しない
     *
     */
    'sort-imports': 'off',

    /**
     * http://eslint.org/docs/rules/sort-vars
     *
     * 変数宣言の順序を強制しない
     *
     */
    'sort-vars': 'off',

    /**
     * http://eslint.org/docs/rules/space-before-blocks
     *
     * ブレースの前に空白がない場合に警告する
     *
     * warn:
     *
     *     if (foo){
     *       //
     *     }
     *
     */
    'space-before-blocks': 'warn',

    /**
     * http://eslint.org/docs/rules/space-before-function-paren
     *
     * 関数の定義時の`(`の前に空白があった場合に警告する
     *
     * warn:
     *
     *     function foo () {
     *       //
     *     }
     *
     * ok:
     *
     *     function foo() {
     *       //
     *     }
     *
     */
    'space-before-function-paren': ['warn', 'never'],

    /**
     * http://eslint.org/docs/rules/space-in-parens
     *
     * `()`の最初と最後に空白があった場合に警告する
     *
     * warn:
     *
     *     foo( a );
     *
     *     if ( x ) {
     *       //
     *     }
     *
     * ok:
     *
     *     foo(a);
     *
     *     if (x) {
     *       //
     *     }
     *
     */
    'space-in-parens': 'warn',

    /**
     * http://eslint.org/docs/rules/space-infix-ops
     *
     * 演算子の間に空白がない場合に警告を出す
     *
     * warn:
     *
     *     let x = 1+1;
     *
     * ok:
     *
     *     let x = 1 + 1;
     *
     */
    'space-infix-ops': 'warn',

    /**
     * http://eslint.org/docs/rules/space-unary-ops
     *
     * 単項演算子の前後に空白があった場合に警告する
     *
     * warn:
     *
     *     let a = ++ x;
     *     let b = + x;
     *
     */
    'space-unary-ops': 'warn',

    /**
     * http://eslint.org/docs/rules/spaced-comment
     *
     * コメントのスペースを強制しない
     *
     * ok:
     *
     *     //comment
     *     // comment
     *
     */
    'spaced-comment': 'off',

    /**
     * http://eslint.org/docs/rules/wrap-regex
     *
     * 正規表現リテラルをカッコで囲まないでよい
     *
     * ok:
     *
     *     /foo/.test(foo);
     *
     */
    'wrap-regex': 'off',

    /**
     * http://eslint.org/docs/rules/arrow-body-style
     *
     * arrow functionでbody部の`{}`を省略するシンタックスを許容する
     *
     * ok:
     *
     *     let foo = () => 'x';
     *     let foo = () => { return 'x'; };
     *
     */
    'arrow-body-style': 'off',

    /**
     * http://eslint.org/docs/rules/arrow-parens
     *
     * arrow functionで`()`を省略するシンタックスを許容する
     *
     * ok:
     *
     *     let foo = x => 2 * x;
     *     let foo = (x) => 2 * x;
     *
     */
    'arrow-parens': 'off',

    /**
     * http://eslint.org/docs/rules/arrow-spacing
     *
     * arrow functionの`=>`の前後にスペースがない場合に警告する
     *
     * warn:
     *
     *     let foo = ()=> {};
     *     let foo = () =>{};
     *
     */
    'arrow-spacing': 'warn',

    /**
     * http://eslint.org/docs/rules/constructor-super
     *
     * 親classがあるclassのconstructorでsuperの呼び出しがない場合に警告する
     *
     * warn:
     *
     *     class Foo extends Bar {
     *       constructor() {
     *       }
     *     }
     *
     */
    'constructor-super': 'warn',

    /**
     * http://eslint.org/docs/rules/generator-star-spacing
     *
     * generatorのアスタリスクは`function`の後にスペースなしでつける
     *
     * warn:
     *
     *     function *foo() {
     *       //
     *     }
     *
     *     function * foo() {
     *       //
     *     }
     *
     * ok:
     *
     *     function* foo() {
     *       //
     *     }
     *
    'generator-star-spacing': ['warn', {
      before: false,
      after: true,
    /
    }],

    /**
     * http://eslint.org/docs/rules/no-class-assign
     *
     * class宣言で作ったclass名に再代入した場合に警告する
     *
     * warn:
     *
     *     class Foo {
     *     }
     *
     *     Foo = 'bar';
     *    /
    'no-class-assign': 'warn',

    /**
     * http://eslint.org/docs/rules/no-confusing-arrow
     *
     * ブレースなしのarrow functionのbodyに三項演算子を利用した場合に
     * 警告する。比較演算子と間違えやすいため。
     *
     * warn:
     *
     *     let x = a => b ? a : b;
     *
     * ok:
     *
     *     let x = a => { return b ? a : b; };
     *
     */
    'no-confusing-arrow': 'warn',

    /**
     * http://eslint.org/docs/rules/no-const-assign
     *
     * constで宣言した変数に再代入した場合にエラーにする
     *
     * error:
     *
     *     const FOO = 'bar';
     *     FOO = 'baz';
     *
     */
    'no-const-assign': 'error',

    /**
     * http://eslint.org/docs/rules/no-dupe-class-members
     *
     * classのメソッド名が重複していた場合に警告する
     *
     * warn:
     *
     *     class Foo {
     *       bar() {}
     *       bar() {}
     *     }
     *
     */
    'no-dupe-class-members': 'warn',

    /**
     * http://eslint.org/docs/rules/no-new-symbol
     *
     * Symbolをnewした場合にエラーにする
     *
     * error:
     *
     *     let foo = new Symbol('foo');
     *
     */
    'no-new-symbol': 'error',

    /**
     * http://eslint.org/docs/rules/no-restricted-imports
     *
     * importできるモジュールを制限しない
     *
     */
    'no-restricted-imports': 'off',

    /**
     * http://eslint.org/docs/rules/no-this-before-super
     *
     * classのconstructorでsuperを呼ぶ前にthisを使った場合にエラーにする
     *
     * error:
     *
     *     class Foo extends Bar {
     *       constructor() {
     *         this.foo = 'bar';
     *         super();
     *       }
     *     }
     *
     */
    'no-this-before-super': 'error',

    /**
     * http://eslint.org/docs/rules/no-useless-constructor
     *
     * 不要なconstructorを警告する
     *
     * warn:
     *
     *     class Foo {
     *       constructor() {
     *       }
     *     }
     *
     *     class Foo extends Bar {
     *       constructor(...args) {
     *         super(...args);
     *       }
     *     }
     *
     */
    'no-useless-constructor': 'warn',

    /**
     * http://eslint.org/docs/rules/no-var
     *
     * varを使った場合に警告する。letかconstを使う。
     *
     * warn:
     *
     *     var foo;
     *
     */
    'no-var': 'warn',

    /**
     * http://eslint.org/docs/rules/object-shorthand
     *
     * warn:
     *
     *     let obj = {
     *       fn: function() {
     *       },
     *     };
     *
     * ok:
     *
     *     let obj = {
     *       x: x,
     *       foo() {},
     *       bar: () => {},
     *     };
     *
     */
    'object-shorthand': ['warn', 'methods'],

    /**
     * http://eslint.org/docs/rules/prefer-arrow-callback
     *
     * callback関数でarrow functionが使えるケースでfunction式を利用
     * している場合に警告を出す
     *
     * warn:
     *
     *     foo(function() {
     *       //
     *     });
     *
     * ok:
     *
     *     foo(() => {
     *       //
     *     });
     *
     */
    'prefer-arrow-callback': 'warn',

    /**
     * http://eslint.org/docs/rules/prefer-const
     *
     * let派
     *
     * ok:
     *
     *     let foo = 'bar';
     *
     */
    'prefer-const': 'off',

    /**
     * http://eslint.org/docs/rules/prefer-reflect
     *
     * Reflectの利用を強制しない
     *
     */
    'prefer-reflect': 'off',

    /**
     * http://eslint.org/docs/rules/prefer-rest-params
     *
     * argumentsの代わりにrestパラメーターを利用する
     *
     * warn:
     *
     *     function foo() {
     *       console.log(arguments);
     *     }
     *
     * ok:
     *
     *     function foo(...args) {
     *       console.log(args);
     *     }
     *
     */
    'prefer-rest-params': 'warn',

    /**
     * http://eslint.org/docs/rules/prefer-spread
     *
     * applyの代わりにspreadパラメータを利用する
     *
     * warn:
     *
     *     Math.max.apply(Math, arr);
     *
     * ok:
     *
     *     Math.max(...arr);
     *
     */
    'prefer-spread': 'warn',

    /**
     * http://eslint.org/docs/rules/prefer-template
     *
     * テンプレートリテラルを利用できるケースではテンプレートリテラルを
     * 利用する
     *
     * warn:
     *
     *     let str = 'Hello, ' + name + '!';
     *
     * ok:
     *
     *     let str = `Hello, ${name}!`;
     *
     */
    'prefer-template': 'warn',

    /**
     * http://eslint.org/docs/rules/require-yield
     *
     * yieldがないgeneratorを警告する
     *
     * warn:
     *
     *     function* foo() {
     *       return 'foo';
     *     }
     *
     */
    'require-yield': 'warn',

    /**
     * http://eslint.org/docs/rules/template-curly-spacing
     *
     * テンプレートリテラル内の変数展開のブレース内の空白を警告する
     *
     * warn:
     *
     *     let str = `Hello, ${ name }!`;
     *
     */
    'template-curly-spacing': 'warn',

    /**
     * http://eslint.org/docs/rules/yield-star-spacing
     *
     * yieldのアスタリスクはyieldの後にスペースなしでつける
     *
     * warn:
     *
     *     yield * foo();
     *     yield *foo();
     *
     * ok:
     *
     *     yield* foo();
     *
     */
    'yield-star-spacing': 'warn',
  },
};
