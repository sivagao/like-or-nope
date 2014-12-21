$('a').click(function() {
    return false;
});

var clickevent = 'mousedown';
if ('ontouchstart' in document.documentElement) {
    clickevent = 'touchstart';
}

var animationEndEvent = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

var Person = {
    wrap: $('#people'),
    people: [{
        name: '陈都灵',
        age: 25,
        img: "http://img.facejoking.com/TUXOJsbBhzGCbChYQStUYj1fIzkGBGdC"
    }, {
        name: '刘亦菲',
        age: 20,
        img: "http://img.facejoking.com/gU9vtE7t9FZUXHMhYOfeuUEMv12TIs88"
    }, {
        name: '张锦轩',
        age: 18,
        img: "http://img.facejoking.com/mupcYLw16qI3lb5vefQ6NTYFMkvcvvrO"
    }, {
        name: '李子傲',
        age: 21,
        img: "http://img.facejoking.com/m/G7es7qQnEdrNCR3O3Vjg2Mznyoh6gH6t"
    }, {
        name: '童小溪',
        age: 23,
        img: "http://img.facejoking.com/m/pZ0rpIm8HL3uc17Lae5V9zvIfPkCS83h"
    }, {
        name: '芙蓉',
        age: 21,
        img: "http://img.facejoking.com/lxGa2ztwhQwvBAD6LhoHl27E5zR0wOpa"
    }, {
        name: '肖林',
        age: 18,
        img: "http://img.facejoking.com/jzFDFHEhWA6DXxRqnOFiqj9O3ngPfpOd"
    }, {
        name: '李智',
        age: 18,
        img: "http://img.facejoking.com/m/m6Id1TtVKqwkay24vsX6yNtcqZkZwvvT"
    }, {
        name: '崔秋',
        age: 22,
        img: "http://img.facejoking.com/h6h245VMdHoSZwz130PsqbaMBcgyIIpt"
    }],
    add: function() {
        var random = this.people[Math.floor(Math.random() * this.people.length)];
        this.wrap.append("<div class='person'><img alt='" + random.name + "' src='" + random.img + "' /><span><strong>" + random.name + "</strong>, " + random.age + "</span></div>");
    }
};

var App = {
    yesButton: $('.button.yes .trigger'),
    noButton: $('.button.no .trigger'),
    blocked: false,
    like: function(liked) {
        var animate = liked ? 'animateYes' : 'animateNo';
        var self = this;
        if (!this.blocked) {
            this.blocked = true;
            $('.person').eq(0).addClass(animate).one(animationEndEvent, function() {
                $(this).remove();
                Person.add();
                self.blocked = false;
            });
        }
    }
};

App.yesButton.on(clickevent, function() {
    App.like(true);
});

App.noButton.on(clickevent, function() {
    App.like(false);
});

$(document).ready(function() {
    Person.add();
    Person.add();
    Person.add();
    Person.add();
});