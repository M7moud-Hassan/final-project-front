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