// Website Navigation Events Go Here

var currentPage;

$(document).ready(function(){
	changePage("./js/pages/page0.html",function(){});
	Galleria.loadTheme('./js/lib/galleria/themes/classic/galleria.classic.min.js');
	Galleria.configure('overlayBackground', '#FBFBFB');
			Galleria.run('#slideshow',{
							transition: 'fade',
							overlayBackground: '#FBFBFB',
							overlayOpacity: 1,
							thumbnails: 'numbers',
							autoplay: 6000,
							transitionSpeed: 600,
							imagePanSmoothness: 24,
							imageCrop: true
			});
		currentPage = "#page0";
	$("#logo").click(menuClickHandler);
	$("#logoname").click(menuClickHandler);
	$("#logoImg").click(menuClickHandler);

	// NAVBAR BUTTONS
	$("#nav-button0").click(menuClickHandler);
	$("#nav-item0").click(menuClickHandler);
	$("#nav-button1").click(menuClickHandler);
	$("#nav-item1").click(menuClickHandler);
	$("#nav-button2").click(menuClickHandler);
	$("#nav-item2").click(menuClickHandler);
	$("#nav-button3").click(menuClickHandler);
	$("#nav-item3").click(menuClickHandler);
	//$("#nav-button3").click(navButton3Handler);
	//$("#nav-button4").click(navButton4Handler);
	
	var $selectNumberOfAdults = $("#numberAdults");
	$selectNumberOfAdults.append($('<option></option>').val(0).html('-'));
	for (i=1;i<=20;i++){
					$selectNumberOfAdults.append($('<option></option>').val(i).html(i))
	}
	
	var $selectNumberOfChildren = $("#numberChildren");
	$selectNumberOfChildren.append($('<option></option>').val(0).html('-'));
	for (i=1;i<=20;i++){
					$selectNumberOfChildren.append($('<option></option>').val(i).html(i))
	}

	$("#arrivalDate").datepicker({ dateFormat: "dd/mm/yy",
		onSelect: function(dateStr) {
            var min = $(this).datepicker('getDate') || new Date();
            $('#departureDate').datepicker('option', {minDate: min});
         }
	 });
	$("#departureDate").datepicker({ dateFormat: "dd/mm/yy" });
	$.datepicker.setDefaults( $.datepicker.regional[ "es" ] );
	
});

// Disabling arrow keys
var ar = new Array(37, 38, 39, 40);
var disableArrowKeys = function(e) {
    if ($.inArray(e.keyCode, ar)>=0) {
        e.preventDefault();
    }
}

$(document).keydown(disableArrowKeys);

function changePage(url,f){
	$("#loadingBanner").show();
	$("#wrapper").hide();
	$("#wrapper").load(url, function() {
  $("#loadingBanner").hide();
  $("#wrapper").fadeTo("slow",1);
  f();
	});
}

function menuClickHandler(e){
	var targetElement = $(e.target).attr('data-target');
	if(targetElement != currentPage){
			if(targetElement == "#page4"){
				$("#copyright").fadeTo('slow',0);
				$("#bookingButton").fadeTo('slow',0);
				changePage("./js/pages/page4.html",function(){});
				Galleria.configure('overlayBackground', '#FBFBFB');
				Galleria.run('#photoGallery',{
							transition: 'fadeslide',
							overlayBackground: '#FBFBFB',
							overlayOpacity: 1,
							transitionSpeed: 600,
							imagePanSmoothness: 24
			});
				
			}else{
				$("#copyright").fadeTo('slow',1);
				$("#bookingButton").fadeTo('slow',1);
				if(targetElement == "#page0"){
						changePage("./js/pages/page0.html",function(){});
						Galleria.configure('overlayBackground', '#FBFBFB');
						Galleria.run('#slideshow',{
								transition: 'fade',
								overlayBackground: '#FBFBFB',
								overlayOpacity: 1,
								thumbnails: 'numbers',
								autoplay: 6000,
								transitionSpeed: 600,
								imagePanSmoothness: 24,
								imageCrop: true
				});
			}else if(targetElement == "#page1"){
				changePage("./js/pages/page1.html",function(){
						$('#scrollbar1').tinyscrollbar();
					});
			}else if(targetElement == "#page2"){
				changePage("./js/pages/page2.html",function(){
					$('#service1').fadeTo('fast',1);
					$('#service2').fadeTo('fast',1);
					$('#scrollbar2').tinyscrollbar();
					$('#scrollbar3').tinyscrollbar();
					
					});
			}else if(targetElement == "#page3"){
				changePage("./js/pages/page3.html",function(){
						$("#posada").html("Posada <br /> El Paraíso Azul");
						$("#contactanos").html("Teléfonos");
						$("#correoTitle").html("Correo Electrónico");
					});
				
			}
		}
		currentPage = targetElement;
	}
}

function processBooking(e){
	e.preventDefault();
	var bool = verifyData();
	if(bool == "true"){
			var name = $("#name").val();
			var lastname = $('#lastname').val();
			var country = $('#country').val();
			var state = $('#state').val();
			var telephone = $('#telephone').val();
			var email = $('#correo').val();
			var numberAdults = $('#numberAdults').val();
			var numberChildren = $('#numberChildren').val();
			var arrivalDate = $('#arrivalDate').val();
			var departureDate = $('#departureDate').val();
			var checkIn = $('#checkIn').val();
			var checkOut = $('#checkOut').val();
			
			var chk1 = $('#knownSocial').is(':checked')?"Redes Sociales ":"";
			var chk2 = $('#knownFriend').is(':checked')?"Amigo ":"";
			var chk3 = $('#knownInternet').is(':checked')?"Internet ":"";
			var chk4 = $('#knownOther').is(':checked')?"(Otro) "+$("#otherRef").val():"";
			var knownBy = chk1+chk2+chk3+chk4;
			
			var allergies = ""+$('#allergies').val();
			
			var subject = "[Reserva desde sitio web] "+name+" "+lastname+" ["+email+"]";
			var body = "RESERVA DESDE EL SITIO WEB\n";
			body += "\nReserva realizada por "+name+" "+lastname+", ";
			body += "proveniente de "+state+", "+country+".\n";
			body += "\nInformación de Contacto";
			body += "\n	Teléfono: "+telephone;
			body += "\n	Correo electrónico: "+email+"\n";
			body += "\nInformación acerca de la Estadía";
			body += "\n	Número de adultos: "+numberAdults;
			body += "\n	Número de niños: "+numberChildren;
			body += "\n	Fecha de llegada: "+arrivalDate;
			body += "\n	Fecha de salida: "+departureDate;
			body += "\n	Prefiere realizar el check-in: "+checkIn;
			body += "\n	Prefiere realizar el check-out: "+checkOut+"\n";
			body += "\nInformación de Interés: ";
			body += "\n	Se enteró de la posada por: "+knownBy;
			body += "\n	Acerca de visitantes con posibles alergias: "+allergies;

			var to = "gentedemar.morrocoy@gmail.com";
			var name = name+" "+lastname;
			sendEmailRequest(email,to,subject,body,name);

			// To send mail using a Mail Client
			//window.open("mailto:gentedemar.morrocoy@gmail.com?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(body));
			
	}
}

function sendEmailRequest(fromEmail,toEmail,subjectText,bodyText,nameText){
	var  dataToSend = { "from": fromEmail, "to": toEmail, "subject": subjectText, "body": bodyText, "name": nameText };
	
	$.post("./js/mgmt/mailSender.php",dataToSend,
		function(data) {
			console.log(data);
		  	alert("¡El correo de reserva fue enviado exitosamente! \n\n" + bodyText);
		  	clearForm();
		})
		.error(function(jqXHR, textStatus, errorThrown) {
	        console.log("error " + textStatus);
	        console.log("incoming Text " + jqXHR.responseText);
	    });
}

function clearForm(){
		$("#name").val("");
		$("#lastname").val("");
		$('#country').val("");
		$('#state').val("");
		$('#telephone').val("");
		$('#correo').val("");
		$('#numberAdults').val("");
		$('#numberChildren').val("");
		$('#arrivalDate').val("");
		$('#departureDate').val("");
		$('#allergies').val("");
		$("#otherRef").val("");
		$('#knownSocial').prop('checked', false);
		$('#knownFriend').prop('checked', false);
		$('#knownInternet').prop('checked', false);
		$('#knownOther').prop('checked', false);
		$.fancybox.close();
}

function verifyData(){
		if($("#name").val()!=""){
			if($('#lastname').val()!=""){
				if($('#country').val()!=""){
					if($('#state').val()!=""){
						if($('#telephone').val()!=""){
								if($('#correo').val()!=""){
									if($('#numberAdults').val()!=""){
										if($('#numberChildren').val()!=""){
												if($('#arrivalDate').val()!="" || $('#departureDate').val()!=""){
														if($('#allergies').val()!=""){
																return "true";
															}else{
																	alert("Por favor, completa el campo referente a las posibles alergias. Coloque 'Ninguno', si no aplica.");
																}
													}else{
															alert("Por favor, verifica las fechas de llegada y de salida");
														}
											}else{
												alert("Por favor, completa el campo 'Número de niños'");
												}
										}else{
											alert("Por favor, completa el campo 'Número de adultos'");
										}
									}else{
											alert("Por favor, completa el campo 'Correo Electrónico'");
										}
							}else{
								alert("Por favor, completa el campo 'Teléfono'");
								}
						}else{
								alert("Por favor, completa el campo 'Estado'");
							}
				}else{
					alert("Por favor, completa el campo 'País'");
					}
				}else{
						alert("Por favor, completa el campo 'Apellido'");
					}
		}else{
				alert("Por favor, completa el campo 'Nombre'");
			}
			
			return "false";
}
