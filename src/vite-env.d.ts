/// <reference types="vite/client" />

declare module 'jquery';

declare module 'vue3-video-play';

declare module '*.vue' {
    import { defineComponent } from 'vue'
    const Component: ReturnType<typeof defineComponent>
    export default Component
}
  