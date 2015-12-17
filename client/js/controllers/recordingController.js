myApp.controller('recordingController', ['$scope', function($scope){
    
    var cal = new CalHeatMap();
    // cal.init({
    //     itemSelector: "#example",
    // 	domain: "month",
    // 	subDomain: "day",
    // 	cellSize: 15,
    // 	subDomainTextFormat: "%d",
    // 	range: 12,
	   // legendHorizontalPosition: "right",
	   // domainLabelFormat: "%m-%Y"
    // });
    
    var json = [{
                    date: new Date(2014, 2, 12),
                    value: 100
                }, {
                    date: new Date(2014, 2, 11),
                    value: 90
                }, {
                    date: new Date(2014, 2, 10),
                    value: 80
                }, {
                    date: new Date(2014, 2, 9),
                    value: 70
                }, {
                    date: new Date(2014, 2, 8),
                    value: 600
                }, {
                    date: new Date(2014, 2, 7),
                    value: 500
                }, {
                    date: new Date(2014, 2, 6),
                    value: 400
                }, {
                    date: new Date(2014, 2, 5),
                    value: 300
                }, {
                    date: new Date(2014, 2, 4),
                    value: 200
                }, {
                    date: new Date(2014, 2, 3),
                    value: 100
                }, {
                    date: new Date(2014, 2, 2),
                    value: 200
                }, {
                    date: new Date(2014, 2, 1),
                    value: 300
                }, {
                    date: new Date(2014, 1, 28),
                    value: 400
                }, {
                    date: new Date(2014, 1, 27),
                    value: 500
                }, {
                    date: new Date(2014, 1, 26),
                    value: 60
                }, {
                    date: new Date(2014, 1, 25),
                    value: 70
                }, {
                    date: new Date(2014, 1, 24),
                    value: 80
                }, {
                    date: new Date(2014, 1, 23),
                    value: 90
                }, {
                    date: new Date(2014, 1, 22),
                    value: 100
                }];
    // $('#example1').gammacalendar([{
    //                 date: new Date(2014, 2, 12),
    //                 value: 100
    //             }, {
    //                 date: new Date(2014, 2, 11),
    //                 value: 90
    //             }, {
    //                 date: new Date(2014, 2, 10),
    //                 value: 80
    //             }, {
    //                 date: new Date(2014, 2, 9),
    //                 value: 70
    //             }, {
    //                 date: new Date(2014, 2, 8),
    //                 value: 600
    //             }, {
    //                 date: new Date(2014, 2, 7),
    //                 value: 500
    //             }, {
    //                 date: new Date(2014, 2, 6),
    //                 value: 400
    //             }, {
    //                 date: new Date(2014, 2, 5),
    //                 value: 300
    //             }, {
    //                 date: new Date(2014, 2, 4),
    //                 value: 200
    //             }, {
    //                 date: new Date(2014, 2, 3),
    //                 value: 100
    //             }, {
    //                 date: new Date(2014, 2, 2),
    //                 value: 200
    //             }, {
    //                 date: new Date(2014, 2, 1),
    //                 value: 300
    //             }, {
    //                 date: new Date(2014, 1, 28),
    //                 value: 400
    //             }, {
    //                 date: new Date(2014, 1, 27),
    //                 value: 500
    //             }, {
    //                 date: new Date(2014, 1, 26),
    //                 value: 60
    //             }, {
    //                 date: new Date(2014, 1, 25),
    //                 value: 70
    //             }, {
    //                 date: new Date(2014, 1, 24),
    //                 value: 80
    //             }, {
    //                 date: new Date(2014, 1, 23),
    //                 value: 90
    //             }, {
    //                 date: new Date(2014, 1, 22),
    //                 value: 100
    //             }], {
    //                 weeks: 52 ,
    //                 i18n: 'en',
    //                 startOnSunday: true,
    //                 highlightToday: false,
    //                 baseColor: {
    //                     r: 0,
    //                     g: 136,
    //                     b: 204
    //                 },
    //                 nullColor: { //color for value === 0 or null
    //                     r: 238, g: 238, b: 238
    //                 }
    //             });
   
    var json = {
        946705035 : 140,
        946791435 : 140,
        946877835 : 140,
        946964235 : 160,
        947050635 : 120
    };
    cal.init({
    	itemSelector: "#example",
    	domain: "month",
    	subDomain: "day",
    	data: json,
    	start: new Date(2000, 0, 5),
    	cellSize: 10,
    	range: 12,
    	previousSelector: "#example-c-PreviousDomain-selector",
    	nextSelector: "#example-c-NextDomain-selector",
    
    	legend: [50, 100, 150, 200]
    });
    
}]);


            // var myCulture = {
            //   daysOfWeek: ['週一', '週二', '週三', '週四', '週五', '週六', '週日'],

            //   months: ['一月', '二月八月', '三月', '四月', '五月', '六月',
            //          '七月', '八月', '九月', '十月', '十一月', '十二月']
            // };