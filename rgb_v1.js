(function(ext) {
    var espera_comando = 100;
    ext._shutdown = function() {};
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    ext.set_rgb = function(status,r,g,b) {
        alert(status);
    };
    
    ext.set_boca = function(msg) {
        console.log(msg);
    };
    ext.set_olho = function(posicao,situacao) {
        console.log(posicao);
        console.log(situacao);
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
            [' ', 'Olho %m.posicao mudar para situacao de: %m.situacao ', 'set_olho',' ', ' '],
            [' ', 'Boca mostrar : %s ', 'set_boca',' '],
        ],
    };
    // Register the extension
    ScratchExtensions.register('RGB extension', descriptor, ext);
})({});
