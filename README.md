# jQuery toggleAttr

A simple jQuery plugin for toggling attributes, similar to how `toggleClass`
works for CSS classes.  Created so that `if-else` constructs like the following:

```javascript
// 'unsavedChanges' is a boolean value
if (unsavedChanges) {
    $('button#save').removeAttr('disabled');
} else {
    $('button#save').attr('disabled', 'disabled');
}
```

can become:

```javascript
$('button#save').toggleAttr('disabled', 'disabled', !unsavedChanges);

```

## Installing

Include the jQuery library first, and then the toggleAttr plugin:

`<script src="toggleattr.jquery.js" type="text/javascript></script>`

## Usage

Call `toggleAttr` on an element:

```javascript
$('#someElement').toggleAttr(<attrName>, <attrValue>, <stateVal>)
```

The only required parameter is `<attrName>` - `<attrValue>` and `<stateVal>` are
both optional.  `<stateVal>` is used for the same purpose as the optional second
parameter to jQuery core's `toggleClass` - if true, it forces the attribute to
be added; if false, it forces the attribute to be removed.

## Examples

### Toggle an attribute with no value:

HTML before:
```
<input type="text" />
```

JS:
```javascript
$('input').toggleAttr('myattr');
```

HTML after:

```
<input type="text" myattr />
```

JS:
```javascript
$('input').toggleAttr('myattr');
```

HTML after:
```
<input type="text" />
```

### Toggle an attribute with a value:

HTML before:
```
<div></div>
```

JS:
```javascript
$('div').toggleAttr('myattr', 'myValue');
```

HTML after:
```
<div myattr="myValue"></div>
```

### Toggle an attribute with the `stateVal` parameter

HTML before:
```
<div myattr="myValue"></div>
```

JS:
```javascript
$('div').toggleAttr('myattr', 'myValue', true);
```

HTML after:
```
<div myattr="myValue"></div>
```

If the `<stateVal>` parameter is true and the attribute already exists, the value
will be updated to `<attrValue>`:

JS:
```javascript
$('div').toggleAttr('myattr', 'myNewValue', true);
```

HTML after:
```
<div myattr="myNewValue"></div>
```

## License

The plugin is licensed under the [MIT License](http://opensource.org/licenses/MIT).

## Changelog

- v1.0.0: First release
