'use strict';

module.exports = {
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: { jsx: true },
  },
  rules: {
    /**
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
     *
     */
    'react/display-name': 'off',

    /**
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
     *
     * ok:
     *
     *     Component.propTypes = {
     *       a: React.PropTypes.any,
     *       r: React.PropTypes.array,
     *       o: React.PropTypes.object,
     *     };
     *
     */
    'react/forbid-prop-types': 'off',

    /**
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
     *
     * Allow dangerouslySetInnerHTML
     *
     * ok:
     *
     *     <div dangerouslySetInnerHTML={{ __html: 'Hello World' }}></div>;
     *
     */
    'react/no-danger': 'off',

    /**
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
     *
     * Disallow deprecated methods
     *
     * warn:
     *
     *     React.render(<MyComponent />, root);
     *     React.findDOMNode(this.refs.foo);
     *     React.renderToString(<MyComponent />);
     *
     */
    'react/no-deprecated': 'warn',

    /**
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
     *
     * warn:
     *
     *       componentDidMount() {
     *         this.setState({ name: 'foo' });
     *       }
     *
     * ok:
     *
     *       componentDidMount() {
     *         store.on('change', state => setState(state));
     *       }
     *
     */
    'react/no-did-mount-set-state': ['warn', 'allow-in-func'],

    /**
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
     *
     * warn:
     *
     *       componentDidUpdate() {
     *         this.setState({ name: 'foo' });
     *       }
     *
     * ok:
     *
     *       componentDidUpdate() {
     *         store.on('change', state => setState(state));
     *       }
     *
     */
    'react/no-did-update-set-state': ['warn', 'allow-in-func'],

    /**
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
     *
     * warn:
     *
     *     this.state.name = 'foo';
     *
     */
    'react/no-direct-mutation-state': 'warn',

    /**
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
     *
     * warn:
     *
     *     if (this.isMounted()) {
     *       //
     *     }
     *
     */
    'react/no-is-mounted': 'warn',

    /**
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
     *
     * ok:
     *
     *     class Foo extends React.Component {
     *       render() {
     *         return <Bar />;
     *       }
     *     }
     *
     *     class Bar extends React.Component {
     *       render() {
     *       }
     *     }
     *
     */
    'react/no-multi-comp': 'off',

    /**
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
     *
     * ok:
     *
     *     this.setState({ name: 'foo' });
     *
     */
    'react/no-set-state': 'off',

    /**
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
     *
     * ok:
     *
     *     componentDidMount() {
     *       var foo = this.refs.foo;
     *     }
     *
     *     render: function() {
     *       return <div ref="foo"></div>;
     *     }
     *
     */
    'react/no-string-refs': 'off',

    /**
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
     *
     * warn:
     *
     *     render() {
     *       return <div class="foo"></div>;
     *     }
     *
     * ok:
     *
     *     render() {
     *       return <div className="foo"></div>;
     *     }
     *
     */
    'react/no-unknown-property': 'warn',

    /**
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md
     *
     * warn:
     *
     *     let Foo = React.createClass({
     *     });
     *
     * ok:
     *
     *     class Foo extends React.Component {
     *     }
     *
     */
    'react/prefer-es6-class': 'warn',

    /**
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
     *
     * ok:
     *
     *     class Component extends React.Component {
     *       render() {
     *         return <div>this.props.name</div>;
     *       }
     *     }
     *
     */
    'react/prefer-stateless-function': 'off',

    /**
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
     *
     * ok:
     *
     *     class Foo extends React.Component {
     *       render() {
     *         return (
     *           <div>
     *             {this.props.firstName}
     *             {this.props.lastName}
     *           </div>;
     *         );
     *       }
     *     }
     *
     *     Foo.propTypes = {
     *       firstName: React.PropTypes.string,
     *     };
     *
     */
    'react/prop-types': 'off',

    /**
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
     *
     * warn:
     *
     *     let foo = <div>foo</div>;
     *
     * ok:
     *
     *     import React from 'react';
     *     let foo = <div>foo</div>;
     *
     */
    'react/react-in-jsx-scope': 'warn',

    /**
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-extension.md
     *
     * ok:
     *
     *     let Foo = require('./foo.jsx');
     *     let Foo = require('./foo.js');
     *     let Foo = require('./foo');
     *
     */
    'react/require-extension': 'warn',

    /**
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
     *
     * warn:
     *
     *     <Foo></Foo>;
     *
     * ok:
     *
     *     <Foo>foo</Foo>;
     *     <Foo />;
     *     <div></div>;
     *
     */
    'react/self-closing-comp': 'warn',

    /**
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
     *
     */
    'react/sort-comp': 'off',

    /**
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
     *
     */
    'react/sort-prop-types': 'off',

    /**
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/wrap-multilines.md
     *
     * ok:
     *
     *     let foo = <Foo
     *       bar="x"
     *       baz="y"
     *     />;
     *
     */
    'react/wrap-multilines': 'off',

    /**
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
     *
     * warn:
     *
     *     <Foo bar />;
     *
     * ok:
     *
     *     <Foo bar={true} />;
     *
     */
    'react/jsx-boolean-value': ['warn', 'always'],

    /**
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
     *
     * ok:
     *
     *     <Foo
     *       a="b"
     *       />
     *
     *     <Foo
     *       a="b" />
     *
     */
    'react/jsx-closing-bracket-location': 'off',

    /**
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
     *
     * warn:
     *
     *     <Foo x={ bar } />
     *
     * ok:
     *
     *     <Foo x={bar} />
     *
     */
    'react/jsx-curly-spacing': 'warn',

    /**
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
     *
     * warn:
     *
     *     <Foo bar = "x" />
     *
     * ok:
     *
     *     <Foo bar="x" />
     *
     */
    'react/jsx-equals-spacing': 'warn',

    /**
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
     *
     * ok:
     *
     *     <Foo handleChange={this.handleChange} />
     *     <Foo onChange={this.componentChanged} />
     *     <Foo onChange={this.handleChange} />
     *
     */
    'react/jsx-handler-names': 'off',

    /**
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
     *
     * warn:
     *
     *     <Foo
     *         bar="baz"
     *     />
     *
     *     <Foo
     *     bar="baz"
     *     />
     *
     * ok:
     *
     *     <Foo
     *       bar="baz"
     *     />
     *
     */
    'react/jsx-indent-props': ['warn', 2],

    /**
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
     *
     * warn:
     *
     *     <div>
     *     <p>foo</p>
     *     </div>
     *
     *     <div>
     *         <p>foo</p>
     *     </div>
     *
     * ok:
     *
     *     <div>
     *       <p>foo</p>
     *     </div>
     *
     */
    'react/jsx-indent': ['warn', 2],

    /**
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
     *
     * warn:
     *
     *     let items = arr.map(x => <Foo x={x} />);
     *
     * ok:
     *
     *     let items = arr.map(x => <Foo key={x.id} x={x} />);
     *
     */
    'react/jsx-key': 'warn',

    /**
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
     *
     * ok:
     *
     *     <Foo a="b" c="d" e="f" g="h" />
     *
     */
    'react/jsx-max-props-per-line': 'off',

    /**
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
     *
     * ok:
     *
     *     <div onClick={this._handleClick.bind(this)}></div>
     *     <div onClick={this._handleClick}></div>
     *     <div onClick={() => console.log('Hello!'))}></div>
     *
     */
    'react/jsx-no-bind': 'off',

    /**
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
     *
     * warn:
     *
     *     <Foo bar="x" bar="y" />
     *
     */
    'react/jsx-no-duplicate-props': 'warn',

    /**
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
     *
     * ok:
     *
     *     <div>foo</div>
     *
     */
    'react/jsx-no-literals': 'off',

    /**
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
     *
     * warn:
     *
     *     let foo = <Foo />;
     *
     * ok:
     *
     *     import Foo from './foo';
     *     let foo = <Foo />;
     *
     */
    'react/jsx-no-undef': 'warn',

    /**
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
     *
     * warn:
     *
     *     <FOO />
     *     <Foo_Bar />
     *
     * ok:
     *
     *     <Foo />
     *     <FooBar />
     *
     */
    'react/jsx-pascal-case': 'warn',

    /**
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
     *
     * ok:
     *
     *     <Foo a="x" b="x" c="x" />
     *     <Foo c="x" a="x" b="x" />
     *
     */
    'react/jsx-sort-props': 'off',

    /**
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md
     *
     * warn:
     *
     *     <Foo/>
     *     <Foo x="y"/>
     *
     * ok:
     *
     *     <Foo />
     *     <Foo x="y" />
     *
     */
    'react/jsx-space-before-closing': 'warn',

    /**
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
     *
     * warn:
     *
     *     import ReactDOM from 'react-dom';
     *     ReactDOM.render(<div>foo</div>, document.getElementById('app'));
     *
     * ok:
     *
     *     import React from 'react';
     *     import ReactDOM from 'react-dom';
     *     ReactDOM.render(<div>foo</div>, document.getElementById('app'));
     *
     */
    'react/jsx-uses-react': 'warn',

    /**
     * https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
     *
     */
    'react/jsx-uses-vars': 'warn',
  },
};
