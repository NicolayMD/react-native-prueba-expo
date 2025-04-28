package com.mycompany.mynativemodule

import expo.modules.core.interfaces.Package

class MyNativeModulePackage : Package {
    override fun createModules(context: android.content.Context) =
        listOf(MyNativeModule())
}
