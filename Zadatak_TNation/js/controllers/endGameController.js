var app = angular.module("myApp");

app.controller("endGameController",function($scope, cityService, $http, $timeout){
   
   // preuzimanje podataka iz prvog kontrolera preko servisa 
   $scope.data = cityService.getCitiesList();
   
   // definisanje odabranih gradova i tacnih gradova
   $scope.selected_cities = $scope.data[0];
   $scope.correct = $scope.data[1];
   
   console.log($scope.selected_cities);
   console.log($scope.correct);
   
   // filtriranje prve liste elementima iz druge kako
   // bi se dobio broj pogodjenih gradova
   $scope.resultArray = $scope.correct.filter((n) => $scope.selected_cities.includes(n))
   
   console.log($scope.resultArray);
   console.log($scope.resultArray.length);
   
   // Procenat pogodjenih dobija se tako sto se broj pogodjenih gradova
   // podeli sa brojem tacnih gradova pa pomnozi sa 100
   $scope.percentage = ($scope.resultArray.length / $scope.correct.length) * 100
   
   console.log($scope.percentage + "%")
   
   // promenjive za grafiski prikaz procenata
   $scope.dynamic = 0
   $scope.max = 100;
   

 /** 
  * @desc Funkcija za dinamicno 
  * prikazivanje procenata
  */
   $scope.random = function(value) {
      $scope.dynamic = value;
   };

   // $timeout prilikom izvrsenja, kako bi se funckija
   // izvrsila nakon ucitavanja stranice i prikazala animaciju
   $timeout( function(){ $scope.random($scope.percentage); }, 500);
  

})