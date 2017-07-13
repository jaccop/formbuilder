<template>
<div class="cd-horizontal-timeline mt-timeline-horizontal loaded">
    <div class="timeline">
        <div class="events-wrapper">
            <div class="events" style="width: 1000px;">
                <ol>
                    <li>
                        <a href="#0" data-date="16/01/2014" class="border-after-red bg-after-red selected" style="left: 120px;">16 Jan</a>
                    </li>
                    <li>
                        <a href="#0" data-date="28/02/2014" class="border-after-red bg-after-red" style="left: 300px;">28 Feb</a>
                    </li>
                    <li>
                        <a href="#0" data-date="20/04/2014" class="border-after-red bg-after-red" style="left: 480px;">20 Mar</a>
                    </li>
                    <li>
                        <a href="#0" data-date="20/05/2014" class="border-after-red bg-after-red" style="left: 600px;">20 May</a>
                    </li>
                    <li>
                        <a href="#0" data-date="09/07/2014" class="border-after-red bg-after-red" style="left: 780px;">09 Jul</a>
                    </li>
                </ol>
                <span class="filling-line bg-red" aria-hidden="true" style="transform: scaleX(0.0769271);"></span>
            </div>
            <!-- .events -->
        </div>
        <!-- .events-wrapper -->
        <ul class="cd-timeline-navigation mt-ht-nav-icon">
            <li>
                <a href="#0" class="prev inactive btn btn-outline red md-skip">
                    <i class="fa fa-chevron-left"></i>
                </a>
            </li>
            <li>
                <a href="#0" class="next btn btn-outline red md-skip">
                    <i class="fa fa-chevron-right"></i>
                </a>
            </li>
        </ul>
        <!-- .cd-timeline-navigation -->
    </div>
    <!-- .timeline -->
    <div class="events-content">
        <ol>
            <li class="selected" data-date="16/01/2014">
                <div class="mt-title">
                    <h2 class="mt-content-title">New User</h2>
                </div>
                <div class="mt-author">
                    <div class="mt-author-name">
                        <a href="javascript:;" class="font-blue-madison">Andres Iniesta</a>
                    </div>
                    <div class="mt-author-datetime font-grey-mint">16 January 2014 : 7:45 PM</div>
                </div>
                <div class="clearfix"></div>
                <div class="mt-content border-grey-steel">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod eleifend ipsum, at posuere augue. Pellentesque mi felis, aliquam at iaculis eu, mi felis, aliquam at iaculis mi felis,
                        aliquam at iaculis finibus eu ex. Integer efficitur tincidunt malesuada. Sed sit amet molestie elit, vel placerat ipsum. Ut consectetur odio non est rhoncus volutpat.</p>
                    <a href="javascript:;" class="btn btn-circle red btn-outline">Read More</a>
                    <a href="javascript:;" class="btn btn-circle btn-icon-only blue">
                        <i class="fa fa-plus"></i>
                    </a>
                    <a href="javascript:;" class="btn btn-circle btn-icon-only green pull-right">
                        <i class="fa fa-twitter"></i>
                    </a>
                </div>
            </li>
            <li data-date="28/02/2014">
                <div class="mt-title">
                    <h2 class="mt-content-title">Sending Shipment</h2>
                </div>
                <div class="mt-author">
                    <div class="mt-author-name">
                        <a href="javascript:;" class="font-blue-madison">Hugh Grant</a>
                    </div>
                    <div class="mt-author-datetime font-grey-mint">28 February 2014 : 10:15 AM</div>
                </div>
                <div class="clearfix"></div>
                <div class="mt-content border-grey-steel">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod eleifend ipsum, at posuere augue. Pellentesque mi felis, aliquam at iaculis eu, finibus eu ex. Integer efficitur leo
                        eget dolor tincidunt, et dignissim risus lacinia. Nam in egestas nunc. Suspendisse potenti. Cras ullamcorper tincidunt malesuada. Sed sit amet molestie elit, vel placerat ipsum. Ut consectetur
                        odio non est rhoncus volutpat. Nullam interdum, neque quis vehicula ornare, lacus elit dignissim purus, quis ultrices erat tortor eget felis. Cras commodo id massa at condimentum. Praesent
                        dignissim luctus risus sed sodales.</p>
                    <a href="javascript:;" class="btn btn-circle btn-outline green-jungle">Download Shipment List</a>
                    <div class="btn-group dropup pull-right">
                        <button class="btn btn-circle blue-steel dropdown-toggle" type="button" data-toggle="dropdown" data-hover="dropdown" data-close-others="true" aria-expanded="false"> Actions
                            <i class="fa fa-angle-down"></i>
                        </button>
                        <ul class="dropdown-menu pull-right" role="menu">
                            <li>
                                <a href="javascript:;">Action </a>
                            </li>
                            <li>
                                <a href="javascript:;">Another action </a>
                            </li>
                            <li>
                                <a href="javascript:;">Something else here </a>
                            </li>
                            <li class="divider"> </li>
                            <li>
                                <a href="javascript:;">Separated link </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li data-date="20/04/2014">
                <div class="mt-title">
                    <h2 class="mt-content-title">Blue Chambray</h2>
                </div>
                <div class="mt-author">
                    <div class="mt-author-name">
                        <a href="javascript:;" class="font-blue">Rory Matthew</a>
                    </div>
                    <div class="mt-author-datetime font-grey-mint">20 April 2014 : 10:45 PM</div>
                </div>
                <div class="clearfix"></div>
                <div class="mt-content border-grey-steel">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod eleifend ipsum, at posuere augue. Pellentesque mi felis, aliquam at iaculis eu, finibus eu ex. Integer efficitur leo
                        eget dolor tincidunt, et dignissim risus lacinia. Nam in egestas nunc. Suspendisse potenti. Cras ullamcorper tincidunt malesuada. Sed sit amet molestie elit, vel placerat ipsum. Ut consectetur
                        odio non est rhoncus volutpat. Nullam interdum, neque quis vehicula ornare, lacus elit dignissim purus, quis ultrices erat tortor eget felis. Cras commodo id massa at condimentum. Praesent
                        dignissim luctus risus sed sodales.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus
                        veritatis qui ut. laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut. </p>
                    <a href="javascript:;" class="btn btn-circle red">Read More</a>
                </div>
            </li>
            <li data-date="20/05/2014">
                <div class="mt-title">
                    <h2 class="mt-content-title">Timeline Received</h2>
                </div>
                <div class="mt-author">
                    <div class="mt-author-name">
                        <a href="javascript:;" class="font-blue-madison">Andres Iniesta</a>
                    </div>
                    <div class="mt-author-datetime font-grey-mint">20 May 2014 : 12:20 PM</div>
                </div>
                <div class="clearfix"></div>
                <div class="mt-content border-grey-steel">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod eleifend ipsum, at posuere augue. Pellentesque mi felis, aliquam at iaculis eu, finibus eu ex. Integer efficitur leo
                        eget dolor tincidunt, et dignissim risus lacinia. Nam in egestas nunc. Suspendisse potenti. Cras ullamcorper tincidunt malesuada. Sed sit amet molestie elit, vel placerat ipsum. Ut consectetur
                        odio non est rhoncus volutpat. Nullam interdum, neque quis vehicula ornare, lacus elit dignissim purus, quis ultrices erat tortor eget felis. Cras commodo id massa at condimentum. Praesent
                        dignissim luctus risus sed sodales.</p>
                    <a href="javascript:;" class="btn btn-circle green-turquoise">Read More</a>
                </div>
            </li>
            <li data-date="09/07/2014">
                <div class="mt-title">
                    <h2 class="mt-content-title">Event Success</h2>
                </div>
                <div class="mt-author">
                    <div class="mt-author-name">
                        <a href="javascript:;" class="font-blue-madison">Matt Goldman</a>
                    </div>
                    <div class="mt-author-datetime font-grey-mint">9 July 2014 : 8:15 PM</div>
                </div>
            </li>
        </ol>
    </div>
    <!-- .events-content -->
</div>
</template>

<script>
    import Vue from 'vue';

    export default Vue.component('Timeline', {
		props:{
	    	url: {
	        	events: Array
	        }
	    },
        data() {
            return {
                initialized: false
            }
        },
        methods: {
        	init() {
        		// fetch account data from server
         		this.initialized = true;
        	}
        },
        computed: {
        },
		created: function() {
			jQuery(document).ready(function($){
				var timelines = $('.cd-horizontal-timeline'),
					eventsMinDistance = 60;
			
				(timelines.length > 0) && initTimeline(timelines);
			
				function initTimeline(timelines) {
					timelines.each(function(){
						var timeline = $(this),
							timelineComponents = {};
						//cache timeline components 
						timelineComponents['timelineWrapper'] = timeline.find('.events-wrapper');
						timelineComponents['eventsWrapper'] = timelineComponents['timelineWrapper'].children('.events');
						timelineComponents['fillingLine'] = timelineComponents['eventsWrapper'].children('.filling-line');
						timelineComponents['timelineEvents'] = timelineComponents['eventsWrapper'].find('a');
						timelineComponents['timelineDates'] = parseDate(timelineComponents['timelineEvents']);
						timelineComponents['eventsMinLapse'] = minLapse(timelineComponents['timelineDates']);
						timelineComponents['timelineNavigation'] = timeline.find('.cd-timeline-navigation');
						timelineComponents['eventsContent'] = timeline.children('.events-content');
			
						//assign a left postion to the single events along the timeline
						setDatePosition(timelineComponents, eventsMinDistance);
						//assign a width to the timeline
						var timelineTotWidth = setTimelineWidth(timelineComponents, eventsMinDistance);
						//the timeline has been initialize - show it
						timeline.addClass('loaded');
			
						//detect click on the next arrow
						timelineComponents['timelineNavigation'].on('click', '.next', function(event){
							event.preventDefault();
							updateSlide(timelineComponents, timelineTotWidth, 'next');
						});
						//detect click on the prev arrow
						timelineComponents['timelineNavigation'].on('click', '.prev', function(event){
							event.preventDefault();
							updateSlide(timelineComponents, timelineTotWidth, 'prev');
						});
						//detect click on the a single event - show new event content
						timelineComponents['eventsWrapper'].on('click', 'a', function(event){
							event.preventDefault();
							timelineComponents['timelineEvents'].removeClass('selected');
							$(this).addClass('selected');
							updateOlderEvents($(this));
							updateFilling($(this), timelineComponents['fillingLine'], timelineTotWidth);
							updateVisibleContent($(this), timelineComponents['eventsContent']);
						});
			
						//on swipe, show next/prev event content
						timelineComponents['eventsContent'].on('swipeleft', function(){
							var mq = checkMQ();
							( mq == 'mobile' ) && showNewContent(timelineComponents, timelineTotWidth, 'next');
						});
						timelineComponents['eventsContent'].on('swiperight', function(){
							var mq = checkMQ();
							( mq == 'mobile' ) && showNewContent(timelineComponents, timelineTotWidth, 'prev');
						});
			
						//keyboard navigation
						$(document).keyup(function(event){
							if(event.which=='37' && elementInViewport(timeline.get(0)) ) {
								showNewContent(timelineComponents, timelineTotWidth, 'prev');
							} else if( event.which=='39' && elementInViewport(timeline.get(0))) {
								showNewContent(timelineComponents, timelineTotWidth, 'next');
							}
						});
					});
				}
			
				function updateSlide(timelineComponents, timelineTotWidth, string) {
					//retrieve translateX value of timelineComponents['eventsWrapper']
					var translateValue = getTranslateValue(timelineComponents['eventsWrapper']),
						wrapperWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', ''));
					//translate the timeline to the left('next')/right('prev') 
					(string == 'next') 
						? translateTimeline(timelineComponents, translateValue - wrapperWidth + eventsMinDistance, wrapperWidth - timelineTotWidth)
						: translateTimeline(timelineComponents, translateValue + wrapperWidth - eventsMinDistance);
				}
			
				function showNewContent(timelineComponents, timelineTotWidth, string) {
					//go from one event to the next/previous one
					var visibleContent =  timelineComponents['eventsContent'].find('.selected'),
						newContent = ( string == 'next' ) ? visibleContent.next() : visibleContent.prev();
			
					if ( newContent.length > 0 ) { //if there's a next/prev event - show it
						var selectedDate = timelineComponents['eventsWrapper'].find('.selected'),
							newEvent = ( string == 'next' ) ? selectedDate.parent('li').next('li').children('a') : selectedDate.parent('li').prev('li').children('a');
						
						updateFilling(newEvent, timelineComponents['fillingLine'], timelineTotWidth);
						updateVisibleContent(newEvent, timelineComponents['eventsContent']);
						newEvent.addClass('selected');
						selectedDate.removeClass('selected');
						updateOlderEvents(newEvent);
						updateTimelinePosition(string, newEvent, timelineComponents);
					}
				}
			
				function updateTimelinePosition(string, event, timelineComponents) {
					//translate timeline to the left/right according to the position of the selected event
					var eventStyle = window.getComputedStyle(event.get(0), null),
						eventLeft = Number(eventStyle.getPropertyValue("left").replace('px', '')),
						timelineWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', '')),
						timelineTotWidth = Number(timelineComponents['eventsWrapper'].css('width').replace('px', ''));
					var timelineTranslate = getTranslateValue(timelineComponents['eventsWrapper']);
			
			        if( (string == 'next' && eventLeft > timelineWidth - timelineTranslate) || (string == 'prev' && eventLeft < - timelineTranslate) ) {
			        	translateTimeline(timelineComponents, - eventLeft + timelineWidth/2, timelineWidth - timelineTotWidth);
			        }
				}
			
				function translateTimeline(timelineComponents, value, totWidth) {
					var eventsWrapper = timelineComponents['eventsWrapper'].get(0);
					value = (value > 0) ? 0 : value; //only negative translate value
					value = ( !(typeof totWidth === 'undefined') &&  value < totWidth ) ? totWidth : value; //do not translate more than timeline width
					setTransformValue(eventsWrapper, 'translateX', value+'px');
					//update navigation arrows visibility
					(value == 0 ) ? timelineComponents['timelineNavigation'].find('.prev').addClass('inactive') : timelineComponents['timelineNavigation'].find('.prev').removeClass('inactive');
					(value == totWidth ) ? timelineComponents['timelineNavigation'].find('.next').addClass('inactive') : timelineComponents['timelineNavigation'].find('.next').removeClass('inactive');
				}
			
				function updateFilling(selectedEvent, filling, totWidth) {
					//change .filling-line length according to the selected event
					var eventStyle = window.getComputedStyle(selectedEvent.get(0), null),
						eventLeft = eventStyle.getPropertyValue("left"),
						eventWidth = eventStyle.getPropertyValue("width");
					eventLeft = Number(eventLeft.replace('px', '')) + Number(eventWidth.replace('px', ''))/2;
					var scaleValue = eventLeft/totWidth;
					setTransformValue(filling.get(0), 'scaleX', scaleValue);
				}
			
				function setDatePosition(timelineComponents, min) {
					for (var i = 0; i < timelineComponents['timelineDates'].length; i++) { 
					    var distance = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][i]),
					    	distanceNorm = Math.round(distance/timelineComponents['eventsMinLapse']) + 2;
					    timelineComponents['timelineEvents'].eq(i).css('left', distanceNorm*min+'px');
					}
				}
			
				function setTimelineWidth(timelineComponents, width) {
					var timeSpan = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][timelineComponents['timelineDates'].length-1]),
						timeSpanNorm = timeSpan/timelineComponents['eventsMinLapse'],
						timeSpanNorm = Math.round(timeSpanNorm) + 4,
						totalWidth = timeSpanNorm*width;
					timelineComponents['eventsWrapper'].css('width', totalWidth+'px');
					updateFilling(timelineComponents['eventsWrapper'].find('a.selected'), timelineComponents['fillingLine'], totalWidth);
					updateTimelinePosition('next', timelineComponents['eventsWrapper'].find('a.selected'), timelineComponents);
				
					return totalWidth;
				}
			
				function updateVisibleContent(event, eventsContent) {
					var eventDate = event.data('date'),
						visibleContent = eventsContent.find('.selected'),
						selectedContent = eventsContent.find('[data-date="'+ eventDate +'"]'),
						selectedContentHeight = selectedContent.height();
			
					if (selectedContent.index() > visibleContent.index()) {
						var classEnetering = 'selected enter-right',
							classLeaving = 'leave-left';
					} else {
						var classEnetering = 'selected enter-left',
							classLeaving = 'leave-right';
					}
			
					selectedContent.attr('class', classEnetering);
					visibleContent.attr('class', classLeaving).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
						visibleContent.removeClass('leave-right leave-left');
						selectedContent.removeClass('enter-left enter-right');
					});
					eventsContent.css('height', selectedContentHeight+'px');
				}
			
				function updateOlderEvents(event) {
					event.parent('li').prevAll('li').children('a').addClass('older-event').end().end().nextAll('li').children('a').removeClass('older-event');
				}
			
				function getTranslateValue(timeline) {
					var timelineStyle = window.getComputedStyle(timeline.get(0), null),
						timelineTranslate = timelineStyle.getPropertyValue("-webkit-transform") ||
			         		timelineStyle.getPropertyValue("-moz-transform") ||
			         		timelineStyle.getPropertyValue("-ms-transform") ||
			         		timelineStyle.getPropertyValue("-o-transform") ||
			         		timelineStyle.getPropertyValue("transform");
			
			        if( timelineTranslate.indexOf('(') >=0 ) {
			        	var timelineTranslate = timelineTranslate.split('(')[1];
			    		timelineTranslate = timelineTranslate.split(')')[0];
			    		timelineTranslate = timelineTranslate.split(',');
			    		var translateValue = timelineTranslate[4];
			        } else {
			        	var translateValue = 0;
			        }
			
			        return Number(translateValue);
				}
			
				function setTransformValue(element, property, value) {
					element.style["-webkit-transform"] = property+"("+value+")";
					element.style["-moz-transform"] = property+"("+value+")";
					element.style["-ms-transform"] = property+"("+value+")";
					element.style["-o-transform"] = property+"("+value+")";
					element.style["transform"] = property+"("+value+")";
				}
			
				//based on http://stackoverflow.com/questions/542938/how-do-i-get-the-number-of-days-between-two-dates-in-javascript
				function parseDate(events) {
					var dateArrays = [];
					events.each(function(){
						var singleDate = $(this),
							dateComp = singleDate.data('date').split('T');
						if( dateComp.length > 1 ) { //both DD/MM/YEAR and time are provided
							var dayComp = dateComp[0].split('/'),
								timeComp = dateComp[1].split(':');
						} else if( dateComp[0].indexOf(':') >=0 ) { //only time is provide
							var dayComp = ["2000", "0", "0"],
								timeComp = dateComp[0].split(':');
						} else { //only DD/MM/YEAR
							var dayComp = dateComp[0].split('/'),
								timeComp = ["0", "0"];
						}
						var	newDate = new Date(dayComp[2], dayComp[1]-1, dayComp[0], timeComp[0], timeComp[1]);
						dateArrays.push(newDate);
					});
				    return dateArrays;
				}
			
				function daydiff(first, second) {
				    return Math.round((second-first));
				}
			
				function minLapse(dates) {
					//determine the minimum distance among events
					var dateDistances = [];
					for (var i = 1; i < dates.length; i++) { 
					    var distance = daydiff(dates[i-1], dates[i]);
					    dateDistances.push(distance);
					}
					return Math.min.apply(null, dateDistances);
				}
			
				/*
					How to tell if a DOM element is visible in the current viewport?
					http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
				*/
				function elementInViewport(el) {
					var top = el.offsetTop;
					var left = el.offsetLeft;
					var width = el.offsetWidth;
					var height = el.offsetHeight;
			
					while(el.offsetParent) {
					    el = el.offsetParent;
					    top += el.offsetTop;
					    left += el.offsetLeft;
					}
			
					return (
					    top < (window.pageYOffset + window.innerHeight) &&
					    left < (window.pageXOffset + window.innerWidth) &&
					    (top + height) > window.pageYOffset &&
					    (left + width) > window.pageXOffset
					);
				}
			
				function checkMQ() {
					//check if mobile or desktop device
					return window.getComputedStyle(document.querySelector('.cd-horizontal-timeline'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "");
				}
			});
		}
    })

</script>

