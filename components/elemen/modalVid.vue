<template>
    <div>
        
        <div v-if="newModal" :class="display" class="transition-all duration-300 fixed top-0 bottom-0 right-0 left-0 bg-black/70 z-[9999] " >
            <div class="">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['value'],
        data() {
            return {
                display:'block'
            }
        },
        computed: {
            newModal: {
                get() {
                    if (this.value === true) {
                        if (process.client)  document.body.classList.add('overflow-hidden')
                        this.display = 'opacity-100'
                        return this.value;
                      
                    } else {
                        if (process.client) document.body.classList.remove('overflow-hidden');
                        setTimeout(() => {
                            this.display='opacity-0'
                            setTimeout(()=> {
                                return this.value;

                            },500)
                        },500)
                    }
                },
                set(value) {
                    this.$emit('input',value)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>