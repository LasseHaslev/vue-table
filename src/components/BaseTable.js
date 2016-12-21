export default {
    props: {
        heads: {
            type: Array,
            default() {
                return [ 'table-head1', 'table-head1' ];
            }
        }
    },
    computed: {
        heads() {
            return this.$options.propsData.heads.map( function( head ) {
                if ( typeof head === 'string' ) {
                    return {
                        name: head,
                    }
                }
                return head;
            } );
        }
    },
}
