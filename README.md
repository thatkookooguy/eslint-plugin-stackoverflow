# eslint-plugin-suni

for stackoverflow question

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-suni`:

```
$ npm install eslint-plugin-suni --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-suni` globally.

## Usage

Add `suni` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "suni"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "suni/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





