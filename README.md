# vue-nested-table
> 🤡🤡🤡 a lightweight and high quality nested table component for Vue 2.x 🎩

## Installation
```bash
    npm install vue-nested-table -S
    # or
    yarn add vue-nested-table
```

## Usage
1. Register as a global componennt for your project.
```js
    import Vue from 'vue'
    import VueNestedTable from 'vue-nested-table'

    Vue.use(VueNestedTable) // <nested-table></nested-table>
```

2. As a sub component of a specific view.
```js
    import NestedTable from 'vue-nested-table'

    export {
        components:{
            NestedTable
        }
    }
```

## Features

- [ ] Infinite Scroll
- [ ] Header Fixed
- [ ] Custom Render
- [ ] Column Fixed
- [ ] Column Settings
- [ ] Width Draggable
- [ ] Multiple choice
- [ ] Sorting
- [ ] Filter

## Docs & Examples
To check out [live examples](https://github.com/jardenliu/vue-nested-table/tree/master/examples) and docs, visit [vue-nested-table docs](https://www.jarden.vip/vue-nested-table).

## Thanks
...

## LICENSE
[MIT](https://github.com/jardenliu/vue-nested-table/blob/master/LICENSE)