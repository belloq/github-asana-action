# Github-Asana action

## Prerequisites
- Asana account with the appropriate privileges
- A Task URL in the PR

## Input variables

| Input parameter    | Description                     | Default |
|--------------------|---------------------------------|---------|
| asana-secret       | Asana Personal Access Token     |         |
| action             | The action name to be performed |         |
| comment-text       | Comment text                    |         |
| comment-pinned     | Comment is pinned               | false   |
| custom-field-id    | Custom field id                 |         |
| custom-field-value | Custom field value              |         |

## Available actions

### `add-comment`
Add comment to an Asana task

### `update-custom-field`
Update a custom field of an Asana task

## Examples

```
- uses: belloq/github-asana-action@main
  with:
    asana-secret: ${{ secrets.ASANA_SECRET }}
    action: 'add-comment'
    comment-text: 'Test comment'
```

```
- uses: belloq/github-asana-action@main
  with:
    asana-secret: ${{ secrets.ASANA_SECRET }}
    action: 'update-custom-field'
    custom-field-id: '123456789'
    custom-field-value: `Test`
```

## Dev

> First, you'll need to have a reasonably modern version of `node` handy. This won't work with versions older than 9, for instance.

Install the dependencies  
```bash
$ npm install
```

Build the typescript and package it for distribution
```bash
$ npm run build && npm run package
```

Run the tests :heavy_check_mark:  
```bash
$ npm test

 PASS  ./index.test.js
  ✓ throws invalid number (3ms)
  ✓ wait 500 ms (504ms)
  ✓ test runs (95ms)

...
```
