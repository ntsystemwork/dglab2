//	HYPE.documents["Pileta-Prueba"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "Pileta-Prueba.hyperesources";
	var documentName = "Pileta-Prueba";
	var documentLoaderFilename = "piletaprueba_hype_generated_script.js";
	var mainContainerID = "piletaprueba_hype_container";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}

	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_160 == "undefined") {
		if(typeof window.HYPE_160_DocumentsToLoad == "undefined") {
			window.HYPE_160_DocumentsToLoad = new Array();
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=160';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_160_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}

	// handle attempting to load multiple times
	if(HYPE.documents[documentName] != null) {
		var index = 1;
		var originalDocumentName = documentName;
		do {
			documentName = "" + originalDocumentName + "-" + (index++);
		} while(HYPE.documents[documentName] != null);

		var allDivs = document.getElementsByTagName("div");
		var foundEligibleContainer = false;
		for(var i = 0; i < allDivs.length; i++) {
			if(allDivs[i].id == mainContainerID && allDivs[i].getAttribute("HYPE_documentName") == null) {
				var index = 1;
				var originalMainContainerID = mainContainerID;
				do {
					mainContainerID = "" + originalMainContainerID + "-" + (index++);
				} while(document.getElementById(mainContainerID) != null);

				allDivs[i].id = mainContainerID;
				foundEligibleContainer = true;
				break;
			}
		}

		if(foundEligibleContainer == false) {
			return;
		}
	}

	var hypeDoc = new HYPE_160();

	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",aT:"i",N:"i",f:"d",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",bG:"f",aW:"f",aI:"i",S:"i",bH:"d",l:"d",aX:"i",T:"i",m:"c",bI:"f",aJ:"i",n:"c",aK:"i",bJ:"f",X:"i",aL:"i",A:"c",aZ:"i",Y:"bM",B:"c",bK:"f",bL:"f",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};

	var resources = {"0":{n:"Imagen-Construccion-2.png",p:1},"1":{n:"Imagen-Construccion-1.png",p:1}};

	var scenes = [{x:0,p:"600px",c:"#FFFFFF",v:{"5":{aU:8,G:"#000000",c:308,aV:8,r:"inline",d:28,s:"Impact,'Arial Narrow Bold',Sans-Serif",bD:"auto",t:24,Z:"break-word",w:"Pileta 1",j:"absolute",x:"visible",k:"div",y:"preserve",z:"2",aS:8,aT:8,a:138,F:"center",b:42},"2":{o:"content-box",w:"",h:"0",a:138,x:"visible",q:"100% 100%",b:112,j:"absolute",r:"inline",aA:[{type:1,transition:2,sceneOid:"3"}],k:"div",c:324,d:175,z:"1",F:"left",aP:"pointer",aG:"Pileta 1"}},n:"Pileta 1",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"1"},{x:1,p:"600px",c:"#FFFFFF",v:{"4":{o:"content-box",h:"1",a:138,x:"visible",q:"100% 100%",b:112,j:"absolute",r:"inline",aA:[{type:1,transition:2,sceneOid:"1"}],k:"div",c:324,d:175,z:"1",aP:"wait",aG:"Pileta 2"},"6":{aU:8,G:"#000000",c:308,aV:8,r:"inline",d:28,s:"'Times New Roman',Times,Baskerville,Serif",bD:"auto",t:24,Z:"break-word",w:"Pileta 2",j:"absolute",x:"visible",k:"div",y:"preserve",z:"2",aS:8,aT:8,a:138,F:"center",b:42}},n:"Pileta 2",T:{kTimelineDefaultIdentifier:{d:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30}},o:"3"}];

	var javascripts = [];

	var functions = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("functions." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			functions[javascripts[i].name] = (function () {});
		}
	}

	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setResources(resources);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.functions = functions;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID(mainContainerID);
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(true);
	hypeDoc.setDrawSceneBackgrounds(false);
	hypeDoc.setGraphicsAcceleration(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;
	document.getElementById(mainContainerID).setAttribute("HYPE_documentName", documentName);

	hypeDoc.documentLoad(this.body);
}());
