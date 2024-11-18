// tests/unit/views/AboutView.spec.js
import { shallowMount, mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/views/AboutView.vue';


/**Prueba para verificar la renderizacion de la vista */
describe('AboutView', () => {
  test('Probando la existencia del componente o vista AboutView', async () => {
      const router = createRouter({
          history: createWebHistory(),
          routes: [{
              path: '/about',
              name: 'AboutViewVue',
              component: AboutView
          }],
      });
      router.push('/about');
      await router.isReady();

      const wrapper = mount(AboutView, {
          global: {
              plugins: [router]
          }
      });
      expect(wrapper.findComponent(AboutView).exists()).toBe(true);
  });
});

/**TEST PARA LA VISTA ABOUT Snapshots*/
describe('Vista AboutView.vue', () => {
  test('Validación de match con el snapshot', () => {
    const wrapper = shallowMount(AboutView);

    expect(wrapper.html()).toMatchSnapshot();
  });
});