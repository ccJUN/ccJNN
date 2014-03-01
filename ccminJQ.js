function handal(obj,sevent,fn){
	
	if (obj.attachEvent)
	{
		obj.attachEvent('on'+sevent,function(){
		
			fn.call(obj);
		});
	}
	else{
		obj.addEventListener(sevent,fn,false);
	
	}

}
function getClass(oparents,oclass){
	var classEle=[];
	var Oparent=oparents.getElementsByTagName('*');
	for (var i = 0; i < Oparent.length; i++) {
		if(Oparent[i].className==oclass)
		{
			classEle.push(Oparent[i]);
		}
	};
	return classEle;

}
function cc(sall){
	this.Element=[];
	switch(typeof sall)
	{
		case 'function':
		handal(window,'load',sall);
		break;
		case 'string':
		switch(sall.charAt(sall))
		{
			case '#':
			var obj=document.getElementById(sall.substring(1));
			this.Element.push(obj);
			break;
			case '.':
			var obj2=getClass(document,sall.substring(1));
			this.Element=obj2;
			break;
			default:
			this.Element=getElementsByTagName(sall);

		}
		break;
		case 'object':
		this.Element.push(sall);
	}

}
cc.prototype.click=function(fn){
	var i=0;
	for ( i = 0; i < this.Element.length; i++) {
		alert(this.Element[i].className);
		alert('2');
		handal(this.Element[i],'click',fn);
	}

};