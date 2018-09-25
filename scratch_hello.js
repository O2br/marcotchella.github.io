 (function(ext) {
        // Cleanup function when the extension is unloaded
        ext._shutdown = function() {};        // Status reporting code
        // Use this to report missing hardware, plugin or unsupported browser
        ext._getStatus = function() {
            return {status: 2, msg: 'Installed'};
        };
        
        var descriptor = {
            blocks: [
                [' ', 'hello world', 'helloWorld']
            ]
        };
        
        //The Hello world function
        ext.helloWorld = function(){
        	alert('Hello World!')
         
         try {
           $.get("http://10.100.24.185:8080/verde", function(data, status){
                console.log(data);
                console.log(status);
                alert("Foiii");
           });             
         } catch (e) {
           Console.log(e);
         }
        };
        
        ScratchExtensions.register('Hello World', descriptor, ext);
    })({});
