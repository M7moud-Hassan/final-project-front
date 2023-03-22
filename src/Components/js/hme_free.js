window.onload=function(){
    // Get today's date
var today = new Date();

// Define the days of the week and months of the year
var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// Get the day of the week, month, and day of the month
var dayOfWeek = daysOfWeek[today.getDay()];
var month = monthsOfYear[today.getMonth()];
var dayOfMonth = today.getDate();

// Add the appropriate suffix to the day of the month
var suffix = '';
if (dayOfMonth == 1 || dayOfMonth == 21 || dayOfMonth == 31) {
	suffix = 'st';
} else if (dayOfMonth == 2 || dayOfMonth == 22) {
	suffix = 'nd';
} else if (dayOfMonth == 3 || dayOfMonth == 23) {
	suffix = 'rd';
} else {
	suffix = 'th';
}

// Create the formatted date string
var formattedDate = dayOfWeek + ', ' + month + ' ' + dayOfMonth + suffix;

// Set the date in the HTML element
document.getElementById('today_date').innerHTML = formattedDate;

// get the carousel element
var carousel = document.querySelector('.carousel');

// get the carousel items
var carouselItems = carousel.querySelectorAll('.carousel-item');

// get the previous and next buttons
var prevBtn = carousel.querySelector('.carousel-control-prev');
var nextBtn = carousel.querySelector('.carousel-control-next');

// set the initial index to 0
var index = 0;

// set the active class to the first item
carouselItems[index].classList.add('active');

// add click event listeners to the buttons
prevBtn.addEventListener('click', function() {
  // remove the active class from the current item
  carouselItems[index].classList.remove('active');
  
  // decrement the index
  index--;
  
  // if the index is less than 0, set it to the last item
  if (index < 0) {
    index = carouselItems.length - 1;
  }
  
  // add the active class to the new item
  carouselItems[index].classList.add('active');
});

nextBtn.addEventListener('click', function() {
  // remove the active class from the current item
  carouselItems[index].classList.remove('active');
  
  // increment the index
  index++;
  
  // if the index is greater than the number of items, set it to the first item
  if (index >= carouselItems.length) {
    index = 0;
  }
  
  // add the active class to the new item
  carouselItems[index].classList.add('active');
});

}