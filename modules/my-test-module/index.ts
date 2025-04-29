// Reexport the native module. On web, it will be resolved to MyTestModule.web.ts
// and on native platforms to MyTestModule.ts
export { default } from './src/MyTestModule';
export { default as MyTestModuleView } from './src/MyTestModuleView';
export * from  './src/MyTestModule.types';
