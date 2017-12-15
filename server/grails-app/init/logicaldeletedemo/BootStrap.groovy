package logicaldeletedemo

class BootStrap {

    SynthesizerService synthesizerService
    def init = { servletContext ->
        if(!synthesizerService.count()) {
            synthesizerService.save 'Dave Smith Instruments', 'Prophet 08'
            synthesizerService.save 'Dave Smith Instruments', 'Rev 2'
            synthesizerService.save 'Dave Smith Instruments', 'Pro 2'
            synthesizerService.save 'Moog', 'Mother 32'
            synthesizerService.save 'Moog', 'Subsequent 37'
            synthesizerService.save 'Moog', 'Subsequent 37 CV'
            synthesizerService.save 'Arturia', 'MiniBrute'
            synthesizerService.save 'Arturia', 'MicroBrute'
            synthesizerService.save 'Arturia', 'MatrixBrute'
            synthesizerService.save 'Korg', 'Minilogue'
            synthesizerService.save 'Korg', 'Monologue'
        }
    }
    def destroy = {
    }
}
