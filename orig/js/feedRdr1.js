// JavaScript Document
//<script type="text/javascript" language="javascript">
//<!--

//Plz do not change this
var numOfItems = 4;
//var numOfChar = 110;
//Plz do not change this


var img1 = "";
var img2 = "";
var img3 = "";
var img4 = "";
var img5 = "";


var imgArr = new Array();

function startNews(feedLocation,targetDiv)
{
$.jGFeed(feedLocation,
function(feeds){
  // Check for errors
  if(!feeds){
    // there was an error
    //return false;
    alert("cannot read");
  }
  var tblString= "";
  for(var tmp1=0; tmp1<feeds.entries.length; tmp1++){
            var entry = feeds.entries[tmp1];
//			var displayStr = (entry.title.replace(/^\s+|\s+$/g,"")).substr(0,numOfChar);
            tblString+="<div class=\"feeditem1\"><a href=\" "+entry.link + "\" target=\"_blank\">";
            tblString+="&#9830; ";
			tblString+= entry.title.replace (/^\s+|\s+$/g,"")+"...<img src=\"../iw/resources/images/blog_link.png\" alt=\"Blog\" width=\"11\" height=\"10\"></a>";
			tblString+="</div>"
          }
          tblString+="";
          document.getElementById(targetDiv).innerHTML=tblString;
}, numOfItems);
                    
}//End Function

function IsImageOk(img) 
        {
            // During the onload event, IE correctly identifies any images that
            // weren’t downloaded as not complete. Others should too. Gecko-based
            // browsers act like NS4 in that they report this incorrectly.
            if (!img.complete) {
                return false;
            }

            // However, they do have two very useful properties: naturalWidth and
            // naturalHeight. These give the true size of the image. If it failed
            // to load, either of these should be zero.

            if (typeof img.naturalWidth != "undefined" && img.naturalWidth == 0) {
                return false;
            }

            // No other way of checking: assume it’s ok.
            return true;
        }

//Call this function onLoad of body tag
function checkImages() 
{
for(var tmpx2=1; tmpx2<=numOfItems;tmpx2++)
{
try{
    imgArr[tmpx2-1] = new Image();
    imgArr[tmpx2-1].src = window["img"+tmpx2];
    //alert(imgArr[tmpx2-1].src);
    
    if (!IsImageOk(imgArr[tmpx2-1])) {
    imgArr[tmpx2-1].src = "./images/nuslogo.png";
    }
    }
    catch(e){imgArr[tmpx2-1].src = "./images/nuslogo.png";}
    }
}

//checkImages();
//startNews();
//-->
//</script>