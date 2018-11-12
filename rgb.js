(function(ext) {
    // Cleanup function when the extension is unloaded
	var espera_comando = 100;
    ext._shutdown = function() {};
    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    ext.set_rgb = function(r,g,b, callback) {
        $.ajax({
              url: 'http://052f29fb.ngrok.io/api/colordata?r='+r+'&g='+g+'&b='+b,
              dataType: 'get',
              success: function( weather_data ) {
                  // Got the data - parse it and return the temperature
                  temperature = weather_data;
                  //callback(temperature);
                  window.setTimeout(function() {callback(temperature);}, espera_comando); //executa e espera o tempo do parametro 
              }
        });  
    };        
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['R', 'Led RGB - R %s G %s B %s', 'set_rgb', '0', '0', '0'],
        ]
    };
    // Register the extension
    ScratchExtensions.register('Weather extension', descriptor, ext);
})({});
