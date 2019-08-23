// Libraries
import Vue from "vue";
import Vuetify from "vuetify";
import VueRouter from "vue-router";

import { shallowMount } from '@vue/test-utils';
import Component from '@/views/WorkHistory.vue'; // name of your Vue component

let wrapper;

beforeEach(() => {
  Vue.use(Vuetify);
  Vue.use(VueRouter);
  wrapper = shallowMount(Component, {
    propsData: {},
    mocks: {},
    stubs: {},
    methods: {},
  });
});

afterEach(() => {
  wrapper.destroy();
});

describe('Component', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });
});