var e=function(e,t,n,i,o){var a=document.querySelector("body"),s=document.createElement("div"),c=document.createElement("h2"),l=document.createElement("p");c.className="title",c.innerText=n,c.style.fontSize="18px",l.innerText=i,s.classList.add("notification",o),s.style.top="".concat(e,"px"),s.style.right="".concat(t,"px"),s.append(c,l),a.append(s),window.setTimeout(function(){s.remove()},2e3)};e(10,10,"Title of Success message","Message example.\n Notification should contain title and description.","success"),e(150,10,"Title of Error message","Message example.\n Notification should contain title and description.","error"),e(290,10,"Title of Warning message","Message example.\n Notification should contain title and description.","warning");
//# sourceMappingURL=index.77437da5.js.map
