package logicaldeletedemo

import grails.gorm.services.Query
import grails.gorm.services.Service
import grails.gorm.services.Where
import grails.gorm.transactions.Transactional

@Service(Synthesizer)
abstract class SynthesizerService {

    abstract Synthesizer get(Serializable id)

    abstract List<Synthesizer> list(Map args)

    abstract Long count()

    abstract void delete(Serializable id)

    abstract Synthesizer save(Synthesizer synthesizer)

    abstract Synthesizer save(String manufacturer, String modelName)

    @Query("from $Synthesizer as synth where synth.deleted = true")
    abstract List<Synthesizer> listDeleted()

    @Transactional
    boolean undelete(Serializable id) {
        Synthesizer synth = get(id)
        if(synth == null) {
            return false
        }

        synth.unDelete()
        true
    }
}