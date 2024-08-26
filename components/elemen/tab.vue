<template>
    <div class="">
        <div class="overflow-x-auto">
            <ul class="flex flex-row flex-wrap gap-y-5">
                <div class="font-medium text-left md:text-center text-warna9c text-2xl"
                    v-for="(i, index) in list" :key="'dls'+index"
                    @click="selectTab(i.id)"
                >
                <div :class="value===i.id ? kelasAktif : kelasList"> {{ i.name }} </div>
                </div>
            </ul>
        </div>

</div>
</template>
<script>
export default {
    props: ['value', 'list'],
    data() {
        return {

            kelasList: 'cursor-pointer inline-block mr-8 pb-2 border-b-2 border-transparent hover:text-gray-400 hover:border-gray-400 transition-all duration-300',
            kelasAktif: 'inline-block text-white mr-8 pb-2 border-b-2 border-white active '
        }
    },
    methods: {
        selectTab(id) {
            this.$emit('input', id)
        }
    }
}
</script>