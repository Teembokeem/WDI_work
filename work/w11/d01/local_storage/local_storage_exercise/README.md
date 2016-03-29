# Local Storage Pensieve

On the accompanying page we have a [Pensieve][pensieve]: a tool for
storing memories. The only problem is that it's leaking!

### Goals

#### Part 1

Use `localStorage` to persist the data between page refreshes. Use the
[API docs at MDN][mdn-storage-api] to help you.

#### Part 2

1. Add remove buttons to each memory.
  - Attach the following to each `<td>`: `<span class="remove">X</span>`
2. Add a "Clear" button to the Pensieve that removes all of the memories just outside `<table>`.
  - ```
    <p>
      <button class="pure-button button-error" ng-click="vm.clear()">Clear All</button>
    </p>
    ```

<!-- LINKS -->

[pensieve]: https://en.wikibooks.org/wiki/Muggles%27_Guide_to_Harry_Potter/Magic/Pensieve
[mdn-storage-api]: https://developer.mozilla.org/en-US/docs/Web/API/Storage
