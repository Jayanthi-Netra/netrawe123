app.factory("DataBean",[function(){

var DataBean = {
dataObject : {}
}

DataBean.setData = function(object){
if(object !== null && object !== undefined){
DataBean.dataObject[object.key] = object.value;

}
}
DataBean.removeKey = function(key){
if(key !== null && key !== undefined && key !== "" ){
delete DataBean.dataObject[key];

}
}

DataBean.getData = function(key){
if(key !== null && key !== undefined && key !== "" )
return DataBean.dataObject[key];

}

DataBean.containsKey = function(key){
if(key !== null && key !== undefined && key !== "" )
			return DataBean.dataObject[key] === undefined ? false : true;
		
		return false;
	}
	
	DataBean.setDataObject = function(dataObject){
		DataBean.dataObject = dataObject;
	}
	
	DataBean.getDataObject = function(dataObject){
		return DataBean.dataObject; 
	}
	
	DataBean.resetBean = function(){
		DataBean = {
				dataObject : {}
		}
	}
	
	return DataBean;
}]);