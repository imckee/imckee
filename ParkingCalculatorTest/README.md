I completed this project using WebDriver.io.  

There are 24 different tests completed within this project.  Each test demonstrates the functionality of this calculator app.

The first test checks to make sure that it calculates the correct amount of dollars and time with the category that was selected.  It changes the parking lot category from 'Valet Parking' to 'Econonomy Parking'.

It then changes the starting date to 09/11/2021 and the starting time to 1:30AM.  Then it changes the end date to 09/19/2021 and end time to 5:00AM and then presses the 'enter' key. 

With all of this criteria selected, it checks to make sure that it calculated the correct amount for the parking cost which should be "$71.00" and the amount of time as 8 Days, 3 Hours and 30 Minutes.

The second test checks to see if an error message is displayed when you enter a leaving date before the starting date.

It first changes the starting date and time to 09/13/2021 at 7:00AM.  Then it changes the leaving date to 09/12/2021 and then presses 'enter'.  The following error message should occur after entering that information: "ERROR! YOUR LEAVING DATE OR TIME IS BEFORE YOUR STARTING DATE OR TIME".

The third test calculates what long-term surface parking would cost from the dates 09/01/2021 at 5:00AM to 09/13/2021 at 12:00AM.  

By entering that criteria, the calculated result for the parking cost and amount of time should be '$110.00' and 11 Days, 19 Hours and 0 Minutes.

The fourth and final test calculates short-term parking from the dates 09/12/2021 at 12:00AM to 09/13/2021 at 12:00AM.

By plugging in that information, the end calculated result should be a total cost of '$27.00' and a total amount of time equal to 1 Day, 1 Hour and 30 Minutes.
