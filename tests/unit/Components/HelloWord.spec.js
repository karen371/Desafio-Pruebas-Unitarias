// tests/unit/views/HelloWorld.spec.js
import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

/**Prueba para verificar la renderizacion del componente */
describe('HelloWorld', () => {
    test('Probando la existencia del componente HelloWorld', () => {
        const wrapper = shallowMount(HelloWorld);
        expect(wrapper.exists()).toBe(true);
    });
});

/**TEST PARA LA Componente HelloWorld Snapshots*/
describe('Componente HelloWorld.vue', () => {
  test('Validación de match con el snapshot', () => {
    const wrapper = shallowMount(HelloWorld);

    expect(wrapper.html()).toMatchSnapshot();
  });
});