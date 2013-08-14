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
		$(this.childNodes).addClass("instBoxDown");
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
		$(this.childNodes).addClass("instBoxDown2");
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
		var butPressed = this.parentNode.id;
		
		//get New Note Value
		var newNoteTemp = $(this).data('value');
		
		//get Previous Note Value
		var oldNoteTemp = firstNote;
		
		//first Time selecting a note, or first note selected # or b.
		if (oldNoteTemp == undefined) {
			if (butPressed == "sharp") {
    		$('.noteNameModSharp').toggleClass("noteNameDown");
				$('#nlsSharp').toggleClass("noteHighlight");
				$('.noteNameModFlat').removeClass("noteNameDown");
				$('#nlsFlat').removeClass("noteHighlight");
				
				secondNote = newNoteTemp;
				return;
				
			} else if (butPressed == "flat") {
				$('.noteNameModFlat').toggleClass("noteNameDown");
				$('#nlsFlat').toggleClass("noteHighlight");
				$('.noteNameModSharp').removeClass("noteNameDown");
				$('#nlsSharp').removeClass("noteHighlight");
				
				secondNote = newNoteTemp;
				return;
				
			} else {
				$('.noteName').removeClass("noteNameDown");
				$('.noteLink').removeClass("noteHighlight");
				
				//add to currently selected button
				$(this.parentNode).addClass("noteNameDown");
				$(this).addClass("noteHighlight");
				
				firstNote = newNoteTemp;
				noteConverter();
			}
		}
		
		//previous note exists
		if (oldNoteTemp == newNoteTemp) {
			return;
		}
		
		//switching to completely new note with no sharp or flat selected yet	
		if (newNoteTemp != firstNote && secondNote != undefined) {
			$('.noteNameModSharp').removeClass("noteNameDown");
			$('#nlsSharp').removeClass("noteHighlight");
			$('.noteNameModFlat').removeClass("noteNameDown");
			$('#nlsFlat').removeClass("noteHighlight");
				
			secondNote = undefined;
			noteConverter();
			return;
		}
			
		if (oldNoteTemp != newNoteTemp) { 
			if (butPressed == "sharp") {
    			$('.noteNameModSharp').toggleClass("noteNameDown");
				$('#nlsSharp').toggleClass("noteHighlight");
				$('.noteNameModFlat').removeClass("noteNameDown");
				$('#nlsFlat').removeClass("noteHighlight");
				
				
				//second Note Undefined
				if (secondNote == undefined) {
					secondNote = newNoteTemp;
					noteConverter();
					return;
				}
				
				//oldNote the same as newNote, toggle Sharp or Flat
				if (newNoteTemp == secondNote) {
					secondNote = undefined;
					noteConverter();
					return;
				
				} else if (oldNoteTemp == newNoteTemp) {
					$('.noteNameModSharp').removeClass("noteNameDown");
					$('#nlsSharp').removeClass("noteHighlight");
					secondNote = undefined;
					noteConverter();
					return;
					
				} else {
					return;	
				}
				
			} else if (butPressed == "flat") {
				$('.noteNameModFlat').toggleClass("noteNameDown");
				$('#nlsFlat').toggleClass("noteHighlight");
				$('.noteNameModSharp').removeClass("noteNameDown");
				$('#nlsSharp').removeClass("noteHighlight");
				
				//second Note Undefined
				if (secondNote == undefined) {
					secondNote = newNoteTemp;
					noteConverter();
					return;
				}
				
				//oldNote the same as newNote, toggle Sharp or Flat
				if (newNoteTemp == secondNote) {
					secondNote = undefined;
					noteConverter();
					return;
				
				} else if (oldNoteTemp == newNoteTemp) {
					$('.noteNameModFlat').removeClass("noteNameDown");
					$('#nlsFlat').removeClass("noteHighlight");
					secondNote = undefined;
					noteConverter();
					return;
					
				} else {
					return;	
				}

				
			} else {
				$('.noteName').removeClass("noteNameDown");
				$('.noteLink').removeClass("noteHighlight");
				
				//add to currently selected button
				$(this.parentNode).addClass("noteNameDown");
				$(this).addClass("noteHighlight");
				
				firstNote = newNoteTemp;
				noteConverter();
			}		
		}	
	})
})
	
function noteConverter() {
	//C to Bb Conversion
	if (firstInstSelected == "C" && secondInstSelected == "Bb") {
		if (firstNote == "A" && secondNote == undefined) {
			$('#' + buttonSelected).find('span:first').text("B").addClass("singleNote");
			$('#' + buttonSelected).find('span:last').text("");	
			return;		
		}
		
		if (firstNote == "A" && secondNote == "#" || firstNote == "B" && secondNote == "b" ) {
			$('#' + buttonSelected).find('span:first').text("C").addClass("singleNote");
			$('#' + buttonSelected).find('span:last').text("");
			return;	
		}
		
		if (firstNote == "B" && secondNote == undefined) {
			$('#' + buttonSelected).find('span:first').text("C").addClass("doubleNote");
			$('#' + buttonSelected).find('span:last').text("#");
			return;			
		}
		
		if (firstNote == "C" && secondNote == undefined) {
			$('#' + buttonSelected).find('span:first').text("D").addClass("singleNote");
			$('#' + buttonSelected).find('span:last').text("");
			return;			
		}
		
		if (firstNote == "C" && secondNote == "#" || firstNote == "D" && secondNote == "b" ) {
			$('#' + buttonSelected).find('span:first').text("E").addClass("doubleNote");
			$('#' + buttonSelected).find('span:last').text("b");
			return;			
		}
		
		if (firstNote == "D" && secondNote == undefined) {
			$('#' + buttonSelected).find('span:first').text("E").addClass("singleNote");
			$('#' + buttonSelected).find('span:last').text("");
			return;		
		}
		
		if (firstNote == "D" && secondNote == "#" || firstNote == "E" && secondNote == "b" ) {
			$('#' + buttonSelected).find('span:first').text("F").addClass("singleNote");
			$('#' + buttonSelected).find('span:last').text("");
			return;			
		}
		
		if (firstNote == "E" && secondNote == undefined) {
			$('#' + buttonSelected).find('span:first').text("F").addClass("doubleNote");
			$('#' + buttonSelected).find('span:last').text("#");
			return;		
		}
		
		if (firstNote == "F" && secondNote == undefined) {
			$('#' + buttonSelected).find('span:first').text("G").addClass("singleNote");
			$('#' + buttonSelected).find('span:last').text("");
			return;		
		}
		
		if (firstNote == "F" && secondNote == "#" || firstNote == "G" && secondNote == "b" ) {
			$('#' + buttonSelected).find('span:first').text("A").addClass("doubleNote");
			$('#' + buttonSelected).find('span:last').text("b");
			return;			
		}
		
		if (firstNote == "G" && secondNote == undefined) {
			$('#' + buttonSelected).find('span:first').text("A").addClass("singleNote");
			$('#' + buttonSelected).find('span:last').text("");	
			return;	
		}
		
		if (firstNote == "G" && secondNote == "#" || firstNote == "A" && secondNote == "b" ) {
			$('#' + buttonSelected).find('span:first').text("B").addClass("doubleNote");
			$('#' + buttonSelected).find('span:last').text("b");
			return;			
		}
	}
	
	
}
