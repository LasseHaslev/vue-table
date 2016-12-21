<template>
    <div id="app">
        <section class="section">
            <div class="container">
                <h3 class="title is-1">
                    <a href="https://github.com/LasseHaslev/vue-table">
                        @lassehaslev/vue-table
                    </a>
                </h3>
            </div>
        </section>

        <simple-table></simple-table>

        <div class="hero is-primary">
            <div class="hero-body">
                <div class="container is-fluid">
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import SimpleTable from './tutorials/SimpleTable';
export default {
    name: 'app',
    data () {
        return {
        }
    },
    components: {
        SimpleTable,
    }
}
</script>
