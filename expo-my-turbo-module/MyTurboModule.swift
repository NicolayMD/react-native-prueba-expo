
import ExpoModulesCore

public class MyTurboModule: Module {
  public func definition() -> ModuleDefinition {
    Name("MyTurboModule")

    Function("getPlatformName") {
      return "iOS desde ExpoModule"
    }
  }
}
