(function(ext) {
    var espera_comando = 100;
    var chapeuPosicao = {
		direito:'d',
		esquerdo:'e'
   }
    var chapeuSituacao = {
		ligado:'1',
		desligado:'2'
   }    
    
    ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    ext.set_rgb = function(status,r,g,b) {
        alert(status);
    };
    
    ext.set_boca = function(msg) {
              console.log(msg);
              $.ajax({
                url: 'http://192.168.2.22:8080/boca?msg='+msg,
                dataType: 'get',
                success: function( data ) {
                  console.log(data);
                }
              }); 
        
    };
    ext.set_olho = function(posicao,situacao) {
        var p,s;
        if(typeof posicao=="string"){
			p = chapeuPosicao[posicao];
        }
        if(typeof situacao=="string"){
			s = chapeuSituacao[situacao];
        }
        console.log(posicao+":"+p);
        console.log(situacao+":"+s);                
        
        
    };    
    // Block and block menu descriptions
    var descriptor = {
        menus : {
            motorPort:["M1","M2"],
            posicao:["direito","esquerdo"],
            situacao:["ligado","desligado"],
            
        } ,
        blocks: [
            [' ', 'Led RGB %m.motorPort - R %s G %s B %s ', 'set_rgb',' ', '0', '0', '0'],            
            [' ', 'Olho %m.posicao mudar para: %m.situacao ', 'set_olho',' ', ' '],
            [' ', 'Boca mostrar : %s ', 'set_boca',' '],
        ],
    };
    // Register the extension
    ScratchExtensions.register('RGB extension', descriptor, ext);
})({});
