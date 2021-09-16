//First test to calculate Economy parking cost from 9/11/2021 to 9/19/2021 with a start time of 1:30AM and end time of 5:00AM

describe('Calculate parking times', () => {
    it('should open the main url and verify the title', async ()  => {
         await browser.url('https://www.shino.de/parkcalc/');
         await expect(browser).toHaveTitle(
            'Parking Cost Calculator'
        );
    });

    it('should change from valet parking to economy parking', async () => {
        const selectBox =  await $('#ParkingLot');
        await selectBox.selectByAttribute('value', 'Economy');
        await expect(selectBox).toHaveValue(
            'Economy'
        );
    });

    it('should enter a start date', async () => {       
        const searchInput = await $('#StartingDate');
        await searchInput.setValue('09/11/2021');
        await expect(searchInput).toHaveText(
            ''
        );
    });

    it('should change the entry time to 1:30AM', async () => {       
        const searchtimeInput = await $('#StartingTime');
        await searchtimeInput.setValue('1:30');
        await expect(searchtimeInput).toHaveText(
            ''
        );
    });

    it('should change the end time to 5:00AM', async () => {
        const searchendtimeInput = await $('#LeavingTime');
        await searchendtimeInput.setValue('5:00');
        await expect(searchendtimeInput).toHaveText(
            ''
        );
    });

    it('should enter an end date', async () => {
        const searchendInput = await $('#LeavingDate');
        await searchendInput.setValue('09/19/2021');
        await expect(searchendInput).toHaveText(
            ''
        );
        const enterKey = browser.keys("\uE007"); 
    });

    it('should contain the parking cost calculated result', async () => {
        const costResult = await $('.SubHead b')
        await expect(costResult).toHaveText(
            '$ 71.00'
        );

    it('should contain the calculated result of amount of days, hours and minutes', async() => {
        const timeResult = await $('.BodyCopy b')
        await expect(timeResult).toHaveText(
            '(8 Days, 3 Hours, 30 Minutes)'
        );
        await browser.pause(2000);
    });
});

//Second test to display error message with entering leaving date before starting date:

describe('Incomplete form displays error message', () => {
    it('should add entry date', async () => {     
        const searchInput = await $('#StartingDate');
        await searchInput.setValue('09/13/2021');
        await expect(searchInput).toHaveText(
            ''
        );
    });

    it('should add start time and hit enter', async() => {
        const searchtimeInput = await $('#StartingTime');
        await searchtimeInput.setValue('7:00');
        await expect(searchtimeInput).toHaveText(
            ''
        );
    });

    it('should enter an end date', async () => {
        const searchendInput = await $('#LeavingDate');
        await searchendInput.setValue('09/12/2021');
        await expect(searchendInput).toHaveText(
            ''
        );
        const enterKey = browser.keys("\uE007"); 
    });

    it('should contain error for entering leaving date before starting date', async () => {
        const calculatedResult = await $('.SubHead b')
        await expect(calculatedResult).toHaveText(
            'ERROR! YOUR LEAVING DATE OR TIME IS BEFORE YOUR STARTING DATE OR TIME'
        );
        await browser.pause(2000);
    });
});

//Third test that will calculate long-term surface parking from 09/01/2021 at 5:00AM to 09/13/2021 at 12:00AM

describe('Calculate long-term surface parking times', () => {
    it('should change from valet parking to long-surface parking', async () => {
        const selectBox =  await $('#ParkingLot');
        await selectBox.selectByAttribute('value', 'Long-Surface');
        await expect(selectBox).toHaveValue(
            'Long-Surface'
        );
    });

    it('should enter a start date', async () => {       
        const searchInput = await $('#StartingDate');
        await searchInput.setValue('09/01/2021');
        await expect(searchInput).toHaveText(
            ''
        );
    });

    it('should change the entry time to 5:00AM', async () => {       
        const searchtimeInput = await $('#StartingTime');
        await searchtimeInput.setValue('5:00');
        await expect(searchtimeInput).toHaveText(
            ''
        );
    });

    it('should change the end time to 12:00AM', async () => {
        const searchendtimeInput = await $('#LeavingTime');
        await searchendtimeInput.setValue('12:00');
        await expect(searchendtimeInput).toHaveText(
            ''
        );
    });

    it('should enter an end date', async () => {
        const searchendInput = await $('#LeavingDate');
        await searchendInput.setValue('09/13/2021');
        await expect(searchendInput).toHaveText(
            ''
        );
        const enterKey = browser.keys("\uE007"); 
    });

    it('should contain the parking cost calculated result', async () => {
        const costResult = await $('.SubHead b')
        await expect(costResult).toHaveText(
            '$ 110.00'
        );

    it('should contain the calculated result of amount of days, hours and minutes', async() => {
        const timeResult = await $('.BodyCopy b')
        await expect(timeResult).toHaveText(
            '(11 Days, 19 Hours, 0 Minutes)'
        );
        await browser.pause(2000);
    });
});

});

//Fourth test that will calculate short-term parking from 09/12/2021 to 09/13/2021:

describe('Calculate long-term surface parking times', () => {
    it('should change from valet parking to short-term parking', async () => {
        const selectBox =  await $('#ParkingLot');
        await selectBox.selectByAttribute('value', 'Short');
        await expect(selectBox).toHaveValue(
            'Short'
        );
    });

    it('should enter a start date', async () => {       
        const searchInput = await $('#StartingDate');
        await searchInput.setValue('09/12/2021');
        await expect(searchInput).toHaveText(
            ''
        );
    });

    it('should change the entry time to 12:00AM', async () => {       
        const searchtimeInput = await $('#StartingTime');
        await searchtimeInput.setValue('12:00');
        await expect(searchtimeInput).toHaveText(
            ''
        );
    });

    it('should change the end time to 1:30AM', async () => {
        const searchendtimeInput = await $('#LeavingTime');
        await searchendtimeInput.setValue('1:30');
        await expect(searchendtimeInput).toHaveText(
            ''
        );
    });

    it('should enter an end date', async () => {
        const searchendInput = await $('#LeavingDate');
        await searchendInput.setValue('09/13/2021');
        await expect(searchendInput).toHaveText(
            ''
        );
        const enterKey = browser.keys("\uE007"); 
    });

    it('should contain the parking cost calcualted result', async () => {
        const costResult = await $('.SubHead b')
        await expect(costResult).toHaveText(
            '$ 27.00'
        );
    });

    it('should contain the calculated result of amount of days, hours and minutes', async () => {
        const timeResult = await $('.BodyCopy b')
        await expect(timeResult).toHaveText(
            '(1 Days, 1 Hours, 30 Minutes)'
        );
        await browser.pause(2000);
    });

});
});

