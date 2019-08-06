<template>
  <div class="parent-view">
    <h2>Parent</h2>
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  transitionName: "slide-left",
  data: () => ({
    drawer: null
  }),
  beforeRouteUpdate(to, from, next) {
    // Depth in terms of URL path length, longer depth implies child component
    const toDepth = to.path.split("/").length;
    const fromDepth = from.path.split("/").length;
    this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    next();
  }
};
</script>