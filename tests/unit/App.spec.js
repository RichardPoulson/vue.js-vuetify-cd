// App.spec.js

// Libraries
import Vue from "vue";
import Vuetify from "vuetify";
import VueRouter from "vue-router";

// Components
import App from "@/App";

// Utilities
import { mount, shallowMount } from "@vue/test-utils";

describe("App.vue", () => {
  let wrapper;
  const router = new VueRouter();
  const vuetify = new Vuetify();

  beforeEach(() => {
    Vue.use(Vuetify);
    Vue.use(VueRouter);
    wrapper = mount(App, {
      vuetify,
      router
    });
  });

  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
  test("has a Vuetify navigation drawer", () => {
    expect(wrapper.contains(".v-navigation-drawer")).toBe(true);
  });
  test("has at least one router link", () => {
    expect(wrapper.contains(".router-link-active")).toBe(true);
  });
  test("has a Vuetify app bar", () => {
    expect(wrapper.contains(".v-app-bar")).toBe(true);
  });
  test("has a nav icon in the app bar", () => {
    expect(wrapper.contains(".v-app-bar__nav-icon")).toBe(true);
  });
  test("has a Vuetify footer", () => {
    expect(wrapper.contains(".v-footer")).toBe(true);
  });
  test("has a Vuetify content element", () => {
    expect(wrapper.contains(".v-content")).toBe(true);
  });
  test('toggles "drawer" when nav-icon in app bar clicked', () => {
    var state1 = wrapper.vm.$data.drawer;
    wrapper.find(".v-app-bar__nav-icon").trigger("click");
    var state2 = wrapper.vm.$data.drawer;
    expect(state1 != state2).toBeTruthy();
  });
});
