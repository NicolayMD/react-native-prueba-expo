import { registerWebModule, NativeModule } from 'expo';

import { ChangeEventPayload } from './MyTestModule.types';

type MyTestModuleEvents = {
  onChange: (params: ChangeEventPayload) => void;
}

class MyTestModule extends NativeModule<MyTestModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
};

export default registerWebModule(MyTestModule);
