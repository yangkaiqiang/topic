import { createApp, ComponentPublicInstance, defineComponent, h, ref } from 'vue';
import CookieTip from './CookieTip.vue';

interface CookieTipOptions {
  show?: Boolean;
  [key: string]: any;
}

const createModal = (options: CookieTipOptions): void => {
  if(localStorage.getItem('isAgreeCookie')) return;
  const mountNode = document.createElement('div');
  const Instance = createApp(
      defineComponent({
          setup() {
              const show = ref(options?.show || true);
              const ok = () => {
                  localStorage.setItem('isAgreeCookie', 'true')
                  show.value = false;
                  unmountModal();
              };
              return { show, ok };
          },
          render() {
              return h(CookieTip, {
                  ...options,
                  show: this.show,
                  onOk: this.ok,
              });
          },
      })
  ) as unknown as ComponentPublicInstance<CookieTipOptions>;

  const unmountModal = () => {
    Instance.unmount();
    document.body.removeChild(mountNode);
  };

  document.body.appendChild(mountNode);
  Instance.mount(mountNode);
};

export default createModal;
