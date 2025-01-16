	// ManoMecchanica.js
	//Andrea Dainese
	//Alan Bimbati
	//Fabrizio Ceravolo
function main() {

	var stats = initStats();

	// create a scene, that will hold all our elements such as objects, cameras and lights.
	var scene = new THREE.Scene();

	// create a camera, which defines where we're looking at.
	var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

	// create a render and set the size
	var renderer = new THREE.WebGLRenderer();
	renderer.setClearColor()
	renderer.setClearColor(new THREE.Color(0x4169E1));
	renderer.setSize(window.innerWidth, window.innerHeight);

	// show axes in the screen
	var axes = new THREE.AxisHelper( 100 );
	scene.add(axes);

	// definisco le luci della scena
	var ambientLight = new THREE.AmbientLight( 0x222222 );    
	var light = new THREE.DirectionalLight( 0xFFFFFF, 1.0 );
	light.position.set( 200, 400, 500 );
	var light2 = new THREE.DirectionalLight( 0xFFFFFF, 1.0 );
	light2.position.set( -500, 250, -200 );  
	scene.add(ambientLight);    
	scene.add(light);
	scene.add(light2);
    //*************************************************************************
	//definisco l'indice superiore
   //**************************************************************************	
	var UpperIndex = new THREE.Object3D();
    var uiLength = 10;
	
	// creo il parallelepipedo
	var cubeGeometry1 = new THREE.BoxGeometry(uiLength,2,2);
	var UpperIndexMaterial  = new THREE.MeshLambertMaterial( { color: 0x98F5FF } );
	var cube1 = new THREE.Mesh(cubeGeometry1, UpperIndexMaterial);
	
	// traslo il parallelepipedo 
	cube1.position.x=uiLength/2;
	cube1.position.y=0.0;
	cube1.position.z=0.0;
	// aggiungo il parallelepipedo 
	UpperIndex.add(cube1);
	
    //**************************************************************************
	//definisco l'indice inferiore
    //**************************************************************************
	var UnderIndex = new THREE.Object3D();
    var uiLength = 10;
	
	// creo il parallelepipedo 2
	var cubeGeometry2 = new THREE.BoxGeometry(uiLength,2,2);
	var UnderIndexMaterial = new THREE.MeshLambertMaterial( { color: 0x98F5FF } );
	var cube2 = new THREE.Mesh(cubeGeometry2, UnderIndexMaterial);

	// traslo il parallelepipedo 
	cube2.position.x=uiLength/2;
	cube2.position.y=0.0;
	cube2.position.z=0.0;
	//aggiungo il parallelepipedo 
	UnderIndex.add(cube2);
	//*************************************************************************
	//definisco la vite superiore
   //**************************************************************************	
	var vis = new THREE.Object3D();
    var uiLength = 10;
	
	// creo il parallelepipedo
	var cylinderGeometry1 = new THREE.CylinderGeometry(2, 2, 3, 10, 2, false);
	var visMaterial  = new THREE.MeshLambertMaterial( { color: 0xFF0000} );
	var cylinder = new THREE.Mesh(cylinderGeometry1, visMaterial);
	
	// traslo il parallelepipedo 
	cylinder.position.x=10.5;
	cylinder.position.y=0.0;
	cylinder.position.z=0.0;
	// aggiungo il parallelepipedo 
	//vis.add(cylinder);
    //**************************************************************************
	//definisco la vite inferiore
    //**************************************************************************
	/*var UnderIndex = new THREE.Object3D();
    var uiLength = 10;
	
	// creo il parallelepipedo 2
	var cubeGeometry2 = new THREE.BoxGeometry(uiLength,2,2);
	var UnderIndexMaterial = new THREE.MeshLambertMaterial( { color: 0x98F5FF } );
	var cube2 = new THREE.Mesh(cubeGeometry2, UnderIndexMaterial);

	// traslo il parallelepipedo 
	cube2.position.x=uiLength/2;
	cube2.position.y=0.0;
	cube2.position.z=0.0;
	//aggiungo il parallelepipedo 
	UnderIndex.add(cube2);*/
	
	
	
	
	
	
	
	//--------------------------------------------------------------------------
	//definisco il medio superiore
    //--------------------------------------------------------------------------
	var UpperMiddle = new THREE.Object3D();
    var umLength = 10;
	
	// creo il parallelepipedo
	var cubeGeometry3 = new THREE.BoxGeometry(umLength,2,2);
	var UpperIndexMaterial  = new THREE.MeshLambertMaterial( { color: 0x98F5FF } );
	var cube3 = new THREE.Mesh(cubeGeometry3, UpperIndexMaterial);
	
	// traslo il parallelepipedo
	cube3.position.x=umLength/2;
	cube3.position.y=0.0;
	cube3.position.z=-4;
	// aggiungo il parallelepipedo
	UpperMiddle.add(cube3);
	//--------------------------------------------------------------------------
	//definisco il medio inferiore
    //--------------------------------------------------------------------------
	var UnderMiddle   = new THREE.Object3D();
    var umLength = 10;
	
	// creo il parallelepipedo 
	var cubeGeometry4 = new THREE.BoxGeometry(umLength,2,2);
	var UnderMiddleMaterial  = new THREE.MeshLambertMaterial( { color: 0x98F5FF } );
	var cube4 = new THREE.Mesh(cubeGeometry4, UnderMiddleMaterial);
	
	// traslo il parallelepipedo 
	cube4.position.x=umLength/2;
	cube4.position.y=0.0;
	cube4.position.z=-4;
	// aggiungo il parallelepipedo
	UnderMiddle.add(cube4);
	
	
	
	
	
	
	
	//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	//definisco il l'anulare superiore
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	var UpperAnnular = new THREE.Object3D();
    var uaLength = 10;
	
	// creo il parallelepipedo
	var cubeGeometry5 = new THREE.BoxGeometry(uaLength,2,2);
	var UpperAnnularMaterial  = new THREE.MeshLambertMaterial( { color: 0x98F5FF } );
	var cube5 = new THREE.Mesh(cubeGeometry5, UpperAnnularMaterial);
	
	// traslo il parallelepipedo
	cube5.position.x=uaLength/2;
	cube5.position.y=0.0;
	cube5.position.z=-8;
	// aggiungo il parallelepipedo
	UpperAnnular.add(cube5);
	//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	//definisco il medio inferiore
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	var UnderAnnular   = new THREE.Object3D();
    var uaLength = 10;
	
	// creo il parallelepipedo 
	var cubeGeometry6 = new THREE.BoxGeometry(uaLength,2,2);
	var UnderAnnularMaterial  = new THREE.MeshLambertMaterial( { color: 0x98F5FF } );
	var cube6 = new THREE.Mesh(cubeGeometry6, UnderAnnularMaterial);
	
	// traslo il parallelepipedo 
	cube6.position.x=uaLength/2;
	cube6.position.y=0.0;
	cube6.position.z=-8;
	// aggiungo il parallelepipedo
	UnderAnnular.add(cube6);
	
	
	
	
	
	//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
	//definisco il mignolo superiore 
	//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
	var UpperPinkie = new THREE.Object3D();
    var uaLength = 10;
	
	// creo il parallelepipedo
	var cubeGeometry7 = new THREE.BoxGeometry(uaLength,2,2);
	var UpperPinkieMaterial  = new THREE.MeshLambertMaterial( { color: 0x98F5FF } );
	var cube7 = new THREE.Mesh(cubeGeometry7, UpperPinkieMaterial);
	
	// traslo il parallelepipedo
	cube7.position.x=uaLength/2;
	cube7.position.y=0.0;
	cube7.position.z=-12;
	// aggiungo il parallelepipedo
	UpperPinkie.add(cube7);
	//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
	//definisco il mignolo inferiore
    //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
	var UnderPinkie   = new THREE.Object3D();
    var uaLength = 10;
	
	// creo il parallelepipedo 
	var cubeGeometry8 = new THREE.BoxGeometry(uaLength,2,2);
	var UnderPinkieMaterial  = new THREE.MeshLambertMaterial( { color: 0x98F5FF } );
	var cube8 = new THREE.Mesh(cubeGeometry8, UnderPinkieMaterial);
	
	// traslo il parallelepipedo 
	cube8.position.x=uaLength/2;
	cube8.position.y=0.0;
	cube8.position.z=-12;
	// aggiungo il parallelepipedo
	UnderPinkie.add(cube8);	

	
	
	
	
	//''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
	//definisco il pollice superiore
	//''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
	/*var UpperInch   = new THREE.Object3D();
    var uiLength = 10;
	
	// creo il parallelepipedo 
	var cubeGeometry9 = new THREE.BoxGeometry(uiLength,2,2);
	var UpperInchMaterial  = new THREE.MeshLambertMaterial( { color: 0x98F5FF } );
	var cube9 = new THREE.Mesh(cubeGeometry9, UpperInchMaterial);
	
	// traslo il parallelepipedo 
	cube9.position.x=uiLength/2;
	cube9.position.y=-5;
	cube9.position.z=-2;
	// aggiungo il parallelepipedo
	UpperInch.add(cube9);*/
	//''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
	//definisco il pollice inferiore
	//''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
	var UnderInch   = new THREE.Object3D();
    var uaLength = 10;
	
	// creo il parallelepipedo 
	var cubeGeometry10 = new THREE.BoxGeometry(uaLength,2,2);
	var UnderInchMaterial  = new THREE.MeshLambertMaterial( { color: 0x98F5FF } );
	var cube10 = new THREE.Mesh(cubeGeometry10, UnderInchMaterial);
	// traslo il parallelepipedo 
	cube10.position.x=uaLength/2;
	cube10.position.y=-5;
	cube10.position.z=-2;
	// aggiungo il parallelepipedo
	UnderInch.add(cube10);
	
	
	
	
	////////////////////////////////////////////////////////////////////////////
	//Creo la mano
	////////////////////////////////////////////////////////////////////////////
	var Hand   = new THREE.Object3D();
    var haLength = 15;
	
	// creo il parallelepipedo 
	var cubeGeometryHand = new THREE.BoxGeometry(10,7,haLength);
	var HandMaterial  = new THREE.MeshLambertMaterial( { color: 0x98F5FF } );
	var cubeHand = new THREE.Mesh(cubeGeometryHand, HandMaterial);
	
	// traslo il parallelepipedo 
	cubeHand.position.x=-uaLength/2-1;
	cubeHand.position.y=-2.5;
	cubeHand.position.z=-uaLength/2-1;
	// aggiungo il parallelepipedo
	Hand.add(cubeHand);
	
	
    //**************************************************************************	
    // traslo la parte superiore dell'indice di 11 in direzione x e lo aggiungo alla parte inferiore  
    //**************************************************************************
	UpperIndex.position.x = 11;
	vis.rotation.x = Math.PI/2;
	UnderIndex.add(UpperIndex);
	UnderIndex.add(vis)
 	//--------------------------------------------------------------------------
	//traslo la parte superiore del medio di 11 in direzione x e lo aggiungo alla parte inferiore  
    //--------------------------------------------------------------------------
	UpperMiddle.position.x = 11;
	UnderMiddle.add(UpperMiddle);
	//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	//definisco il medio inferiore
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	UpperAnnular.position.x = 11;
	UnderAnnular.add(UpperAnnular);
	//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
	//definisco il mignolo inferiore
    //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
	UpperPinkie.position.x = 11;
	UnderPinkie.add(UpperPinkie);
	//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
	//definisco il pollice inferiore
    //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
	//UpperInch.position.x = 11;
	//UnderInch.add(UpperInch);
	////////////////////////////////////////////////////////////////////////////
	//aggiungo i componenti alla mano la mano
	////////////////////////////////////////////////////////////////////////////
	Hand.add(UnderIndex);
	Hand.add(UnderMiddle);
	Hand.add(UnderAnnular);
	Hand.add(UnderPinkie);
	Hand.add(UnderInch);
	//aggiungo la mano alla scena
	scene.add(Hand);
	// position and point the camera to the center of the scene
   // position and point the camera to the center of the scene
    camera.position.x = 10;
    camera.position.y = 10;
    camera.position.z = 50;
    camera.lookAt(new THREE.Vector3(0,0,0));

	// add the output of the renderer to the html element
	document.getElementById("WebGL-output").appendChild(renderer.domElement);

	document.onkeydown = function(ev){keydown(ev);};

	render();

	function render()
	{
		stats.update();
		// render using requestAnimationFrame
		requestAnimationFrame(render);
		renderer.render(scene, camera);
	}

	function initStats()
	{

		var stats = new Stats();

		stats.setMode(0); // 0: fps, 1: ms

		// Align top-left
		stats.domElement.style.position = 'absolute';
		stats.domElement.style.left = '0px';
		stats.domElement.style.top = '0px';

		document.getElementById("Stats-output").appendChild( stats.domElement );

		return stats;
	}

	function keydown(ev)
	{
		switch(ev.keyCode) 
		{
		//---------------------------------------Indice---------------------------------------	
		case 81://81
			// 'q' ruota indice superiore per aprie
			if(UpperIndex.rotation.z< Math.PI/6 )
			{
				UpperIndex.rotation.z += 2*Math.PI/180.0;
			}  
			  break;
		case 65:
			// 'a' ruota indice superiore per chiudere
			if(UpperIndex.rotation.z >= -Math.PI/2)
			{
				UpperIndex.rotation.z -= 2*Math.PI/180.0;
			}
			  break;
		case 87:
			// 'w' ruota indice inferiore per aprire
			if(UnderIndex.rotation.z <Math.PI/3)
			{
				UnderIndex.rotation.z += 2*Math.PI/180.0;
			}
			break;
		case 83:
			// 's' ruota indice inferiore per chiudere
			if(UnderIndex.rotation.z >= -Math.PI/2)
			{
				UnderIndex.rotation.z -= 2*Math.PI/180.0;
			}
			break;
		//---------------------------------------Medio---------------------------------------
		case 69:
			// 'd' ruota medio superiore per aprire
			if(UpperMiddle.rotation.z< Math.PI/6 )
			{
				UpperMiddle.rotation.z += 2*Math.PI/180.0;
			}  
			  break;
		case 68:
			// 'e' ruota medio superiore per chiudere
			if(UpperMiddle.rotation.z >= -Math.PI/2)
			{
				UpperMiddle.rotation.z -= 2*Math.PI/180.0;
			}
			  break;
		case 82:
			// 'r' ruota medio inferiore per aprire
			if(UnderMiddle.rotation.z <Math.PI/3)
			{
				UnderMiddle.rotation.z += 2*Math.PI/180.0;
			}
			break;
		case 70:
			// 'f' ruota medio inferiore per chiudere
			if(UnderMiddle.rotation.z >-Math.PI/2)
			{
				UnderMiddle.rotation.z -= 2*Math.PI/180.0;
			}
			break;
		//---------------------------------------anulare---------------------------------------
		case 84:
			// 't' ruota anulare superiore per aprire
			if(UpperAnnular.rotation.z< Math.PI/6 )
			{
				UpperAnnular.rotation.z += 2*Math.PI/180.0;
			}  
			  break;
		case 71:
			// 'g' ruota anulare superiore per chiudere
			if(UpperAnnular.rotation.z >= -Math.PI/2)
			{
				UpperAnnular.rotation.z -= 2*Math.PI/180.0;
			}
			  break;
		case 89:
			// 'y' ruota anulare inferiore per aprire
			if(UnderAnnular.rotation.z <Math.PI/3)
			{
				UnderAnnular.rotation.z += 2*Math.PI/180.0;
			}
			break;
		case 72:
			// 'h' ruota indice inferiore per chiudere
			if(UnderAnnular.rotation.z >-Math.PI/2)
			{
				UnderAnnular.rotation.z -= 2*Math.PI/180.0;
			}
			break;
		//---------------------------------------mignolo---------------------------------------
		case 85:
			// 'u' ruota anulare superiore per aprire
			if(UpperPinkie.rotation.z< Math.PI/6 )
			{
				UpperPinkie.rotation.z += 2*Math.PI/180.0;
			}  
			  break;
		case 74:
			// 'j' ruota anulare superiore per aprire
			if(UpperPinkie.rotation.z >= -Math.PI/2)
			{
				UpperPinkie.rotation.z -= 2*Math.PI/180.0;
			}
			  break;
		case 73:
			// 'i' ruota anulare inferiore per aprire
			if(UnderPinkie.rotation.z <Math.PI/3)
			{
				UnderPinkie.rotation.z += 2*Math.PI/180.0;
			}
			break;
		case 75:
			// 'k' ruota indice inferiore per chiudere
			if(UnderPinkie.rotation.z >-Math.PI/2)
			{
				UnderPinkie.rotation.z -= 2*Math.PI/180.0;
			}
			break;
			//---------------------------------------pollice---------------------------------------
		case 49:
			// '1' ruota medio inferiore per aprire
			if(UnderInch.rotation.z <Math.PI/9)
			{
				UnderInch.rotation.z += 2*Math.PI/180.0;
			}
			break;
		case 50:
			// '2' ruota medio inferiore per chiudere
			if(UnderInch.rotation.z >=0)
			{
				UnderInch.rotation.z -= 2*Math.PI/180.0;
			}
			break;
		//---------------------------------------Mano Rotazione secondo x---------------------------------------
		case 90:
			// 'z' rotazione asse x orario
			Hand.rotation.x += 2*Math.PI/180.0;
			break;
		case 88:
			// 'x' rotazione asse x antiorario
			Hand.rotation.x -= 2*Math.PI/180.0;
			break;
		//---------------------------------------Mano Rotazione secondo y---------------------------------------
		case 79:
			// 'o' rotazione asse y orario
			Hand.rotation.y += 2*Math.PI/180.0;
			break;
		case 76:
			// 'l' rotazione asse y antiorario
			Hand.rotation.y -= 2*Math.PI/180.0;
			break;
		//---------------------------------------Mano Rotazione secondo z---------------------------------------
			case 78:
			// 'n' rotazione asse z orario
			Hand.rotation.z += 2*Math.PI/180.0;
			break;
		case 77:
			// 'm' rotazione asse z antiorario
			Hand.rotation.z -= 2*Math.PI/180.0;
			break;
		default: break;
		}
	}

}
