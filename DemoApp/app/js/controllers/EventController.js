'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {

        $scope.snippet = '<span style="color:red;">Span</span>';

        $scope.boolValue = true;

        $scope.mystyle = {color:'red'};

        $scope.buttonDisabled = true;

        $scope.sortorder = 'name';

        $scope.event = {
            name: 'Angular Boot Camp',
            date: 1359781015626,
            time: '10:30 am',
            location: {
                address: 'Google Headquarters',
                city: 'Mountain View',
                province: 'CA'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directives Masterclass monica',
                    creatorName: 'Bob Smith',
                    duration: 1,
                    level: 'Advanced',
                    abstract: 'In this session you will learn the ins and outs of directives!',
                    upVoteCount: 0
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'Bob Smith',
                    duration: 2,
                    level: 'Advanced',
                    abstract: 'In this session you will learn the ins and outs of directives!',
                    upVoteCount: 0
                },
                {
                    name: 'Well behaved controllers',
                    creatorName: 'Bob Smith',
                    duration: 4,
                    level: 'Advanced',
                    abstract: 'In this session you will learn the ins and outs of directives!',
                    upVoteCount: 0
                }
            ]
        }

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };

    }
);