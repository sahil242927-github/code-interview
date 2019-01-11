/* The simple solution to this is to use IIFE
-------------------------------------------
 */

(function() {
  var sahil = {
    checkThis: function() {
      console.log(this);

      function checkOther() {
        console.log(this);
      }
      checkOther(); // checkThis() function called in "global context", will return "this" as "window"
    }
  };
  var moo = sahil.checkThis;
  moo(); // moo() function called in "global context", will return "this" as "window"
})();
