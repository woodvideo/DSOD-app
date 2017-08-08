		 function getImage() {
		 navigator.camera.getPicture(uploadPhoto, function(message) {
		 alert('get picture failed');
		 }, {
		 quality: 100,
		 destinationType: 1,
		 saveToPhotoAlbum: true, 
		 correctOrientation: true
		 });
		}

		function uploadPhoto(imageURI) {
		 var options = new FileUploadOptions();
		 options.fileKey = "file";
		 options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
		 options.mimeType = "image/jpeg";
		 console.log(options.fileName);
		 var params = new Object();
		 params.value1 = "test";
		 params.value2 = "param";
		 options.params = params;
		 options.chunkedMode = false;
		
		var image = document.getElementById('myImage');
		image.src = imageURI;

		var ft = new FileTransfer();
		 ft.upload(imageURI, "http://dep.woodvideo.nl/foto/upload.php", function(result){
		 console.log(JSON.stringify(result));
		 }, function(error){
		 console.log(JSON.stringify(error));
		 }, options);
		 }
