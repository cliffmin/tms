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
        }],
        instrumentOrtActivities: instrumentOrtActivitiesParser(),
        ortWeek: ortWeekParser()
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
var csv = "2015-173T14:19:35.427,3289,2015-173T15:58:03.115,3290,2015-173T17:36:30.724,3291,2015-173T19:14:58.307,3292,2015-173T20:53:25.888,3293,2015-173T22:31:53.498,3294,2015-174T00:10:21.196,3295,2015-174T01:48:48.933,3296,2015-174T03:27:16.613,3297,2015-174T05:05:44.236,3298,2015-174T06:06:00.000,0:00"
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

function instrumentOrtActivitiesParser(){
var csv = "Activate CHKO_SAR_PWR_ENABLE_SYNTH_DE.seq,SEQ_ACTIVATE,2015-173T15:25:02.000,2015-173T15:38:02.000,CHKO_SAR_CANNED_DATA.seq,SEQ_ACTIVATE,2015-173T15:25:02.000,2015-173T15:38:02.000,CHKO_RAD_PWR_ENABLE.seq,SEQ_ACTIVATE,2015-173T15:27:02.000,2015-173T15:38:02.000,Activate CHKO_SAR_PWR_ENABLE_RF_HPA.seq,SEQ_ACTIVATE,2015-173T16:13:32.000,2015-173T16:26:10.000,Activate CHKO_SAR_ENABLE.seq,SEQ_ACTIVATE,2015-173T16:13:32.000,2015-173T16:26:10.000,Activate SAR_REV_RATE_34375_R420_V01.scmf,IC,2015-173T16:13:32.000,2015-173T16:26:10.000,CHKO_SAR_ENABLE_XMT_ON.seq,SEQ_ACTIVATE,2015-173T17:02:26.000,2015-173T17:15:36.000,bkground com 1,BG,2015-173T18:00:34.000,2015-173T18:12:53.000,CHKO_SAR_ENABLE_XMT_OFF.seq,SEQ_ACTIVATE,2015-173T18:40:24.000,2015-173T18:53:26.000,CHKO_SEQ_DEACTIVATE_CHKO_EXEC_REV_CMDS_ORT5.seq,SEQ_ACTIVATE,2015-173T18:40:24.000,2015-173T18:53:26.000,CHKO_SAR_DISABLE.seq,SEQ_ACTIVATE,2015-173T20:19:37.000,2015-173T20:31:25.000,CHKO_RAD_TMP_TRENDING.seq,SEQ_ACTIVATE,2015-173T20:19:37.000,2015-173T20:31:25.000,CMSH_IC_RAD_POWER_DISABLE.scmf,IC,2015-173T22:35:31.000,2015-173T22:47:22.000,CMSH_IC_SAR_POWER_DISABLE_ALL.scmf,IC,2015-173T22:35:31.000,2015-173T22:47:22.000,bkground com 2,BG,2015-174T00:24:59.000,2015-174T00:36:10.000";
    return function(csv) {
        var returnArray = [];
        csv = csv.split(',');
        for (var i = 0; i < csv.length; i += 4) {
            returnArray.push({
                'text': csv[i],
                'type': csv[i+1],
                'start': csv[i+2],
                'end': csv[i+3]
            })
        }
        return returnArray;
    }(csv)

}

function ortWeekParser(){
var csv = "2015-174T06:16:51.000,AUTO_CLT-MG1_S1_3298_5,2015-174T07:04:38.000,AUTO_DMT-SG1_S1_3299_0,2015-174T07:54:37.000,AUTO_FILE-MG1_S1_3299_5,2015-175T06:03:30.000,AUTO_CLT-SG1_S1_3313_0,2015-175T07:41:29.000,AUTO_DMT-SG1_S1_3314_0,2015-175T09:18:54.000,AUTO_FILE-SG1_S1_3315_0,2015-175T10:08:59.000,AUTO_FILE-MG1_S1_3315_5,2015-176T05:02:18.000,AUTO_CLT-MG1_S1_3327_5,2015-176T06:40:09.000,AUTO_DMT-SG1_S1_3328_0,2015-176T07:30:05.000,AUTO_FILE-MG1_S1_3328_5,2015-176T08:18:05.000,AUTO_FILE-SG1_S1_3329_0,2015-177T06:29:04.000,AUTO_CLT-MG1_S1_3342_5,2015-177T07:16:53.000,AUTO_DMT-SG1_S1_3343_0,2015-177T08:06:54.000,AUTO_FILE-MG1_S1_3343_5,2015-178T06:15:41.000,AUTO_CLT-SG1_S1_3357_0,2015-178T07:05:43.000,AUTO_DMT-MG1_S1_3357_5,2015-179T06:52:18.000,AUTO_CLT-SG1_S1_3372_0,2015-179T08:30:11.000,AUTO_DMT-SG1_S1_3373_0,2015-181T06:27:51.000,AUTO_CLT-SG1_S1_3401_0,2015-181T08:05:52.000,AUTO_DMT-SG1_S1_3402_0,2015-182T07:04:31.000,AUTO_CLT-SG1_S1_3416_0,2015-182T08:42:19.000,AUTO_DMT-SG1_S1_3417_0";
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
};