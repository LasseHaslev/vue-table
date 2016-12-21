import BaseTable from './BaseTable';

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
