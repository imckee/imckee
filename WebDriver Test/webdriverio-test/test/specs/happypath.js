describe('Calculate parking times', () => {
    it('should open the main url and verify the title', async ()  => {
         await browser.url('https://www.shino.de/parkcalc/');
         await expect(browser).toHaveTitle(
            'Parking Cost Calculator'
        );
    });

    it('should update entry date to 09/13/21', async () => {       
        const searchInput = await $('#StartingDate');
        await searchInput.setValue('09/13/2021');
    });

    it('will change the entry time to 7:00AM', async () => {       
        const searchtimeInput = await $('#StartingTime');
        await searchtimeInput.setValue('7:00');
    });

    it('will change the leave date to 9/13/2021', async () => {   
        const searchendInput = await $('#LeavingDate');
        await searchendInput.setValue('09/13/2021');
    });

    it('will change the leave time to 11:00AM and hit enter', async () => {       
        const searchtimeInput = await $('#LeavingTime');
        await searchtimeInput.setValue('11:00');
    
        const enterKey = browser.keys("\uE007"); 
    });
});
