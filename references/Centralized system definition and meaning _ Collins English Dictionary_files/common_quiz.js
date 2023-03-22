
var quizLanguage=(typeof quizLang!="undefined"?quizLang:pageDictCode);var Quiz=function(a){this.quiz=a;this.container=configuration.findUnique("*[id^='container-']",a);this.questions=[];this.button={nextQuestion:configuration.findUnique(".exercise-next-question",a),review:configuration.findUnique(".exercise-correct",a),nextQuiz:configuration.findUnique(".exercise-replay",a)};
this.score=0;this.elmScore=configuration.findUnique(".goodAnswers",a);this.currentQuestion=1;this.numAnswers=configuration.findUnique(".nbAnswers",a);this.nbrAnswers=null;this.finalResults=configuration.findUnique(".finalResult",a);
this.isReview=false;this.init()};Quiz.prototype.init=function(){var a=this;configuration.find(".exercise-question",a.container).forEach(function(b){if(configuration.find(".exercise-mc",b).length>0){a.questions.push(new QuestionSimpleChoice(b,a))
}else{if(configuration.find(".exercise-gapfill-drag-bag",b).length>0){a.questions.push(new QuestionDragDrop(b,a))}}});a.nbrAnswers=a.questions.length;Object.keys(a.button).forEach(function(b){var c=b;a.button[b].addEventListener("click",function(d){d.stopPropagation();
d.preventDefault();switch(c){case"nextQuestion":a.nextQuestion();break;case"review":a.review();break;case"nextQuiz":a.nextQuiz();break}return false})})};Quiz.prototype.nextQuestion=function(){var a=this.container;
var b=a.childNodes[0];var c=this.currentQuestion;a.removeChild(b);a.appendChild(b);if(c==1){sendGaEvent("Quizzes","start - "+quizLanguage,this.eventLabel())}if(c==this.nbrAnswers){this.displayResult();
return}this.currentQuestion++;this.numAnswers.innerHTML=this.currentQuestion};Quiz.prototype.review=function(){var a=this;a.questions.forEach(function(d){a.changeDisplay(d.element,"block");d.choices.forEach(function(e){if(e==d.answer.correct){e.classList.add("correct")
}})});var b=configuration.find(".exercise-question",a.container);b.forEach(function(d,e){d.classList.add("inReview")});var c=configuration.findUnique(".pB-quiz .pB-t .exercise-title",a.quiz);c.classList.remove("inExercise");
c.classList.add("inReview");a.quiz.parentNode.classList.add("quiz-review");a.isReview=true;a.changeDisplay(this.button.review,"none")};Quiz.prototype.nextQuiz=function(){sendGaEvent("Quizzes","next - "+quizLanguage,this.eventLabel());
var b=null;if(!("closest" in Element.prototype)){var a=this.quiz;while(a.className!="specialQuiz"){a=a.parentNode;if(!a){break}}b=a}else{b=this.quiz.closest(".specialQuiz")}if(b!=undefined&&b!=null&&quizUrlSpecial){location.href=quizUrlSpecial;
return false}if(quizUrl){location.href=quizUrl}else{location.reload()}};Quiz.prototype.displayResult=function(){var b=this.button;var a=this.finalResults;this.changeDisplay(b.nextQuestion,"none");this.changeDisplay(b.review,"inline-block");
this.changeDisplay(b.nextQuiz,"inline-block");this.changeDisplay(configuration.findUnique(".progression",this.quiz),"none");configuration.findUnique(".results",a).innerHTML=this.score+" / "+this.nbrAnswers;
a.innerHTML+="<div class='finalText'>"+this.displayFinalText()+"</div>";sendGaEvent("Quizzes","finish  - "+quizLanguage+" - "+this.score+" / "+this.nbrAnswers,this.eventLabel())};Quiz.prototype.displayFinalText=function(){return TRANSLATION["quiz.text."+this.score]
};Quiz.prototype.refreshScore=function(){this.elmScore.innerHTML=this.score};Quiz.prototype.changeDisplay=function(a,b){a.style.display=b};Quiz.prototype.eventLabel=function(b,c){if(this._eventLabel===undefined){var a=function(e){if(!e.parentNode){return"unmapped"
}if(e.className){var d=e.className.split(" ");if(d.indexOf("res_cell_right")>=0){return"right-cell"}if(d.indexOf("popular-tools")>=0){return"popular-tools"}if(d.indexOf("quiz_page")>=0){return"quiz-page"
}if(d.indexOf("specialQuiz")>=0){return"special-quiz"}if(d.indexOf("res_cell_center")>=0){return"center-cell"}if(d.indexOf("new-from-collins")>=0){return"new-from-collins"}}return a(e.parentNode)};this._eventLabel=a(this.container)
}return this._eventLabel};var Question=function(b,a){this.quiz=a;this.element=b;this.isAnswered=false;this.init(false)};Question.prototype.init=function(b){var a=this;if(!b){throw ("A Question can't be instantiate directly. You must extends it to instantiate it.")
}var d=a.shuffle(a.choices);if(d.length>0){var c=d[0].parentNode;d.forEach(function(e){c.appendChild(e)})}a.choices.forEach(function(e){a.action(e)})};Question.prototype.shuffle=function(d){var c=d.length,b,a;
while(0!==c){a=Math.floor(Math.random()*c);c-=1;b=d[c];d[c]=d[a];d[a]=b}return d};Question.prototype.action=function(c,b){var a=this;a.overrideSecurity("action",b)};Question.prototype.checkAnswer=function(){var a=this;
if(!a.quiz.isReview){event.preventDefault()}};Question.prototype.isCorrect=function(a,c){var b=this.quiz;if(a&&!this.quiz.isReview){b.score++;b.refreshScore()}};Question.prototype.overrideSecurity=function(b,a){try{if(!a||a==undefined){throw ("The method "+b+" must be override")
}}finally{event.preventDefault()}};var QuestionSimpleChoice=function(d,c){var a=this;var b=Question.prototype;a.choices=configuration.find(".exercise-choice",d);a.answer={correct:configuration.findUnique(".exercise-choice[data-correct]",d),wrong:configuration.find(".exercise-choice:not([data-correct])",d)};
a.init=function(){b.init.call(a,true)};a.action=function(e){b.action.call(a,e,true);e.addEventListener("click",function(){a.checkAnswer(e)},false)};a.isCorrect=function(e,f){b.isCorrect.call(a,e,f);if(!a.quiz.isReview){a.addClass(e,f,"correct","error")
}};a.checkAnswer=function(e){b.checkAnswer.call(a);if(!a.isAnswered){a.isCorrect(e==a.answer.correct,e)}a.isAnswered=true};a.addClass=function(g,h,f,e){h.classList.add(g?f:e)};Question.call(a,d,c)};QuestionSimpleChoice.prototype=Object.create(Question.prototype);
QuestionSimpleChoice.prototype.constructor=QuestionSimpleChoice;var QuestionDragDrop=function(d,c){var a=this;var b=Question.prototype;a.choices=configuration.find(".exercise-gap-item",d);configuration.find(".exercise-gap-drag",d).forEach(function(e){e.addEventListener("dragover",function(f){f.preventDefault()
});e.addEventListener("drop",function(g){if(a.quiz.isReview){return}g.preventDefault();var h=g.dataTransfer.getData("text");var f=g.target;if(h=="undefined"){return}f.appendChild(document.getElementById(h));
f.className="";a.checkAnswer(document.getElementById(h));var i=f.cloneNode(true);f.parentNode.replaceChild(i,f)})});a.answer={correct:configuration.findUnique(".exercise-gap-item[data-bag]",d),wrong:configuration.find(".exercise-gap-item:not([data-bag])",d)};
a.init=function(){b.init.call(a,true)};a.action=function(e){b.action.call(a,e,true);function f(i,n){var o=d.closest(".pB-quiz .pB-d").getBoundingClientRect();var g=o.top;var j=o.left;var k=n.clientY||0;
var l=n.clientX||0;var m=(k-g)-20;var h=(l-j)-20;return{top:Math.round(m),left:Math.round(h)}}e.addEventListener("dragstart",function(g){g.dataTransfer.setData("text",g.target.id)},{passive:true});e.addEventListener("touchstart",function(g){if(a.quiz.isReview){return
}e.style.position="absolute"},{passive:true});e.addEventListener("touchmove",function(h){if(a.quiz.isReview){return}h.preventDefault();h.stopPropagation();var g=h.targetTouches[0];var i=f(e,g);e.style.left=i.left+"px";
e.style.top=i.top+"px"},{passive:false});e.addEventListener("touchend",function(j){e.style.position="";e.style.left="";e.style.top="";var h=j.changedTouches[0];var i=document.elementFromPoint(Math.floor(h.clientX),Math.floor(h.clientY));
j.preventDefault();if(!i.getAttribute("data-drop-container")){return}var l=e.parentNode;i.appendChild(e);i.className="";a.checkAnswer(e);var k=i.cloneNode(true);i.parentNode.replaceChild(k,i);var g=l.cloneNode(true);
l.parentNode.replaceChild(g,l)},false)};a.isCorrect=function(e,f){b.isCorrect.call(a,e,f);if(!a.quiz.isReview){a.addClass(e,f,"correct","error")}};a.checkAnswer=function(e){b.checkAnswer.call(a);if(!a.isAnswered){a.isCorrect(e==a.answer.correct,e)
}a.isAnswered=true};a.addClass=function(g,h,f,e){h.classList.add(g?f:e)};Question.call(a,d,c)};QuestionDragDrop.prototype=Object.create(Question.prototype);QuestionDragDrop.prototype.constructor=QuestionDragDrop;
var quiz_elm=configuration.find(".quizBlock");window.addEventListener("load",function(){if(quiz_elm!=undefined&&quiz_elm!=null){quiz_elm.forEach(function(f){new Quiz(f)})}var a=configuration.find(".toc_quiz span, .toc-mobile");
var c=configuration.find("li[data-letter]");if(a.length>0&&c.length>0){c.forEach(function(e){e.style.display="none"});configuration.findUnique(".first-block").style.display="block";var b=configuration.find(".toc_quiz span:first-child, .toc-mobile:first-child");
b.forEach(function(e){e.style.fontWeight="bold";e.setAttribute("data-select",true)});a.forEach(function(e){e.addEventListener("click",function(i){var k=i.target;var h=k.getAttribute("data-lettertarget");
var f=k.classList.contains("mobile");var g=k.getAttribute("data-select");var j=(f?configuration.findUnique(".toc_quiz span[data-lettertarget='"+h+"']"):configuration.findUnique(".toc-mobile[data-lettertarget='"+h+"']"));
if(g!="true"){d();configuration.findUnique("li[data-letter='"+h+"']").style.display="block";k.style.fontWeight="bold";k.setAttribute("data-select",true);j.style.fontWeight="bold";j.setAttribute("data-select",true)
}else{if(g=="true"&&f){d()}}})})}function d(){c.forEach(function(e){e.style.display="none"});a.forEach(function(e){e.style.fontWeight="normal";e.removeAttribute("data-select")})}});