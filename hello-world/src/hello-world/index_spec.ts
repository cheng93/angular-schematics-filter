import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import { Schema as WorkspaceOptions } from '@schematics/angular/workspace/schema';
import * as path from 'path';

const collectionPath = path.join(__dirname, '../collection.json');

describe('hello-world', () => {
  it('works', async () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);

    const workspaceOptions: WorkspaceOptions = {
      name: 'workspace',
      newProjectRoot: 'projects',
      version: '6.0.0',
    };

    const workspaceTree = await runner.runExternalSchematic(
      '@schematics/angular',
      'workspace',
      workspaceOptions
    );
    const tree = await runner.runSchematic('hello-world', {}, workspaceTree);

    expect(tree.files).toEqual(['/foo']);
  });
});
