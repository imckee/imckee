describe('Calculate parking times', () => {
    it('should open the main url and verify the title', async ()  => {
         await browser.url('https://www.shino.de/parkcalc/');
         await expect(browser).toHaveTitle(
            'Parking Cost Calculator'
        );
    });

    it('should change from valet parking to economy parking in parking lot category', async () => {
        const selectBox =  await $('#ParkingLot');

        await selectBox.selectByAttribute('value', 'Economy');
    });

    it('change the entry time to 1:30AM and then change the leaving time to 5:00AM', async () => {       
        const searchtimeInput = await $('#StartingTime');
        await searchtimeInput.setValue('1:30');

        const searchendtimeInput = await $('#LeavingTime');
        await searchendtimeInput.setValue('5:00');
    });

    it('should enter a start date and end date after eight days and calculate the cost for valet parking', async () => {       
        const searchInput = await $('#StartingDate');
        await searchInput.setValue('09/11/2021');

        const searchendInput = await $('#LeavingDate');
        await searchendInput.setValue('09/19/2021');
        const enterKey = browser.keys("\uE007"); 
    });

});
