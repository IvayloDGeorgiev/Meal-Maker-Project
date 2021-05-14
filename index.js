const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []    
    },
  
    get appetizers(){ 
      return this._courses.appetizers;
    },
    set appetizers(appetizerInput){ 
     this._courses.appetizers = appetizerInput;
    },
    get mains(){ 
      return this._courses.mains;
    },
    set mains(mainsInput){
      this._courses.mains = mainsInput;
     },
    get desserts(){
      return this._courses.desserts;
     },
    set desserts(dessertInput){
      this._courses.desserts = dessertInput;
     },
  
    get courses(){
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      }
    },
  // This methods adds the dish object to courses with name and price of dish
    addDishToCourse(courseName, dishName, dishPrice){
      const dish = {
            name: dishName,
            price: dishPrice
      };
      this._courses[courseName].push(dish);
    },
  // Generate random dish from course with courseName as parameter
    getRandomDishFromCourse(courseName){
        let dishes = this._courses[courseName];
        let index = Math.floor(Math.random() * dishes.length);
        return dishes[index];
    },
  // Generates random meal based on course type and returns total price with meals selected
  generateRandomMeal(){
   let selectedAppetizer = this.getRandomDishFromCourse('appetizers');
   let selectedMain = this.getRandomDishFromCourse('mains');
   let selectedDessert = this.getRandomDishFromCourse('desserts');
  
  const totalPrice = selectedAppetizer.price + selectedMain.price + selectedDessert.price;
  return `The final bill is: \n ${selectedAppetizer.name} \n ${selectedMain.name} \n ${selectedDessert.name} \n----------\n TOTAL = ${totalPrice}\n----------`;
  }
  };
  
  //Creating a menu object by adding some dishes
  menu.addDishToCourse('appetizers', 'Tomato Soup', 7.50);
  menu.addDishToCourse('appetizers', 'Manchow Soup', 8.00);
  menu.addDishToCourse('appetizers', 'Chips', 6.50);
  menu.addDishToCourse('mains', 'Baigan Bartha', 16.50);
  menu.addDishToCourse('mains', 'Daal Fry', 15.50);
  menu.addDishToCourse('mains', 'Palak Paneer', 18.00);
  menu.addDishToCourse('desserts', 'Gulab Jamun', 6.00);
  menu.addDishToCourse('desserts', 'Jelebi', 8.25);
  menu.addDishToCourse('desserts', 'Burfi', 5.00);
  
  //Now generate random meal
  const meal = menu.generateRandomMeal();
  //Print out the meal
  console.log(meal);
  