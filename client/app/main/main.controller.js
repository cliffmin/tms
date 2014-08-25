'use strict';

angular.module('tmsApp')
    .controller('MainCtrl', function($scope, $http) {
        $scope.main = function main() {
            $.getJSON('api/data').done(function(data) {
                console.log(data)
                var chartSpec = {
                    element: document.getElementById('chart'),
                    data: {
                        ortDays: data['ortDays'],
                        ortLocalTimes: data['ortLocalTimes'],
                        aquaxTimes: data['aquaxTimes'],
                        weekActivities: data['weekActivities'],
                        instrumentOrtActivities: data['instrumentOrtActivities'],
                        ortWeek: data['ortWeek'],
                        possiblePasses: data['possiblePasses']
                    },
                    adjustments: function(item) {
                        var size = Math.min(18, item.size);
                        return {
                            y: item.y + size * 0.04,
                            size: size * 0.9
                        };
                    },
                    scales: {
                        y: {
                            padding: 0.3
                        }
                    },
                    rows: [{
                            title: 'Science ORT Days',
                            from: 'ortDays',
                            layers: [{
                                type: 'rect',
                                mappings: function(d) {
                                    return {
                                        x: utc(d.start),
                                        x2: utc(d.end)
                                    }
                                },
                            }, {
                                type: 'label',
                                mappings: function(d) {
                                    return {
                                        x: utc(d.start),
                                        x2: utc(d.end),
                                        text: d.text,
                                    }
                                },
                            }, {
                                type: 'label',
                                fill: 'none',
                                anchor: 'left',
                                mappings: function(d) {
                                    return {
                                        text: d.start,
                                        x: utc(d.start),
                                    };
                                },
                                adjustments: function(d) {
                                    return {
                                        // Slightly shrink the start/end times relative to the main labels
                                        size: Math.min(12, d.size * 0.8)
                                    };
                                }
                            }]
                        }, {
                            title: 'Science ORT Local Times',
                            from: 'ortLocalTimes',
                            layers: [{
                                type: 'rect',
                                mappings: function(d) {
                                    return {
                                        x: utc(d.start),
                                        x2: utc(d.end),
                                        text: d.text
                                    }
                                }
                            }, {
                                type: 'label',
                                mappings: function(d) {
                                    return {
                                        x: utc(d.start),
                                        x2: utc(d.end),
                                        text: d.text,
                                    }
                                },
                            }, {
                                type: 'label',
                                fill: 'none',
                                mappings: function(d) {
                                    return {
                                        text: d.start,
                                        x: utc(d.start),
                                    };
                                },
                                adjustments: function(d) {
                                    return {
                                        // Slightly shrink the start/end times relative to the main labels
                                        size: Math.min(12, d.size * 0.8)
                                    };
                                }
                            }]
                        }, {
                            title: 'Ascending Equator Crossing Instrument ORT',
                            from: 'aquaxTimes',
                            layers: [{
                                type: 'symbol',
                                color: 'blue',
                                shape: 'triangle-down',
                                mappings: function(d) {
                                    return {
                                        x: utc(d.start)
                                    }
                                }
                            }, {
                                type: 'label',
                                mappings: function(d) {
                                    return {
                                        x: utc(d.start),
                                        text: d.text
                                    }
                                }
                            }]
                        }, {
                            title: 'Science ORT Week 26 activities',
                            from: 'weekActivities',
                            layers: [{
                                type: 'rect',
                                mappings: function(d) {
                                    return {
                                        x: utc(d.start),
                                        x2: utc(d.end)
                                    }
                                }
                            }, {
                                type: 'label',
                                mappings: function(d) {
                                    return {
                                        x: utc(d.start),
                                        x2: utc(d.end),
                                        text: d.text
                                    }
                                },
                                adjustments: function(d) {
                                    return {
                                        // Slightly shrink the start/end times relative to the main labels
                                        size: Math.min(12, d.size * 0.3)
                                    };
                                }
                            }, {
                                type: 'label',
                                anchor: 'left',
                                mappings: function(d) {
                                    return {
                                        x: utc(d.start),
                                        text: utc(d.start)
                                    }
                                },
                                adjustments: function(d) {
                                    return {
                                        // Slightly shrink the start/end times relative to the main labels
                                        size: Math.min(12, d.size * 0.3)
                                    };
                                }
                            }, {
                                type: 'label',
                                anchor: 'right',
                                mappings: function(d) {
                                    return {
                                        x: utc(d.end),
                                        text: utc(d.end)
                                    }
                                },
                                adjustments: function(d) {
                                    return {
                                        // Slightly shrink the start/end times relative to the main labels
                                        size: Math.min(12, d.size * 0.3)
                                    };
                                }
                            }]
                        }, {
                            title: 'Instrument ORT Activities',
                            from: 'instrumentOrtActivities',
                            layout: Timely.Layouts.staircase,
                            layers: [{
                                    type: 'rect',
                                    mappings: function(d) {
                                        return {
                                            x: utc(d.start),
                                            x2: utc(d.end),
                                        }
                                    }
                                }, {
                                    type: 'label',
                                    mappings: function(d) {
                                        return {
                                            x: utc(d.start),
                                            x2: utc(d.end),
                                            text: d.text
                                        }
                                    },
                                    adjustments: function(d) {
                                        return {
                                            // Slightly shrink the start/end times relative to the main labels
                                            size: Math.min(12, d.size * 0.6)
                                        };
                                    }
                                }, {
                                    type: 'label',
                                    anchor: 'left',
                                    mappings: function(d) {
                                        return {
                                            x: utc(d.start),
                                            text: utc(d.start)
                                        }
                                    },
                                    adjustments: function(d) {
                                        return {
                                            // Slightly shrink the start/end times relative to the main labels
                                            size: Math.min(12, d.size * 0.4)
                                        };
                                    },
                                }, {
                                    type: 'label',
                                    anchor: 'right',
                                    mappings: function(d) {
                                        return {
                                            x: utc(d.end),
                                            text: utc(d.end)
                                        }
                                    },
                                    adjustments: function(d) {
                                        return {
                                            // Slightly shrink the start/end times relative to the main labels
                                            size: Math.min(12, d.size * 0.4)
                                        };
                                    },
                                },

                            ]
                        }, {
                            title: 'Science ORT Week 26 auto',
                            from: 'ortWeek',
                            layers: [{
                                type: 'rect',
                                mappings: function(d) {
                                    return {
                                        x: utc(d.start),
                                        x2: utc(d.end)
                                    }
                                }
                            }, {
                                type: 'label',
                                mappings: function(d) {
                                    return {
                                        x: utc(d.start),
                                        x2: utc(d.end),
                                        text: d.text,
                                    }
                                },
                            }, {
                                type: 'label',
                                fill: 'none',
                                anchor: 'left',
                                mappings: function(d) {
                                    return {
                                        text: d.start,
                                        x: utc(d.start),
                                    };
                                },
                                adjustments: function(d) {
                                    return {
                                        // Slightly shrink the start/end times relative to the main labels
                                        size: Math.min(12, d.size * 0.8)
                                    };
                                }
                            }]
                        }, {
                            title: 'Science ORT all possible passes named ALL',
                            from: 'possiblePasses',
                            layout: Timely.Layouts.staircase,
                            adjustments: function(d) {
                                return {
                                    // Slightly shrink the start/end times relative to the main labels
                                    size: Math.min(12, d.size * 0.8)
                                };
                            },
                            layers: [{
                                type: 'rect',
                                stroke: 'white',
                                mappings: function(d) {
                                    return {
                                        x: utc2(d.start1),
                                        x2: utc2(d.end1),
                                        fill: d.color
                                    };
                                }
                            }, {
                                type: 'label',
                                mappings: function(d) {
                                    return {
                                        x: utc2(d.start1),
                                        x2: utc2(d.end1),
                                        text: d.text,
                                        fill: d.color
                                    };
                                }
                            }, {
                                type: 'label',
                                fill: 'none',
                                anchor: 'right',
                                mappings: function(d) {
                                    return {
                                        text: utc2(d.start1),
                                        x: utc2(d.start1),
                                    };
                                }
                            }, {
                                type: 'label',
                                fill: 'none',
                                anchor: 'left',
                                mappings: function(d) {
                                    return {
                                        text: utc2(d.end1),
                                        x: utc2(d.end1),
                                    };
                                }
                            },{
                                type: 'whisker',
                                fill: 'none',
                                mappings: function(d) {
                                    return {
                                        x: utc2(d.start2),
                                        x2: utc2(d.end2)
                                    };
                                }
                            },{
                                type: 'label',
                                fill: 'none',
                                anchor: 'right',
                                mappings: function(d) {
                                    return {
                                        text: utc2(d.start2),
                                        x: utc2(d.start2),
                                    };
                                }
                            }, {
                                type: 'label',
                                fill: 'none',
                                anchor: 'left',
                                mappings: function(d) {
                                    return {
                                        text: utc2(d.end2),
                                        x: utc2(d.end2),
                                    };
                                }
                            }
                            ]
                        }

                    ]
                };

                var chart = new Timely.Chart(chartSpec);
                var $win = $(window);

                function redraw() {
                    chart
                        .setWidth($win.width() - 30)
                        .setHeight($win.height() - 100)
                        .draw();
                }
                $win.resize(redraw);

                redraw();

            });
        }

        function timeLabel(anchor) {
            return {
                type: 'label',
                anchor: anchor,
                fill: 'none',
                maxItems: 50,
                mappings: function(d) {
                    return {
                        text: d3.time.format.utc('%H:%M')(d.start),
                        x: d.start
                    };
                },
                adjustments: function(d) {
                    return {
                        // Slightly shrink the start/end times relative to the main labels
                        size: d.size * 0.8,
                    };
                }
            };
        }

        var utc = (function() {
            var parser = d3.time.format.utc('%Y-%jT%H:%M:%S.%L');
            return function(d) {
                return parser.parse(d);
            };
        })();
        var utc2 = (function() {
            var parser = d3.time.format.utc('%Y%j%H%M%S');
            return function(d) {
                return parser.parse(d);
            };
        })();



    });
