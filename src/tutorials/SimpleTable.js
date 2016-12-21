import { Table } from '../index';
export default {
    template: `
    <section class="section">
        <div class="container">

            <vue-table :heads="[ 'Name', 'Action' ]">
            <tr v-for="( item, index ) in items">
                <td>{{ item }}</td>
                <td>
                    <button class="button is-danger" @click="remove( index )">Remove</button>
                </td>
            </tr>
            </vue-table>

        </div>
    </section>
    `,

    data() {
        return {
            items: [
                'ActionScript.',
                'Ada (multi-purpose language)',
                'ALGOL (extremely influential language design – the second high level language compiler) ...',
                'Ateji PX, an extension of the Java language for parallelism.',
                'BASIC (some dialects, including the first version of Dartmouth BASIC)',
                'BCPL.',
                'Blue.',
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
