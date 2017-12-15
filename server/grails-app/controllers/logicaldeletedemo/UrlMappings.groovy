package logicaldeletedemo

class UrlMappings {

    static mappings = {
        delete "/$controller/$id(.$format)?"(action:"delete")
        get "/$controller(.$format)?"(action:"index")
        get "/$controller/$id(.$format)?"(action:"show")
        post "/$controller(.$format)?"(action:"save")
        put "/$controller/$id(.$format)?"(action:"update")
        patch "/$controller/$id(.$format)?"(action:"patch")

        get '/synths'(controller: 'synthesizer', action: 'index')
        get '/deletedSynths'(controller: 'synthesizer', action: 'showDeleted')
        put "/undeleteSynth/$id"(controller: 'synthesizer', action: 'undelete')

        "/"(controller: 'application', action:'index')
        "500"(view: '/error')
        "404"(view: '/notFound')
    }
}
