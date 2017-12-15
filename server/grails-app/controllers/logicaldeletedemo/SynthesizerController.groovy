package logicaldeletedemo

import grails.validation.ValidationException
import static org.springframework.http.HttpStatus.*

class SynthesizerController {

    SynthesizerService synthesizerService

    static responseFormats = ['json', 'xml']
    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond synthesizerService.list(params), model:[synthesizerCount: synthesizerService.count()]
    }

    def showDeleted() {
        respond synthesizerService.listDeleted(), view: 'index'
    }

    def show(Long id) {
        respond synthesizerService.get(id)
    }

    def undelete(Long id) {
        if (!synthesizerService.undelete(id)) {
            render status: NOT_FOUND
        } else {
            render status: NO_CONTENT
        }
    }

    def save(Synthesizer synthesizer) {
        if (synthesizer == null) {
            render status: NOT_FOUND
            return
        }

        try {
            synthesizerService.save(synthesizer)
        } catch (ValidationException e) {
            respond synthesizer.errors, view:'create'
            return
        }

        respond synthesizer, [status: CREATED, view:"show"]
    }

    def update(Synthesizer synthesizer) {
        if (synthesizer == null) {
            render status: NOT_FOUND
            return
        }

        try {
            synthesizerService.save(synthesizer)
        } catch (ValidationException e) {
            respond synthesizer.errors, view:'edit'
            return
        }

        respond synthesizer, [status: OK, view:"show"]
    }

    def delete(Long id) {
        if (id == null) {
            render status: NOT_FOUND
            return
        }

        synthesizerService.delete(id)

        render status: NO_CONTENT
    }
}
