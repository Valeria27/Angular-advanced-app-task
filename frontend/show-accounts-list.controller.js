( function(){
	var app = angular.module('app')

	var showAccountsList = function() {
		var vm = this;

		vm.list = {users:[
							{
								avatar: "frontend/avatars/ava1.jpg" ,
								id: 'ID125893',
								login: 'Jannet1987',
								name: 'Jannet Dow',
								email: 'jannet1987@mail.net',
								details:{
											age: '29',
											gender: 'Female',
											phone_number: '+3809999999999'
										}
							},
							{
								avatar: 'frontend/avatars/ava2.jpg' ,
								id: 'ID1257993',
								login: 'SuperSue',
								name: 'Sussana Dark',
								email: 'dark@mail.net',
								details:{
											age: '25',
											gender: 'Female',
											phone_number: '+3809912345678'
										}
							},
							{
								avatar: 'frontend/avatars/ava3.jpg' ,
								id: 'ID127773',
								login: 'SleepyBeauty',
								name: 'Annabella Rosa',
								email: 'rosa@mail.net',
								details:{
											age: '18',
											gender: 'Female',
											phone_number: '+38099994895'
										}
							},
							{
								avatar: 'frontend/avatars/ava4.jpg' ,
								id: 'ID965893',
								login: 'Jhon',
								name: 'Jhon Dow',
								email: 'jhon7@mail.net',
								details:{
											age: '33',
											gender: 'Male',
											phone_number: '+38099994895'
										}
							},
							{
								avatar: 'frontend/avatars/ava5.jpg' ,
								id: 'ID120093',
								login: 'Roberto',
								name: 'Rob Unknown',
								email: 'Roberto@mail.net',
								details:{
											age: '29',
											gender: 'Male',
											phone_number: '+3809994899'
										}
							},
							{
								avatar: 'frontend/avatars/ava6.jpg' ,
								id: 'ID129993',
								login: 'Max_Steel',
								name: 'Max Steel',
								email: 'steel@mail.net',
								details:{
											age: '19',
											gender: 'Male',
											phone_number: '+380778956622'
										}
							},
		]};
	};
	app.controller('showAccountsList', showAccountsList)
})();
