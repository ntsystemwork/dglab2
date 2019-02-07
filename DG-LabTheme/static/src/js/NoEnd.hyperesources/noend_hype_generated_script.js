//	HYPE.documents["NoEnd"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "NoEnd.hyperesources";
	var documentName = "NoEnd";
	var documentLoaderFilename = "noend_hype_generated_script.js";
	var mainContainerID = "noend_hype_container";

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
	
	var resources = {"0":{n:"Pasted.png",p:1},"1":{n:"Captura%20de%20pantalla%202019-02-07%20a%20la%28s%29%2014.30.02.png",p:1}};
	
	var scenes = [{x:0,p:"600px",c:"#FFFFFF",onSceneTimelineCompleteActions:[{type:1,transition:1,sceneOid:"1"}],v:{"2":{c:-8,d:-8,I:"Solid",e:"1.000000",J:"Solid",K:"Solid",g:"#DDEEFF",L:"Solid",M:1,N:1,A:"#A0A0A0",x:"visible",j:"absolute",B:"#A0A0A0",P:1,k:"div",O:1,z:"1",C:"#A0A0A0",D:"#A0A0A0",a:86,b:203},"3":{o:"content-box",h:"0",x:"visible",a:11,q:"100% 100%",b:36,j:"absolute",r:"none",c:136,k:"div",z:"2",d:164},"4":{o:"content-box",h:"1",x:"visible",a:30,q:"100% 100%",b:62,j:"absolute",r:"inline",c:144,k:"div",z:"3",d:146}},n:"Untitled Scene",T:{kTimelineDefaultIdentifier:{d:5.22,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"2",t:0,d:3,i:"e",e:"1.000000",s:"1.000000",o:"2"},{f:"2",t:0,d:3,i:"a",e:389,s:86,o:"2"},{f:"2",t:0,d:3,i:"b",e:139,s:203,o:"2"},{f:"2",t:0,d:3,i:"d",e:120,s:-8,o:"2"},{f:"2",t:0,d:3,i:"c",e:120,s:-8,o:"2"},{f:"2",t:0,d:2.01,i:"a",e:209,s:30,o:"4"},{f:"2",t:0,d:2.01,i:"b",e:226,s:62,o:"4"},{f:"2",t:0,d:2.01,i:"d",e:146,s:146,o:"4"},{f:"2",t:2.01,d:0.2,i:"a",e:210,s:209,o:"4"},{f:"2",t:2.01,d:0.2,i:"b",e:27,s:226,o:"4"},{f:"2",t:2.21,d:1.15,i:"a",e:81,s:210,o:"4"},{f:"2",t:2.21,d:1.15,i:"b",e:172,s:27,o:"4"},{f:"2",t:3,d:2.22,i:"c",e:152,s:120,o:"2"},{f:"2",t:3,d:2.22,i:"d",e:152,s:120,o:"2"},{f:"2",t:3,d:2.22,i:"e",e:"1.000000",s:"1.000000",o:"2"},{f:"2",t:3,d:2.22,i:"b",e:237,s:139,o:"2"},{f:"2",t:3,d:2.22,i:"a",e:192,s:389,o:"2"},{f:"2",t:4.06,d:0.23,i:"a",e:229,s:81,o:"4"},{f:"2",t:4.06,d:0.23,i:"b",e:224,s:172,o:"4"}],f:30}},o:"1"}];
	
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
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setGraphicsAcceleration(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;
	document.getElementById(mainContainerID).setAttribute("HYPE_documentName", documentName);

	hypeDoc.documentLoad(this.body);
}());

