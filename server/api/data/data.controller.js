'use strict';

var _ = require('lodash');


// Get list of datas
exports.index = function(req, res) {
    res.json(dataBuilder());
};


function dataBuilder() {
    return {
        ortDays: ortDaysParser(),
        ortLocalTimes: ortLocalTimesParser(),
        aquaxTimes: aquaxParser(),
        weekActivities: [{
            text: 'Cold Sky Calibration',
            start: '2015-177T02:35:00.000',
            end: '2015-177T03:06:20.000'
        }]
    }
}
console.log(dataBuilder());

var startTime = '2015-172T07:00:00.000';
var endTime = '2015-183T06:00:00.000';

function ortDaysParser() {
    var csv = "2015-172T07:00:00.000, Sun July 20,2015-173T07:00:00.000, Mon July 21,2015-174T07:00:00.00,Tue July 22,2015-175T07:00:00.00, Wed July 23,2015-176T07:00:00.00, Thur July 24,2015-177T07:00:00.00, Fri July 25,2015-178T07:00:00.00, Sat July 26,2015-179T07:00:00.00, Sun July 27,2015-180T07:00:00.00, Mon July 28,2015-181T07:00:00.00, Tue July 29,2015-182T07:00:00.00, Wed July 30,2015-183T07:00:00.00, Thur July 31";
    return function(csv) {
        var returnArray = [];
        csv = csv.split(',');
        for (var i = 0; i < csv.length; i += 2) {
            returnArray.push({
                'start': csv[i],
                'end': function(csv) {
                    if (!csv[i+2]) {
                        return endTime
                    } else
                        return csv[i + 2]
                }(csv),
                'text': csv[i + 1]
            })
        }
        return returnArray;
    }(csv)
}

function ortLocalTimesParser() {
    var csv = "2015-183T01:20:00.000,19:30,2015-183T01:35:00.000,19:45,2015-183T01:50:00.000,20:00,2015-183T02:05:00.000,20:15,2015-183T02:20:00.000,20:30,2015-183T02:35:00.000,20:45,2015-183T02:50:00.000,21:00,2015-183T03:05:00.000,21:15,2015-183T03:20:00.000,21:30,2015-183T03:35:00.000,21:45,2015-183T03:50:00.000,22:00,2015-183T04:05:00.000,22:15,2015-183T04:20:00.000,22:30,2015-183T04:35:00.000,22:45,2015-183T04:50:00.000,23:00,2015-183T05:05:00.000,23:15,2015-183T05:20:00.000,23:30,2015-183T05:35:00.000,23:45,2015-183T05:50:00.000,0:00,2015-183T06:05:00.000,0:15,2015-183T06:20:00.000,0:30,2015-183T06:35:00.000,0:45,2015-183T06:50:00.000,1:00,2015-183T07:05:00.000,1:15,2015-183T07:20:00.000,1:30";
    return function(csv) {
        var returnArray = [];
        csv = csv.split(',');
        for (var i = 0; i < csv.length; i += 2) {
            returnArray.push({
                'start': csv[i],
                'end': function(csv) {
                    if (!csv[i+2]) {
                        return endTime
                    } else
                        return csv[i + 2]
                }(csv),
                'text': csv[i + 1]
            })
        }
        return returnArray;
    }(csv)
}

function aquaxParser() {
var csv = "2015-173T14:19:35.427,3289, 2015-173T15:58:03.115,3290, 2015-173T17:36:30.724,3291, 2015-173T19:14:58.307,3292, 2015-173T20:53:25.888,3293, 2015-173T22:31:53.498,3294, 2015-174T00:10:21.196,3295, 2015-174T01:48:48.933,3296, 2015-174T03:27:16.613,3297, 2015-174T05:05:44.236,3298, 2015-174T06:06:00.000,0:00"
    return function(csv) {
        var returnArray = [];
        csv = csv.split(',');
        for (var i = 0; i < csv.length; i += 2) {
            returnArray.push({
                'start': csv[i],
                'text': csv[i + 1]
            })
        }
        return returnArray;
    }(csv)
}