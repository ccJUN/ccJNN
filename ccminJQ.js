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
function $(){
	new cc(sall);
	return cc(sall);
}
cc.prototype.click=function(fn){
	var i=0;
	for ( i = 0; i < this.Element.length; i++) {
		handal(this.Element[i],'click',fn);
	}
	return this;

};
cc.prototype.show=function(){
	var i=0;
	for (var i = 0; i < this.Element.length; i++) {
		this.Element[i].style.display='block';
	}
	return this;
}
cc.prototype.hide=function(){
	var i=0;
	for (var i = 0; i < this.Element.length; i++) {
		this.Element[i].style.display='block';
	}
	return this;
}
cc.prototype.hover=function(fnover,fnout){
	var i=0;
	for (var i = 0; i < this.Element.length; i++) {
		handal(this.Element[i],'mouseover',fnover);
		handal(this.Element[i],'mouseover',fnout);
	}
	return this;
}
cc.prototype.css=function(attr,value){
	if(arguments.length==2)	//设置样式
	{
		var i=0;
		
		for(i=0;i<this.elements.length;i++)
		{
			this.elements[i].style[attr]=value;
		}
	}
	else	//获取样式
	{
		if(typeof attr=='string')
		{
		//return this.elements[0].style[attr];
			return getStyle(this.elements[0], attr);
		}
		else
		{
			for(i=0;i<this.elements.length;i++)
			{
				var k='';
				
				for(k in attr)
				{
					this.elements[i].style[k]=attr[k];
				}
			}
		}
	}
	
	return this;

}