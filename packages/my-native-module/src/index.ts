import { MyNativeModule } from './MyNativeModuleModule';

export function helloWorld(): string {
  return MyNativeModule.helloWorld();
}
