<template>
  <div class="projects">
    <v-container fluid>
      <!-- PAGE TITLE -->
      <v-layout align-center justify-center>
        <span class="display-2 text-center ma-1">Previous Projects</span>
      </v-layout>
      <!-- CAROUSEL -->
      <v-carousel
        progress
        hide-delimiter-background
        hide-delimiters
        show-arrows-on-hover
        active-class
      >
        <!-- FOR EACH ITEM IN THE HISTORY ARRAY: -->
        <v-carousel-item v-for="(item, i) in history" :key="i">
          <v-sheet height="100%" color="rgba(0,0,0,0)">
            <v-layout align-center fill-height justify-center>
              <!-- V-CARD -->
              <v-card class="pa-2" active-class hover>
                <v-layout align-center justify-center>
                  <!-- DETAILS -->
                  <div class="title-border">
                    <p class="display-1 font-weight-medium text-center pa-2 ma-2">{{ item.name }}</p>
                  </div>
                </v-layout>
                <v-divider></v-divider>
                <v-expand-transition>
                  <!-- SHOW ACCOMPLISHMENTS IF THEY'RE NOTED -->
                  <div class="details-border">
                    <p class="ma-1 pa-1 body-2" v-html="item.description" />
                    <!-- FOR EACH ACCOMPLISHMENT: RETURN IT -->
                  </div>
                </v-expand-transition>
              </v-card>
            </v-layout>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </div>
</template>

<script>
import json from "../assets/project-data.json";
export default {
  data: () => ({
    history: json
  })
};
</script>

<style lang="scss" scoped>
.projects {
  padding: 1rem;
}
.title-border {
  width: 100%;
  line-height: 1.3em;
  margin: 0.5rem 0.5rem 0.75rem; /* between paragraphs */
  padding: 0rem;
  border-radius: 12px;
  background-image: linear-gradient(
    to right,
    rgba(43, 124, 175, 0.507),
    rgba(58, 137, 185, 0.747)
  );
}
.list-border {
  border-radius: 12px;
  background-image: linear-gradient(to right, rgb(18, 43, 59), rgb(15, 31, 41));
  margin: 1rem 2rem 0rem;
  padding: 0.75rem;
  list-style-type: none;
}
.details-border {
  margin: 0rem 0.5rem 0.5rem;
  padding: 0.25rem;
  ul {
    margin-left: 1rem;
    li {
      margin: 9px 0px;
    }
  }
}
#inspire.v-application
  main.v-content
  .v-content__wrap
  .container
  .v-window.v-item-group.v-carousel {
  margin: -1rem 0rem;
  .v-window__container .v-window-item .v-responsive.v-carousel__item {
    .v-responsive__content .v-sheet .layout .v-card {
      border: none;
      border-radius: 16px 16px 32px 32px;
      background-image: linear-gradient(
        to bottom,
        rgb(36, 99, 138),
        rgb(26, 69, 95)
      );
      ul {
        li {
          line-height: 1.5em;
        }
      }
      .v-divider {
        margin: 0.25rem 0.5rem;
      }
      .v-expand-transition {
        ul {
          line-height: 3em;
          li {
            list-style-position: inside;
          }
        }
      }
    }
  }
}
</style>
