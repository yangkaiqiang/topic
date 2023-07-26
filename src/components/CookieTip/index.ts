import { createApp, ComponentPublicInstance, defineComponent, h, ref } from 'vue';
import CookieTip from './CookieTip.vue';

interface CookieTipOptions {
  show?: Boolean;
  [key: string]: any;
}

const createModal = (options: CookieTipOptions): void => {
  const mountNode = document.createElement('div');
  const Instance = createApp(
      defineComponent({
          setup() {
              const show = ref(options?.show || true);
              const close = () => {
                  show.value = false;
                  unmountModal();
              };
              return { show, close };
          },
          render() {
              return h(CookieTip, {
                  ...options,
                  show: this.show,
                  onClose: this.close,
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
