$("document").ready(function () { 

    
    $(".menu").click(function () {
        $("nav").toggle();
    });

    /*filter buttons*/
  filterSelection("all")
      function filterSelection(c) {
        var x, i;
        x = document.getElementsByClassName("work");
        if (c == "all") c = "";

        for (i = 0; i < x.length; i++) {
        RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) {
           AddClass(x[i], "show");
        }}
    }

  $('#myBtnContainer .btn').on('click',function(){
     var c = $(this).attr('type')
     filterSelection(c);
  })


  function AddClass(element, name) {
     var i, arr1, arr2;
     arr1 = element.className.split(" ");
     arr2 = name.split(" ");
     for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      } }
    }


  function RemoveClass(element, name) {
     var i, arr1, arr2;
     arr1 = element.className.split(" ");
     arr2 = name.split(" ");
     for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
      }
      }
      element.className = arr1.join(" ");
    }

  var btnContainer = document.getElementById("myBtnContainer");
  var btns = btnContainer.getElementsByClassName("btn");
  for (var i = 0; i < btns.length; i++) {
     btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";

      //clear the searchbox when someone clicks on a button so whatever is in it doesn't interfere with the buttons hiding and showing things
      searchInput.value = '';
      });
    } 

    /*searching box*/
  let searchInput = document.querySelector('input');
  searchInput.addEventListener('keyup', search);
 
  
  let titles = document.querySelectorAll('#work-container .work');
  let searchTerm = '';
  let tit = '';
 
  function search(e) {   
      searchTerm = e.target.value.toLowerCase();
 
      titles.forEach((title) => {
         tit = title.textContent.toLowerCase();
     
        //  tit.includes(searchTerm) ? title.style.display = 'block' : title.style.display = 'none';

        //your filter buttons were showing/hiding things by adding and removing the class "show", rather than using display: block/display: none. So I've updated the search boolean to show and hide with classes as well. This way, your button functions that add/remove class "show" will still work for any classes added with the searchbar.
         tit.includes(searchTerm) ? title.classList.add('show') : title.classList.remove("show");
        });
    }
  

});


