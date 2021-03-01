<template>
  <div class="hello">
    {{ message }}
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, computed } from 'vue'

/**
 * Generates a dropdown menu with all required ARIA attributes.
 */
export default defineComponent({
    props: {
        message: { type: String, required: true },
    },
    
    setup(props) {
        let message = props.message;
        let temp: string | null = null; 
        return { message, temp };
    },
});

</script>

<style>
.hello {
    color: red;
}
</style>
