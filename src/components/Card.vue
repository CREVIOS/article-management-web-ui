<template>
  <div :class="classNamesContainer">
    <h4 v-if="hasSlot('header')" :class="classNamesHeader">
      <slot name="header"/>
    </h4>
    <div v-if="hasSlot('body')" class="card-body">
      <slot name="body"/>
    </div>
    <div v-if="hasSlot('footer')" class="card-footer">
      <slot name="footer"/>
    </div>
  </div>
</template>

<script>
/* ============
 * Card Component
 * ============
 *
 * A basic card component.
 *
 * Gives an idea how components work.
 */
import SlotMixin from "@/mixins/slot";
export default {
  /**
   * The name of the component.
   */
  name: "Card",
  /**
   * The mixins that the component can use.
   */
  mixins: [SlotMixin],
  /**
   * The properties that the component accepts.
   */
  props: {
    contextualStyle: {
      default: "primary",
      type: String,
      required: false
    },
    // eslint-disable-next-line
    centered: false,
    textCentered: Boolean,
    fullWidth: Boolean
  },
  /**
   * The computed properties that the component can use.
   */
  computed: {
    /**
     * Computed property which will compute the classes
     * for the header of the card.
     *
     * @returns {Array} The classes for the header.
     */
    classNamesHeader() {
      const classNames = ["card-header"];
      if (this.contextualStyle) {
        classNames.push(`bg-${this.contextualStyle}`);
        classNames.push("text-white");
      } else {
        classNames.push("bg-default");
      }
      return classNames;
    },
    classNamesContainer() {
      const classNames = ["card"];

      if (this.centered) {
        classNames.push("centered");
      }

      if (this.textCentered) {
        classNames.push("text-centered");
      }

      if (this.fullWidth === true) {
        classNames.push("fullwidth");
      }
      return classNames;
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  padding: 16px;
  width: 100%;
  background: #ffffff;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

@media only screen and (min-width: 768px) {
.card.centered {
  margin: 0 auto;
  width: 50%;
}
}
.card.text-centered {
  text-align: center;
}

.card.fullwidth {
  width: 100%;
}
</style>
