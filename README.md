# @lassehaslev/vue-table

> Simple table and logic in Vue2

# Installation
Run ```npm install @lassehaslev/vue-table --save``` in your project folder

## Usage
Use this simple component with [Bulma](https://trello.com/b/BDC3zQvN).
```js
import { Table } from '@lassehaslev/vue-table';
export default {
    template: `
        <vue-table :heads="[ 'Name', { name: 'Actions', style: { 'text-align':'right' } } ]">
        <tr v-for="( item, index ) in items">
            <td>{{ item }}</td>
            <td>
                <button class="button is-danger" @click="remove( index )">Remove</button>
            </td>
        </tr>
        </vue-table>
    `,

    data() {
        return {
            items: [
                'Javascript.',
                'Html.',
                'Css.',
            ],
        }
    },

    methods: {
        remove( index ) {
            this.items.splice( index, 1 );
        }
    },

    components: {
        'vue-table': Table
    },
}
```

## Extend / Build your own!
You can create you own table with the logic of [BaseTable](https://github.com/LasseHaslev/vue-table/blob/master/src/components/BaseTable.js)
``` js
import BaseTable from '@lassehaslev/vue-table';
export default {
    template: `
    <table class="table">
        <thead>
            <tr>
                <th v-for="head in heads" :style="head.style" :class="head.class">{{ head.name }}</th>
            </tr>
        </thead>
        <tbody>
            <slot></slot>
        </tbody>
    </table>
    `,

    mixins: [ BaseTable ],
}
```

## Development

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
