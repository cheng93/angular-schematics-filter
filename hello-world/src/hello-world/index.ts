import { Rule, Tree, chain, filter } from '@angular-devkit/schematics';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function helloWorld(_options: any): Rule {
  return async () => {
    const foo = (t: Tree) => t.create('foo', 'foo');
    const bar = (t: Tree) => t.create('bar', 'bar');

    const ignore = filter((t) => t === '/foo');

    return chain([foo, bar, ignore]);
  };
}
