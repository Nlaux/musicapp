var firstInstSelected, secondInstSelected, firstNote, secondNote, butCheck, buttonSelected; 


$(function() {
	$('.resetLink').click(function() {
		//toggle button image to highlight
		$('#resetBtnImg').removeClass("resetImg");
		$('#resetBtnImg').addClass("resetImgHover");
		
		//reset note buttons
    	firstInstSelected = undefined, secondInstSelected = undefined, firstNote = undefined, secondNote = undefined, butCheck = undefined, buttonSelected = undefined;
    	
    	$('.instBox').removeClass("instBoxDown");
		$('.instBtnLink').removeClass("instBtnLinkHighlight");
		$('.instBox2').removeClass("instBoxDown2");
		$('.instBtnLink2').removeClass("instBtnLinkHighlight2");
		$('#but1').find('span:first').text("");
		$('#but1').find('span:last').text("");
		$('#but2').find('span:first').text("");
		$('#but2').find('span:last').text("");
		$('#but3').find('span:first').text("");
		$('#but3').find('span:last').text("");
		$('#but4').find('span:first').text("");
		$('#but4').find('span:last').text("");
		$('#but5').find('span:first').text("");
		$('#but5').find('span:last').text("");
		$('#but6').find('span:first').text("");
		$('#but6').find('span:last').text("");
		$('#but7').find('span:first').text("");
		$('#but7').find('span:last').text("");
		
		//reset back to normal button img
		removeRHI();
    })
})

function removeRHI() {
	setTimeout(function(){$('#resetBtnImg').removeClass("resetImgHover").addClass("resetImg")},1000);
}
				
$(function() {
	$('.instBtnLink').click(function() {
    	firstInstSelected = $(this).data('value');
    	
    	//remove other selected buttons
    	$('.instBox').removeClass("instBoxDown");
		$('.instBtnLink').removeClass("instBtnLinkHighlight");
		
		//add highlight to currently selected button
		$(this.parentNode).addClass("instBoxDown");
    	$(this).addClass("instBtnLinkHighlight");
    	
    	//if same button selected, alert
    	if (firstInstSelected == secondInstSelected) {
	    	alert ("Can't convert from same key.");
	    	
	    	firstInstSelected = undefined;
	    	$('.instBox').removeClass("instBoxDown");
	    	$('.instBtnLink').removeClass("instBtnLinkHighlight");
    	}
   									
    })
})

$(function() {
	$('.instBtnLink2').click(function() {
    	secondInstSelected = $(this).data('value');
    	
    	//remove other selected buttons
    	$('.instBox2').removeClass("instBoxDown2");
		$('.instBtnLink2').removeClass("instBtnLinkHighlight2");
		
		//add highlight to currently selected button
		$(this.parentNode).addClass("instBoxDown2");
    	$(this).addClass("instBtnLinkHighlight2");
    	
    	//if same button selected, alert
    	if (secondInstSelected == firstInstSelected) {
	    	alert ("Can't convert from same key.");
	    	
	    	secondInstSelected = undefined;
	    	$('.instBox2').removeClass("instBoxDown2");
	    	$('.instBtnLink2').removeClass("instBtnLinkHighlight2");
    	}
    									
    })
})


$(function() {
	$('.buttonLink').click(function() {
    	buttonSelected = $(this).data('name');
    	
    	//reset Note Selections
    	$('.noteName').removeClass("noteNameDown");
		$('.noteLink').removeClass("noteHighlight");
		$('.noteNameModFlat').removeClass("noteNameDown");
		$('#nlsFlat').removeClass("noteHighlight");
		$('.noteNameModSharp').removeClass("noteNameDown");
		$('#nlsSharp').removeClass("noteHighlight");
			
    	firstNote = undefined;
		secondNote = undefined;
								
    })
})


$(function() {
	$('.noteLink').click(function() {
		
		//if modifier button pressed
		//get modifer button
		var butPressed = this.parentNode.id;
		
		if (butPressed == "sharp") {
    		$('.noteNameModSharp').toggleClass("noteNameDown");
			$('#nlsSharp').toggleClass("noteHighlight");
			$('.noteNameModFlat').removeClass("noteNameDown");
			$('#nlsFlat').removeClass("noteHighlight");
			
			//clear button contents
			var butTextTemp = $('#' + buttonSelected).find('span:last').text();
			
				if (butTextTemp == "#") {
					$('#' + buttonSelected).find('span:last').text("");
					return;
				}
			
			} else if (butPressed == "flat") {
				$('.noteNameModFlat').toggleClass("noteNameDown");
				$('#nlsFlat').toggleClass("noteHighlight");
				$('.noteNameModSharp').removeClass("noteNameDown");
				$('#nlsSharp').removeClass("noteHighlight");
				
				//clear button contents
				var butTextTemp = $('#' + buttonSelected).find('span:last').text();
			
				if (butTextTemp == "b") {
					$('#' + buttonSelected).find('span:last').text("");
					return;
				}

			} else {
				//remove All selected buttons, except modifier buttons
				$('.noteName').removeClass("noteNameDown");
				$('.noteLink').removeClass("noteHighlight");
		
				//add to currently selected button
				$(this.parentNode).addClass("noteNameDown");
				$(this).addClass("noteHighlight");
			}
	
		
		//get First Note Value
		firstNote = $(this).data('value');
		
		//If the firstNote clicked is a sharp or flat, drop in second note position
		if (firstNote == "#" || firstNote == "b") {
				$('#' + buttonSelected).addClass("doubleNote");
				noteConverter();
				//$('#' + buttonSelected).find('span:last').text(secondNote);
			} else { 
				$('#' + buttonSelected).addClass("singleNote");
				noteConverter();
				//$('#' + buttonSelected).find('span:first').text(firstNote);	
		}
		
		// add Sharp or Flat. 
		if (firstNote != undefined) {
			secondNote = $(this).data('value');
			
			if (secondNote == "#" || secondNote == "b") {
				secondNote = $(this).data('value');
				$('#' + buttonSelected).addClass("doubleNote");
				$('#' + buttonSelected).find('span:last').text(secondNote);
						    				
    			} else {
    				secondNote = undefined;
    			} 
			}	 
		})
	})
	
	function noteConverter() {
		//Bb to C Conversion
		if (firstInstSelected == "Bb" || secondInstSelected == "C") {
			if (firstNote == "A") {
				$('#' + buttonSelected).find('span:first').text("D");
				$('#' + buttonSelected).find('span:last').text("#");			
			}
			
			if (firstNote == "B") {
				$('#' + buttonSelected).find('span:first').text("G");
				$('#' + buttonSelected).find('span:last').text("");	
			}
			
			if (firstNote == "C") {
				$('#' + buttonSelected).find('span:first').text("E");
				$('#' + buttonSelected).find('span:last').text("b");			
			}
			
			if (firstNote == "D") {
				$('#' + buttonSelected).find('span:first').text("A");
				$('#' + buttonSelected).find('span:last').text("#");			
			}
			
			if (firstNote == "E") {
				$('#' + buttonSelected).find('span:first').text("C");
				$('#' + buttonSelected).find('span:last').text("#");			
			}
			
			if (firstNote == "F") {
				$('#' + buttonSelected).find('span:first').text("G");
				$('#' + buttonSelected).find('span:last').text("");		
			}
			
			if (firstNote == "G") {
				$('#' + buttonSelected).find('span:first').text("A");
				$('#' + buttonSelected).find('span:last').text("b");			
			}
		}
		
		if (firstInstSelected == "bariSax" || secondInstSelected == "trumpet") {
			if (firstNote == "A") {
				$('#' + buttonSelected).find('span:first').text("D");
				$('#' + buttonSelected).find('span:last').text("#");			
			}
			
			if (firstNote == "B") {
				$('#' + buttonSelected).find('span:first').text("G");
				$('#' + buttonSelected).find('span:last').text("");	
			}
			
			if (firstNote == "C") {
				$('#' + buttonSelected).find('span:first').text("E");
				$('#' + buttonSelected).find('span:last').text("b");			
			}
			
			if (firstNote == "D") {
				$('#' + buttonSelected).find('span:first').text("A");
				$('#' + buttonSelected).find('span:last').text("#");			
			}
			
			if (firstNote == "E") {
				$('#' + buttonSelected).find('span:first').text("C");
				$('#' + buttonSelected).find('span:last').text("#");			
			}
			
			if (firstNote == "F") {
				$('#' + buttonSelected).find('span:first').text("G");
				$('#' + buttonSelected).find('span:last').text("");		
			}
			
			if (firstNote == "G") {
				$('#' + buttonSelected).find('span:first').text("A");
				$('#' + buttonSelected).find('span:last').text("b");			
			}
		}

		
		
	}
