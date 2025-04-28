package com.mycompany.mynativemodule

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class MyNativeModule : Module() {
    override fun definition() = ModuleDefinition {
        Name("MyNativeModule")

        Function("helloWorld") {
            "Hello from Android Native!"
        }
    }
}
