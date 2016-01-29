/**
 * Created by linjian on 2016/1/28.
 */
var dataObj = null;

var loadConfig = function(){
    alert("running ......")
$.getJSON( 'dist/local/index.json',function(data){
    dataObj = data;
    for(var oneData in dataObj){
        console.log("dev_id : "+oneData.div_id));
        console.log("img_path : "+oneData.img_path);
        console.log("tools_title : "+oneData.tools_title);
        console.log("useage : "+oneData.useage);
        console.log("tools_link : "+oneData.tools_link);
    }
});
};

var HeaderLine = React.createClass({
    render : function(){
        return (
        <div class="demo-headline">
            <h1 class="demo-logo">
                <small>{this.props.name}</small>
            </h1>
        </div>
        );
    }
});
//<div id="container"class="row demo-tiles"></div>
//显示组件
//var ListDspComp = React.createClass({
//
//
//});
////单项链接显示组件
//var SingleDspComp = React.createClass({
//    render : function(){
//
//    }
//});

ReactDOM.render(
    loadConfig()
    <HeaderLine name="公司内部管理工具访问地址，请妥善留存"/>,
    document.getElementById('cc')
);



