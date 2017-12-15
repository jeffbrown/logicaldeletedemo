package logicaldeletedemo

import gorm.logical.delete.LogicalDelete

class Synthesizer implements LogicalDelete {
    String manufacturer
    String modelName
}
