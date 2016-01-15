'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {

        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1/1/2016',
            time: '10:30 am',
            location: {
                address: 'Google Headquarters',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directives Masterclass',
                    creatorName: 'Bob Smith',
                    duration: '1h',
                    level: 'Advanced',
                    abstract: 'In this session you will learn the ins and outs of directives!'
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'Bob Smith',
                    duration: '1h',
                    level: 'Advanced',
                    abstract: 'In this session you will learn the ins and outs of directives!'
                },
                {
                    name: 'Well behaved controllers',
                    creatorName: 'Bob Smith',
                    duration: '1h',
                    level: 'Advanced',
                    abstract: 'In this session you will learn the ins and outs of directives!'
                }
            ]
        }

    }
);