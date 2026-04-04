# @o.z/utils ⚡
[![npm version](https://img.shields.io/npm/v/@o.z/utils?style=flat-square)](https://www.npmjs.com/package/@o.z/utils)
[![license](https://img.shields.io/npm/l/@o.z/utils?style=flat-square)](https://www.npmjs.com/package/@o.z/utils)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0+-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/z-npm/utils/pulls)

A comprehensive, modular utility library for modern JavaScript/TypeScript development.
Designed for both browser and Node.js environments, it provides lightweight, well-tested helpers for common tasks like fetching, validation, string manipulation, reactivity, and more.

## ✨ Features

- **🔄 Reactive Proxy** – Deeply reactive objects with minimal overhead.
- **🌐 Fetcher** – Promise‑based HTTP client with timeout, error handling, and response parsing.
- **🔍 Validation** – Simple functions to validate URLs, emails, and empty values.
- **🧵 String Utilities** – Convert between camelCase, kebab-case, PascalCase, and truncate strings.
- **⏱️ Task Helpers** – `delay` for easy async pauses.
- **📱 Environment Detection** – Check if code runs in a browser.
- **📦 Modular Exports** – Import only what you need, with full TypeScript support.
- **✅ 100% Test Coverage** – Reliable and production‑ready.

## 📦 Installation

Install via npm, yarn, or pnpm:

```bash
yarn add @o.z/utils
```

```bash
npm install @o.z/utils
```

```bash
pnpm add @o.z/utils
```

## 🚀 Usage

### Basic Import

Import specific functions directly from the main entry point or from subpaths for even smaller bundles.

```typescript
import { isBrowser, delay, toKebabCase } from '@o.z/utils'
```

Or import a whole module:

```typescript
import * as validate from '@o.z/utils/validate'
import * as fetcher from '@o.z/utils/fetcher'
```

### Reactive Proxy

Create deeply reactive objects that trigger a callback on any change.

```typescript
import { makeReactive } from '@o.z/utils/proxy'

const state = makeReactive({ count: 0, user: { name: 'Zero' } }, () => {
  console.log('State changed!')
})

state.count = 1          // logs 'State changed!'
state.user.name = 'Red'  // logs 'State changed!'
state.count = 1          // no log (value unchanged)
```

### HTTP Fetcher

Perform type‑safe HTTP requests with automatic parsing and error handling.

```typescript
import { get, post } from '@o.z/utils/fetcher'

interface User {
  id: number
  name: string
}

// GET request
const result = await get<User>('https://api.example.com/users/1')
if (result.success) {
  console.log(result.data.name)
} else {
  console.error(result.error) // standardized reason: 'timeout', 'network-error', etc.
}

// POST with JSON body
const postResult = await post('https://api.example.com/users', {
  body: JSON.stringify({ name: 'New User' }),
  headers: { 'Content-Type': 'application/json' }
})
```

### Validation

Quickly validate common data types.

```typescript
import { isValidUrl, isValidEmail, isNotEmpty } from '@o.z/utils/validate'

isValidUrl('https://example.com')      // true
isValidEmail('user@domain.com')        // true
isNotEmpty('')                          // false
isNotEmpty({ key: 'value' })            // true
```

### String Helpers

Transform and manipulate strings.

```typescript
import { toKebabCase, toCamelCase, toPascalCase, truncate } from '@o.z/utils/string'

toKebabCase('backgroundColor')          // 'background-color'
toCamelCase('my-variable-name')         // 'myVariableName'
toPascalCase('hello-world')             // 'HelloWorld'
truncate('Long text here', 8)           // 'Long tex...'
```

### Task Utilities

Simple async helpers.

```typescript
import { delay } from '@o.z/utils/task'

await delay(1000) // waits 1 second
```

### Environment Detection

Know where your code is running.

```typescript
import { isBrowser } from '@o.z/utils/detect'

if (isBrowser) {
  // Safe to use window, document, etc.
  document.querySelector('#app')
} else {
  // Node.js / server environment
}
```

## 📚 API Reference

For detailed documentation of all functions and types, please refer to the [API documentation](docs/api/README.md).  
The docs are generated with TypeDoc and provide comprehensive descriptions, examples, and type information.

## 🧪 Testing

The library is thoroughly tested with Vitest. Run tests with:

```bash
yarn test          # run once
yarn test:ui       # run with interactive UI
yarn test:coverage # generate coverage report
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to check the [issues page](https://github.com/z-npm/utils/issues) and open a pull request.

Please ensure your code passes linting and tests.

## License and AI Training
This project is licensed under the GNU General Public License v3.0 (GPLv3).

The authors of this software consider the use of this code, including its source code, documentation, and any other project artifacts, for the training of artificial intelligence (AI) systems (including but not limited to machine learning, large language models, and other AI technologies) to be creating a derivative work. As such, any entity using this code for such purposes must comply with the terms of the GPLv3. This includes, but is not limited to, making the entire source code of the AI system that uses this code available under the same GPLv3 license.

If you wish to use this code for AI training without being subject to the GPLv3, please contact the authors to negotiate a separate license.

---

**Maintained by [Zero Red](https://github.com/zero-red-dev)**
If you find this library useful, consider [sponsoring](https://github.com/sponsors/zero-red-dev) the maintainer.

