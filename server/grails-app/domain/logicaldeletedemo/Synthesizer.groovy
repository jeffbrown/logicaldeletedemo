package logicaldeletedemo

import gorm.logical.delete.LogicalDelete

class Synthesizer implements LogicalDelete<Synthesizer> {
    String manufacturer
    String modelName
}
