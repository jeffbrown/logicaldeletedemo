import gorm.logical.delete.PreQueryListener

// Place your Spring DSL code here
beans = {

    // this won't be necessary once the
    // plugin starts registering this listener
    // automatically...
    preQueryListener PreQueryListener
}
