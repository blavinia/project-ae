  function checkName(f)
  {
    if(f.value == "" ||f.value == " " || f.value.length <3 ) {
      alert("Nume incomplet");
    }
  }
  
    function checkDescriere(f)
  {
    if(f.value == "" ||f.value == " " || f.value.length <5 ) {
      alert("Descriere incompleta");
    }
  }
      function checkID(f)
  {
    if(f.value == "" ||f.value == " " || !f.value.match(('^(0|[1-9][0-9]*)$') )) {
      alert("ID-ul nu este numeric");
    }
  }
  
  