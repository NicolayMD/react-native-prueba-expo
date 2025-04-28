import ExpoModulesCore

public class MyNativeModule: Module {
  public func definition() -> ModuleDefinition {
    Name("MyNativeModule")

    Function("helloWorld") {
      return "Hello from iOS Native!"
    }
  }
}
