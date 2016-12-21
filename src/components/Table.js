import BaseTable from './BaseTable';

export default {
    template: `
    <table class="table">
        <thead>
            <tr>
                <th v-for="head in heads">{{ head }}</th>
            </tr>
        </thead>
        <tbody>
            <slot></slot>
        </tbody>
    </table>
    `,

    mixins: [ BaseTable ],
}
