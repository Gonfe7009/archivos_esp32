var BAJAS_;
	var ALTAS_;
	var RIGTH_;
	var INTERMITENTES_;
	var LEFT_;
	var FORWARD_;
	var GIZQUIERDA_;
	var GDERECHA_;
	var BACKWARD_;
	
	function valor()
	{
	BAJAS_ = true;
	ALTAS_ = true;
	RIGTH_ = true;
	INTERMITENTES_ = true;
	LEFT_ = true;
	FORWARD_ = true;
	GIZQUIERDA_ = true;
	GDERECHA_ = true;
	BACKWARD_ = true;
	
	}
    // Función para hacer invisible las luces bajas
    function hacerInvisibleB() {
	
      var textoHola = document.getElementById('textoHola');
      var textoAdios = document.getElementById('textoAdios');
	  
      // Hacer invisible
	  if (BAJAS_) {
      textoHola.style.display = 'none';
	   textoAdios.style.display = 'block';	
	  BAJAS_ = false;
	  }
	  else{
	   textoHola.style.display = 'block';
	   textoAdios.style.display = 'none';	   
	   BAJAS_ = true;
	  }
    }
	function hacerInvisibleA() {
	
      var textoHolaA = document.getElementById('textoHolaA');
      var textoAdiosA = document.getElementById('textoAdiosA');
	  
	    // Hacer invisible
	  if (ALTAS_) {
      textoHolaA.style.display = 'none';
	   textoAdiosA.style.display = 'block';	
	  ALTAS_ = false;
	  }
	  else{
	   textoHolaA.style.display = 'block';
	   textoAdiosA.style.display = 'none';	   
	   ALTAS_ = true;
	  }
	  }
	  
	  function hacerInvisibleR() {
	
      var textoHolaR = document.getElementById('textoHolaR');
      var textoAdiosR = document.getElementById('textoAdiosR');
	  
	    // Hacer invisible
	  if (RIGTH_) {
      textoHolaR.style.display = 'none';
	   textoAdiosR.style.display = 'block';	
	  RIGTH_ = false;
	  }
	  else{
	   textoHolaR.style.display = 'block';
	   textoAdiosR.style.display = 'none';	   
	   RIGTH_ = true;
	  }
	  }
	  
	  
	  
	   function hacerInvisibleI() {
	
      var textoHolaI = document.getElementById('textoHolaI');
      var textoAdiosI = document.getElementById('textoAdiosI');
	  
	    // Hacer invisible
	  if (INTERMITENTES_) {
      textoHolaI.style.display = 'none';
	   textoAdiosI.style.display = 'block';	
	  INTERMITENTES_ = false;
	  }
	  else{
	   textoHolaI.style.display = 'block';
	   textoAdiosI.style.display = 'none';	   
	   INTERMITENTES_ = true;
	  }
	  }
	  function hacerInvisibleL() {
	
      var textoHolaL = document.getElementById('textoHolaL');
      var textoAdiosL = document.getElementById('textoAdiosL');
	  
	    // Hacer invisible
	  if (LEFT_) {
      textoHolaL.style.display = 'none';
	   textoAdiosL.style.display = 'block';	
	  LEFT_ = false;
	  }
	  else{
	   textoHolaL.style.display = 'block';
	   textoAdiosL.style.display = 'none';	   
	   LEFT_ = true;
	  }
	  }
	  
	  function hacerInvisibleF() {
	
      var textoHolaF = document.getElementById('textoHolaF');
      var textoAdiosF = document.getElementById('textoAdiosF');
	  
	    // Hacer invisible
	  if (FORWARD_) {
      textoHolaF.style.display = 'none';
	   textoAdiosF.style.display = 'block';	
	  FORWARD_ = false;
	  }
	  else{
	   textoHolaF.style.display = 'block';
	   textoAdiosF.style.display = 'none';	   
	   FORWARD_ = true;
	  }
	  }
	
	function hacerInvisibleGI() {
	
      var textoHolaGI = document.getElementById('textoHolaGI');
      var textoAdiosGI = document.getElementById('textoAdiosGI');
	  
	    // Hacer invisible
	  if (GIZQUIERDA_) {
      textoHolaGI.style.display = 'none';
	   textoAdiosGI.style.display = 'block';	
	  GIZQUIERDA_ = false;
	  }
	  else{
	   textoHolaGI.style.display = 'block';
	   textoAdiosGI.style.display = 'none';	   
	   GIZQUIERDA_ = true;
	  }
	  }
	  function hacerInvisibleGD() {
	
      var textoHolaGD = document.getElementById('textoHolaGD');
      var textoAdiosGD = document.getElementById('textoAdiosGD');
	  
	    // Hacer invisible
	  if (GDERECHA_) {
      textoHolaGD.style.display = 'none';
	   textoAdiosGD.style.display = 'block';	
	  GDERECHA_ = false;
	  }
	  else{
	   textoHolaGD.style.display = 'block';
	   textoAdiosGD.style.display = 'none';	   
	   GDERECHA_ = true;
	  }
	  }
	  
	  function hacerInvisibleBB() {
	
      var textoHolaBB = document.getElementById('textoHolaBB');
      var textoAdiosBB = document.getElementById('textoAdiosBB');
	  
	    // Hacer invisible
	  if (BACKWARD_) {
      textoHolaBB.style.display = 'none';
	   textoAdiosBB.style.display = 'block';	
	  BACKWARD_ = false;
	  }
	  else{
	   textoHolaBB.style.display = 'block';
	   textoAdiosBB.style.display = 'none';	   
	   BACKWARD_ = true;
	  }
	  }
	 
	
	window.onload = valor;