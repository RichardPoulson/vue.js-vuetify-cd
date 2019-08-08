<template>
  <div class="project-history ma-4">
    <v-container>
      <v-layout justify-center>
        <span class="display-2">My Projects</span>
      </v-layout>
      <v-carousel hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item v-for="(item, i) in history" :key="i">
          <v-sheet height="100%" color="rgba(0,0,0,0)">
            <v-layout align-center fill-height justify-center>
              <v-card class="pa-2" hover max-height="550px">
                <v-layout align-center justify-center>
                  <div class="title-border">
                    <p class="display-1 text-center pa-2 ma-2">{{ item.name }}</p>
                  </div>
                </v-layout>
                <v-divider></v-divider>
                <p v-html="item.description"></p>
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
.title-border {
  width: 100%;
  line-height: 1.3em;
  margin: 1rem; /* between paragraphs */
  padding: 0rem;
  border-radius: 12px;
  background-color: rgba(107, 176, 255, 0.151);
}
.list-border {
  border-radius: 12px;
  background-color: rgba(33, 56, 82, 0.637);
  margin: 1rem 2rem 0.5rem;
  padding: 0.75rem;
  list-style-type: none;
}
#inspire.v-application .v-content .education-history {
  .display-2 {
    margin: 1rem 0rem -1rem;
  }
  .v-carousel .v-card {
    ul {
      margin-left: 1rem;
    }
    li {
      line-height: 1.5em;
      list-style-position: inside;
      margin-left: 1rem;
    }
    li.subtitle-1 {
      line-height: 1.3em;
      margin: 0.5rem 0rem;
      margin-left: 1rem;
    }
  }
}
#inspire.v-application {
  .v-content {
    .v-card {
      border: none;
      border-radius: 8px 8px 20px 20px;
      background-image: linear-gradient(
        to bottom,
        rgb(36, 99, 138),
        rgb(26, 69, 95)
      );
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
#inspire.v-application
  .v-content
  div.work-history.ma-4.view
  div.container
  div.v-window.v-item-group.theme--dark.v-window--show-arrows-on-hover.v-carousel.v-carousel--hide-delimiter-background
  div.v-window__container
  div.v-window-item
  .v-carousel__item
  .v-responsive__content
  .v-sheet
  .v-card
  ul
  li.subtitle-1 {
  line-height: 1.3em;
  margin-left: 0.5rem;
}
</style>
