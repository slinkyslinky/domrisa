export function phoneValidation(e) {
   let input = e.target;
   let firstSymbol = input.value[0];
   let secondSymbol = input.value[1];
   let cursorPosition = input.selectionStart;

   input.value = input.value.replace(/\D/g, '')

   switch (firstSymbol) {
      case undefined:
         break;
      case '8':
         input.value = '+7' + input.value.substring(1)
         break;
      case '9':

         input.value = '+7' + input.value;
         break;
      default:

         input.value = '+' + input.value;

   }





   if (secondSymbol === "1" || secondSymbol === "2" || secondSymbol === "3" || secondSymbol === "4" || secondSymbol === "5" || secondSymbol === "6") {
      return;
   }

   if (input.value.length > 10) {
      input.value = input.value.substring(0, 2) + ' (' + input.value.substring(2, 5) + ') ' + input.value.substring(5, 8) + '-' + input.value.substring(8, 10) + '-' + input.value.substring(10, 12)

   } else
      if (input.value.length > 8) {
         input.value = input.value.substring(0, 2) + ' (' + input.value.substring(2, 5) + ') ' + input.value.substring(5, 8) + '-' + input.value.substring(8, 10)

      } else
         if (input.value.length > 5) {
            input.value = input.value.substring(0, 2) + ' (' + input.value.substring(2, 5) + ') ' + input.value.substring(5, 8)

         } else
            if (input.value.length > 2) {
               input.value = input.value.substring(0, 2) + ' (' + input.value.substring(2, 5)

            }


   if (e.nativeEvent.inputType === "insertFromPaste") {
      cursorPosition = 18;
   }
   if (input.value.length === 18) {
      if (e.nativeEvent.data) {
         e.target.onkeypress = (e) => { e.preventDefault() }

      }
   } else e.target.onkeypress = (e) => { }

   if (!e.nativeEvent.data) {
      input.selectionStart = cursorPosition;
      input.selectionEnd = input.selectionStart;
   } else
      if (cursorPosition < input.value.length - 1) {
         input.selectionStart = cursorPosition;
         input.selectionEnd = input.selectionStart;
         if (cursorPosition === 1) {
            input.selectionStart = cursorPosition + 4;
            input.selectionEnd = input.selectionStart;
         }
         if (cursorPosition === 3) {
            input.selectionStart = cursorPosition + 2;
            input.selectionEnd = input.selectionStart;
         }
         if (cursorPosition === 8) {
            input.selectionStart = cursorPosition + 3;
            input.selectionEnd = input.selectionStart;

         }
      }

   // if (cursorPosition() < input.value.length) {
   //    console.log(true);
   // }





}

export function formValidationIncorrect(form) {
   for (let i = 0; i < form.elements.length; i++) {
      let item = form.elements[i]
      if (item.value.length < 2) {
         item.classList.add("input--incorrect-color")
         item.classList.add("input--incorrect-animation")
         item.style.animationDelay = `0.${i}s`

         setTimeout(() => {
            item.classList.remove("input--incorrect-animation")
         }, 500)

         item.oninput = (e) => {
            if (item.value.length > 1) { item.classList.remove("input--incorrect-color") }
         }
      }
   }
}