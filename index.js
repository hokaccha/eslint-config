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
     */
    'comma-dangle': ['warn', 'always-multiline'],

    /**
     * http://eslint.org/docs/rules/no-cond-assign
     *
     * warn:
     *
     *     if (x = 1) {
     *       //
     *     }
     *
     *     while ((a = 1)) {
     *       //
     *     }
     */
    'no-cond-assign': ['warn', 'always'],

    /**
     * http://eslint.org/docs/rules/no-console
     *
     * ok:
     *
     *     console.log('foo');
     *     console.error('bar');
     */
    'no-console': 'off',

    /**
     * http://eslint.org/docs/rules/no-constant-condition
     *
     * warn:
     *
     *     if (true) {
     *       //
     *     }
     *
     *     while(1) {
     *       //
     *     }
     *
     * ok:
     *
     *     if (x) {
     *       //
     *     }
     *
     *     while(a > 10) {
     *       //
     *     }
     */
    'no-constant-condition': 'warn',

    /**
     * http://eslint.org/docs/rules/no-control-regex
     *
     * warn:
     *
     *     let re = /\\x1f/;
     */
    'no-control-regex': 'warn',

    /**
     * http://eslint.org/docs/rules/no-debugger
     *
     * warn:
     *
     *     debugger;
     */
    'no-debugger': 'warn',

    /**
     * http://eslint.org/docs/rules/no-dupe-args
     *
     * error:
     *
     *     function foo(a, b, a) {
     *       console.log(a);
     *     }
     */
    'no-dupe-args': 'error',

    /**
     * http://eslint.org/docs/rules/no-dupe-keys
     *
     * warn:
     *
     *     let foo = {
     *       a: 'b',
     *       a: 'c',
     *     };
     */
    'no-dupe-keys': 'warn',

    /**
     * http://eslint.org/docs/rules/no-duplicate-case
     *
     * warn:
     *
     *     switch (x) {
     *       case 1:
     *         // ...
     *       case 1:
     *         // ...
     *     }
     */
    'no-duplicate-case': 'warn',

    /**
     * http://eslint.org/docs/rules/no-empty
     *
     * warn:
     *
     *     if (x) {
     *     }
     *
     * ok:
     *
     *     try {
     *       // do something
     *     }
     *     catch (err) {
     *       // do nothing
     *     }
     */
    'no-empty': 'warn',

    /**
     * http://eslint.org/docs/rules/no-empty-character-class
     *
     * warn:
     *
     *     let re = /abc[]/;
     */
    'no-empty-character-class': 'warn',

    /**
     * http://eslint.org/docs/rules/no-ex-assign
     *
     * warn:
     *
     *     try {
     *       //
     *     }
     *     catch (err) {
     *       err = 'foo';
     *     }
     */
    'no-ex-assign': 'warn',

    /**
     * http://eslint.org/docs/rules/no-extra-boolean-cast
     *
     * warn:
     *
     *     if (!!foo) {
     *       // ...
     *     }
     *
     *     let foo = !!foo ? 'a' : 'b';
     */
    'no-extra-boolean-cast': 'warn',

    /**
     * http://eslint.org/docs/rules/no-extra-parens
     *
     * warn:
     *
     *     let foo = (function() { return 1; });
     */
    'no-extra-parens': ['warn', 'functions'],

    /**
     * http://eslint.org/docs/rules/no-extra-semi
     *
     * warn:
     *
     *     let foo = 'bar';;
     *
     *     function foo() {
     *       //
     *     };
     */
    'no-extra-semi': 'warn',

    /**
     * http://eslint.org/docs/rules/no-func-assign
     *
     * warn:
     *
     *     function foo() {
     *       //
     *     }
     *
     *     foo = 'bar';
     */
    'no-func-assign': 'warn',

    /**
     * http://eslint.org/docs/rules/no-inner-declarations
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
     */
    'no-inner-declarations': ['warn', 'both'],

    /**
     * http://eslint.org/docs/rules/no-invalid-regexp
     *
     * error:
     *
     *     let re = new RegExp('[');
     */
    'no-invalid-regexp': 'error',

    /**
     * http://eslint.org/docs/rules/no-irregular-whitespace
     *
     * No irregular whitespace
     */
    'no-irregular-whitespace': 'warn',

    /**
     * http://eslint.org/docs/rules/no-negated-in-lhs
     *
     * error:
     *
     *     if (!a in b) {
     *       //
     *     }
     *
     * ok:
     *
     *     if (!(a in b)) {
     *       //
     *     }
     */
    'no-negated-in-lhs': 'error',

    /**
     * http://eslint.org/docs/rules/no-obj-calls
     *
     * error:
     *
     *     let x = Math();
     *     let y = JSON();
     */
    'no-obj-calls': 'error',

    /**
     * http://eslint.org/docs/rules/no-regex-spaces
     *
     * warn:
     *
     *     let re = /foo   bar/;
     *
     * ok:
     *
     *     let re = /foo {3}bar/;
     */
    'no-regex-spaces': 'warn',

    /**
     * http://eslint.org/docs/rules/no-sparse-arrays
     *
     * warn:
     *
     *     let a = ['foo', , 'bar'];
     */
    'no-sparse-arrays': 'warn',

    /**
     * http://eslint.org/docs/rules/no-unexpected-multiline
     *
     * warn:
     *
     *     let foo = bar
     *     (1 || 2).baz();
     */
    'no-unexpected-multiline': 'warn',

    /**
     * http://eslint.org/docs/rules/no-unreachable
     *
     * warn:
     *
     *     function foo() {
     *       return true;
     *       console.log("done");
     *     }
     */
    'no-unreachable': 'warn',

    /**
     * http://eslint.org/docs/rules/use-isnan
     *
     * warn:
     *
     *     if (foo === NaN) {
     *       //
     *     }
     *
     * ok:
     *
     *     if (isNaN(foo)) {
     *       //
     *     }
     */
    'use-isnan': 'warn',

    /**
     * http://eslint.org/docs/rules/valid-jsdoc
     */
    'valid-jsdoc': 'off',

    /**
     * http://eslint.org/docs/rules/valid-typeof
     *
     * warn:
     *
     *     typeof foo === 'strong';
     */
    'valid-typeof': 'warn',

    /**
     * http://eslint.org/docs/rules/accessor-pairs
     *
     * ok:
     *
     *     let obj = {
     *       set foo(val) {
     *         //
     *       },
     *     };
     *
     *     let obj = {
     *       get foo() {
     *         //
     *       },
     *     };
     */
    'accessor-pairs': 'off',

    /**
     * http://eslint.org/docs/rules/array-callback-return
     *
     * warn:
     *
     *     let arr = [1, 2, 3].map(x => {
     *       x * 2;
     *     });
     */
    'array-callback-return': 'warn',

    /**
     * http://eslint.org/docs/rules/block-scoped-var
     *
     * warn:
     *
     *     if (x) {
     *       var a = 'b';
     *     }
     */
    'block-scoped-var': 'warn',

    /**
     * http://eslint.org/docs/rules/complexity
     */
    'complexity': 'off',

    /**
     * http://eslint.org/docs/rules/consistent-return
     */
    'consistent-return': 'off',

    /**
     * http://eslint.org/docs/rules/curly
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
     */
    'curly': ['warn', 'multi-line'],

    /**
     * http://eslint.org/docs/rules/default-case
     *
     * ok:
     *
     *     switch (foo) {
     *       case x:
     *         bar();
     *         break;
     *
     *       case y:
     *         baz();
     *         break;
     *
     *       // no default
     *     }
     */
    'default-case': 'off',

    /**
     * http://eslint.org/docs/rules/dot-location
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
     */
    'dot-location': ['warn', 'property'],

    /**
     * http://eslint.org/docs/rules/dot-notation
     *
     * warn:
     *
     *     foo['bar'] = 'baz';
     */
    'dot-notation': 'warn',

    /**
     * http://eslint.org/docs/rules/eqeqeq
     *
     * warn:
     *
     *     if (x == 1) {
     *       //
     *     }
     *
     * ok:
     *
     *     if (x === 1) {
     *       //
     *     }
     *
     *     if (x == null) {
     *       //
     *     }
     */
    'eqeqeq': ['warn', 'allow-null'],

    /**
     * http://eslint.org/docs/rules/guard-for-in
     */
    'guard-for-in': 'off',

    /**
     * http://eslint.org/docs/rules/no-alert
     *
     * ok:
     *
     *     window.alert('foo');
     *     window.confirm('foo');
     */
    'no-alert': 'off',

    /**
     * http://eslint.org/docs/rules/no-caller
     *
     * error:
     *
     *     function foo() {
     *       let callee = arguments.callee;
     *     }
     */
    'no-caller': 'error',

    /**
     * http://eslint.org/docs/rules/no-case-declarations
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
     */
    'no-case-declarations': 'warn',

    /**
     * http://eslint.org/docs/rules/no-div-regex
     */
    'no-div-regex': 'off',

    /**
     * http://eslint.org/docs/rules/no-else-return
     */
    'no-else-return': 'off',

    /**
     * http://eslint.org/docs/rules/no-empty-function
     */
    'no-empty-function': 'off',

    /**
     * http://eslint.org/docs/rules/no-empty-pattern
     *
     * warn:
     *
     *     let {} = foo;
     *     let [] = bar;
     */
    'no-empty-pattern': 'warn',

    /**
     * http://eslint.org/docs/rules/no-eq-null
     *
     * ok:
     *
     *     if (x == null) {
     *       //
     *     }
     */
    'no-eq-null': 'off',

    /**
     * http://eslint.org/docs/rules/no-eval
     */
    'no-eval': 'off',

    /**
     * http://eslint.org/docs/rules/no-extend-native
     *
     * warn:
     *
     *     Object.prototype.foo = 'bar';
     */
    'no-extend-native': 'warn',

    /**
     * http://eslint.org/docs/rules/no-extra-bind
     *
     * warn:
     *
     *     let foo = function (x) {
     *       return x;
     *     }.bind(bar);
     */
    'no-extra-bind': 'warn',

    /**
     * http://eslint.org/docs/rules/no-extra-label
     *
     * warn:
     *
     *     A: while (a) {
     *       break A;
     *     }
     */
    'no-extra-label': 'warn',

    /**
     * http://eslint.org/docs/rules/no-fallthrough
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
     */
    'no-fallthrough': 'warn',

    /**
     * http://eslint.org/docs/rules/no-floating-decimal
     *
     * warn:
     *
     *     let x = .5;
     *
     * ok:
     *
     *     let x = 0.5;
     */
    'no-floating-decimal': 'warn',

    /**
     * http://eslint.org/docs/rules/no-implicit-coercion
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
     */
    'no-implicit-coercion': ['warn', {
      number: false,
      string: false,
      allow: ['!!'],
    }],

    /**
     * http://eslint.org/docs/rules/no-implicit-globals
     */
    'no-implicit-globals': 'warn',

    /**
     * http://eslint.org/docs/rules/no-implied-eval
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
     */
    'no-implied-eval': 'warn',

    /**
     * http://eslint.org/docs/rules/no-invalid-this
     *
     * warn:
     *
     *     function foo() {
     *       this.a = 0;
     *     }
     */
    'no-invalid-this': 'warn',

    /**
     * http://eslint.org/docs/rules/no-iterator
     *
     * warn:
     *
     *     foo.__iterator__ = function () {};
     */
    'no-iterator': 'warn',

    /**
     * http://eslint.org/docs/rules/no-labels
     *
     * warn:
     *
     *     label:
     *       if (a) {
     *         break label;
     *       }
     */
    'no-labels': 'warn',

    /**
     * http://eslint.org/docs/rules/no-lone-blocks
     *
     * warn:
     *
     *     {
     *       var foo = 'bar';
     *     }
     */
    'no-lone-blocks': 'warn',

    /**
     * http://eslint.org/docs/rules/no-loop-func
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
     */
    'no-loop-func': 'warn',

    /**
     * http://eslint.org/docs/rules/no-magic-numbers
     */
    'no-magic-numbers': 'off',

    /**
     * http://eslint.org/docs/rules/no-multi-spaces
     *
     * warn:
     *
     *     let arr = [1,  2];
     *
     *     if (foo   === "bar") {
     *       //
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
     */
    'no-multi-spaces': ['warn', {
      exceptions: { VariableDeclarator: true },
    }],

    /**
     * http://eslint.org/docs/rules/no-multi-str
     *
     * warn:
     *
     *     let x = 'Line 1 \
     *              Line 2';
     */
    'no-multi-str': 'warn',

    /**
     * http://eslint.org/docs/rules/no-native-reassign
     *
     * warn:
     *
     *     String = 'foo';
     */
    'no-native-reassign': 'warn',

    /**
     * http://eslint.org/docs/rules/no-new
     *
     * warn:
     *
     *     new Person();
     *
     * ok:
     *
     *     let person = new Person();
     */
    'no-new': 'warn',

    /**
     * http://eslint.org/docs/rules/no-new-func
     *
     * warn:
     *
     *     let x = Function('a', 'b', 'return a + b');
     *     let x = new Function('a', 'b', 'return a + b');
     */
    'no-new-func': 'warn',

    /**
     * http://eslint.org/docs/rules/no-new-wrappers
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
     */
    'no-new-wrappers': 'warn',

    /**
     * http://eslint.org/docs/rules/no-octal
     *
     * error:
     *
     *     let n = 071;
     */
    'no-octal': 'error',

    /**
     * http://eslint.org/docs/rules/no-octal-escape
     *
     * error:
     *
     *     let s = '\045';
     */
    'no-octal-escape': 'error',

    /**
     * http://eslint.org/docs/rules/no-param-reassign
     *
     * ok:
     *
     *     function(a) {
     *       a = 'b';
     *     }
     */
    'no-param-reassign': 'off',

    /**
     * http://eslint.org/docs/rules/no-proto
     *
     * warn:
     *
     *     let proto = obj.__proto__;
     *
     * ok:
     *
     *     let proto = Object.getPrototypeOf(obj);
     */
    'no-proto': 'warn',

    /**
     * http://eslint.org/docs/rules/no-redeclare
     *
     * warn:
     *
     *     let foo = 'a';
     *     let foo = 'b';
     */
    'no-redeclare': 'warn',

    /**
     * http://eslint.org/docs/rules/no-return-assign
     *
     * warn:
     *
     *     return foo = 'a';
     *     return (foo = bar + 1);
     */
    'no-return-assign': ['warn', 'always'],

    /**
     * http://eslint.org/docs/rules/no-script-url
     *
     * warn:
     *
     *     location.href = 'javascript:void(0)';
     */
    'no-script-url': 'warn',

    /**
     * http://eslint.org/docs/rules/no-self-assign
     *
     * warn:
     *
     *     foo = foo;
     *     [bar, baz] = [bar, qiz];
     *
     * ok:
     *
     *     foo = foo || 'bar';
     */
    'no-self-assign': 'warn',

    /**
     * http://eslint.org/docs/rules/no-self-compare
     *
     * warn:
     *
     *     if (x === x) {
     *       // ...
     *     }
     */
    'no-self-compare': 'warn',

    /**
     * http://eslint.org/docs/rules/no-sequences
     *
     * warn:
     *
     *     if (doSomething(), condition) {
     *       //
     *     }
     */
    'no-sequences': 'warn',

    /**
     * http://eslint.org/docs/rules/no-throw-literal
     *
     * warn:
     *
     *     throw 'error';
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
     */
    'no-unmodified-loop-condition': 'warn',

    /**
     * http://eslint.org/docs/rules/no-unused-expressions
     *
     * warn:
     *
     *     a + 1;
     *
     * ok:
     *
     *     a && b();
     *     a ? b() : c();
     */
    'no-unused-expressions': ['warn', {
      allowShortCircuit: true,
      allowTernary: true,
    }],

    /**
     * http://eslint.org/docs/rules/no-unused-labels
     *
     * warn:
     *
     *     A:
     *     while (x) {
     *       break;
     *     }
     */
    'no-unused-labels': 'warn',

    /**
     * http://eslint.org/docs/rules/no-useless-call
     *
     * warn:
     *
     *     foo.call(null, 1, 2, 3);
     *     foo.apply(null, [1, 2, 3]);
     *     obj.foo.call(obj, 1, 2, 3);
     *     obj.foo.apply(obj, [1, 2, 3]);
     */
    'no-useless-call': 'warn',

    /**
     * http://eslint.org/docs/rules/no-useless-concat
     *
     * warn:
     *
     *     let foo = 'bar' + 'baz';
     */
    'no-useless-concat': 'warn',

    /**
     * http://eslint.org/docs/rules/no-void
     *
     * warn:
     *
     *     let foo = void 0;
     */
    'no-void': 'warn',

    /**
     * http://eslint.org/docs/rules/no-warning-comments
     *
     * ok:
     *
     *     // TODO: ...
     */
    'no-warning-comments': 'off',

    /**
     * http://eslint.org/docs/rules/no-with
     *
     * error:
     *
     *     with (foo) {
     *       //
     *     }
     */
    'no-with': 'error',

    /**
     * http://eslint.org/docs/rules/radix
     *
     * warn:
     *
     *     parseInt(str);
     *
     * ok:
     *
     *     parseInt(str, 10);
     */
    'radix': 'warn',

    /**
     * http://eslint.org/docs/rules/vars-on-top
     *
     * ok:
     *
     *     function foo() {
     *       var a;
     *       a = 1;
     *       var b;
     *     }
     */
    'vars-on-top': 'off',

    /**
     * http://eslint.org/docs/rules/wrap-iife
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
     */
    'wrap-iife': ['warn', 'inside'],

    /**
     * http://eslint.org/docs/rules/yoda
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
     */
    'yoda': ['warn', 'never', { exceptRange: true }],

    /**
     * http://eslint.org/docs/rules/strict
     */
    'strict': 'off',

    /**
     * http://eslint.org/docs/rules/init-declarations
     *
     * ok:
     *
     *     let foo = 1;
     *     let bar;
     */
    'init-declarations': 'off',

    /**
     * http://eslint.org/docs/rules/no-catch-shadow
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
     */
    'no-catch-shadow': 'off',

    /**
     * http://eslint.org/docs/rules/no-shadow-restricted-names
     *
     * warn:
     *
     *     let undefined = null;
     *     function NaN() {
     *       //
     *     }
     */
    'no-shadow-restricted-names': 'warn',

    /**
     * http://eslint.org/docs/rules/no-undef
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
     */
    'no-undef': 'warn',

    /**
     * http://eslint.org/docs/rules/no-undef-init
     *
     * warn:
     *
     *     let foo = undefined;
     *
     * ok:
     *
     *     let foo;
     */
    'no-undef-init': 'warn',

    /**
     * http://eslint.org/docs/rules/no-undefined
     *
     * ok:
     *
     *     function foo(a, b) {
     *       if (b === undefined) {
     *         //
     *       }
     *     }
     */
    'no-undefined': 'off',

    /**
     * http://eslint.org/docs/rules/no-unused-vars
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
     * ok:
     *
     *     function foo(a, b) {
     *       console.log(b);
     *     }
     */
    'no-unused-vars': 'warn',

    /**
     * http://eslint.org/docs/rules/no-use-before-define
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
     */
    'no-use-before-define': 'warn',

    /**
     * http://eslint.org/docs/rules/callback-return
     */
    'callback-return': 'off',

    /**
     * http://eslint.org/docs/rules/global-require
     *
     * ok:
     *
     *     if (foo) {
     *       require('foo');
     *     }
     */
    'global-require': 'off',

    /**
     * http://eslint.org/docs/rules/handle-callback-err
     */
    'handle-callback-err': 'off',

    /**
     * http://eslint.org/docs/rules/no-mixed-requires
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
     */
    'no-mixed-requires': 'warn',

    /**
     * http://eslint.org/docs/rules/no-new-require
     */
    'no-new-require': 'off',

    /**
     * http://eslint.org/docs/rules/no-path-concat
     *
     * warn:
     *
     *     let fullPath = __dirname + '/foo.js';
     *
     * ok:
     *
     *     let fullPath = path.join(__dirname, 'foo.js');
     */
    'no-path-concat': 'warn',

    /**
     * http://eslint.org/docs/rules/no-process-env
     *
     * ok:
     *
     *     if (process.env.NODE_ENV === 'development') {
     *       //
     *     }
     */
    'no-process-env': 'off',

    /**
     * http://eslint.org/docs/rules/no-process-exit
     *
     * ok:
     *
     *     process.exit(0);
     */
    'no-process-exit': 'off',

    /**
     * http://eslint.org/docs/rules/no-restricted-modules
     */
    'no-restricted-modules': 'off',

    /**
     * http://eslint.org/docs/rules/no-sync
     *
     * ok:
     *
     *     fs.existsSync(foo);
     */
    'no-sync': 'off',

    /**
     * http://eslint.org/docs/rules/array-bracket-spacing
     *
     * warn:
     *
     *     let arr = [ 'foo', 'bar' ];
     *
     * ok:
     *
     *     var arr = ['foo', 'bar'];
     */
    'array-bracket-spacing': 'warn',

    /**
     * http://eslint.org/docs/rules/block-spacing
     *
     * warn:
     *
     *     if (x) {return;}
     *
     * ok:
     *
     *     if (x) { return; }
     */
    'block-spacing': 'warn',

    /**
     * http://eslint.org/docs/rules/brace-style
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
     */
    'brace-style': ['warn', 'stroustrup', { allowSingleLine: true }],

    /**
     * http://eslint.org/docs/rules/camelcase
     *
     * ok:
     *
     *     let foo_bar = 'baz';
     *     let fooBar = 'baz';
     */
    'camelcase': 'off',

    /**
     * http://eslint.org/docs/rules/comma-spacing
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
     */
    'comma-spacing': ['warn', {
      before: false,
      after: true,
    }],

    /**
     * http://eslint.org/docs/rules/comma-style
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
     */
    'comma-style': 'warn',

    /**
     * http://eslint.org/docs/rules/computed-property-spacing
     *
     * warn:
     *
     *     let foo = obj[ a ];
     *
     * ok:
     *
     *     let foo = obj[a];
     */
    'computed-property-spacing': 'warn',

    /**
     * http://eslint.org/docs/rules/consistent-this
     *
     * ok:
     *
     *     let self = this;
     *     let _this = this;
     *     let that = this;
     */
    'consistent-this': 'warn',

    /**
     * http://eslint.org/docs/rules/eol-last
     */
    'eol-last': 'warn',

    /**
     * http://eslint.org/docs/rules/func-names
     *
     * ok:
     *
     *     let foo = function() {
     *       //
     *     };
     *
     *     setTimeout(function() {
     *       //
     *     }, 100);
     */
    'func-names': 'off',

    /**
     * http://eslint.org/docs/rules/func-style
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
     */
    'func-style': 'off',

    /**
     * http://eslint.org/docs/rules/id-blacklist
     */
    'id-blacklist': 'off',

    /**
     * http://eslint.org/docs/rules/id-length
     */
    'id-length': 'off',

    /**
     * http://eslint.org/docs/rules/id-match
     */
    'id-match': 'off',

    /**
     * http://eslint.org/docs/rules/indent
     */
    'indent': ['warn', 2],

    /**
     * http://eslint.org/docs/rules/jsx-quotes
     */
    'jsx-quotes': ['warn', 'prefer-double'],

    /**
     * http://eslint.org/docs/rules/key-spacing
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
     */
    'key-spacing': ['warn', {
      beforeColon: false,
      afterColon: true,
      mode: 'minimum',
    }],

    /**
     * http://eslint.org/docs/rules/keyword-spacing
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
     */
    'keyword-spacing': 'warn',

    /**
     * http://eslint.org/docs/rules/linebreak-style
     */
    'linebreak-style': ['warn', 'unix'],

    /**
     * http://eslint.org/docs/rules/lines-around-comment
     */
    'lines-around-comment': 'off',

    /**
     * http://eslint.org/docs/rules/max-depth
     */
    'max-depth': 'off',

    /**
     * http://eslint.org/docs/rules/max-len
     */
    'max-len': 'off',

    /**
     * http://eslint.org/docs/rules/max-nested-callbacks
     */
    'max-nested-callbacks': 'off',

    /**
     * http://eslint.org/docs/rules/max-params
     */
    'max-params': 'off',

    /**
     * http://eslint.org/docs/rules/max-statements
     */
    'max-statements': 'off',

    /**
     * http://eslint.org/docs/rules/new-cap
     *
     * warn:
     *
     *     let foo = new foo();
     *
     * ok:
     *
     *     let foo = new Foo();
     */
    'new-cap': 'warn',

    /**
     * http://eslint.org/docs/rules/new-parens
     *
     * warn:
     *
     *     let foo = new Foo;
     *
     * ok:
     *
     *     let foo = new Foo();
     */
    'new-parens': 'warn',

    /**
     * http://eslint.org/docs/rules/newline-after-var
     *
     * ok:
     *
     *     let foo = 'bar';
     *     console.log(foo);
     */
    'newline-after-var': 'off',

    /**
     * http://eslint.org/docs/rules/newline-before-return
     *
     * ok:
     *
     *     let foo = 'bar';
     *     return foo;
     */
    'newline-before-return': 'off',

    /**
     * http://eslint.org/docs/rules/newline-per-chained-call
     *
     * ok:
     *
     *     _.chain({}).map(foo).filter(bar).value();
     */
    'newline-per-chained-call': 'off',

    /**
     * http://eslint.org/docs/rules/no-array-constructor
     *
     * ok:
     *
     *     let arr = Array(10);
     */
    'no-array-constructor': 'off',

    /**
     * http://eslint.org/docs/rules/no-bitwise
     *
     * warn:
     *
     *     let x = y | z;
     *     let x = y & z;
     *     let x = y ^ z;
     */
    'no-bitwise': 'warn',

    /**
     * http://eslint.org/docs/rules/no-continue
     *
     * ok:
     *
     *     while (x) {
     *       if (y) continue;
     *       //...
     *     }
     */
    'no-continue': 'off',

    /**
     * http://eslint.org/docs/rules/no-inline-comments
     *
     * ok:
     *
     *     let foo = 'bar'; // comment
     */
    'no-inline-comments': 'off',

    /**
     * http://eslint.org/docs/rules/no-lonely-if
     *
     * warn:
     *
     *     if (foo) {
     *       //
     *     }
     *     else {
     *       if (bar) {
     *         //
     *       }
     *     }
     *
     * ok:
     *
     *     if (foo) {
     *       //
     *     }
     *     else if (bar) {
     *       //
     *     }
     */
    'no-lonely-if': 'warn',

    /**
     * http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
     */
    'no-mixed-spaces-and-tabs': 'warn',

    /**
     * http://eslint.org/docs/rules/no-multiple-empty-lines
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
     * ok:
     *
     *     if (!a) {
     *       //
     *     }
     *     else {
     *       //
     *     }
     */
    'no-negated-condition': 'off',

    /**
     * http://eslint.org/docs/rules/no-nested-ternary
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
     * warn:
     *
     *     let obj = new Object();
     *
     */
    'no-new-object': 'warn',

    /**
     * http://eslint.org/docs/rules/no-plusplus
     *
     * ok:
     *
     *     let i = 0;
     *     i++;
     */
    'no-plusplus': 'off',

    /**
     * http://eslint.org/docs/rules/no-restricted-syntax
     */
    'no-restricted-syntax': 'off',

    /**
     * http://eslint.org/docs/rules/no-spaced-func
     *
     * warn:
     *
     *     fn ();
     */
    'no-spaced-func': 'warn',

    /**
     * http://eslint.org/docs/rules/no-ternary
     *
     * ok:
     *
     *     let foo = a ? b : c;
     */
    'no-ternary': 'off',

    /**
     * http://eslint.org/docs/rules/no-trailing-spaces
     */
    'no-trailing-spaces': 'warn',

    /**
     * http://eslint.org/docs/rules/no-underscore-dangle
     *
     * ok:
     *
     *     let _foo = 'bar';
     */
    'no-underscore-dangle': 'off',

    /**
     * http://eslint.org/docs/rules/no-unneeded-ternary
     *
     * warn:
     *
     *     let foo = bar === 'baz' ? true : false;
     *
     * ok:
     *
     *     let foo = bar === 'baz';
     */
    'no-unneeded-ternary': 'warn',

    /**
     * http://eslint.org/docs/rules/no-whitespace-before-property
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
     */
    'no-whitespace-before-property': 'warn',

    /**
     * http://eslint.org/docs/rules/object-curly-spacing
     *
     * warn:
     *
     *     let foo = {bar: 'baz'};
     *
     * ok:
     *
     *     let foo = { bar: 'baz' };
     */
    'object-curly-spacing': ['warn', 'always'],

    /**
     * http://eslint.org/docs/rules/one-var
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
     */
    'one-var': 'off',

    /**
     * http://eslint.org/docs/rules/one-var-declaration-per-line
     *
     * ok:
     *
     *     let foo, bar, baz;
     */
    'one-var-declaration-per-line': 'off',

    /**
     * http://eslint.org/docs/rules/operator-assignment
     *
     * ok:
     *
     *     x += 1;
     */
    'operator-assignment': 'off',

    /**
     * http://eslint.org/docs/rules/operator-linebreak
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
     */
    'operator-linebreak': 'off',

    /**
     * http://eslint.org/docs/rules/padded-blocks
     *
     * warn:
     *
     *     if (x) {
     *
     *       console.log(x);
     *
     *     }
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
     */
    'quote-props': 'off',

    /**
     * http://eslint.org/docs/rules/quotes
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
     */
    'quotes': ['warn', 'single', 'avoid-escape'],

    /**
     * http://eslint.org/docs/rules/require-jsdoc
     */
    'require-jsdoc': 'off',

    /**
     * http://eslint.org/docs/rules/semi
     *
     * warn:
     *
     *     let foo = 'bar'
     */
    'semi': ['warn', 'always'],

    /**
     * http://eslint.org/docs/rules/semi-spacing
     *
     * warn:
     *
     *     foo() ;
     *     foo();bar();
     */
    'semi-spacing': 'warn',

    /**
     * http://eslint.org/docs/rules/sort-imports
     */
    'sort-imports': 'off',

    /**
     * http://eslint.org/docs/rules/sort-vars
     */
    'sort-vars': 'off',

    /**
     * http://eslint.org/docs/rules/space-before-blocks
     *
     * warn:
     *
     *     if (foo){
     *       //
     *     }
     */
    'space-before-blocks': 'warn',

    /**
     * http://eslint.org/docs/rules/space-before-function-paren
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
     */
    'space-before-function-paren': ['warn', 'never'],

    /**
     * http://eslint.org/docs/rules/space-in-parens
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
     */
    'space-in-parens': 'warn',

    /**
     * http://eslint.org/docs/rules/space-infix-ops
     *
     * warn:
     *
     *     let x = 1+1;
     *
     * ok:
     *
     *     let x = 1 + 1;
     */
    'space-infix-ops': 'warn',

    /**
     * http://eslint.org/docs/rules/space-unary-ops
     *
     * warn:
     *
     *     let a = ++ x;
     *     let b = + x;
     */
    'space-unary-ops': 'warn',

    /**
     * http://eslint.org/docs/rules/spaced-comment
     *
     * ok:
     *
     *     //comment
     *     // comment
     */
    'spaced-comment': 'off',

    /**
     * http://eslint.org/docs/rules/wrap-regex
     *
     * ok:
     *
     *     /foo/.test(foo);
     */
    'wrap-regex': 'off',

    /**
     * http://eslint.org/docs/rules/arrow-body-style
     *
     * ok:
     *
     *     let foo = () => 'x';
     *     let foo = () => { return 'x'; };
     */
    'arrow-body-style': 'off',

    /**
     * http://eslint.org/docs/rules/arrow-parens
     *
     * ok:
     *
     *     let foo = x => 2 * x;
     *     let foo = (x) => 2 * x;
     */
    'arrow-parens': 'off',

    /**
     * http://eslint.org/docs/rules/arrow-spacing
     *
     * warn:
     *
     *     let foo = ()=> {};
     *     let foo = () =>{};
     */
    'arrow-spacing': 'warn',

    /**
     * http://eslint.org/docs/rules/constructor-super
     *
     * warn:
     *
     *     class Foo extends Bar {
     *       constructor() {
     *       }
     *     }
     */
    'constructor-super': 'warn',

    /**
     * http://eslint.org/docs/rules/generator-star-spacing
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
     */
    'generator-star-spacing': ['warn', {
      before: false,
      after: true,
    }],

    /**
     * http://eslint.org/docs/rules/no-class-assign
     *
     * warn:
     *
     *     class Foo {
     *     }
     *
     *     Foo = 'bar';
     */
    'no-class-assign': 'warn',

    /**
     * http://eslint.org/docs/rules/no-confusing-arrow
     *
     * warn:
     *
     *     let x = a => b ? a : b;
     *
     * ok:
     *
     *     let x = a => { return b ? a : b; };
     */
    'no-confusing-arrow': 'warn',

    /**
     * http://eslint.org/docs/rules/no-const-assign
     *
     * error:
     *
     *     const FOO = 'bar';
     *     FOO = 'baz';
     */
    'no-const-assign': 'error',

    /**
     * http://eslint.org/docs/rules/no-dupe-class-members
     *
     * warn:
     *
     *     class Foo {
     *       bar() {}
     *       bar() {}
     *     }
     */
    'no-dupe-class-members': 'warn',

    /**
     * http://eslint.org/docs/rules/no-new-symbol
     *
     * error:
     *
     *     let foo = new Symbol('foo');
     */
    'no-new-symbol': 'error',

    /**
     * http://eslint.org/docs/rules/no-restricted-imports
     */
    'no-restricted-imports': 'off',

    /**
     * http://eslint.org/docs/rules/no-this-before-super
     *
     * error:
     *
     *     class Foo extends Bar {
     *       constructor() {
     *         this.foo = 'bar';
     *         super();
     *       }
     *     }
     */
    'no-this-before-super': 'error',

    /**
     * http://eslint.org/docs/rules/no-useless-constructor
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
     */
    'no-useless-constructor': 'warn',

    /**
     * http://eslint.org/docs/rules/no-var
     *
     * warn:
     *
     *     var foo;
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
     */
    'object-shorthand': ['warn', 'methods'],

    /**
     * http://eslint.org/docs/rules/prefer-arrow-callback
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
     */
    'prefer-arrow-callback': 'warn',

    /**
     * http://eslint.org/docs/rules/prefer-const
     *
     * ok:
     *
     *     let foo = 'bar';
     */
    'prefer-const': 'off',

    /**
     * http://eslint.org/docs/rules/prefer-reflect
     */
    'prefer-reflect': 'off',

    /**
     * http://eslint.org/docs/rules/prefer-rest-params
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
     */
    'prefer-rest-params': 'warn',

    /**
     * http://eslint.org/docs/rules/prefer-spread
     *
     * warn:
     *
     *     Math.max.apply(Math, arr);
     *
     * ok:
     *
     *     Math.max(...arr);
     */
    'prefer-spread': 'warn',

    /**
     * http://eslint.org/docs/rules/prefer-template
     *
     * warn:
     *
     *     let str = 'Hello, ' + name + '!';
     *
     * ok:
     *
     *     let str = `Hello, ${name}!`;
     */
    'prefer-template': 'warn',

    /**
     * http://eslint.org/docs/rules/require-yield
     *
     * warn:
     *
     *     function* foo() {
     *       return 'foo';
     *     }
     */
    'require-yield': 'warn',

    /**
     * http://eslint.org/docs/rules/template-curly-spacing
     *
     * warn:
     *
     *     let str = `Hello, ${ name }!`;
     */
    'template-curly-spacing': 'warn',

    /**
     * http://eslint.org/docs/rules/yield-star-spacing
     *
     * warn:
     *
     *     yield * foo();
     *     yield *foo();
     *
     * ok:
     *
     *     yield* foo();
     */
    'yield-star-spacing': 'warn',
  },
};
