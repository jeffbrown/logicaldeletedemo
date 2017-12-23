package logicaldeletedemo

import grails.testing.mixin.integration.Integration
import spock.lang.Shared
import spock.lang.Specification

@Integration
class SynthesizerServiceSpec extends Specification {

    @Shared
    SynthesizerService synthesizerService

    void 'test that deleted records are excluded when appropriate'() {
        setup:
        Long initialNumberOfSynths = synthesizerService.count()

        when:
        Synthesizer synth = synthesizerService.save('Some Manufacturer', 'Some Model')

        then:
        synthesizerService.count() == initialNumberOfSynths + 1
        synthesizerService.list().find {
            it.id == synth.id &&
            it.manufacturer == synth.manufacturer &&
            it.modelName == synth.modelName
        }
        !synthesizerService.listDeleted().find {
            it.id == synth.id &&
            it.manufacturer == synth.manufacturer &&
            it.modelName == synth.modelName
        }

        when:
        synthesizerService.delete synth.id

        then:
        synthesizerService.count() == initialNumberOfSynths
        !synthesizerService.list().find {
            it.id == synth.id &&
                    it.manufacturer == synth.manufacturer &&
                    it.modelName == synth.modelName
        }
        synthesizerService.listDeleted().find {
            it.id == synth.id &&
                    it.manufacturer == synth.manufacturer &&
                    it.modelName == synth.modelName
        }
    }
}
