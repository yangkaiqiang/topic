import { createApp, ComponentPublicInstance, defineComponent, h, ref } from 'vue';
import Modal from './Modal.vue';
import router from '../../router';

interface ModalOptions {
  show?: Boolean;
  message?: string;
  [key: string]: any;
}

const createModal = (options: ModalOptions): void => {
  const mountNode = document.createElement('div');
  const Instance = createApp(
      defineComponent({
          setup() {
              const show = ref(options?.show || true);
              const close = () => {
                  show.value = false;
                  unmountModal();
              };
              const go = (path: string) => {
                router.push(path);
                show.value = false;
                unmountModal();
              };
              return { show, close, go };
          },
          render() {
              //预留扩展 -- 可根据传入类型加载不同弹窗
              return h(Modal, {
                  ...options,
                  show: this.show,
                  onClose: this.close,
                  onGo: this.go,
              });
          },
      })
  ) as unknown as ComponentPublicInstance<ModalOptions>;

  const unmountModal = () => {
    Instance.unmount();
    document.body.removeChild(mountNode);
  };

  document.body.appendChild(mountNode);
  Instance.mount(mountNode);
};

export default createModal;
