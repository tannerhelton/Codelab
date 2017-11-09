
function PageUnload(){
	if (bSimulateModal) {
		oLibPage._CloseAllModals()
	}
}


function PageInit(){
	if (oLibPage.bIsMac){return}
	var theForm=oLibPage.getMainForm()
	if ((theForm)&&(theForm.action)){
		//CR227552-111605
		//this clears out the query string for us from the form's ACTION attribute; 
		//probably would have led to other issues since we're using querystrings 
		//in quite a few places.
		var sAction=theForm.action
		var iPos=sAction.indexOf('?');
		if (iPos>0){
			sAction=sAction.substring(0, iPos);
		}
		theForm.action=sAction
	}
}

function PagePostBack(eventTarget,eventArgument){
	if ((!oLibPage.bIsMac)&&(mbMangleQueryString)){
		var theForm=oLibPage.getMainForm()
		if (theForm){
			var sAction=theForm.action
			sAction=sAction+'?'+eventArgument
			theForm.action=sAction
		}
	}
	return true
}

function PagePostPostBack(){
	// mbShowLoadingMsg is spit out from FAWebForm.vb based on setting in web.config
	toggleLoadingMessage(mbShowLoadingMsg)
}

function PageLoadEnd() {
    if (window.CTRL_GRID) {
        SetGridHeaderClickEvents()
    }
	toggleLoadingMessage(false)
}

function toggleLoadingMessage(bShow){
    var oLoadingMsg = document.getElementById("loadingMsgDiv");
    var oLoadingMsgTxt = document.getElementById("loadingMsgText");
	
	if (oLoadingMsg){
		if(bShow){
		    oLoadingMsg.style.visibility = "visible";
		    if (oLoadingMsgTxt) oLoadingMsgTxt.style.visibility = "visible";
		}else{
		    oLoadingMsg.style.visibility = "hidden";
		    if (oLoadingMsgTxt) oLoadingMsgTxt.style.visibility = "hidden";
		}
	}
}

function onMsgBoxClose(retObj) {
	if (!bSimulateModal) {
		return
	}
	var postBackInfo=new Object;
	
	postBackInfo.bSaveFirst=false; 
	postBackInfo.bCancel=false;
	if (retObj.returnValue == oLibPage.mb_Yes) {
		postBackInfo.bSaveFirst=true; 
	} else if (retObj.returnValue == oLibPage.mb_No) {
		//nothing
	} else if (retObj.returnValue == oLibPage.mb_Cancel) {
		postBackInfo.bCancel=true;
	}
	var eventTarget = retObj.eventTarget
	var eventArgument = retObj.eventArgument

	oLibPage._WRFPostBack_Part2(postBackInfo, eventTarget, eventArgument)
}


function onAboutClick(){
	var sURL=oLibPage.applicationBase;
	sURL=sURL+"/Forms/UserControlHost.aspx?dtid=";
	sURL=sURL+HelpAbout; // the DialogTypeId
	var nHeight=400;
	var nWidth=510;
    var sFeatures=oLibPage.BuildModalFeaturesString(window, nHeight, nWidth);
    var retObj=_ShowModalDialog(sURL, window, sFeatures)
}

function displaySessionTimeoutMsg() {
    if (window.displayingTimeout) {
        //From RecordClientFunctions
        //Need to put this here to prevent issues when a popup blocker is turned on
        displayingTimeout = false;
    }
	var Today=new Date();
	var sURL=oLibPage.applicationBase;
	sURL=sURL+"/Forms/UserControlHost.aspx?dtid=";
	sURL=sURL+SessionTimeoutWarning; // the DialogTypeId
	sURL=sURL+"&clientTime="+Today.getHours()+":"+Today.getMinutes()+":"+Today.getSeconds();
	
	var nHeight=150;
	var nWidth=475;
    var sFeatures=oLibPage.BuildModalFeaturesString(window, nHeight, nWidth);
    var retObj=_ShowModalDialog(sURL, window, sFeatures)
}

function onFormKeyDown(evt) {
	if(evt) {
		var nKeyCode=evt.keyCode;
		switch(nKeyCode) {
			case 8:   //Backspace
				//We don't want the user to be able to hit the backspace key and go to the previous page.
				return false;
				break;
			default:
				return true;
				break;
		}
	}
}

function onTextBoxKeyDown(evt, oTxtBox) {
	//Since the form is trapping and not allowing BackSpace, textboxes must also trap keys and allow them and then cancel the event.
	if(evt) {
		var nKeyCode=evt.keyCode;
		switch(nKeyCode) {
			default:
				evt.cancelBubble = true;
				return true;
				break;
		}
	}
}

function SetGridHeaderClickEvents() {
    var rowID;
    var sr;

    for (j = 0; j < NUM_ROWS; j++) {
        rowID = CTRL_GRID + '_r_' + j
        sr = igtbl_getElementById(rowID);
        
        if (sr.childNodes[0].childNodes[0].onclick != null){
            sr.childNodes[0].onclick = sr.childNodes[0].childNodes[0].onclick;
            sr.childNodes[0].childNodes[0].onclick = null
        }
    }
}
