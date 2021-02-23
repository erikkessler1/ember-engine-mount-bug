# ember-engine mount args bug

This repo demonstrates an issue with the `model` arg passed via
`{{mount}}` to an engine where the args are marked as updated on
*every* render making it hard to build a computed based on the model.

See the broken test in [`routeless-engine-demo-test.js`][test]:

```sh
cd packages/ember-engines/
yarn
ember test --filter="can rerender a component in a routeless engine"
```

_Note: this appears to be fixed with ember-source@3.22.0, but impacts
the LTS (3.20)._

[test]: https://github.com/erikkessler1/ember-engine-mount-bug/blob/master/packages/ember-engines/tests/acceptance/routeless-engine-demo-test.js#L19
