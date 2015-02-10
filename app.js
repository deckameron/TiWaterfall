var OS_ANDROID = Titanium.Platform.osname == 'android';

var Waterfall = require('/ui/Waterfall');
	
var delay = 10;

var self = Titanium.UI.createWindow({
	title:title,
	//backgroundColor:'white'
	orientationModes: [Titanium.UI.LANDSCAPE_LEFT, Titanium.UI.LANDSCAPE_RIGHT, Titanium.UI.PORTRAIT]
});

var showGridItemInfo = function(e){
	alert('Title is: ' + e.source.data.title + '. Image is: ' + e.source.data.image);
};

var waterfall = Waterfall.init({
	columns:3,
	space:5,
	delayTime:delay,
	gridBackgroundColor:'#E1E1E1',
	itemBackgroundColor:'#FFF',
	itemBorderColor:'transparent',
	itemBorderWidth:0,
	itemBorderRadius:5,
	onItemClick: showGridItemInfo
});
self.add(waterfall);

function createSampleData(){
	sample_data = [
		{title:'sample 1', image:'http://dummyimage.com/700x600/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'sample 2', image:'http://dummyimage.com/900x1200/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'sample 3', image:'http://dummyimage.com/400x300/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'sample 4', image:'http://dummyimage.com/600x600/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'sample 5', image:'http://dummyimage.com/400x310/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'sample 6', image:'http://dummyimage.com/500x300/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'sample 7', image:'http://dummyimage.com/300x300/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'sample 8', image:'http://dummyimage.com/450x320/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'sample 9', image:'http://dummyimage.com/523x424/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'sample 10', image:'http://dummyimage.com/610x320/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'sample 11', image:'http://dummyimage.com/450x450x/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'sample 12', image:'http://dummyimage.com/620x420/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'sample 13', image:'http://dummyimage.com/710x410/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'sample 14', image:'http://dummyimage.com/500x500/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'sample 1', image:'http://dummyimage.com/700x600/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'sample 2', image:'http://dummyimage.com/900x1200/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'sample 3', image:'http://dummyimage.com/400x300/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'sample 4', image:'http://dummyimage.com/600x600/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'sample 5', image:'http://dummyimage.com/400x310/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'sample 6', image:'http://dummyimage.com/500x300/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'sample 7', image:'http://dummyimage.com/300x300/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'sample 8', image:'http://dummyimage.com/450x320/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'sample 9', image:'http://dummyimage.com/523x424/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'sample 10', image:'http://dummyimage.com/610x320/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'sample 11', image:'http://dummyimage.com/450x450x/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'sample 12', image:'http://dummyimage.com/620x420/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'sample 13', image:'http://dummyimage.com/710x410/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'sample 14', image:'http://dummyimage.com/500x500/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'sample 1', image:'http://dummyimage.com/700x600/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'sample 2', image:'http://dummyimage.com/900x1200/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'sample 3', image:'http://dummyimage.com/400x300/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'sample 4', image:'http://dummyimage.com/600x600/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'sample 5', image:'http://dummyimage.com/400x310/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'sample 6', image:'http://dummyimage.com/500x300/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'sample 7', image:'http://dummyimage.com/300x300/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'sample 8', image:'http://dummyimage.com/450x320/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'sample 9', image:'http://dummyimage.com/523x424/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'sample 10', image:'http://dummyimage.com/610x320/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'sample 11', image:'http://dummyimage.com/450x450x/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'sample 12', image:'http://dummyimage.com/620x420/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'sample 13', image:'http://dummyimage.com/710x410/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
		{title:'sample 14', image:'http://dummyimage.com/500x500/cccccc/999999.jpg', subtitle:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
	];
	
	items = [];
	
	for (var x=0; x<sample_data.length; x++)
	{
		//CREATES A VIEW WITH OUR CUSTOM LAYOUT
		var view = Titanium.UI.createImageView({
			image:sample_data[x].image,
			title:sample_data[x].title,
			subtitle:sample_data[x].subtitle,
			zIndex: 1
		});
		
		//THIS IS THE DATA THAT WE WANT AVAILABLE FOR THIS ITEM WHEN onItemClick OCCURS
		var values = {
			title: sample_data[x].title,
			image: sample_data[x].image
		};
		
		//NOW WE PUSH TO THE ARRAY THE VIEW AND THE DATA
		items.push({
			view: view,
			data: values
		});
	}
	Waterfall.addGridItems(items);
};
createSampleData();


// EXAMPLE OF HOW TO USE TIFLEXIGRID IN iOS & ANDROID
// WITH DIFFERENT LAYOUTS IN ORIENTATION CHANGES
Ti.Gesture.addEventListener('orientationchange', function(e) {

	var orientation = e.orientation;
	var nColumn,
	    nSpace;

	if (OS_ANDROID) {
		if (orientation < 1 || orientation > 4) {
			return;
		} else if (orientation == 1) {
			nColumn = 3;
			nSpace = 5;
		} else if (orientation == 2) {
			nColumn = 5;
			nSpace = 7;
		}
	} else {
		if (orientation < 1 || orientation > 4) {
			return;
		} else if (orientation == 1 || orientation == 2) {
			nColumn = 3;
			nSpace = 5;
		} else if (orientation == 3 || orientation == 4) {
			nColumn = 5;
			nSpace = 7;
		}
	}

	Waterfall.clearGrid();
	Waterfall.init({
		columns : nColumn,
		space : nSpace,
		delayTime : delay,
		gridBackgroundColor : '#E1E1E1',
		itemHeightDelta : 0,
		itemBackgroundColor : '#FFFFFF',
		itemBorderColor : 'transparent',
		itemBorderWidth : 0,
		itemBorderRadius : 5,
		onItemClick : showGridItemInfo
	});

	createSampleData();
}); 

self.open();
