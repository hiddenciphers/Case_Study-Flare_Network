var debounce = function (fn, delay) {
    var timer = null;
    return function () {
        var context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(context, args);
        }, delay);
    };
};

class WidgetHandlerClass extends elementorModules.frontend.handlers.Base {
    getDefaultSettings() {
        return {
            selectors: {
                chart: '.chart-container',
            },
        };
    }

    getDefaultElements() {
        const selectors = this.getSettings('selectors');
        return {
            $chart: this.$element.find(selectors)
        };
    }

    bindEvents() {
        var chartElement = this.elements.$chart.prevObject[0].querySelector('.chart-container');
        chartElement.classList.add("loading");
        let observer = new IntersectionObserver(function (entries, self) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (chartElement.className.includes('gs-big-chart')) {
                        var chart_id = chartElement.id;
                        var data = window['chart_data_' + chart_id];
                        var chart_height = window['chart_height_' + chart_id];
                        var chart_proper_height;

                        if (window.innerWidth <= 767) {
                            chart_proper_height = chart_height['mobile'];
                            if (chart_proper_height == false && chart_height['tablet'] != false) {
                                chart_proper_height = chart_height['tablet'];
                            } else if (chart_proper_height == false && chart_height['desktop'] != false) {
                                chart_proper_height = chart_height['desktop'];
                            }
                        } else if (window.innerWidth <= 1024) {
                            chart_proper_height = chart_height['tablet'];
                            if (chart_proper_height == false) {
                                chart_proper_height = chart_height['desktop'];
                            }
                        } else {
                            chart_proper_height = chart_height['desktop'];
                        }
                        chart_proper_height = chart_proper_height || null;

                        if (data.Benchmark === undefined || data.Holding === undefined) {
                            chartElement.innerHTML = '<div class="no-data" style="height:' + chart_proper_height + 'px">No data</div>';
                            chartElement.classList.remove("loading");
                            self.unobserve(entry.target);
                            return;
                        }

                        var HighchartsItem = new Highcharts.Chart({
                            chart: {
                                events: {
                                    load: function () {
                                        chartElement.classList.remove("loading");
                                    }
                                },
                                useHTML: true,
                                height: chart_proper_height,
                                renderTo: chartElement,
                                type: 'area',
                                spacingLeft: 0,
                                scrollablePlotArea: {
                                    minWidth: 700,
                                    scrollPositionX: 1
                                }
                            },
                            title: {
                                text: null
                            },
                            accessibility: {
                                keyboardNavigation: {
                                    focusBorder: {
                                        style: {
                                            lineWidth: 3,
                                            color: '#0172bc',
                                            borderRadius: 3
                                        },
                                        margin: 4
                                    }
                                }
                            },
                            xAxis: {
                                type: 'datetime',
                                labels: {
                                    y: 45,
                                    formatter: function () {
                                        let month = Highcharts.dateFormat('%b ', this.value),
                                            year = Highcharts.dateFormat('%Y', this.value);

                                        return month + year;
                                    },
                                },
                                minPadding: 0.0015,
                                maxPadding: 0,
                                tickLength: 0,
                                tickPositions: [window['tick_start'],window['tick_middle'],window['tick_end']],
                            },
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    x: 22,
                                },
                                opposite: true,
                                gridZIndex: 4
                            },
                            legend: {
                                enabled: false
                            },
                            tooltip: {
                                crosshairs: [{
                                    width: 1,
                                    color: '#000000',
                                    zIndex: 5
                                }],
                                shared: true,
                                useHTML: true,
                                outside: true,
                                shape: 'square',
                                formatter: function () {
                                    let dayMonth = Highcharts.dateFormat('%m/%d/', this.x),
                                        year = Highcharts.dateFormat('%Y', this.x).substr(-2, 2),
                                        s = '<span class="box-heading-tooltip">' + dayMonth + year + '</span>';

                                    this.points.forEach(function (el) {
                                        if (el.point.y == 0) {
                                            s += '';
                                        } else {
                                            s += '<span class="box-item-tooltip">' + '<span class="list-point" style="background-color:' +
                                                el.point.color + '"></span>' + el.series.name +
                                                '<span class="box-item-tooltip-value">' + el.point.y + "</span></span>";
                                        }
                                    });

                                    return '<div class="gs-big-chart tooltip-container">' + s + '</div>';
                                },
                            },
                            plotOptions: {
                                series: {
                                    turboThreshold: 0,
                                    pointStart: Date.UTC(2019, 1, 1),
                                    pointInterval: 24 * 3600 * 1000,
                                    marker: {
                                        enabled: false,
                                        states: {
                                            hover: {
                                                enabled: false
                                            }
                                        }
                                    },
                                    fillOpacity: 1,
                                    events: {
                                        mouseOver: function () {
                                            setTimeout(function () {
                                                let crosshair = chartElement.querySelector('.highcharts-crosshair'),
                                                    highchartsSeries = chartElement.querySelector('.highcharts-series.highcharts-series-1');

                                                if (crosshair) highchartsSeries.appendChild(crosshair);
                                            }, 10);
                                        },
                                    }
                                },
                            },
                            series: [
                                {
                                    name: window['chart_holding_share_name_' + chartElement.id] + " Holdings/Share: <strong>$</strong>",
                                    data: data.Holding,
                                    color: window['chart_style_' + chartElement.id]['holding_color'] || '#56AA93',
                                    zIndex: 2
                                },
                                {
                                    name: "Market Price/Share: <strong>$</strong>",
                                    data: data.Benchmark,
                                    color: window['chart_style_' + chartElement.id]['benchmark_color'] || '#B0B1B2',
                                    zIndex: 1
                                },
                            ],
                        });

                        document.querySelector('.highcharts-container').addEventListener('touchmove', function () {
                            document.querySelector('.highcharts-tooltip-container').classList.add('gs-big-chart');
                        });

                        chartElement.addEventListener('mouseover', function () {
                            setTimeout(function () {
                                let tooltipItems = document.querySelectorAll('.highcharts-tooltip-container');
                                tooltipItems.forEach(tooltipItem => {
                                    tooltipItem.classList.add('gs-big-chart');
                                })
                            }, 100);
                        });

                        window.addEventListener('resize', debounce(function () {
                            if (window.innerWidth <= 767) {
                                chart_proper_height = chart_height['mobile'];
                                if (chart_proper_height == false && chart_height['tablet'] != false) {
                                    chart_proper_height = chart_height['tablet'];
                                } else if (chart_proper_height == false && chart_height['desktop'] != false) {
                                    chart_proper_height = chart_height['desktop'];
                                }
                            } else if (window.innerWidth <= 1024) {
                                chart_proper_height = chart_height['tablet'];
                                if (chart_proper_height == false) {
                                    chart_proper_height = chart_height['desktop'];
                                }
                            } else {
                                chart_proper_height = chart_height['desktop'];
                            }
                            chart_proper_height = chart_proper_height || null;

                            HighchartsItem.setSize(null, chart_proper_height);

                            HighchartsItem.reflow();
                        }, 10));
                    } else if (chartElement.className.includes('gs-small-chart')) {

                        var chart_id = chartElement.id;
                        var data = window['chart_data_' + chart_id];
                        var chart_height = window['chart_height_' + chart_id];
                        var chart_proper_height;

                        if (window.innerWidth <= 767) {
                            chart_proper_height = chart_height['mobile'];
                            if (chart_proper_height == false && chart_height['tablet'] != false) {
                                chart_proper_height = chart_height['tablet'];
                            } else if (chart_proper_height == false && chart_height['desktop'] != false) {
                                chart_proper_height = chart_height['desktop'];
                            }
                        } else if (window.innerWidth <= 1024) {
                            chart_proper_height = chart_height['tablet'];
                            if (chart_proper_height == false) {
                                chart_proper_height = chart_height['desktop'];
                            }
                        } else {
                            chart_proper_height = chart_height['desktop'];
                        }
                        chart_proper_height = chart_proper_height || null;

                        if (data.Benchmark === undefined || data.Holding === undefined) {
                            chartElement.innerHTML = '<div class="no-data" style="height:' + chart_proper_height + 'px">No data</div>';
                            chartElement.classList.remove("loading");
                            self.unobserve(entry.target);
                            return;
                        }

                        let max_benchmark = 0;
                        if (data.Benchmark !== undefined) {
                            max_benchmark = Math.max.apply(Math, data.Benchmark.map(function (o) { return o.y; }));
                        }

                        let HighchartsItem = new Highcharts.Chart({
                            chart: {
                                events: {
                                    load: function () {
                                        chartElement.classList.remove("loading");
                                    }
                                },
                                height: chart_proper_height,
                                renderTo: chartElement,
                                spacingRight: 0,
                                spacingLeft: 0,
                                shape: 'callout',
                                spacingBottom: 0,
                            },
                            title: {
                                text: null
                            },
                            accessibility: {
                                keyboardNavigation: {
                                    focusBorder: {
                                        style: {
                                            lineWidth: 3,
                                            color: '#0172bc',
                                            borderRadius: 3
                                        },
                                        margin: 4
                                    }
                                }
                            },
                            xAxis: {
                                type: 'datetime',
                                labels: {
                                    y: 0,
                                    useHTML: true,
                                    formatter: function () {
                                        let month = Highcharts.dateFormat('%b ', this.value),
                                            year = Highcharts.dateFormat('%Y', this.value).substr(-2, 2);

                                        return month + year;
                                    },
                                },
                                minPadding: 0.0015,
                                maxPadding: 0,
                                tickLength: 0,
                            },
                            yAxis: {
                                title: {
                                    text: null
                                },
                                labels: {
                                    enabled: false,
                                },
                                opposite: true,
                                gridZIndex: 4,
                                gridLineWidth: 0,
                                plotLines: [{
                                    id: 'max_benchmark',
                                    useHTML: true,
                                    dashStyle: 'ShortDot',
                                    width: 2,
                                    value: max_benchmark,
                                    label: {
                                        useHTML: true,
                                        align: 'left',
                                        text: '<span class="plot-lines"><span>star</span></span>',
                                        x: 0
                                    },
                                    zIndex: 5
                                }],
                            },
                            legend: {
                                enabled: false
                            },
                            tooltip: {
                                crosshairs: [{
                                    width: 1,
                                    color: '#000000',
                                    zIndex: 5
                                }],
                                shared: true,
                                useHTML: true,
                                outside: true,
                                shape: 'square',
                                formatter: function () {
                                    let dayMonth = Highcharts.dateFormat('%m/%d/', this.x),
                                        year = Highcharts.dateFormat('%Y', this.x).substr(-2, 2),
                                        s = '<span class="box-heading-tooltip">' + dayMonth + year + '</span>',
                                        classContainer = 'gs-big-chart tooltip-container ' + chart_id;

                                    this.points.forEach(function (el) {
                                        if (el.point.y == 0) {
                                            s += '';
                                        } else {
                                            s += '<span class="box-item-tooltip">' + '<span class="list-point" style="background-color:' +
                                                el.point.color + '"></span>' + el.series.name +
                                                '<span class="box-item-tooltip-value">' + el.point.y + "</span></span>";
                                        }
                                    });

                                    return '<div class="' + classContainer + '">' + s + '</div>';
                                },
                            },
                            plotOptions: {
                                series: {
                                    turboThreshold: 0,
                                    pointStart: Date.UTC(2019, 1, 1),
                                    pointInterval: 3600 * 1000,
                                    marker: {
                                        enabled: false,
                                        states: {
                                            hover: {
                                                enabled: false
                                            }
                                        },
                                    },
                                    fillOpacity: 1,
                                    events: {
                                        mouseOver: function () {
                                            setTimeout(function () {
                                                let crosshair = chartElement.querySelector('.highcharts-crosshair'),
                                                    highchartsSeries = chartElement.querySelector('.highcharts-series.highcharts-series-1');

                                                if (crosshair) highchartsSeries.appendChild(crosshair);
                                            }, 10);
                                        },
                                    },
                                },
                            },
                            series: [
                                {
                                    name: window['chart_holding_share_name_' + chartElement.id] + " Holdings/Share: <strong>$</strong>",
                                    data: data.Holding,
                                    dataLabels: {
                                        useHTML: true,
                                        enabled: true,
                                        borderRadius: 5,
                                        borderWidth: 1,
                                        y: 0,
                                        x: 22,
                                        formatter: function () {
                                            let pointLength = data.Benchmark.length - 1;

                                            if (this.series.points[pointLength] === this.point) {
                                                return this.series.points[pointLength].label;
                                            }
                                        }
                                    },
                                    type: 'spline',
                                    marker: {
                                        enabled: true,
                                        symbol: 'url(' + window.location.origin + '/wp-content/plugins/grayscale-market-performance/widgets/circle.svg)',
                                        fill: '#000000',
                                        width: 14,
                                        height: 14
                                    },
                                    color: window['chart_style_' + chartElement.id]['holding_color'] || '#56AA93',
                                    zIndex: 2
                                },
                                {
                                    name: "Market Price/Share: <strong>$</strong>",
                                    data: data.Benchmark,
                                    type: 'areaspline',
                                    color: window['chart_style_' + chartElement.id]['benchmark_color'] || '#B0B1B2',
                                    zIndex: 1
                                },
                            ]
                        });

                        if (window['chart_max_benchmark_' + chartElement.id] !== 'yes') {
                            HighchartsItem.yAxis[0].removePlotLine('max_benchmark');
                        }

                        document.querySelector('.highcharts-container').addEventListener('touchmove', function () {
                            document.querySelector('.highcharts-tooltip-container').classList.add('gs-big-chart');
                        });

                        chartElement.addEventListener('mouseover', function () {
                            setTimeout(function () {
                                let tooltipItems = document.querySelectorAll('.highcharts-tooltip-container');
                                tooltipItems.forEach(tooltipItem => {
                                    tooltipItem.classList.add('gs-big-chart');
                                })
                            }, 100);
                        });

                        window.addEventListener('resize', debounce(function () {
                            if (window.innerWidth <= 767) {
                                chart_proper_height = chart_height['mobile'];
                                if (chart_proper_height == false && chart_height['tablet'] != false) {
                                    chart_proper_height = chart_height['tablet'];
                                } else if (chart_proper_height == false && chart_height['desktop'] != false) {
                                    chart_proper_height = chart_height['desktop'];
                                }
                            } else if (window.innerWidth <= 1024) {
                                chart_proper_height = chart_height['tablet'];
                                if (chart_proper_height == false) {
                                    chart_proper_height = chart_height['desktop'];
                                }
                            } else {
                                chart_proper_height = chart_height['desktop'];
                            }
                            chart_proper_height = chart_proper_height || null;

                            HighchartsItem.setSize(null, chart_proper_height);

                            HighchartsItem.reflow();
                        }, 10));
                    }

                    self.unobserve(entry.target);
                }
            });
        });
        if (chartElement.length === 0) {
            return;
        }

        observer.observe(chartElement);
    }
}

jQuery(window).on('elementor/frontend/init', () => {
    const addHandler = ($element) => {
        elementorFrontend.elementsHandler.addHandler(WidgetHandlerClass, {
            $element,
        });
    };

    elementorFrontend.hooks.addAction('frontend/element_ready/chart.default', addHandler);


});


document.addEventListener("DOMContentLoaded", function (event) {
    let $csv = jQuery('#csv-download-link');
    let href = $csv.attr('href');
    href += '?v=' + Math.floor(Math.random() * 999999);
    $csv.attr('href', href);
});
