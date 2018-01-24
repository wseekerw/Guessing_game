var app = angular.module('myApp');

app.controller('mainCtrl', function($http, $scope, $timeout, cityService, $location) {
   
  $scope.selectedCities = [];
   
  /** 
  * @desc API call za preuzimanje
  * podataka iz podaci.json fajla
  */
  $http.get('json/podaci.json').then(function($data){
      $scope.podaci = $data;
      $scope.gradovi = $data.data.ponudjene
      $scope.correct = $data.data.tacno
      $scope.counter = $data.data.vreme
      $scope.area = $data.data.oblast
      //console.log($scope.podaci)
      //console.log($scope.gradovi)
      console.log($scope.correct)
      //console.log($scope.counter)
      //console.log($scope.oblast)
  });

  
  
  
  $scope.selectItem = function($item, $model, $label) {
      //console.log($item)
      //console.log($model)
      //console.log($label)
      //console.log($scope.searchQuery);
  }

  
 
  /** 
  * @desc addItem je funkcija koja
  * prilikom klika na dugme ubacuje
  * odabrane gradove u listu 
  */
  $scope.addItem = function() {
    console.log($scope.searchQuery);
    $scope.selectedCities.push($scope.searchQuery);
    $scope.searchQuery = [];
    console.log($scope.selectedCities);
  }

  
  
  /** 
  * @desc Funkcija koja sluzi za
  * brisanje gradova iz liste
  */
  $scope.delete = function(i){
    console.log(i);
    $scope.selectedCities.splice($scope.selectedCities.indexOf(i), 1);
  }
    
   
  
  /** 
  * @desc Funkcija za otkucavanje 
  * vremena priliko dodavanja gradova
  * Ako je vreme isteklo onda atomatski
  * salje igraca na stranicu sa rezultatima
  */
  var updateCounter = function() {
        
    if ($scope.counter > 0) {
         $scope.counter--;
         $timeout(updateCounter, 1000);
    } else {
         $scope.addToCart($scope.selectedCities, $scope.correct);
         $location.path("/endgame");
    }    
  };

  
  
 
  /** 
  * @desc addToCard je deo servisa 
  * koji je u sluzbi prebacivanja $scope objekta
  * iz jednog u drugi kontroler
  */
  $scope.addToCart = function(obj1, obj2) {
    cityService.addCity(obj1, obj2);
  };
    
  
  
  //$timeout kako bi funkcija sacekala da se API call zavrsi
  $timeout(updateCounter, 100);
    

});


// Filter za formatiranje vremena
app.filter('secondsToDateTime', [function() {
    return function(seconds) {
        return new Date(1970, 0, 1).setSeconds(seconds);
    };
}])





