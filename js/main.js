var ma5zan=[];
var oneBookMark;
var cartona;

if(localStorage.getItem("allBoobmarks")!=null)
{
    ma5zan=JSON.parse(localStorage.getItem("allBoobmarks"));
    display();
};


document.getElementById("btnSubmit").addEventListener("click",addBookmarks);
/*---------------------add bookmarks */
function addBookmarks()
{
    /*1--------------------add bookmarks */
    oneBookMark={
        sName:document.getElementById("siteId").value,
        sUrl:document.getElementById("sUrl").value
    }
    ma5zan.push(oneBookMark);
    /*2---------------------save into local storage */
    localStorage.setItem("allBoobmarks",JSON.stringify(ma5zan));
    /*3--------------------clear inputs */
    clear();
    /*4-------------------dislay inputs */
    display();
};

/*-------------display bookmarks */
function display(){
    cartona="";
    for(var i=0;i<ma5zan.length;i++)
    {
        cartona+=   `<tr>
                        <td class="p-3 ">`+(i+1)+`</td>
                        <td>`+ma5zan[i].sName+`</td>
                        <td><a target="_blank" href="`+ma5zan[i].sUrl+`" class=" btn visit text-white"><i class="fa-solid fa-eye pe-2 text-white"></i>Visit</a></td>
                        <td><button  onclick="deleteBookmarks(`+i+`)"class="btn btn-danger text-white "><i class="fa-solid fa-trash-can pe-2"></i>Delete</button></td>
                    </tr>`
    }
    document.getElementById("tBody").innerHTML=cartona;
}

/*clear bookmarks */
function clear(){
    document.getElementById("siteId").value=null;
    document.getElementById("sUrl").value=null;
}
 /*delete bookmarks */
function  deleteBookmarks(bIndex)
{
    ma5zan.splice(bIndex,1);
    localStorage.setItem("allBoobmarks",JSON.stringify(ma5zan));
    display();
}



// localStorage.removeItem("allBoobmarks");