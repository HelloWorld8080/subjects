/**
 * Created by alin_balasa on 12-May-16.
 */

var selectors = {
    /* Selectors for the nodes that will contain an expand/collapse button. */
    "expand_buttons":[
    /* Table caption */
    /* "table > caption", */
    /* Article title */
    ".topic > .title",
    /* Section title. Exclude task labels generated by DITA-OT (EXM-37958 & EXM-38501).*/
    ".sectiontitle:not(.tasklabel)",
    /* Index terms groups */
    ".wh_term_group > .wh_first_letter"]
};

/**
 * Add expand-collapse support.
 */
$(document).ready(function () {
    /* Add the expand/collapse buttons. */
    selectors.expand_buttons.forEach(
    function (selector) {
        var matchedNodes = $(document).find(selector);
        // Add the expand/collapse support only if the title node has visible siblings.
        var visibleSiblings = matchedNodes.siblings(':not(:hidden)');
        if (visibleSiblings.length > 0) {
            // Add the element with expand/collapse capabilities
            matchedNodes.prepend("<span class=\"wh_expand_btn expanded\"/>");
            markHiddenSiblingsAsNotExpandable(matchedNodes);
        }
    });
    
    /* Expand / collapse support for the marked content */
    $(document).find('.wh_expand_btn').click(function (event) {
        
        // Change the button state
        $(this).toggleClass("expanded");
        // Will expand-collapse the siblings of the parent node, excepting the ones that were marked otherwise
        var siblings = $(this).parent().siblings(':not(.wh_not_expandable)');
        var tagName = $(this).prop("tagName");
        if (tagName == "CAPTION") {
            // The table does not have display:block, so it will not slide.
            // In this case we'll just hide it
            siblings.toggle();
        } else {
            siblings.slideToggle("1000");
        }
        
        event.stopImmediatePropagation();
        return false;
    });
});

/**
 * Marks the hidden siblings of the matched nodes as being not expandable.
 *
 * @param nodes The matched nodes.
 */
function markHiddenSiblingsAsNotExpandable(nodes) {
    var siblings = nodes.siblings(":hidden");
    siblings.addClass("wh_not_expandable");
}

/*added by Tung to add icon*/
$(document).ready(function () {
    var x = document.getElementsByClassName("hd");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].innerHTML = x[i].innerHTML + "<img src=\"../daksys-webhelp/resources/img/hd.png \" height=\"75\" width=\"75\" />"
    }
    var x = document.getElementsByClassName("water_proof");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].innerHTML =  x[i].innerHTML + "<img src=\"../daksys-webhelp/resources/img/waterproof.png \" height=\"75\" width=\"75\" />"
    }
    var x = document.getElementsByClassName("H265");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].innerHTML =  x[i].innerHTML + "<img src=\"../daksys-webhelp/resources/img/h265.png \" height=\"75\" width=\"75\" />"
    }
    var x = document.getElementsByClassName("motorized");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].innerHTML =  x[i].innerHTML + "<img src=\"../daksys-webhelp/resources/img/motorized.png \" height=\"75\" width=\"75\" />"
    }
    var x = document.getElementsByClassName("WDR");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].innerHTML =  x[i].innerHTML + "<img src=\"../daksys-webhelp/resources/img/wdr.png \" height=\"75\" width=\"75\" />"
    }
    var x = document.getElementsByClassName("DNR");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].innerHTML =  x[i].innerHTML + "<img src=\"../daksys-webhelp/resources/img/3ddnr.png \" height=\"75\" width=\"75\" />"
    }
    
/*    This added to move the title*/
    $('.wh_topic_content>h1').each(function() {
        $(this).parent().parent().before(this);
    });
    
    $('#bodywrapper').addClass($('#lang').text());
	$('#content_area').addClass($('#lang').text());
    
});