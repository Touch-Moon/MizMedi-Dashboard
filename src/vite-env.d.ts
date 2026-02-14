/// <reference types="vite/client" />

// Figma Make 에셋: vite.config.ts alias로 src/assets에 매핑됨
declare module "figma:asset/*.png" {
  const src: string;
  export default src;
}
declare module "figma:asset/*.jpg" {
  const src: string;
  export default src;
}
declare module "figma:asset/*.svg" {
  const src: string;
  export default src;
}