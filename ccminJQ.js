function handal(obj,event,fn){
	if(addEventListener)
	{
		obj.addEventListener(event,fn,false);
	}
	else
	{
		obj.addattachEvent('on'+event,function(){
		{
			fn.call(obj);
		});
	}

}