let AalfabetArrayLower = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let AalfabetArrayUpper = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

(function(){
    let alfabetDiv = document.createElement('div'); 
    alfabetDiv.innerHTML =
        '<b>Алфавит (строчные):</b> ' + AalfabetArrayLower.join(', ') + '<br>' +
        '<b>Алфавит (прописные):</b> ' + AalfabetArrayUpper.join(', ');
    document.body.prepend(alfabetDiv);
})();
