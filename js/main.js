//Dark theme - Light theme switch button
$('.dark-theme_on').click(function(){
  $('#sidebar').toggleClass('sidebar-wrapper sidebar-wrapper__white');
})
$('.dark-theme_off').click(function(){
  $('#sidebar').toggleClass('sidebar-wrapper sidebar-wrapper__white');
})

function toggleClass(el, class1, class2) {
      el.className = (el.className == class1) ? class2 : class1;
  }
//Dark theme - Light theme switch button

//Sidebar
self.onload=_=>{
  const c=document.querySelector("#wrapper");
  document.querySelectorAll("#side,#sidebar-toggle").forEach(
    a=>a.addEventListener("click",e=>{e.preventDefault();
      c.classList.toggle("toggled");}));};
//Sidebar


// Active class
$("li").click(function () {
  $("li").removeClass("active");
  $(this).addClass("active");
});
// Active class

// Filter popover
$(document).ready(function () {
  $(".filter-click").click(function (event) {
    event.stopPropagation();
    $("#filter-tooltip").toggle();
  });
  $("#filter-tooltip").on("click", function (event) {
    event.stopPropagation();
  });
});

$(document).on("click", function () {
  $("#filter-tooltip").hide();
});

$(function() {
  $('.filter__clear').on('click', function() {
    $('.checkboxes input:checkbox').prop('checked', false);
  });
});
$(function() {
  $('.filter__clear_two').on('click', function() {
    $('.checkboxes-2 input:checkbox').prop('checked', false);
  });
});
// Filter popover


// User info popover
$(document).on("click", function () {
  $("#tooltip-block").hide();
});

$(document).ready(function() {
   var popupLink = $('.user-avatar__link');
   var rulesPop = $('#tooltip-block');
   popupLink.mouseenter(function () {
       rulesPop.show(100);
   });

    rulesPop.mouseleave(function () {
        rulesPop.hide(100);
    });
});
// User info popover

//Switcher
$(
  "#switcherCheckbox, #switcherCheckbox2, #switcherCheckbox3, #switcherCheckbox4, #switcherCheckbox5, #switcherCheckbox6, #switcherCheckbox7, #switcherCheckbox8, #switcherCheckbox9, #switcherCheckbox10, #switcherCheckbox11"
).change(function () {
  if ($(this).is(":checked")) {
    $(this).parent().addClass("annualy");
  } else {
    $(this).parent().removeClass("annualy");
  }
});

$(function () {
  $(
    "#switcherCheckbox, #switcherCheckbox2, #switcherCheckbox3, #switcherCheckbox4, #switcherCheckbox5, #switcherCheckbox6, #switcherCheckbox7, #switcherCheckbox8, #switcherCheckbox9, #switcherCheckbox10, #switcherCheckbox11"
  ).change(function () {
    if ($(this).is(":checked")) {
      $("#annualy-plan").addClass("annualy-plan");
    } else {
      $("#annualy-plan").removeClass("annualy-plan");
    }
  });
});
//Switcher

// Sales tables
$("#customCheck0").click(function () {
  if ($(this).is(":checked")) {
    $(".sales-table input:checkbox").prop("checked", true);
  } else {
    $(".sales-table input:checkbox").prop("checked", false);
  }
});
// Sales tables

//Page pagination
$(document).ready(function(){
  //pagNext
    $("#pagNext").click(function(){
      $("#pag01").text(Number($("#pag01").text())+4);
      $("#pag02").text(Number($("#pag02").text())+4);
      $("#pag03").text(Number($("#pag03").text())+4);
      $("#pag04").text(Number($("#pag04").text())+4);
      $("#pag05").text(Number($("#pag05").text())+4);
      $("#pag06").text(Number($("#pag06").text())+4);
      $("#pag07").text(Number($("#pag07").text())+4);
      $("#pag08").text(Number($("#pag08").text())+4);
      $("#pag09").text(Number($("#pag09").text())+4);
      $("#pag10").text(Number($("#pag10").text())+4);
    })
    
  //pagPrevious
    $("#pagPrevious").click(function(){
      if ($("#pag01").text() != 1) {
        if((Number($("#pag01").text())-4) == 1) {
          $("#pag01").text("1");
          $("#pag02").text("2");
          $("#pag03").text("3");
          $("#pag04").text("4");
          $("#pag05").text("5");
          $("#pag06").text("6");
          $("#pag07").text("7");
          $("#pag08").text("8");
          $("#pag09").text("9");
          $("#pag10").text("10");
        } else{
          $("#pag01").text(Number($("#pag01").text())-4);
          $("#pag02").text(Number($("#pag02").text())-4);
          $("#pag03").text(Number($("#pag03").text())-4);
          $("#pag04").text(Number($("#pag04").text())-4);
          $("#pag05").text(Number($("#pag05").text())-4);
          $("#pag06").text(Number($("#pag06").text())-4);
          $("#pag07").text(Number($("#pag07").text())-4);
          $("#pag08").text(Number($("#pag08").text())-4);
          $("#pag09").text(Number($("#pag09").text())-4);
          $("#pag10").text(Number($("#pag10").text())-4);
        }
      } else {
        $("#pag01").text("1");
        $("#pag02").text("2");
        $("#pag03").text("3");
        $("#pag04").text("4");
        $("#pag05").text("5");
        $("#pag06").text("6");
        $("#pag07").text("7");
        $("#pag08").text("8");
        $("#pag09").text("9");
        $("#pag10").text("10");
      }
    })
    
    // onclick
    $("#pag01").click(function(){
      $("#test").text($("#pag01").text());
    })
    $("#pag02").click(function(){
      $("#test").text($("#pag02").text());
    })
    $("#pag03").click(function(){
      $("#test").text($("#pag03").text());
    })
    $("#pag04").click(function(){
      $("#test").text($("#pag04").text());
    })
    $("#pag05").click(function(){
      $("#test").text($("#pag05").text());
    })
    $("#pag06").click(function(){
      $("#test").text($("#pag06").text());
    })
    $("#pag07").click(function(){
      $("#test").text($("#pag07").text());
    })
    $("#pag08").click(function(){
      $("#test").text($("#pag08").text());
    })
    $("#pag09").click(function(){
      $("#test").text($("#pag09").text());
    })
    $("#pag10").click(function(){
      $("#test").text($("#pag10").text());
    })
    
  });

  //Page pagination


//  Permissions switcher
$(
  "#permissions1, #permissions2, #permissions3, #permissions4, #permissions5"
).change(function () {
  if ($(this).is(":checked")) {
    $(this).parent().addClass("permissionsSwitcher");
  } else {
    $(this).parent().removeClass("permissionsSwitcher");
  }
});
//  Permissions switcher


//Switcher
$(
  "#switcherCheckbox, #switcherCheckbox2, #switcherCheckbox3, #switcherCheckbox4, #switcherCheckbox5, #switcherCheckbox6, #switcherCheckbox7, #switcherCheckbox8, #switcherCheckbox9, #switcherCheckbox10, #switcherCheckbox11"
).change(function () {
  if ($(this).is(":checked")) {
    $(this).parent().addClass("annualy");
  } else {
    $(this).parent().removeClass("annualy");
  }
});

$(function () {
  $(
    "#switcherCheckbox, #switcherCheckbox2, #switcherCheckbox3, #switcherCheckbox4, #switcherCheckbox5, #switcherCheckbox6, #switcherCheckbox7, #switcherCheckbox8, #switcherCheckbox9, #switcherCheckbox10, #switcherCheckbox11"
  ).change(function () {
    if ($(this).is(":checked")) {
      $("#annualy-plan").addClass("annualy-plan");
    } else {
      $("#annualy-plan").removeClass("annualy-plan");
    }
  });
});
//Switcher

// Sales tables
$("#customCheck0").click(function () {
  if ($(this).is(":checked")) {
    $(".sales-table input:checkbox").prop("checked", true);
  } else {
    $(".sales-table input:checkbox").prop("checked", false);
  }
});
// Sales tables

// Refferal table modals
$(document).ready(function(){

  $('.refferal__table td').each(function() {
    var $dropdown = $(this);

    $("a.threePoint-btn_white", $dropdown).click(function(e) {
      e.preventDefault();
      $div = $("div.refferal__overlay", $dropdown);
      $div.toggle();
      $("div.refferal__overlay").not($div).hide();
      return false;
    });

});
    
  $('html').click(function(){
    $("div.refferal__overlay").hide();
  });
     
});

// Refferal table modals


//Page pagination
$(document).ready(function(){
  //pagNext
    $("#pagNext").click(function(){
      $("#pag01").text(Number($("#pag01").text())+0);
      $("#pag02").text(Number($("#pag02").text())+0);
      $("#pag03").text(Number($("#pag03").text())+0);
      $("#pag04").text(Number($("#pag04").text())+0);
      $("#pag05").text(Number($("#pag05").text())+0);
      $("#pag06").text(Number($("#pag06").text())+0);
      $("#pag07").text(Number($("#pag07").text())+0);
      $("#pag08").text(Number($("#pag08").text())+0);
      $("#pag09").text(Number($("#pag09").text())+0);
      $("#pag10").text(Number($("#pag10").text())+0);
    })
    
  //pagPrevious
    $("#pagPrevious").click(function(){
      if ($("#pag01").text() != 1) {
        if((Number($("#pag01").text())-0) == 1) {
          $("#pag01").text("1");
          $("#pag02").text("2");
          $("#pag03").text("3");
          $("#pag04").text("4");
          $("#pag05").text("5");
          $("#pag06").text("6");
          $("#pag07").text("7");
          $("#pag08").text("8");
          $("#pag09").text("9");
          $("#pag10").text("10");
        } else{
          $("#pag01").text(Number($("#pag01").text())-0);
          $("#pag02").text(Number($("#pag02").text())-0);
          $("#pag03").text(Number($("#pag03").text())-0);
          $("#pag04").text(Number($("#pag04").text())-0);
          $("#pag05").text(Number($("#pag05").text())-0);
          $("#pag06").text(Number($("#pag06").text())-0);
          $("#pag07").text(Number($("#pag07").text())-0);
          $("#pag08").text(Number($("#pag08").text())-0);
          $("#pag09").text(Number($("#pag09").text())-0);
          $("#pag10").text(Number($("#pag10").text())-0);
        }
      } else {
        $("#pag01").text("1");
        $("#pag02").text("2");
        $("#pag03").text("3");
        $("#pag04").text("4");
        $("#pag05").text("5");
        $("#pag06").text("6");
        $("#pag07").text("7");
        $("#pag08").text("8");
        $("#pag09").text("9");
        $("#pag10").text("10");
      }
    })
    
    // onclick
    $("#pag01").click(function(){
      $("#test").text($("#pag01").text());
    })
    $("#pag02").click(function(){
      $("#test").text($("#pag02").text());
    })
    $("#pag03").click(function(){
      $("#test").text($("#pag03").text());
    })
    $("#pag04").click(function(){
      $("#test").text($("#pag04").text());
    })
    $("#pag05").click(function(){
      $("#test").text($("#pag05").text());
    })
    $("#pag06").click(function(){
      $("#test").text($("#pag06").text());
    })
    $("#pag07").click(function(){
      $("#test").text($("#pag07").text());
    })
    $("#pag08").click(function(){
      $("#test").text($("#pag08").text());
    })
    $("#pag09").click(function(){
      $("#test").text($("#pag09").text());
    })
    $("#pag10").click(function(){
      $("#test").text($("#pag10").text());
    })
    
  });

  //Page pagination


//  Permissions switcher
$(
  "#permissions1, #permissions2, #permissions3, #permissions4, #permissions5"
).change(function () {
  if ($(this).is(":checked")) {
    $(this).parent().addClass("permissionsSwitcher");
  } else {
    $(this).parent().removeClass("permissionsSwitcher");
  }
});
//  Permissions switcher

//Toast notification
$(document).ready(function() {
  $("#openToast").toggleClass("hide view");
  
  $('a.exit--toast').click(function() {
      $("#openToast").fadeOut(250, 0);
  });
});
//Toast notification

//Alert notification
$(document).ready(function() {  
  $('a.exit--toast').click(function() {
      $("#hideAlert").fadeOut(500, 0);
  });
});
//Alert notification

// Upload photo
$(function(){
	var container = $('.file-input'), inputFile = $('#file-input, #file-input2'), img, btn, txt = '', txtAfter = '';
			
	if(!container.find('#upload').length){
		container.find('.file-input').append('<input type="button"  id="upload">');
		btn = $('#upload');
		container.prepend('<img src="" class="hidden" alt="Uploaded file" id="uploadImg" width="100">');
		img = $('#uploadImg');
	}
			
	btn.on('click', function(){
		img.animate({opacity: 0}, 300);
		inputFile.click();
	});

	inputFile.on('change', function(e){
		container.find('label').html();
		
		var i = 0;
		for(i; i < e.originalEvent.srcElement.files.length; i++) {
			var file = e.originalEvent.srcElement.files[i], 
				reader = new FileReader();

			reader.onloadend = function(){
				img.attr('src', reader.result).animate({opacity: 1}, 700);
			}
			reader.readAsDataURL(file);
			img.removeClass('hidden');
		}
		
		btn.val( txtAfter );
	});
});
// Upload photo
$('div.notification-tooltip__insideinput:checkbox').change(function(){
  if($(this).is(":checked")) {
      $('div.notification-tooltip__inside').addClass("hide");
  } else {
      $('div.notification-tooltip__inside').removeClass("hide");
  }
});

// Select
$('.selectpicker').selectpicker();

  $('.selectpicker').on('changed.bs.select',
      function (e, clickedIndex, isSelected, previousValue) {

    if (clickedIndex === 0) {
      $('#pills-service-tab').click();
    }

    else if (clickedIndex === 1) {
      $('#pills-attached-tab').click();
    }

    else if (clickedIndex === 2) {
      $('#pills-permissions-tab').click();
    }
  });

$('.selectpicker').selectpicker();

  $('.selectpicker').on('changed.bs.select',
      function (e, clickedIndex, isSelected, previousValue) {

    if (clickedIndex === 0) {
      $('#pills-service-tab1').click();
    }

    else if (clickedIndex === 1) {
      $('#pills-attached-tab1').click();
    }

    else if (clickedIndex === 2) {
      $('#pills-permissions-tab1').click();
    }
  });
$('.selectpicker').selectpicker();

  $('.selectpicker').on('changed.bs.select',
      function (e, clickedIndex, isSelected, previousValue) {

    if (clickedIndex === 0) {
      $('#pills-service-tab2').click();
    }

    else if (clickedIndex === 1) {
      $('#pills-attached-tab2').click();
    }

    else if (clickedIndex === 2) {
      $('#pills-permissions-tab2').click();
    }
  });

//  Show all

