# LCS Country

`LCS Country` is a lightweight, customizable JavaScript library for accessing and displaying detailed information about countries worldwide. With features for filtering countries, generating HTML lists, and handling country data, `LCS Country` is perfect for applications needing structured country-specific data like regions, currencies, time zones, and more.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Initialization](#initialization)
  - [Options](#options)
  - [Data Retrieval](#data-retrieval)
  - [HTML Generation](#html-generation)
- [Options](#options)
- [Examples](#examples)
- [Callback Handling](#callback-handling)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)

## Installation

Install via npm:

```bash
npm install lcs_country
```

Or include the minified script directly in your HTML:

```html
<script src="https://cdn.jsdelivr.net/npm/lcs_country/dist/lc.min.js"></script>
```

## Usage

### Initialization

To use `LCS Country`, import or reference it in your project and configure it with options tailored to your needs.

```javascript
const countryData = lcsCountry({
    exception: ["united_states", "canada"],
    only: ["nigeria", "ghana", "kenya"],
    purpose: "input",
    getData: true,
    outputElement: document.getElementById("countryListContainer"),
    onSelectCallback: "onCountrySelect"
});
```

### Options

#### `exception`
- **Type**: `Array<string>`
- **Default**: `[]`
- **Description**: List of country codes to exclude from the generated list.

#### `only`
- **Type**: `Array<string>`
- **Default**: `[]`
- **Description**: List of country codes to exclusively include in the generated list.

#### `purpose`
- **Type**: `string`
- **Default**: `"extraction"`
- **Description**: Set the purpose to either `"input"` (for HTML output) or `"extraction"` (for data retrieval). 
  - **Note**: If `"input"` is chosen, both data and HTML output can be generated if `getData` is set to `true`. For `"extraction"`, only data is returned.

#### `getData`
- **Type**: `boolean`
- **Default**: `true`
- **Description**: Determines if the country data is returned. This option is flexible for both `"input"` and `"extraction"` purposes:
  - For `"extraction"`: must be set to `true`.
  - For `"input"`: setting `getData` to `true` will return both data and HTML output.

#### `outputElement`
- **Type**: `HTMLElement|null`
- **Default**: `null`
- **Description**: The HTML element to output to, required for `"input"` purpose.

#### `onSelectCallback`
- **Type**: `string|null`
- **Default**: `null`
- **Description**: Name of a function to call when a user selects a country (only works for `"input"` purpose).

### Data Retrieval

To retrieve data only, set `purpose` to `"extraction"` and ensure `getData` is `true` (default).

```javascript
const countryData = lcsCountry({
    purpose: "extraction",
});
console.log(countryData);
```

### HTML Generation

To generate an HTML list of countries, set `purpose` to `"input"` and provide an `outputElement`. You can also set `getData` to `true` to retrieve country data along with HTML output.

```javascript
lcsCountry({
    purpose: "input",
    getData: true,
    outputElement: document.getElementById("countryListContainer"),
    onSelectCallback: "onCountrySelect"
});
```

## Examples

1. **Exclude Specific Countries**
   ```javascript
   lcsCountry({
       exception: ["united_states", "canada"],
       purpose: "input",
       outputElement: document.getElementById("countryListContainer")
   });
   ```

2. **Generate a Selectable List with Callback**
   ```javascript
   lcsCountry({
       only: ["nigeria", "ghana", "kenya"],
       purpose: "input",
       outputElement: document.getElementById("countryListContainer"),
       onSelectCallback: "handleCountrySelection"
   });
   ```

3. **Data Extraction for Specific Countries**
   ```javascript
   const countryData = lcsCountry({
       only: ["france", "germany"],
       purpose: "extraction",
       getData: true
   });
   console.log(countryData);
   ```

## Callback Handling

For `onSelectCallback`, provide the name of a function available in the global scope. This function will execute whenever a country in the generated list is selected.

```javascript
function handleCountrySelection() {
    console.log("Country selected!");
}
```

### Example with Callback:

```javascript
lcsCountry({
    purpose: "input",
    outputElement: document.getElementById("countryListContainer"),
    onSelectCallback: "handleCountrySelection"
});
```

## Browser Support

`LCS Country` is compatible with all modern browsers and does not require additional dependencies.

## Contributing

Feel free to open issues and submit pull requests for any new features or fixes. Please ensure that your code adheres to the existing style and includes necessary tests.

## License

This library is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.