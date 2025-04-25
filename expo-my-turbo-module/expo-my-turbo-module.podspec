Pod::Spec.new do |s|
  s.name         = "expo-my-turbo-module"
  s.version      = "1.0.0"
  s.summary      = "A TurboModule for React Native using Expo Modules"
  s.homepage     = "https://github.com/your-org/expo-my-turbo-module"
  s.license      = "MIT"
  s.author       = { "Your Name" => "your@email.com" }
  s.platform     = :ios, "12.0"
  s.source       = { :path => "." }
  s.source_files = ["*.swift"]
  s.dependency   "ExpoModulesCore"
end
