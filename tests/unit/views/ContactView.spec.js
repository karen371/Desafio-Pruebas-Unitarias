// tests/unit/views/ContactView.spec.js
import { shallowMount, mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router'
import ContactView from '@/views/ContactView.vue';

/**Prueba para verificar la renderizacion de la vista */
describe('ContactView', () => {
  test('Probando la existencia del componente o vista ContactView', async () => {
      const router = createRouter({
          history: createWebHistory(),
          routes: [{
              path: '/contact',
              name: 'ContactViewVue',
              component: ContactView
          }],
      });
      router.push('/contact');
      await router.isReady();

      const wrapper = mount(ContactView, {
          global: {
              plugins: [router]
          }
      });
      expect(wrapper.findComponent(ContactView).exists()).toBe(true);
  });
});


/**TEST PARA LA VISTA DE CONTACT Snapshots */
describe('Vista ContactView.vue', () => {
  test('Validación de match con el snapshot', () => {
    const wrapper = shallowMount(ContactView);

    expect(wrapper.html()).toMatchSnapshot();
  });
});