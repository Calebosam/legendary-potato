const ablyft001 = (function () {
    const _ticketPrefix = "ABlyft-001";
    const _variant = "Test-Variant";
  
    const _addMarkupModifications = function () {
      const parentHashesNode = document.querySelector('.jobad-stage__hashes');
      const newLiElement = document.createElement('li');
      newLiElement.textContent = 'New List Item';
      parentHashesNode.appendChild(newLiElement);
    };
  
  
    const _logWithPrefix = function (logMessage) {
      console.log("[" + _ticketPrefix + "] " + logMessage);
    };
  
    return {
      init: function () {
        _addMarkupModifications();
       
      },
    };
  })();
  
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", ablyft001.init);
  } else {
    ablyft001.init();
  }
  