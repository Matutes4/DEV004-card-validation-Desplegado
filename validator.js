const validator = {
  //creé una function habilitar para la activación del botón usando condicionales.
  habilitar: function () {
    const text1 = document.getElementById("cardnumber").value;
    if (text1 === "") {
      document.getElementById("btn").disabled = true;
    } else {
      document.getElementById("btn").disabled = false;
    }
  },


  validate: function () {
    const valid = validator.isValid(
      document.getElementById("cardnumber").value
    );
    if (valid) {
      // Show success in div#result
      alert("Su pago ha sido un éxito");
    } else {
      // Show error message in div#result
      alert("El número ingresado no es válido");
    }
  },

  isValid: function (cardnum) {
    // is creditCardNumber valid?

    let ccn = Array.from( //arreglo apartir de lo que está entre parentesis 
      //
      String(cardnum),
      Number
    );
    console.log("El array ccn contiene: " + ccn);

    /* if (ccn.length === 0) {
      alert("debe ingresar un número de tarjeta");
    }*/

    if (ccn.length > 0) { 
      // se revirtió el valor de ccn usando el condicional if, 
      // tomando en cuenta que length representa la longitud de una cadena.
      ccn = ccn.reverse();
      console.log("el array ahora esta revertido" + ccn);

      for (let i =0; i < ccn.length; i++) {  // se realizaron tres blucles para multiplicaión de cada segundo dígito revertido, para la suma de los mayores a 9 y para la suma total.
        if (i % 2 !== 0) {
          // i%2 != 0 = i es un numero impar
          ccn[i] = ccn[i] * 2;
          console.log("muestra la multiplicaión", i, ccn[i]);
        }
      }

      for (let i = 0; i < ccn.length; i++) {
        if (ccn[i] > 9) {
          const digitos = Array.from(String(ccn[i]), Number);

          ccn[i] = digitos[0] + digitos[1];
          console.log(
            "muestra la suma de mayores de 9",
            i,
            digitos[0],
            digitos[1],
            ccn[i]
          );
        }
      }

      let total = 0;

      for (let i = 0; i < ccn.length; i++) {
        total = total + ccn[i];
        console.log("muestra la suma de el total", i, total);
      }

      if (total % 10 === 0 && total > 0) {
        return true;
      } else {
        return false;
      }
    } else {
      alert("el número que ingresó debe tener 16 dígitos");
    }
  },

  maskit: function () {
    // aplica la funcion maskify del objeto validator
    const resultado = validator.maskify(document.getElementById("cardnumber").value);
    document.getElementById("cardnumber").type = "text";
    document.getElementById("cardnumber").value = resultado;
  },
 
  maskify: function(ccn) {
    let masked = "";
    if (ccn.length > 4) {
      for (let i = 0; i < ccn.length - 4; i++) {
        masked = masked + "#";
      }
      masked = masked + ccn.substr(-4);
    } else {
      masked = ccn;
    }
    //console.log(masked);

    return masked;
  },
};
export default validator;
