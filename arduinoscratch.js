(function(ext) {    
	
	var espera_comando = 500;
	// Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    
//===================================================================================
// bloco de referencia
	ext.sensor = function(callback) {        
	  try {	
        $.ajax({
              url: "http://localhost:1330/sd1",    // http://localhost:3000/eco/alo         
              success: function( dado_sensor ) {
                  // Got the data - parse it and return the temperature
                  resposta = dado_sensor;
				  formatado = resposta.substring(23,resposta.length-8);
                  //callback(formatado.replace(/\s/g, ""));
				  window.setTimeout(function() {callback(formatado.replace(/\s/g, ""));}, espera_comando); //executa e espera o tempo do parametro
              }
			  
        });
	      }
	      catch(err)
		  {
            //Console.log ("erro: " + err.message);
		  }
	
    };	


//===================================================================================
// bloco saida digital, obs: alterar descritor do bloco para parametro
	ext.saida_digital = function(valorsaida, callback) {        
	  try {	
        $.ajax({
              url: "http://localhost:1330/" +valorsaida,    // http://localhost:3000/eco/alo         
              success: function( dado_sensor ) {
                  // Got the data - parse it and return the temperature
                  resposta = dado_sensor;
				  formatado = resposta.substring(23,resposta.length-8);
                  //callback(formatado.replace(/\s/g, ""));
				  window.setTimeout(function() {callback(formatado.replace(/\s/g, ""));}, espera_comando); //executa e espera o tempo do parametro
              }
			  
        });
	      }
	      catch(err)
		  {
            //Console.log ("erro: " + err.message);
		  }
	
    };	
//===================================================================================	

//===================================================================================
// bloco servo, obs: alterar descritor do bloco para parametro
	ext.comando_servo = function(valorsaida, callback) {        
	  try {	
        $.ajax({
              url: "http://localhost:1330/servo:" +valorsaida,    // http://localhost:3000/eco/alo         
              success: function( dado_sensor ) {
                  // Got the data - parse it and return the temperature
                  resposta = dado_sensor;
				  formatado = resposta.substring(23,resposta.length-8);
                  //callback(formatado.replace(/\s/g, ""));
				  window.setTimeout(function() {callback(formatado.replace(/\s/g, ""));}, espera_comando); //executa e espera o tempo do parametro
              }
			  
        });
	      }
	      catch(err)
		  {
            //Console.log ("erro: " + err.message);
		  }
	
    };	
//===================================================================================	

    // Block and block menu descriptions
    var descriptor = {
        blocks: [         		    
			['R', 'Saida Digital %s', 'saida_digital', 'sd1'],
			['w', 'Servo %s', 'comando_servo', '90']
			
			
        ]
    };

    // Register the extension
    ScratchExtensions.register('Robo ORI', descriptor, ext);
})({});