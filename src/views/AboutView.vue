<template>
  <main class="m-5">
    <About />
    <Education />
    <Exp />
  </main>
</template>
<script>
import About from "../components/About/About.vue";
import Education from "../components/About/Education.vue";
import Exp from "../components/About/Exp.vue";
export default {
  components: {
    About,
    Education,
    Exp,
  },
};
</script>
