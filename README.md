# Toverland

See the current queues
in themepark toverland

## Installation

How to install the toverland package using npm

```bash
npm install toverland
```

## Usage

How to use the toverland package

```javascript
const toverland = require('toverland')
```
```javascript
toverland.queue().then(function(result) {
    console.log(result);
	// containing: Time and Status object for each coaster
})
```
