/**
 * Created by imran on 8/17/2016.
 */





/*       Popup Model box html -->
  <form class="form-horizontal" enctype="multipart/form-data" role="form" method="POST" action=" ">
       

        <div class="model" onclick="model()" style="display:none" >
            <div class="col-sm-8 model-body">
                <div class="model-content animated zoomIn">
        
        
        

                </div>
            </div>
    
  


        </div>
</form>

// popup confirmation model for deletion

  <div class="conformbox"  style="display:none" >
      <div class="col-sm-5 conformbox-body">
          <div class="conformbox-content animated zoomIn">
              <p> Do You Really Want to Delete This Record?</p>
              <span>
              <button class="btn btn-default" id="confirm" autofocus> Confirm </button>
              <button class="btn btn-danger right" onclick="confirmbox()" >Cancel</button>
              </span>
          </div>
      </div>

  </div>


*/

/* css for model
.model{
    position: fixed;
    top:0px;
    left:0px;
    right:0px;
    bottom:0px;
    background: rgba(22,22,2,.5);
    z-index: 99999;

}
.model-body{
   padding-top:100px;
   padding-bottom:50px;
    margin-left:auto;
    margin-right: auto;
    float:none;
    min-height:100px;
    z-index: 99999;
    height:100%;
    overflow: auto;
    
}


.model-body::-webkit-scrollbar {
    width: 0px;
}
 
.model-body::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
    border-radius: 10px;
}
 
.model-body::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
}



.model-content{
    float: left;
    width:100%;
    background-color: white;
    -webkit-border-radius:4px;
    -moz-border-radius:4px;
    border-radius:4px;
    padding:10px;
}
.model-content   h2 {
    text-align: center;
    padding: 0px;
    margin: 0px;
    font-style: italic;
    border-bottom: 2px solid rgba(9, 158, 58, 0.6);
    font-size: 18px;
    margin-bottom: 10px;
}


// conform box 

.conformbox{
    position: fixed;
    top:0px;
    left:0px;
    right:0px;
    bottom:0px;
    background: rgba(22,22,2,.5);
    z-index: 99999;

}
.conformbox-body{
    margin-top:100px;
    margin-left:auto;
    margin-right: auto;
    float:none;
    min-height:100px;
    z-index: 99999;
}
.conformbox-content{
    float: left;
    width:100%;
    background-color: white;
    -webkit-border-radius:4px;
    -moz-border-radius:4px;
    border-radius:4px;
    padding:10px;
}
.conformbox-content > h2 {
    text-align: center;
    padding: 0px;
    margin: 0px;
    font-style: italic;
    border-bottom: 2px solid rgba(9, 158, 58, 0.6);
    font-size: 18px;
}

.conformbox-content >p{
    margin: 0 0 10px;
    color: #01987d;
    font-size: 20px;
}
.conformbox-content >span{
    background: #f6f2e8;
    width: 100%;
    float: left;
}
.right{
    float:right !important;
}*/







// for popup model
$(".model-content").click(function(e) {
    e.stopPropagation();
});
// function for popup model
function model() {
    if($('.model').css('display') == 'none')
    {
        $('.model').fadeIn(1000);
    }else{
        $('.model').fadeOut();
    }

}




// function for popup conform model
function conformbox(id,action) {

    $('#confirm').attr('data-id',id);
    $('#confirm').attr('data-action',action);

    if($('.conformbox').css('display') == 'none')
    {
        $('.conformbox').fadeIn();
    }else{
        $('.conformbox').fadeOut();
    }

}





